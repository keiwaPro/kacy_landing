import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import ConversationDemo from "@/components/ConversationDemo";

const CHART_DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

const PAY_ICONS = [
  { name: "Wave", src: "/assets/images/logo/wave.jpg" },
  { name: "Orange Money", src: "/assets/images/logo/orange_money.jpg" },
  { name: "MTN MoMo", src: "/assets/images/logo/mtn_money.jpg" },
];

export default function Bento() {
  return (
    <section className="features" id="product">
      <div className="wrap">
        <div className="sec-head-center">
          <span className="eyebrow reveal">Produit</span>
          <h2 className="reveal reveal-d-1">
            Un agent configuré pour votre métier.
          </h2>
          <p className="section-lede reveal reveal-d-2">
            Pas un chatbot générique. Kacy connaît vos plats, vos chambres, vos
            prestations — et travaille pendant que vous êtes en salle.
          </p>
        </div>
      </div>

      <div className="bento-shell reveal reveal-d-2">
        <div className="bento-rail" aria-hidden />
        <div className="bento-grid">
          <div className="bento-cell visual-top">
            <div className="bento-text">
              <h3>Conversations naturelles, en temps réel</h3>
              <p>
                Kacy répond comme un membre de votre équipe : commandes,
                réservations, questions — en français comme en nouchi, 24/7.
              </p>
            </div>
            <div className="bento-visual">
              <ConversationDemo />
            </div>
          </div>

          <div className="bento-cell visual-top">
            <div className="bento-text">
              <h3>Un seul cerveau, tous vos canaux</h3>
              <p>
                WhatsApp, Telegram, mini-app de commande : Kacy centralise les
                messages, les commandes et les paiements mobile money.
              </p>
            </div>
            <div className="bento-visual bento-visual-radar">
              <div className="radar">
                <div className="radar-masked">
                  <span className="radar-ring r1" aria-hidden />
                  <span className="radar-ring r2" aria-hidden />
                  <span className="radar-ring r3" aria-hidden />
                  <div className="radar-core">
                  <OrbitingCircles
                    radius={136}
                    duration={45}
                    path={false}
                    iconSize={44}
                  >
                    <div className="radar-icon" title="WhatsApp">
                      <Image
                        src="/assets/images/logo/whatsapp.svg"
                        alt="WhatsApp"
                        width={44}
                        height={44}
                        unoptimized
                      />
                    </div>
                    <div className="radar-icon" title="Telegram">
                      <Image
                        src="/assets/images/logo/telegram.png"
                        alt="Telegram"
                        width={44}
                        height={44}
                        unoptimized
                      />
                    </div>
                    <div className="radar-icon radar-icon-app" title="Mini-app">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
                        <path d="M10.5 18.5h3" />
                      </svg>
                    </div>
                  </OrbitingCircles>
                  <OrbitingCircles
                    radius={190}
                    duration={70}
                    path={false}
                    reverse
                    iconSize={38}
                  >
                    {PAY_ICONS.map((p) => (
                      <div
                        className="radar-icon radar-icon-photo"
                        title={p.name}
                        key={p.name}
                      >
                        <Image
                          src={p.src}
                          alt={p.name}
                          width={38}
                          height={38}
                          unoptimized
                        />
                      </div>
                    ))}
                  </OrbitingCircles>
                  </div>
                </div>
                <div className="radar-center">
                  <Image src="/logo_2.svg" alt="Kacy" width={32} height={32} />
                </div>
              </div>
            </div>
          </div>

          <div className="bento-cell visual-top">
            <div className="bento-text">
              <h3>Vos chiffres en direct</h3>
              <p>
                Commandes, conversations, plats qui partent le plus : chaque
                échange devient une statistique claire sur votre tableau de
                bord.
              </p>
            </div>
            <div className="bento-visual">
              <div className="chart">
                <div className="chart-days">
                  {CHART_DAYS.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
                <svg
                  className="chart-svg"
                  viewBox="0 0 520 190"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="var(--green)"
                        stopOpacity="0.28"
                      />
                      <stop
                        offset="100%"
                        stopColor="var(--green)"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,150 C50,145 80,128 130,132 C180,136 210,110 260,100 C300,92 330,102 370,80 C420,53 470,48 520,30 L520,190 L0,190 Z"
                    fill="url(#chartFill)"
                  />
                  <path
                    className="chart-line"
                    d="M0,150 C50,145 80,128 130,132 C180,136 210,110 260,100 C300,92 330,102 370,80 C420,53 470,48 520,30"
                  />
                </svg>
                <div className="chart-tip">128 commandes</div>
                <div className="chart-dot" />
              </div>
            </div>
          </div>

          <div className="bento-cell visual-top">
            <div className="bento-text">
              <h3>Votre carte dans Telegram, la commande en trois taps</h3>
              <p>
                Kacy envoie « Voir la carte » dans la conversation : votre
                client parcourt le menu, commande et règle par Wave, Orange
                Money ou carte. Réservations et séjours arrivent au même
                endroit.
              </p>
            </div>
            <div className="bento-visual">
              <div className="mapp">
                <div className="mapp-frame">
                  <div className="mapp-brand">
                    <span className="mapp-logo">CR</span>
                    <span className="mapp-id">
                      <strong>Chez Rita</strong>
                      <em>Ouvert · 11h — 23h</em>
                    </span>
                  </div>
                  <div className="mapp-chips">
                    <span className="mapp-chip active">Tous</span>
                    <span className="mapp-chip">Grillades</span>
                    <span className="mapp-chip">Boissons</span>
                  </div>
                  <div className="mapp-grid">
                    <div className="mapp-cell">
                      <span className="mapp-media m1" />
                      <strong>Poulet braisé</strong>
                      <em>3 500 F</em>
                      <span className="mapp-add">Ajouter</span>
                    </div>
                    <div className="mapp-cell">
                      <span className="mapp-media m2" />
                      <strong>Garba spécial</strong>
                      <em>1 500 F</em>
                      <span className="mapp-add">Ajouter</span>
                    </div>
                  </div>
                  <div className="mapp-cta">Voir la commande · 12 500 F</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bento-rail" aria-hidden />
      </div>
    </section>
  );
}
