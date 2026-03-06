import { useCallback, useEffect, useRef } from "react";
import { useInView } from "~/hooks/useInView";

import { usePrefersReducedMotion } from "~/hooks/usePrefersReducedMotion";

interface UseAnimatedCounterOptions {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  padDigits?: number;
}

export function useAnimatedCounter({
  end,
  start = 0,
  duration = 1.5,
  delay = 0,
  suffix = "",
  padDigits = 0,
}: UseAnimatedCounterOptions) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const format = useCallback(
    (n: number) => {
      const rounded = Math.round(n);
      const str = padDigits > 0 ? rounded.toString().padStart(padDigits, "0") : rounded.toString();
      return str + suffix;
    },
    [padDigits, suffix],
  );

  useEffect(() => {
    if (!isInView || !ref.current) return;

    if (prefersReducedMotion) {
      ref.current.textContent = format(end);
      return;
    }

    const el = ref.current;
    const range = end - start;
    const startTime = performance.now() + delay * 1000;
    const durationMs = duration * 1000;
    const ease = (t: number) => {
      return t === 0 ? 0 : t === 1 ? 1 : 1 - (1 - t) ** 3.5;
    };

    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      if (elapsed < 0) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      const rawProgress = Math.min(elapsed / durationMs, 1);
      const progress = ease(rawProgress);
      const value = start + range * progress;
      el.textContent = format(value);

      if (rawProgress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        el.textContent = format(end);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, end, start, delay, duration, format, prefersReducedMotion]);

  return { ref, initialDisplay: format(start) };
}
