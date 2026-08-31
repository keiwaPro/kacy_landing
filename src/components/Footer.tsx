"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const WORDMARK = ["k", "a", "c", "y"];

const NAV_GROUPS = [
  {
    label: "Produit",
    links: [
      { href: "#product", label: "Fonctionnalités" },
      { href: "#pricing", label: "Tarifs" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    label: "Société",
    links: [
      { href: "#", label: "À propos" },
      { href: "#", label: "Contact" },
      { href: "#", label: "Blog" },
    ],
  },
  {
    label: "Légal",
    links: [
      { href: "/legal/cgu", label: "CGU" },
      { href: "/legal/cgv", label: "CGV" },
      { href: "/legal/privacy", label: "Confidentialité" },
    ],
  },
];

export default function Footer() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.2) el.classList.add("is-in");
        else if (!entry.isIntersecting && entry.boundingClientRect.top >= 0)
          el.classList.remove("is-in");
      },
      { threshold: [0, 0.2] },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const track = el.querySelector<HTMLElement>(".foot-mega-track");
    const letters = Array.from(
      el.querySelectorAll<HTMLElement>(".foot-mega span"),
    );
    if (!track || !letters.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      letters.forEach((l) => {
        l.style.transform = "none";
      });
      return;
    }

    const SPAN = 0.6;
    const step = letters.length > 1 ? (1 - SPAN) / (letters.length - 1) : 0;
    let raf = 0;

    const update = () => {
      raf = 0;
      const r = track.getBoundingClientRect();
      if (!r.height) return;
      const progress = (window.innerHeight - r.top) / r.height;
      letters.forEach((l, i) => {
        const local = Math.min(
          1,
          Math.max(0, (progress - i * step) / SPAN),
        );
        const eased = 1 - Math.pow(1 - local, 3);
        l.style.transform = `translateY(${(1 - eased) * 105}%)`;
      });
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
  }, []);

  return (
    <footer className="foot" ref={rootRef}>
      <div className="foot-aurora" aria-hidden="true" />
      <div className="foot-grain" aria-hidden="true" />

      <div className="foot-inner">
        <div className="foot-head">
          <div className="foot-lead">
            <Image
              src="/logo_large.svg"
              alt="Kacy"
              width={172}
              height={71}
              className="foot-mark logo-light"
            />
            <Image
              src="/logo_large_dark.svg"
              alt="Kacy"
              width={172}
              height={71}
              className="foot-mark logo-dark"
            />
            <p className="foot-claim">
              Faire mieux,
              <br />
              simplement.
            </p>
            <p className="foot-sub">
              L&apos;agent IA qui répond à vos clients pendant que vous faites
              tourner votre commerce.
            </p>
            <a href="#reserver" className="foot-cta">
              <span>Réserver ma place</span>
              <span className="foot-cta-arrow">→</span>
            </a>
          </div>

          <nav className="foot-nav">
            {NAV_GROUPS.map((group) => (
              <div className="foot-col" key={group.label}>
                <h4>{group.label}</h4>
                {group.links.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ),
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="foot-meta">
          <span>© 2026 Kacy · Abidjan, Côte d&apos;Ivoire</span>
          <span>Abidjan, Côte d&apos;Ivoire · 05 01 67 69 69</span>
        </div>
      </div>

      <div className="foot-mega-track">
        <div className="foot-mega" aria-hidden="true">
          {WORDMARK.map((letter, i) => (
            <span key={i}>{letter}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
