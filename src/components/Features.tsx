import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import FeatureHandoff from "@/components/FeatureHandoff";

const INNER_CHANNELS = [
  { name: "WhatsApp", src: "/assets/images/logo/whatsapp.svg" },
  { name: "Telegram", src: "/assets/images/logo/telegram.png" },
  { name: "SMS", src: "/assets/images/logo/message.png" },
];

const OUTER_CHANNELS = [
  { name: "Widget web", src: "/logo.svg" },
  { name: "Appel vocal", src: "/assets/images/logo/phone.png" },
];

export default function Features() {
  return (
    <section className="features" id="product">
      <div className="wrap">
        <span className="eyebrow reveal">Produit</span>
        <h2 className="reveal reveal-d-1">
          Un agent configuré pour votre métier.
        </h2>
        <p className="section-lede reveal reveal-d-2">
          Pas un chatbot générique. Kacy connaît vos plats, vos chambres, vos
          prestations.
        </p>

        <div className="features-grid">
          <div
            className="feature span-2 dark reveal"
            style={{ minHeight: "260px" }}
          >
            <div className="feature-multichannel-text">
              <div className="feature-tag">Multicanal</div>
              <h3>Un seul agent, partout où sont vos clients.</h3>
              <p>
                Vos clients vous écrivent sur WhatsApp, sur votre site, par SMS.
                Kacy répond sur tous les canaux avec la même cohérence.
              </p>
            </div>

            <div className="feature-orbit-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute inset-0 size-full"
              >
                <circle
                  className="orbit-ring"
                  cx="50%"
                  cy="50%"
                  r={72}
                  fill="none"
                />
                <circle
                  className="orbit-ring"
                  cx="50%"
                  cy="50%"
                  r={122}
                  fill="none"
                />
              </svg>

              <OrbitingCircles
                radius={72}
                duration={22}
                path={false}
                iconSize={40}
              >
                {INNER_CHANNELS.map((ch) => (
                  <div key={ch.name} className="orbit-icon" title={ch.name}>
                    <Image
                      src={ch.src}
                      alt={ch.name}
                      width={22}
                      height={22}
                      unoptimized
                    />
                  </div>
                ))}
              </OrbitingCircles>

              <OrbitingCircles
                radius={122}
                duration={34}
                path={false}
                reverse
                iconSize={40}
              >
                {OUTER_CHANNELS.map((ch) => (
                  <div key={ch.name} className="orbit-icon" title={ch.name}>
                    <Image
                      src={ch.src}
                      alt={ch.name}
                      width={22}
                      height={22}
                      unoptimized
                    />
                  </div>
                ))}
              </OrbitingCircles>
            </div>
          </div>

          <div className="feature reveal reveal-d-1">
            <div className="feature-tag">Configuration</div>
            <h3>Mise en service en 48h</h3>
            <p>
              Vous nous donnez votre menu, vos prix, vos horaires. On configure.
              Vous lancez.
            </p>
            <Image
              src="/assets/images/patern/patern.svg"
              alt=""
              width={260}
              height={258}
              aria-hidden
              className="feature-patern"
              unoptimized
            />
          </div>

          <div className="feature green reveal reveal-d-2">
            <div className="feature-tag">Disponibilité</div>
            <h3>24/7, même à minuit</h3>
            <div className="feature-big-num">&lt;8s</div>
            <p>Temps de réponse moyen, jour et nuit.</p>
            <Image
              src="/assets/images/patern/patern_2.svg"
              alt=""
              width={260}
              height={258}
              aria-hidden
              className="feature-patern"
              unoptimized
            />
          </div>

          <div className="feature reveal reveal-d-3">
            <div className="feature-tag">Contrôle</div>
            <h3>Transfert humain instantané</h3>
            <p>
              Quand Kacy ne sait pas, il vous passe la main. Vous gardez
              toujours le contrôle.
            </p>
            <FeatureHandoff />
          </div>

          <div className="feature reveal reveal-d-4">
            <div className="feature-tag">Paiement</div>
            <h3>Wave & Orange Money</h3>
            <p>
              Intégration native. Vos clients paient sans quitter la
              conversation.
            </p>
            <div className="pay-cards">
              <div className="pay-card pay-card-1">
                <Image
                  src="/assets/images/logo/orange_money.jpg"
                  alt="Orange Money"
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
              <div className="pay-card pay-card-2">
                <Image
                  src="/assets/images/logo/wave.jpg"
                  alt="Wave"
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
