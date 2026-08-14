import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const INNER_ICONS = [
  { name: "WhatsApp", src: "/assets/images/logo/whatsapp.svg" },
  { name: "Telegram", src: "/assets/images/logo/telegram.png" },
  { name: "SMS", src: "/assets/images/logo/message.png" },
];

const CHART_DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

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
                <div className="chatmock">
                  <div className="cm-row client">
                    <div className="cm-bubble">
                      Bonsoir ! Une table pour 4 vers 20h, c&apos;est possible ?
                    </div>
                    <div className="cm-avatar human">🧑🏾</div>
                  </div>
                  <div className="cm-row bot">
                    <div className="cm-avatar">
                      <Image src="/logo_2.svg" alt="" width={15} height={15} />
                    </div>
                    <div className="cm-bubble">
                      Bien sûr ! Table pour 4 ce soir à 20h ✓ Je vous la
                      réserve tout de suite.
                    </div>
                  </div>
                  <div className="cm-row bot">
                    <div className="cm-avatar">
                      <Image src="/logo_2.svg" alt="" width={15} height={15} />
                    </div>
                    <div className="cm-typing">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bento-cell visual-top">
              <div className="bento-text">
                <h3>Tous vos canaux, un seul cerveau</h3>
                <p>
                  WhatsApp, Telegram, SMS, appels : Kacy centralise tout et
                  répond avec la même cohérence, sans rien vous demander.
                </p>
              </div>
              <div className="bento-visual">
                <div className="radar">
                  <span className="radar-ring r1" aria-hidden />
                  <span className="radar-ring r2" aria-hidden />
                  <span className="radar-ring r3" aria-hidden />
                  <div className="radar-core">
                    <OrbitingCircles
                      radius={140}
                      duration={45}
                      path={false}
                      iconSize={46}
                    >
                      {INNER_ICONS.map((ch) => (
                        <div key={ch.name} className="radar-icon" title={ch.name}>
                          <Image
                            src={ch.src}
                            alt={ch.name}
                            width={46}
                            height={46}
                            unoptimized
                          />
                        </div>
                      ))}
                    </OrbitingCircles>
                    <OrbitingCircles
                      radius={220}
                      duration={70}
                      path={false}
                      reverse
                      iconSize={40}
                    >
                      <div className="radar-icon" title="Appel vocal">
                        <Image
                          src="/assets/images/logo/phone.png"
                          alt="Appel vocal"
                          width={40}
                          height={40}
                          unoptimized
                        />
                      </div>
                      <div className="radar-icon radar-icon-app" title="Mini app">
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
                  </div>
                  <div className="radar-center">
                    <Image src="/logo_2.svg" alt="Kacy" width={34} height={34} />
                  </div>
                  <span className="radar-fade" aria-hidden />
                </div>
              </div>
            </div>

            <div className="bento-cell visual-top">
              <div className="bento-text">
                <h3>Vos chiffres en direct</h3>
                <p>
                  Commandes, chiffre d&apos;affaires, questions fréquentes : chaque
                  conversation devient une statistique claire sur votre tableau
                  de bord.
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
                <h3>Des réservations qui se prennent toutes seules</h3>
                <p>
                  Vos clients réservent dans la conversation ou depuis la
                  mini-app. Kacy confirme, encaisse l&apos;acompte — Wave,
                  Orange Money ou carte via Paystack — et relance tout seul.
                </p>
              </div>
              <div className="bento-visual">
                <div className="plan">
                  <div className="plan-days">
                    <span>Jeu</span>
                    <span>Ven</span>
                    <span>Sam</span>
                    <span>Dim</span>
                  </div>
                  <div className="plan-now">
                    <span className="plan-now-badge">20h04</span>
                  </div>
                  <div className="plan-chip solid">Table 4 · ce soir 20h</div>
                  <div className="plan-chip soft">Livraison · Riviera 3</div>
                  <div className="plan-chip ghost">+ Nouvelle réservation</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bento-rail" aria-hidden />
      </div>
    </section>
  );
}
