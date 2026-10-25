"use client";

import { RefObject, useEffect } from "react";
import { PushField } from "@/lib/shader-gradient/push-field";
import { GradientRenderer } from "@/lib/shader-gradient/renderer";

export type ShaderGradientConfig = {
  colors: readonly string[];
  seed: number;
  /** Animation speed multiplier (1 = reference pace). */
  speed: number;
  /** Starting point on the animation timeline, in seconds. */
  startTime: number;
  /** Let the pointer drag the pattern. */
  interactive: boolean;
};

/** Shader time units per second at speed 1, tuned to a slow, calm drift. */
const TIME_SCALE = 0.05;
/** The gradient is smooth, so rendering below native resolution is invisible. */
const MAX_RESOLUTION_SCALE = 0.85;
const MIN_RESOLUTION_SCALE = 0.4;
const SLOW_FRAME_SECONDS = 1 / 28;
const SLOW_FRAMES_BEFORE_DOWNSCALE = 24;
const MAX_FRAME_DELTA_SECONDS = 0.1;

/**
 * Drives a GradientRenderer for the lifetime of a canvas: sizing, the
 * animation loop, pointer interaction, and every pause condition
 * (off-screen, hidden tab, reduced motion, lost context).
 */
export function useShaderGradient(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  { colors, seed, speed, startTime, interactive }: ShaderGradientConfig
) {
  const paletteKey = colors.join("|");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const options = { colors: paletteKey.split("|"), seed };
    const initial = GradientRenderer.create(canvas, options);
    if (!initial) return;

    let renderer: GradientRenderer = initial;
    const field = new PushField();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let resolutionScale = MAX_RESOLUTION_SCALE;
    let elapsed = startTime;
    let lastTimestamp = 0;
    let frameId = 0;
    let slowFrames = 0;
    let isVisible = true;
    let contextLost = false;
    let hasPainted = false;
    let previousPointer: { x: number; y: number } | null = null;

    const paint = () => {
      renderer.render(elapsed * TIME_SCALE);
      if (!hasPainted) {
        hasPainted = true;
        canvas.dataset.ready = "true";
      }
    };

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1);
      renderer.resize(
        Math.max(2, Math.round(width * pixelRatio * resolutionScale)),
        Math.max(2, Math.round(height * pixelRatio * resolutionScale))
      );
      paint();
    };

    const shouldAnimate = () =>
      isVisible && !document.hidden && !reducedMotion.matches && !contextLost;

    const trackPerformance = (delta: number) => {
      slowFrames =
        delta > SLOW_FRAME_SECONDS ? slowFrames + 1 : Math.max(0, slowFrames - 1);
      if (slowFrames >= SLOW_FRAMES_BEFORE_DOWNSCALE && resolutionScale > MIN_RESOLUTION_SCALE) {
        resolutionScale = Math.max(MIN_RESOLUTION_SCALE, resolutionScale * 0.8);
        slowFrames = 0;
        resize();
      }
    };

    const tick = (timestamp: number) => {
      frameId = 0;
      if (!shouldAnimate()) return;
      const delta = Math.min((timestamp - lastTimestamp) / 1000, MAX_FRAME_DELTA_SECONDS);
      lastTimestamp = timestamp;
      elapsed += delta * speed;
      if (field.step(delta)) renderer.uploadPush(field);
      paint();
      trackPerformance(delta);
      frameId = requestAnimationFrame(tick);
    };

    const syncLoop = () => {
      if (shouldAnimate()) {
        if (frameId) return;
        lastTimestamp = performance.now();
        frameId = requestAnimationFrame(tick);
      } else if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = 0;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || !shouldAnimate()) return;
      const rect = canvas.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (!inside) {
        previousPointer = null;
        return;
      }
      const aspect = rect.width / rect.height;
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;
      if (previousPointer) {
        field.impulse({
          x,
          y,
          dx: (x - previousPointer.x) * aspect,
          dy: y - previousPointer.y,
          aspect,
        });
      }
      previousPointer = { x, y };
    };

    const onContextLost = (event: Event) => {
      event.preventDefault();
      contextLost = true;
      syncLoop();
    };

    const onContextRestored = () => {
      const restored = GradientRenderer.create(canvas, options);
      if (!restored) return;
      renderer = restored;
      contextLost = false;
      resize();
      syncLoop();
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      syncLoop();
    });

    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    reducedMotion.addEventListener("change", syncLoop);
    document.addEventListener("visibilitychange", syncLoop);
    canvas.addEventListener("webglcontextlost", onContextLost);
    canvas.addEventListener("webglcontextrestored", onContextRestored);
    if (interactive) window.addEventListener("pointermove", onPointerMove, { passive: true });

    resize();
    syncLoop();

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      reducedMotion.removeEventListener("change", syncLoop);
      document.removeEventListener("visibilitychange", syncLoop);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      canvas.removeEventListener("webglcontextrestored", onContextRestored);
      window.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
    };
  }, [canvasRef, paletteKey, seed, speed, startTime, interactive]);
}
