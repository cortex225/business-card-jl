import React, { useEffect, useRef, useState } from "react";

/** Animates "20+", "100%" or "48h" from 0 to the target once visible. */
export const CountUp: React.FC<{ value: string; className?: string }> = ({ value, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  const target = match ? parseInt(match[2], 10) : NaN;
  const prefix = match?.[1] ?? "";
  const suffix = match?.[3] ?? "";
  const [display, setDisplay] = useState(isNaN(target) ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    const el = ref.current;
    if (!el || isNaN(target)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    let frame = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 4);
          setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
          if (p < 1) frame = requestAnimationFrame(tick);
          else setDisplay(value);
        };
        frame = requestAnimationFrame(tick);
      },
      { rootMargin: "-40px 0px" }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, prefix, suffix, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};
