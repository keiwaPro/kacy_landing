"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

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
        />
        <Image
          className="logo-dark"
          src="/logo_large_dark.svg"
          alt=""
          width="150"
          height="40"
        />
      </a>
      <div className="nav-links">
        <a href="#product">Produit</a>
        <a href="#comment">Comment ça marche</a>
        <a href="#pricing">Tarifs</a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="nav-actions">
        <ThemeToggle />
        <a href="#reserver" className="nav-cta">
          Réserver ma place →
        </a>
      </div>
    </nav>
  );
}
