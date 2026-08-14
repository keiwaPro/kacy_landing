"use client";
import Image from "next/image";
import { WordRotate } from "./ui/word-rotate";
import { Highlighter } from "./ui/highlighter";

const WORDS = ["restaurant", "hôtel", "salon"];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-wash" aria-hidden />
      <div className="hero-grid-bg" />

      <div className="hero-wrap">
        <div className="hero-tag reveal">
          <span className="hero-tag-badge">BETA</span>
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
                <Highlighter
                  action="underline"
                  color="#5a8f2e"
                  strokeWidth={3}
                  animationDuration={700}
                  iterations={2}
                  padding={4}
                  isView={false}
                >
                  {word}
                </Highlighter>
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

        <div className="hero-meta reveal reveal-d-4">
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
        </div>

        <div className="hero-media reveal reveal-d-5">
          <div className="hero-media-glow" aria-hidden />
          <div className="hero-media-frame">
            <div className="hero-media-bar">
              <span className="hm-dot" />
              <span className="hm-dot" />
              <span className="hm-dot" />
              <span className="hm-url">app.kacyai.co</span>
              <span className="hm-live">
                <span className="hm-live-dot" />
                En service
              </span>
            </div>
            <div className="hero-media-shot">
              <Image
                src="/screens/dashboard.png"
                alt="Tableau de bord Kacy"
                width={2160}
                height={1350}
                priority
              />
            </div>
          </div>
          <div className="hero-media-toast">
            <div className="toast-avatar">
              <Image src="/logo_2.svg" alt="" width={18} height={18} />
            </div>
            <div>
              <div className="toast-name">Kacy · à l&apos;instant</div>
              <div className="toast-body">
                Commande confirmée <strong>✓</strong> — Table 4, deux poulets
                braisés.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
