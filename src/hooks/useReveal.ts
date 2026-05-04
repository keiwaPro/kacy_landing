"use client";
import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(
      ".reveal, .timeline-row",
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            if (e.target.classList.contains("timeline-row"))
              e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 80px 0px" },
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
        const delay = i * 120; // 120ms stagger between each element
        setTimeout(() => {
          el.classList.add("in");
          if (el.classList.contains("timeline-row"))
            el.classList.add("in-view");
        }, delay);
      });
    });

    // Safety net: reveal everything after 2s
    const t = setTimeout(() => {
      els.forEach((el) => {
        el.classList.add("in");
        if (el.classList.contains("timeline-row")) el.classList.add("in-view");
      });
    }, 2000);

    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
}
