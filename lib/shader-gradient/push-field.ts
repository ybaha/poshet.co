export type PushImpulse = {
  /** Pointer position in 0–1 canvas space, origin bottom-left. */
  x: number;
  y: number;
  /** Displacement since the previous event, in canvas-height units. */
  dx: number;
  dy: number;
  /** Canvas width / height. */
  aspect: number;
};

const BRUSH_RADIUS = 0.16;
const IMPULSE_GAIN = 3;
/** Fraction of the field that survives one 60fps frame. */
const FRAME_RETENTION = 0.955;
const SETTLED_ENERGY = 0.01;

/**
 * Small CPU-side vector field that remembers recent pointer motion and decays
 * over time. It is uploaded as an RGBA8 texture and sampled with linear
 * filtering, so a coarse grid is enough for a smooth drag effect.
 */
export class PushField {
  readonly pixels: Uint8Array;
  private readonly values: Float32Array;
  private active = false;

  constructor(readonly cols = 64, readonly rows = 40) {
    this.values = new Float32Array(cols * rows * 2);
    this.pixels = new Uint8Array(cols * rows * 4);
    this.encode();
  }

  get isActive() {
    return this.active;
  }

  impulse({ x, y, dx, dy, aspect }: PushImpulse) {
    const vx = dx * IMPULSE_GAIN;
    const vy = dy * IMPULSE_GAIN;
    const radiusSquared = BRUSH_RADIUS * BRUSH_RADIUS;

    for (let row = 0; row < this.rows; row++) {
      const offsetY = (row + 0.5) / this.rows - y;
      for (let col = 0; col < this.cols; col++) {
        const offsetX = ((col + 0.5) / this.cols - x) * aspect;
        const falloff = Math.exp(-(offsetX * offsetX + offsetY * offsetY) / radiusSquared);
        const index = (row * this.cols + col) * 2;
        this.values[index] = clampUnit(this.values[index] + vx * falloff);
        this.values[index + 1] = clampUnit(this.values[index + 1] + vy * falloff);
      }
    }
    this.active = true;
  }

  /** Decays the field. Returns true when `pixels` changed and need uploading. */
  step(deltaSeconds: number): boolean {
    if (!this.active) return false;

    const retention = FRAME_RETENTION ** (deltaSeconds * 60);
    let energy = 0;
    for (let i = 0; i < this.values.length; i++) {
      this.values[i] *= retention;
      energy += Math.abs(this.values[i]);
    }

    if (energy / this.values.length < SETTLED_ENERGY * 0.1) {
      this.values.fill(0);
      this.active = false;
    }
    this.encode();
    return true;
  }

  private encode() {
    for (let cell = 0; cell < this.cols * this.rows; cell++) {
      this.pixels[cell * 4] = toByte(this.values[cell * 2]);
      this.pixels[cell * 4 + 1] = toByte(this.values[cell * 2 + 1]);
      this.pixels[cell * 4 + 2] = 128;
      this.pixels[cell * 4 + 3] = 255;
    }
  }
}

const clampUnit = (value: number) => Math.max(-1, Math.min(1, value));
const toByte = (value: number) => Math.round((value * 0.5 + 0.5) * 255);
