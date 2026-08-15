"use client";
import { useEffect, useRef } from "react";

export default function useParallax<T extends HTMLElement>(speed: number) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const centre = r.top + r.height / 2;
      const brut = (window.innerHeight / 2 - centre) / window.innerHeight;
      const progress = Math.max(-1, Math.min(1, brut));
      el.style.setProperty("--py", `${(progress * speed).toFixed(1)}px`);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}
