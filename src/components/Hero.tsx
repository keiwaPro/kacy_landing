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
            <div className="hero-media-shot" aria-label="Tableau de bord Kacy">
              <div className="hm-app" aria-hidden>
                <aside className="hm-side">
                  <div className="hm-side-brand">
                    <Image src="/logo_2.svg" alt="" width={22} height={22} />
                    <span>Kacy</span>
                  </div>
                  <nav>
                    <span className="hm-nav-item active">Tableau de bord</span>
                    <span className="hm-nav-item">
                      Conversations <em className="hm-badge">3</em>
                    </span>
                    <span className="hm-nav-item">Clients</span>
                    <span className="hm-nav-item">Statistiques</span>
                    <span className="hm-nav-item">Plats</span>
                    <span className="hm-nav-item">Commandes</span>
                    <span className="hm-nav-item">Réservations</span>
                    <span className="hm-nav-item">Mon agent</span>
                  </nav>
                </aside>
                <div className="hm-main">
                  <div className="hm-top">
                    <strong>Bonjour Rita 👋</strong>
                    <span className="hm-day">Aujourd&apos;hui · Maquis Chez Rita</span>
                  </div>
                  <div className="hm-kpis">
                    <div className="hm-kpi">
                      <span className="hm-kpi-label">Commandes</span>
                      <span className="hm-kpi-num">43</span>
                      <span className="hm-kpi-delta">+18 % vs hier</span>
                    </div>
                    <div className="hm-kpi">
                      <span className="hm-kpi-label">Encaissé aujourd&apos;hui</span>
                      <span className="hm-kpi-num">486 500 F</span>
                      <span className="hm-kpi-delta">Wave · OM · carte</span>
                    </div>
                    <div className="hm-kpi">
                      <span className="hm-kpi-label">Réservations ce soir</span>
                      <span className="hm-kpi-num">12</span>
                      <span className="hm-kpi-delta">9 confirmées</span>
                    </div>
                  </div>
                  <div className="hm-cols">
                    <div className="hm-panel">
                      <div className="hm-panel-title">Conversations</div>
                      <div className="hm-row">
                        <span className="hm-avatar">A</span>
                        <span className="hm-row-body">
                          <strong>Aminata</strong>
                          <em>Le garba est disponible ?</em>
                        </span>
                        <Image
                          src="/assets/images/logo/whatsapp.svg"
                          alt=""
                          width={14}
                          height={14}
                          unoptimized
                        />
                      </div>
                      <div className="hm-row">
                        <span className="hm-avatar">K</span>
                        <span className="hm-row-body">
                          <strong>Koffi</strong>
                          <em className="hm-typing">Kacy répond…</em>
                        </span>
                        <Image
                          src="/assets/images/logo/telegram.png"
                          alt=""
                          width={14}
                          height={14}
                          unoptimized
                        />
                      </div>
                      <div className="hm-row">
                        <span className="hm-avatar">M</span>
                        <span className="hm-row-body">
                          <strong>Mariam</strong>
                          <em>Table 4 confirmée ✓</em>
                        </span>
                        <Image
                          src="/assets/images/logo/whatsapp.svg"
                          alt=""
                          width={14}
                          height={14}
                          unoptimized
                        />
                      </div>
                    </div>
                    <div className="hm-panel">
                      <div className="hm-panel-title">Paiements récents</div>
                      <div className="hm-row">
                        <Image
                          className="hm-pay-logo"
                          src="/assets/images/logo/wave.jpg"
                          alt=""
                          width={18}
                          height={18}
                          unoptimized
                        />
                        <span className="hm-row-body">
                          <strong>12 500 F</strong>
                          <em>Wave · commande #214</em>
                        </span>
                        <span className="hm-ok">✓</span>
                      </div>
                      <div className="hm-row">
                        <Image
                          className="hm-pay-logo"
                          src="/assets/images/logo/orange_money.jpg"
                          alt=""
                          width={18}
                          height={18}
                          unoptimized
                        />
                        <span className="hm-row-body">
                          <strong>8 000 F</strong>
                          <em>Orange Money · commande #215</em>
                        </span>
                        <span className="hm-ok">✓</span>
                      </div>
                      <div className="hm-row">
                        <span className="hm-card-ico">💳</span>
                        <span className="hm-row-body">
                          <strong>24 500 F</strong>
                          <em>Carte · mini-app Telegram</em>
                        </span>
                        <span className="hm-ok">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
