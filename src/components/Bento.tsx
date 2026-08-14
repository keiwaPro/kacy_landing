import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import ConversationDemo from "@/components/ConversationDemo";
import OrdersChart from "@/components/OrdersChart";


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
                Vos clients écrivent là où ils sont déjà. Kacy centralise les
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
                    radius={118}
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
                        src="/assets/images/logo/telegram.svg"
                        alt="Telegram"
                        width={44}
                        height={44}
                        unoptimized
                      />
                    </div>
                    <div className="radar-icon" title="SMS">
                      <Image
                        src="/assets/images/logo/message.png"
                        alt="SMS"
                        width={44}
                        height={44}
                        unoptimized
                      />
                    </div>
                    <div className="radar-icon" title="Appel">
                      <Image
                        src="/assets/images/logo/phone.png"
                        alt="Appel"
                        width={44}
                        height={44}
                        unoptimized
                      />
                    </div>
                  </OrbitingCircles>
                  <OrbitingCircles
                    radius={214}
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
              <OrdersChart />
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
