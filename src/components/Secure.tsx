export default function Secure() {
  return (
    <section id="confiance">
      <div className="wrap">
        <div className="sec-head-center">
          <span className="eyebrow reveal">Confiance</span>
          <h2 className="reveal reveal-d-1">Conçu pour travailler serein.</h2>
          <p className="section-lede reveal reveal-d-2">
            Vos données restent les vôtres, et un humain n&apos;est jamais loin.
          </p>
        </div>

        <div className="secure-grid">
          <div className="secure-card reveal">
            <div>
              <h3>Vos données, protégées</h3>
              <p>
                Conversations hébergées en conformité RGPD. Export et
                suppression à tout moment. Aucune revente, jamais.
              </p>
            </div>
            <div className="secure-visual">
              <svg
                width="200"
                height="220"
                viewBox="0 0 200 220"
                fill="none"
                aria-hidden
              >
                <path
                  d="M100 12 L176 44 V104 C176 156 144 192 100 208 C56 192 24 156 24 104 V44 Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.35"
                />
                <path
                  d="M100 34 L156 58 V104 C156 144 132 172 100 185 C68 172 44 144 44 104 V58 Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <path
                  className="accent"
                  d="M100 56 L136 72 V104 C136 132 120 152 100 162 C80 152 64 132 64 104 V72 Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <rect
                  className="accent"
                  x="88"
                  y="100"
                  width="24"
                  height="20"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  className="accent"
                  d="M92 100 V94 A8 8 0 0 1 108 94 V100"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span className="secure-pill p1">
                <span className="ok">✓</span> RGPD
              </span>
              <span className="secure-pill p2">
                <span className="ok">✓</span> Export à tout moment
              </span>
            </div>
          </div>

          <div className="secure-card reveal reveal-d-1">
            <div>
              <h3>Vous gardez toujours la main</h3>
              <p>
                Kacy transfère à un humain dès qu&apos;il hésite, et vous suivez
                chaque conversation depuis votre tableau de bord — un ou dix
                établissements.
              </p>
            </div>
            <div className="secure-visual">
              <svg
                width="220"
                height="220"
                viewBox="0 0 220 220"
                fill="none"
                aria-hidden
              >
                <circle
                  cx="110"
                  cy="110"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.4"
                />
                <ellipse
                  cx="110"
                  cy="110"
                  rx="88"
                  ry="34"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.35"
                />
                <ellipse
                  cx="110"
                  cy="110"
                  rx="34"
                  ry="88"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.35"
                />
                <path
                  d="M22 110 H198"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.35"
                />
                <circle className="accent" cx="110" cy="22" r="5" fill="currentColor" />
                <circle className="accent" cx="176" cy="144" r="5" fill="currentColor" />
                <circle className="accent" cx="44" cy="144" r="5" fill="currentColor" />
              </svg>
              <span className="secure-pill p1">
                Transfert humain <span className="ok">instantané</span>
              </span>
              <span className="secure-pill p2">
                <span className="ok">✓</span> Multi-établissements
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
