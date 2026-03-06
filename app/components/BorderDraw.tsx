import { type ReactNode, useEffect, useRef, useState } from "react";
import { useInView } from "~/hooks/useInView";

import { usePrefersReducedMotion } from "~/hooks/usePrefersReducedMotion";

interface BorderDrawProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  as?: "a" | "button";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export default function BorderDraw({
  children,
  duration = 0.8,
  delay = 0,
  className = "",
  as: Tag = "button",
  ...props
}: BorderDrawProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const [perimeter, setPerimeter] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const { offsetWidth: w, offsetHeight: h } = containerRef.current;
    setPerimeter(2 * (w + h));
  }, []);

  const active = isInView || prefersReducedMotion;

  return (
    <div ref={containerRef} className="relative inline-block">
      {perimeter > 0 && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="0.5"
            y="0.5"
            width="calc(100% - 1px)"
            height="calc(100% - 1px)"
            fill="none"
            className="stroke-gray-900 dark:stroke-apple-blue-400"
            strokeWidth="1"
            strokeDasharray={perimeter}
            strokeDashoffset={active ? 0 : perimeter}
            style={{
              transition: prefersReducedMotion
                ? "none"
                : `stroke-dashoffset ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${active ? delay : 0}s`,
            }}
          />
        </svg>
      )}

      <Tag className={className} {...props}>
        {children}
      </Tag>
    </div>
  );
}
