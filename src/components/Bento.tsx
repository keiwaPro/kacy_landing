import Image from "next/image";

const RADAR_ICONS = [
  { name: "Orange Money", src: "/assets/images/logo/orange_money.jpg", pos: "i1" },
  { name: "Telegram", src: "/assets/images/logo/telegram.png", pos: "i2" },
  { name: "Wave", src: "/assets/images/logo/wave.jpg", pos: "i3" },
  { name: "WhatsApp", src: "/assets/images/logo/whatsapp.svg", pos: "i4" },
  { name: "SMS", src: "/assets/images/logo/message.png", pos: "i5" },
  { name: "Appel vocal", src: "/assets/images/logo/phone.png", pos: "i6" },
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
                  {RADAR_ICONS.map((ch) => (
                    <div
                      key={ch.name}
                      className={`radar-icon ${ch.pos}`}
                      title={ch.name}
                    >
                      <Image
                        src={ch.src}
                        alt={ch.name}
                        width={26}
                        height={26}
                        unoptimized
                      />
                    </div>
                  ))}
                  <div className="radar-center">
                    <Image src="/logo_2.svg" alt="Kacy" width={34} height={34} />
                  </div>
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
                  Kacy vérifie vos disponibilités, confirme, encaisse
                  l&apos;acompte et relance — pendant que vous faites tourner la
                  salle.
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
