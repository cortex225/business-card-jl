import React, { useEffect, useRef, useState } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /** Delay in ms, handy for staggering siblings. */
  delay?: number;
};

/** Fades and slides children in the first time they enter the viewport (CSS-only, no library). */
export const Reveal: React.FC<Props> = ({ delay = 0, className = "", style, children, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "-40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
};
