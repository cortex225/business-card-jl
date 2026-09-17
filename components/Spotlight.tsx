import { useEffect } from "react";

/** Feeds the pointer position to every [data-spotlight] card as CSS variables. */
export const Spotlight = () => {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const onMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-spotlight]");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      target.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
  return null;
};
