import Lenis from "lenis";
import { useEffect } from "react";
import { usePrefersReducedMotion } from "~/hooks/usePrefersReducedMotion";

export function useSmoothScroll() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    return () => {
      lenis.destroy();
    };
  }, [prefersReducedMotion]);
}
