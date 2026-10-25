import { packPalette } from "./color";
import { PushField } from "./push-field";
import { FRAGMENT_SHADER, VERTEX_SHADER } from "./shaders";

export type GradientOptions = {
  /** 2–8 hex colors, ordered dark → light (or any order you want to blend). */
  colors: readonly string[];
  /** Offsets the pattern so different panels look different. */
  seed: number;
};

const UNIFORMS = ["u_res", "u_time", "u_seed", "u_count", "u_colors", "u_push"] as const;
type UniformName = (typeof UNIFORMS)[number];

const CONTEXT_ATTRIBUTES: WebGLContextAttributes = {
  alpha: false,
  antialias: false,
  depth: false,
  stencil: false,
  powerPreference: "low-power",
};

/** Owns every WebGL resource for a single gradient canvas. */
export class GradientRenderer {
  private readonly program: WebGLProgram;
  private readonly pushTexture: WebGLTexture;
  private readonly uniforms: Record<UniformName, WebGLUniformLocation | null>;

  /** Returns null when WebGL2 is unavailable or the shaders fail to build. */
  static create(canvas: HTMLCanvasElement, options: GradientOptions) {
    const gl = canvas.getContext("webgl2", CONTEXT_ATTRIBUTES);
    if (!gl) return null;
    try {
      return new GradientRenderer(gl, options);
    } catch (error) {
      console.warn("[shader-gradient] initialisation failed", error);
      return null;
    }
  }

  private constructor(
    private readonly gl: WebGL2RenderingContext,
    options: GradientOptions
  ) {
    this.program = linkProgram(gl, VERTEX_SHADER, FRAGMENT_SHADER);
    this.uniforms = Object.fromEntries(
      UNIFORMS.map((name) => [name, gl.getUniformLocation(this.program, name)])
    ) as Record<UniformName, WebGLUniformLocation | null>;

    const texture = gl.createTexture();
    if (!texture) throw new Error("Unable to allocate push texture");
    this.pushTexture = texture;
    this.initPushTexture(new PushField());

    gl.useProgram(this.program);
    gl.uniform1f(this.uniforms.u_seed, options.seed);
    gl.uniform1i(this.uniforms.u_count, options.colors.length);
    gl.uniform3fv(this.uniforms.u_colors, packPalette(options.colors));
    gl.uniform1i(this.uniforms.u_push, 0);
  }

  resize(width: number, height: number) {
    const { canvas } = this.gl;
    if (canvas.width === width && canvas.height === height) return;
    canvas.width = width;
    canvas.height = height;
    this.gl.viewport(0, 0, width, height);
  }

  uploadPush(field: PushField) {
    const { gl } = this;
    gl.bindTexture(gl.TEXTURE_2D, this.pushTexture);
    gl.texSubImage2D(
      gl.TEXTURE_2D, 0, 0, 0, field.cols, field.rows, gl.RGBA, gl.UNSIGNED_BYTE, field.pixels
    );
  }

  render(time: number) {
    const { gl, uniforms } = this;
    gl.uniform2f(uniforms.u_res, gl.canvas.width, gl.canvas.height);
    gl.uniform1f(uniforms.u_time, time);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  dispose() {
    this.gl.deleteTexture(this.pushTexture);
    this.gl.deleteProgram(this.program);
  }

  private initPushTexture(field: PushField) {
    const { gl } = this;
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.pushTexture);
    gl.texImage2D(
      gl.TEXTURE_2D, 0, gl.RGBA, field.cols, field.rows, 0, gl.RGBA, gl.UNSIGNED_BYTE, field.pixels
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  }
}

function compileShader(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("Unable to create shader");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(`Shader compile failed: ${log}`);
  }
  return shader;
}

function linkProgram(gl: WebGL2RenderingContext, vertex: string, fragment: string) {
  const program = gl.createProgram();
  if (!program) throw new Error("Unable to create program");
  const shaders = [
    compileShader(gl, gl.VERTEX_SHADER, vertex),
    compileShader(gl, gl.FRAGMENT_SHADER, fragment),
  ];
  shaders.forEach((shader) => gl.attachShader(program, shader));
  gl.linkProgram(program);
  shaders.forEach((shader) => {
    gl.detachShader(program, shader);
    gl.deleteShader(shader);
  });
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(`Program link failed: ${log}`);
  }
  return program;
}
