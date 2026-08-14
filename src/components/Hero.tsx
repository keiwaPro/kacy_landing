"use client";
import Image from "next/image";
import { WordRotate } from "./ui/word-rotate";

const WORDS = ["restaurant", "hôtel", "salon"];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-wash" aria-hidden />
      <div className="hero-grid-bg" />

      <div className="hero-wrap">
        <div className="hero-tag reveal">
          <span className="hero-tag-badge">Beta</span>
          Accès anticipé · 100 places pour Abidjan
          <span className="arrow">→</span>
        </div>

        <h1 className="reveal reveal-d-1">
          L&apos;agent IA pour votre
          <br />
          <span style={{ color: "var(--green-deep)" }}>
            <WordRotate
              words={WORDS}
              duration={2600}
              renderWord={(word) => (
                <span className="hero-word">{word}</span>
              )}
            />
          </span>
        </h1>

        <p className="hero-lede reveal reveal-d-2">
          Kacy répond à vos clients sur WhatsApp 24/7. Commandes, réservations,
          FAQ, plaintes - configuré en 48h, sans compétence technique.
        </p>

        <div className="hero-cta reveal reveal-d-3">
          <a href="#reserver" className="btn-primary">
            <span>Réserver ma place</span>
            <span className="arrow">→</span>
          </a>
          <a href="#product" className="btn-ghost">
            Voir le produit
          </a>
        </div>

        {/*<div className="hero-meta reveal reveal-d-4">
          <span>
            <span className="bullet" />
            Installation offerte
          </span>
          <span>
            <span className="bullet" />
            Tarif bloqué à vie
          </span>
          <span>
            <span className="bullet" />
            Sans engagement
          </span>
          <span>
            <span className="bullet" />
            Déploiement 48h
          </span>
        </div>*/}

        <div className="hero-media reveal reveal-d-5">
          <Image
            className="hm-shot hm-shot-light"
            src="/screens/web_iphone.png"
            alt="Tableau de bord et application mobile Kacy"
            width={6338}
            height={3644}
            priority
          />
          <Image
            className="hm-shot hm-shot-dark"
            src="/screens/web_iphone_dark.png"
            alt="Tableau de bord et application mobile Kacy"
            width={6466}
            height={3756}
            loading="eager"
            fetchPriority="low"
          />
        </div>
      </div>
    </section>
  );
}
