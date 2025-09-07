import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type NumberTickerProps = {
  value: number;
  className?: string;
  durationMs?: number;
  startValue?: number;
  decimals?: number;
  startOnView?: boolean;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function NumberTicker({
  value,
  className,
  durationMs = 1500,
  startValue = 0,
  decimals = 0,
  startOnView = true,
}: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState<number>(startValue);
  const hasAnimatedRef = useRef<boolean>(false);
  const containerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let animationFrame = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(progress);
      const current = startValue + (value - startValue) * eased;
      setDisplayValue(current);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      animationFrame = requestAnimationFrame(animate);
    };

    if (!startOnView) {
      startAnimation();
    } else if (containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [value, durationMs, startValue, startOnView]);

  return (
    <span ref={containerRef} className={cn("tabular-nums", className)}>
      {displayValue.toFixed(decimals)}
    </span>
  );
}

export default NumberTicker;


