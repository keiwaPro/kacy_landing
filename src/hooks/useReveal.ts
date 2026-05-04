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

    // Reveal above-the-fold immediately
    requestAnimationFrame(() => {
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight + 100) {
          el.style.transition = "none";
          el.classList.add("in");
          if (el.classList.contains("timeline-row"))
            el.classList.add("in-view");
          requestAnimationFrame(() => {
            el.style.transition = "";
          });
        }
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
