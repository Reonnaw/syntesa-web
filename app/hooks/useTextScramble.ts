import { useCallback, useEffect, useRef } from "react";
import { useInView } from "~/hooks/useInView";

import { usePrefersReducedMotion } from "~/hooks/usePrefersReducedMotion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

interface UseTextScrambleOptions {
  text: string;
  duration?: number;
  delay?: number;
  glyphs?: string;
}

export function useTextScramble({
  text,
  duration = 800,
  delay = 0,
  glyphs = GLYPHS,
}: UseTextScrambleOptions) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasRun = useRef(false);

  const scramble = useCallback(() => {
    if (hasRun.current || !ref.current) return;
    hasRun.current = true;

    const el = ref.current;
    const chars = text.split("");
    const totalChars = chars.length;
    const intervalMs = 30;
    const stepsPerChar = Math.ceil(duration / intervalMs / totalChars);
    let step = 0;
    const totalSteps = totalChars * stepsPerChar;

    const interval = setInterval(() => {
      step++;
      const resolved = Math.floor((step / totalSteps) * totalChars);

      el.textContent = chars
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < resolved) return chars[i];
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        })
        .join("");

      if (step >= totalSteps) {
        clearInterval(interval);
        el.textContent = text;
      }
    }, intervalMs);

    return () => clearInterval(interval);
  }, [text, duration, glyphs]);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    const timeout = setTimeout(scramble, delay);
    return () => clearTimeout(timeout);
  }, [isInView, scramble, delay, prefersReducedMotion]);

  return { ref };
}
