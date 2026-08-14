import { FlickeringGrid } from "@/components/ui/flickering-grid";
import HandoffBeam from "@/components/HandoffBeam";

export default function Secure() {
  return (
    <section id="confiance">
      <div className="wrap">
        <div className="sec-head-center">
          <h2 className="reveal reveal-d-1">Encaissez sans y penser.</h2>
          <p className="section-lede reveal reveal-d-2">
            Les paiements passent par Paystack, et l&apos;argent arrive sur le
            compte que vous avez choisi.
          </p>
        </div>
      </div>

      <div className="bento-shell reveal reveal-d-2">
        <div className="bento-rail" aria-hidden />
        <div className="bento-grid">
          <div className="bento-cell visual-top">
            <div className="bento-text">
              <h3>Paiements sécurisés par Paystack</h3>
              <p>
                Vos clients règlent par Wave, Orange Money, MTN, Moov ou carte
                bancaire. Kacy ne touche jamais aux fonds : ils vont
                directement sur votre compte de règlement.
              </p>
            </div>
            <div className="bento-visual">
              <div className="secu">
                <FlickeringGrid
                  className="secu-grid"
                  squareSize={3}
                  gridGap={7}
                  flickerChance={0.24}
                  color="rgb(130, 188, 70)"
                  maxOpacity={0.35}
                />
                {/* Bouclier du modèle (masse pleine + pile d'ombres douces),
                    avec le `lock` de Lucide posé dedans. */}
                <svg
                  className="secu-shield"
                  viewBox="0 0 245 282"
                  aria-hidden
                >
                  <defs>
                    {/* Dégradé de volume : le bouclier reçoit la lumière en
                        haut et se referme vers le bas. */}
                    <linearGradient
                      id="secuShieldFill"
                      x1="0.25"
                      y1="0"
                      x2="0.75"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="var(--shield-top)" />
                      <stop offset="55%" stopColor="var(--shield-mid)" />
                      <stop offset="100%" stopColor="var(--shield-bottom)" />
                    </linearGradient>
                    {/* Ombre interne : le cadenas paraît creusé dans le
                        bouclier au lieu d'être posé dessus. */}
                    <filter
                      id="secuLockInset"
                      x="-40%"
                      y="-40%"
                      width="180%"
                      height="180%"
                    >
                      <feOffset dy="0.7" />
                      <feGaussianBlur stdDeviation="0.7" result="blurred" />
                      <feComposite
                        operator="out"
                        in="SourceGraphic"
                        in2="blurred"
                        result="inverse"
                      />
                      <feFlood
                        floodColor="var(--shield-inset)"
                        floodOpacity="0.55"
                        result="tint"
                      />
                      <feComposite
                        operator="in"
                        in="tint"
                        in2="inverse"
                        result="inset"
                      />
                      <feComposite
                        operator="over"
                        in="inset"
                        in2="SourceGraphic"
                      />
                    </filter>
                    <filter
                      id="secuShieldShadow"
                      x="0.217"
                      y="0.041"
                      width="244.066"
                      height="292.917"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="bg" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="3" />
                      <feGaussianBlur stdDeviation="3.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                      />
                      <feBlend mode="normal" in2="bg" result="s1" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="12" />
                      <feGaussianBlur stdDeviation="6" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                      />
                      <feBlend mode="normal" in2="s1" result="s2" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="27" />
                      <feGaussianBlur stdDeviation="8" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                      />
                      <feBlend mode="normal" in2="s2" result="s3" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="48" />
                      <feGaussianBlur stdDeviation="9.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                      />
                      <feBlend mode="normal" in2="s3" result="s4" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="s4"
                        result="shape"
                      />
                    </filter>
                  </defs>

                  <g filter="url(#secuShieldShadow)">
                    <path
                      className="secu-shield-body"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M113.664 7.33065C116.025 5.21236 119.082 4.04126 122.25 4.04126C125.418 4.04126 128.475 5.21236 130.836 7.33065C154.045 28.2076 183.028 41.5233 213.948 45.5151C216.984 45.9065 219.781 47.3695 221.839 49.6419C223.897 51.9144 225.081 54.8476 225.178 57.916C226.339 92.0322 217.849 125.781 200.689 155.261C183.529 184.74 158.4 208.746 128.209 224.501C126.368 225.462 124.323 225.962 122.248 225.959C120.173 225.956 118.13 225.45 116.291 224.484C86.0997 208.728 60.971 184.723 43.811 155.244C26.6511 125.764 18.1608 92.015 19.322 57.8988C19.4235 54.8334 20.6091 51.9043 22.6666 49.6354C24.7242 47.3665 27.5195 45.906 30.5524 45.5151C61.4706 41.5281 90.4531 28.2186 113.664 7.34787V7.33065Z"
                    />
                  </g>

                  {/* Cadenas plein : corps rempli, anse tracée en trait épais
                      arrondi. Le trait est divisé par l'échelle du groupe. */}
                  <g
                    className="secu-shield-lock"
                    transform="translate(78.8 74) scale(3.6)"
                    filter="url(#secuLockInset)"
                  >
                    <path
                      className="secu-lock-shackle"
                      d="M7 11.5V7a5 5 0 0 1 10 0v4.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <rect
                      className="secu-lock-body"
                      x="3.4"
                      y="11"
                      width="17.2"
                      height="10.6"
                      rx="2.6"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="bento-cell visual-top">
            <div className="bento-text">
              <h3>Vous gardez toujours la main</h3>
              <p>
                Dès que Kacy hésite ou qu&apos;un client insiste, il vous passe
                la conversation et vous alerte. Vous reprenez le fil là où il
                s&apos;est arrêté, sans rien relire.
              </p>
            </div>
            <div className="bento-visual">
              <HandoffBeam />
            </div>
          </div>
        </div>
        <div className="bento-rail" aria-hidden />
      </div>
    </section>
  );
}
