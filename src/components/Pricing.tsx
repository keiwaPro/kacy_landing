const plans = [
  {
    name: "Starter",
    price: "20 000",
    strike: "35 000",
    desc: "Pour démarrer sur les canaux essentiels.",
    features: [
      "WhatsApp + Widget web",
      "2 modules au choix (sur 4)",
      "Politique client assistée",
      "Tableau de bord",
      "Support email",
      "3 mois offerts",
    ],
    cta: "Réserver Starter",
    featured: false,
  },
  {
    name: "Pro",
    price: "50 000",
    strike: "80 000",
    desc: "Tous les modules métier activés.",
    features: [
      "WhatsApp + Telegram + SMS + Web",
      "Tous les modules (4/4)",
      "Politique client + PDF charte",
      "API backoffice",
      "Support email + chat",
      "3 mois offerts",
    ],
    cta: "Réserver Pro",
    featured: true,
  },
  {
    name: "Premium",
    price: "100 000",
    strike: "150 000",
    desc: "Canal vocal IA et opérations avancées.",
    features: [
      "Tous canaux + appel vocal IA",
      "Tous les modules",
      "Politique client multi-versions",
      "API avancée + webhooks",
      "Support dédié prioritaire",
      "3 mois offerts",
    ],
    cta: "Parler à l'équipe",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="pricing-head">
          <span className="eyebrow reveal">Tarifs</span>
          <h2 className="reveal reveal-d-1">
            Un prix bloqué à vie.
            <br />
            Pour les 50 premiers.
          </h2>
          <p className="section-lede reveal reveal-d-2">
            Après l&apos;ouverture publique, les tarifs reviennent au prix standard. Les early
            adopters gardent le leur pour toujours.
          </p>
        </div>

        <div className="pricing-offer reveal">
          <div className="pricing-offer-left">
            <span className="pricing-offer-tag">Early access</span>
            <span className="pricing-offer-text">
              3 mois offerts + tarif bloqué à vie + déploiement prioritaire 48h
            </span>
          </div>
          <span className="pricing-offer-date">← 15.05.2026</span>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`price-card reveal${i > 0 ? ` reveal-d-${i}` : ""}${p.featured ? " featured" : ""}`}
            >
              {p.featured && <span className="price-badge">Le plus choisi</span>}
              <div className="price-plan">{p.name}</div>
              <div className="price-num">
                {p.price} <span className="unit">F / mois</span>
              </div>
              <div className="price-strike">Prix public : {p.strike} F</div>
              <p className="price-desc">{p.desc}</p>
              <ul className="price-features">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#reserver" className="price-cta">
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
