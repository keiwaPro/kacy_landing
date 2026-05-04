"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Mes clients vont-ils se vexer qu'un robot leur réponde ?",
    a: "Non. Kacy se présente dès le début (« Je suis l'assistant de [votre nom] »). La transparence construit la confiance. Si un client insiste, Kacy transfère vers vous en un clic. Nos pilotes à Cocody montrent que <strong>87 % des clients préfèrent une réponse instantanée et honnête d'un agent IA</strong> à attendre 2h une réponse humaine.",
  },
  {
    q: "Ça peut rater et me faire perdre un client ?",
    a: "Quand Kacy ne sait pas, il <strong>transfère automatiquement vers vous</strong> et vous alerte. Pendant les 30 premiers jours, nous surveillons les conversations avec vous pour ajuster le comportement.",
  },
  {
    q: "Si je ne suis pas content, je peux arrêter quand ?",
    a: "<strong>À tout moment, sans frais ni préavis.</strong> Pas de contrat d'engagement. Pendant vos 3 mois offerts, vous testez sans aucun risque.",
  },
  {
    q: "Ça marche en nouchi et en français d'Abidjan ?",
    a: "Oui. Kacy comprend le français standard, le français d'Abidjan et un nouchi courant. Si un client utilise une expression que Kacy ne connaît pas, il demande poliment de reformuler — comme le ferait un employé bien éduqué.",
  },
  {
    q: "Mes données sont-elles en sécurité ?",
    a: "Vos conversations sont hébergées sur des serveurs <strong>conformes RGPD</strong>. Nous ne revendons aucune donnée. Vous pouvez exporter ou supprimer l'intégralité de vos données à tout moment.",
  },
  {
    q: "Et si mon menu change tous les jours ?",
    a: "Vous mettez à jour votre menu en 30 secondes depuis le tableau de bord (ou en envoyant la photo du menu sur WhatsApp). Kacy se synchronise instantanément.",
  },
];

export default function FAQ() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]));

  const toggle = (i: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <span className="eyebrow reveal">FAQ</span>
        <h2 className="reveal reveal-d-1">Questions fréquentes.</h2>

        <div className="faq-list reveal reveal-d-2">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`faq-item${openSet.has(i) ? " open" : ""}`}
            >
              <button className="faq-q" onClick={() => toggle(i)}>
                <span>{f.q}</span>
                <span className="sign" />
              </button>
              <div className="faq-a">
                <div
                  className="faq-a-inner"
                  dangerouslySetInnerHTML={{ __html: f.a }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
