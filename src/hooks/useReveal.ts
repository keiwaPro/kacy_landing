"use client";
import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(
      ".reveal, .timeline-row",
    );

    const setIn = (el: Element, on: boolean) => {
      el.classList.toggle("in", on);
      if (el.classList.contains("timeline-row"))
        el.classList.toggle("in-view", on);
    };

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => setIn(el, true));
      return;
    }

    /* On révèle dès 5 % visible. On ne réarme que si l'élément est ressorti
       PAR LE BAS (top >= 0 alors qu'il n'intersecte plus) : en remontant il
       reste donc affiché, et l'animation se rejoue en redescendant. Sorti
       par le haut, il garde son état. */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.intersectionRatio >= 0.05) setIn(e.target, true);
          else if (!e.isIntersecting && e.boundingClientRect.top >= 0)
            setIn(e.target, false);
        });
      },
      { threshold: [0, 0.05], rootMargin: "0px 0px 80px 0px" },
    );

    els.forEach((el) => io.observe(el));

    // Stagger above-the-fold reveals for entrance animation
    requestAnimationFrame(() => {
      const aboveFold: HTMLElement[] = [];
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight + 100) {
          aboveFold.push(el);
        }
      });

      aboveFold.forEach((el, i) => {
        setTimeout(() => setIn(el, true), i * 120);
      });
    });

    return () => io.disconnect();
  }, []);
}
