import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "~/hooks/useInView";
import { usePrefersReducedMotion } from "~/hooks/usePrefersReducedMotion";

interface TechSeparatorProps {
  delay?: number;
}

export default function TechSeparator({ delay = 0 }: TechSeparatorProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const active = isInView || prefersReducedMotion;

  const duration = 0.8;
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center py-8 opacity-50 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="h-px bg-gray-200 dark:bg-neutral-800 flex-1 origin-right"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration, ease, delay: active ? delay : 0 }}
      />

      <motion.div
        className="mx-4 relative flex items-center justify-center"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: active ? 1 : 0, rotate: active ? 0 : -45 }}
        transition={{ duration: 0.6, ease, delay: active ? delay + 0.2 : 0 }}
      >
        <div className="w-3 h-3 border border-gray-300 dark:border-neutral-700 rotate-45" />
        <div className="absolute w-1 h-1 bg-apple-blue-500 rounded-full" />
        <div className="absolute w-full h-px bg-gray-300 dark:bg-neutral-700" />
        <div className="absolute h-full w-px bg-gray-300 dark:bg-neutral-700" />
      </motion.div>

      <motion.div
        className="h-px bg-gray-200 dark:bg-neutral-800 flex-1 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration, ease, delay: active ? delay : 0 }}
      />
    </div>
  );
}
