/** Maximum palette stops supported by the fragment shader. */
export const MAX_COLORS = 8;

/** Attribute-less full-screen triangle (no buffers required). */
export const VERTEX_SHADER = /* glsl */ `#version 300 es
void main() {
  vec2 corner = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(corner * 2.0 - 1.0, 0.0, 1.0);
}`;

/**
 * Flowing gradient: a domain-warped sine field is remapped onto a palette that
 * is interpolated in Oklab, then dithered to avoid banding. A low-resolution
 * "push" texture displaces the domain so the pattern drags with the cursor.
 */
export const FRAGMENT_SHADER = /* glsl */ `#version 300 es
precision highp float;

out vec4 outColor;

uniform vec2 u_res;
uniform float u_time;
uniform float u_seed;
uniform int u_count;
uniform vec3 u_colors[${MAX_COLORS}];
uniform sampler2D u_push;

const float TAU = 6.28318530;
const float GOLDEN_ANGLE = 2.3999632;
const float WARP_STRENGTH = 0.55;
const float VERTICAL_BIAS = 0.16;
/** Palette range actually sampled: keeps the brightest stop as an accent. */
const vec2 VALUE_RANGE = vec2(0.07, 0.72);
const float PUSH_STRENGTH = 0.8;
const float DITHER_STRENGTH = 0.06;
const float EXPOSURE = 1.05;
const float CONTRAST = 1.1;

vec3 toLinear(vec3 c) { return pow(c, vec3(2.2)); }
vec3 toSrgb(vec3 c) { return pow(clamp(c, 0.0, 1.0), vec3(1.0 / 2.2)); }

vec3 linearToOklab(vec3 c) {
  float l = 0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b;
  float m = 0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b;
  float s = 0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b;
  l = pow(max(l, 0.0), 1.0 / 3.0);
  m = pow(max(m, 0.0), 1.0 / 3.0);
  s = pow(max(s, 0.0), 1.0 / 3.0);
  return vec3(
    0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s
  );
}

vec3 oklabToLinear(vec3 c) {
  float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
  float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
  float s = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}

vec3 paletteLab(int index) {
  return linearToOklab(toLinear(u_colors[clamp(index, 0, u_count - 1)]));
}

vec3 samplePalette(float t) {
  float position = clamp(t, 0.0, 1.0) * float(u_count - 1);
  int segment = min(int(floor(position)), u_count - 2);
  return oklabToLinear(mix(paletteLab(segment), paletteLab(segment + 1), position - float(segment)));
}

/** Interleaved gradient noise: cheap, blue-ish dither pattern. */
float dither(vec2 pixel) {
  return fract(52.9829189 * fract(dot(pixel, vec2(0.06711056, 0.00583715))));
}

/** Deterministic pseudo-random phase pair in [-PI, PI] derived from the seed. */
vec2 seedPhase() {
  return (fract(sin(vec2(u_seed * 12.9898, u_seed * 78.233)) * 43758.5453) - 0.5) * TAU;
}

mat2 seedRotation() {
  float angle = u_seed * GOLDEN_ANGLE;
  return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

/**
 * Smooth 0..1 scalar field. Three octaves of sine warping bend the domain,
 * then two waves are blended from it. Mixing waves keeps values mostly in the
 * mid-range instead of piling up at the extremes of a single sine.
 */
float flowField(vec2 p, float t) {
  vec2 phase = seedPhase();
  vec2 q = seedRotation() * p;
  for (int i = 1; i <= 3; i++) {
    float f = float(i);
    q += (WARP_STRENGTH / f) * vec2(
      sin(q.y * 1.4 * f + t * (0.6 + 0.2 * f) + phase.x),
      sin(q.x * 1.2 * f - t * (0.5 + 0.15 * f) + phase.y)
    );
  }
  float broad = sin(dot(q, vec2(0.9, 0.7)) * 1.1 + t * 0.4 + phase.x);
  float detail = sin(dot(q, vec2(-0.6, 0.9)) * 1.7 - t * 0.3 + phase.y);
  return 0.5 + 0.3 * broad + 0.2 * detail;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = (gl_FragCoord.xy * 2.0 - u_res) / u_res.y;
  p -= (texture(u_push, uv).xy * 2.0 - 1.0) * PUSH_STRENGTH;

  float value = flowField(p, u_time) + VERTICAL_BIAS * p.y;
  value = mix(VALUE_RANGE.x, VALUE_RANGE.y, smoothstep(0.1, 0.9, value));
  value = clamp(value + (dither(floor(gl_FragCoord.xy)) - 0.5) * DITHER_STRENGTH, 0.0, 1.0);

  vec3 lab = linearToOklab(samplePalette(value) * EXPOSURE);
  lab.x = clamp((lab.x - 0.5) * CONTRAST + 0.5, 0.0, 1.0);
  outColor = vec4(toSrgb(oklabToLinear(lab)), 1.0);
}`;
