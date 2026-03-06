import { useMotionValueEvent, useScroll } from "framer-motion";
import { useCallback, useRef } from "react";
import ScrambleText from "~/components/ScrambleText";
import BackgroundGlow from "~/components/ui/BackgroundGlow";

import { usePrefersReducedMotion } from "~/hooks/usePrefersReducedMotion";

interface MissionStatementProps {
  text?: string;
}

const DEFAULT_TEXT =
  "We believe that great software is built through rigorous research, relentless experimentation, and a commitment to engineering excellence. Every line of code is a step toward the future.";

export default function MissionStatement({ text = DEFAULT_TEXT }: MissionStatementProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const wordSpansRef = useRef<HTMLSpanElement[]>([]);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "start 0.3"],
  });

  const updateOpacities = useCallback(
    (progress: number) => {
      if (prefersReducedMotion) return;
      const spans = wordSpansRef.current;
      const total = words.length;
      for (let i = 0; i < spans.length; i++) {
        const span = spans[i];
        if (!span) continue;
        const start = i / total;
        const end = Math.min(start + 2 / total, 1);
        const t = Math.min(Math.max((progress - start) / (end - start), 0), 1);
        span.style.opacity = String(0.15 + t * 0.85);
      }
    },
    [words.length, prefersReducedMotion],
  );

  useMotionValueEvent(scrollYProgress, "change", updateOpacities);

  const setSpanRef = useCallback(
    (index: number) => (el: HTMLSpanElement | null) => {
      if (el) wordSpansRef.current[index] = el;
    },
    [],
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="mission-heading"
      className="relative bg-white dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-800 overflow-hidden"
    >
      <BackgroundGlow />
      <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
        <div className="border-b border-gray-200 dark:border-neutral-800 p-6 sm:p-12">
          <ScrambleText
            as="h2"
            id="mission-heading"
            text="Mission"
            className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400"
          />
        </div>

        <div className="p-6 sm:p-12 lg:p-16 xl:p-24 min-h-[40vh] flex items-center bg-grid-lines overflow-hidden">
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-snug tracking-tight max-w-5xl">
            {words.map((word, i) => (
              <span
                // biome-ignore lint/suspicious/noArrayIndexKey: words repeat, index needed for positioning
                key={`${word}-${i}`}
                ref={setSpanRef(i)}
                className="inline-block mr-[0.3em] text-gray-900 dark:text-neutral-100"
                style={{ opacity: prefersReducedMotion ? 1 : 0.15 }}
              >
                {word}
              </span>
            ))}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
