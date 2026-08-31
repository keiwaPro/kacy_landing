"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#product", label: "Produit" },
  { href: "#comment", label: "Comment ça marche" },
  { href: "#pricing", label: "Tarifs" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let pillActive = false;
    const onScroll = () => {
      const wantPill = window.scrollY > 80;
      if (wantPill === pillActive) return;
      pillActive = wantPill;
      if (wantPill) nav.classList.add("pill");
      else nav.classList.remove("pill");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={navRef} className="site-nav" id="nav">
      <a href="#" className="logo" aria-label="Kacy">
        <Image
          className="logo-light"
          src="/logo_large.svg"
          alt=""
          width="150"
          height="40"
          fetchPriority="high"
        />
        <Image
          className="logo-dark"
          src="/logo_large_dark.svg"
          alt=""
          width="150"
          height="40"
          fetchPriority="high"
        />
      </a>
      <div className="nav-links">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
      <div className="nav-actions">
        <ThemeToggle />
        <a href="#reserver" className="nav-cta">
          Réserver ma place →
        </a>
        <button
          type="button"
          className="nav-burger"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {mounted &&
        createPortal(
          <>
            <div
              className={`nav-sheet-scrim${menuOpen ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}
            />
            <div
              className={`nav-sheet${menuOpen ? " active" : ""}`}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              <div className="nav-sheet-head">
                <span className="logo">
                  <Image
                    className="logo-light"
                    src="/logo_large.svg"
                    alt="Kacy"
                    width={130}
                    height={35}
                  />
                  <Image
                    className="logo-dark"
                    src="/logo_large_dark.svg"
                    alt="Kacy"
                    width={130}
                    height={35}
                  />
                </span>
                <button
                  type="button"
                  className="nav-sheet-close"
                  aria-label="Fermer le menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="nav-sheet-links">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              <a
                href="#reserver"
                className="btn-primary nav-sheet-cta"
                onClick={() => setMenuOpen(false)}
              >
                <span>Réserver ma place</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </>,
          document.body,
        )}
    </nav>
  );
}
