"use client";
import { useState } from "react";
import Image from "next/image";

const STEPS = [
  {
    num: "01",
    title: "Vous réservez votre place",
    body: "2 minutes, gratuit, sans engagement. On vous rappelle sur WhatsApp pour comprendre votre activité.",
    screen: "/screens/welcome.png",
  },
  {
    num: "02",
    title: "On configure Kacy pour vous",
    body: "Menu, prix, horaires, politique client : on paramètre tout, vous validez. Aucune compétence technique requise.",
    screen: "/screens/gestion.png",
  },
  {
    num: "03",
    title: "Mise en service en 48h",
    body: "Premiers clients, premières conversations. Vous observez tout depuis votre tableau de bord.",
    screen: "/screens/conversations.png",
  },
  {
    num: "04",
    title: "Kacy apprend et s'améliore",
    body: "Bilan à 30 jours : on affine ensemble le comportement selon vos retours et vos statistiques.",
    screen: "/screens/dashboard.png",
  },
];

export default function Steps() {
  const [active, setActive] = useState(0);

  return (
    <section id="comment">
      <div className="wrap">
        <div className="sec-head-center">
          <span className="eyebrow reveal">Déploiement</span>
          <h2 className="reveal reveal-d-1">Simple. Rapide. Sans effort.</h2>
          <p className="section-lede reveal reveal-d-2">
            De la réservation au service : découvrez comment Kacy s&apos;installe
            dans votre quotidien en quatre étapes.
          </p>
        </div>

        <div className="steps-grid">
          <div className="steps-list reveal">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                className={`step-item${i === active ? " active" : ""}`}
              >
                <button
                  className="step-btn"
                  onClick={() => setActive(i)}
                  aria-expanded={i === active}
                >
                  <span className="step-num">{s.num}</span>
                  <span className="step-title">{s.title}</span>
                </button>
                <div className="step-body">
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="steps-screen reveal reveal-d-1">
            {STEPS.map((s, i) => (
              <Image
                key={s.screen}
                src={s.screen}
                alt={s.title}
                width={1200}
                height={800}
                className={i === active ? "visible" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
