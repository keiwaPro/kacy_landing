type PlanFeature =
  | "reservations"
  | "analytics"
  | "copilot"
  | "multi_vertical"
  | "whatsapp"
  | "export"
  | "api_access";

type Plan = {
  id: string;
  name: string;
  price_monthly: number | null;
  max_restaurants: number | null;
  max_messages_per_month: number | null;
  max_products: number | null;
  features: Partial<Record<PlanFeature, boolean>>;
  discount_percent?: number | null;
  discount_months?: number | null;
  discount_label?: string | null;
};

const PLAN_TAGLINE: Record<string, string> = {
  starter: "Pour démarrer sur les canaux essentiels.",
  pro: "Tous les modules métier activés.",
  business: "Multi-établissements et intégrations avancées.",
  enterprise: "Déploiement sur mesure et support dédié.",
};

const FEATURE_LABEL: Record<PlanFeature, string> = {
  reservations: "Réservations",
  analytics: "Statistiques",
  copilot: "Copilote IA",
  multi_vertical: "Multi-métier",
  whatsapp: "WhatsApp",
  export: "Export des données",
  api_access: "Accès API",
};

async function getPlans(): Promise<Plan[]> {
  const apiUrl = process.env.API_URL ?? "http://localhost:3010";
  try {
    const res = await fetch(`${apiUrl}/api/plans`, {
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

function formatPrice(plan: Plan): { amount: string; unit: string | null; fullAmount?: string | null } {
  if (plan.price_monthly === null) return { amount: "Sur devis", unit: null };
  if (plan.price_monthly === 0) return { amount: "Gratuit", unit: null };
  
  if (plan.discount_percent && plan.discount_percent > 0) {
    const discountedPrice = Math.round(plan.price_monthly * (1 - plan.discount_percent / 100));
    return {
      amount: discountedPrice.toLocaleString("fr-FR"),
      unit: "F / mois",
      fullAmount: plan.price_monthly.toLocaleString("fr-FR"),
    };
  }

  return { amount: plan.price_monthly.toLocaleString("fr-FR"), unit: "F / mois" };
}

function planFeatures(plan: Plan): string[] {
  const limits: string[] = [
    plan.max_restaurants === null
      ? "Établissements illimités"
      : `${plan.max_restaurants} établissement(s)`,
    plan.max_messages_per_month === null
      ? "Crédits IA illimités"
      : `${plan.max_messages_per_month.toLocaleString("fr-FR")} crédits IA inclus / mois`,
    plan.max_products === null ? "Produits illimités" : `${plan.max_products} produits`,
  ];
  const features = (Object.keys(FEATURE_LABEL) as PlanFeature[])
    .filter((f) => plan.features[f])
    .map((f) => FEATURE_LABEL[f]);
  return [...limits, ...features];
}

export default async function Pricing() {
  const plans = await getPlans();

  return (
    <section id="pricing">
      <div className="wrap">
        <div className="pricing-head">
          <span className="eyebrow reveal">Tarifs</span>
          <h2 className="reveal reveal-d-1">Un tarif simple, qui grandit avec vous.</h2>
          <p className="section-lede reveal reveal-d-2">
            Choisissez le plan adapté à votre activité. Changez ou évoluez à tout moment.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => {
            const price = formatPrice(p);
            const featured = p.id === "pro";
            const hasPromo = Boolean(p.discount_percent && p.discount_percent > 0);
            return (
              <div
                key={p.id}
                className={`price-card reveal${i > 0 ? ` reveal-d-${i}` : ""}${featured ? " featured" : ""}`}
              >
                {hasPromo ? (
                  <span className="price-badge">
                    {p.discount_label || `-${p.discount_percent}%`}
                  </span>
                ) : (
                  featured && <span className="price-badge">Le plus choisi</span>
                )}
                <div className="price-plan">{p.name}</div>
                <div className="price-num" style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    {price.amount} {price.unit && <span className="unit">{price.unit}</span>}
                  </div>
                  {price.fullAmount && (
                    <div style={{ textDecoration: "line-through", fontSize: "0.5em", opacity: 0.6, fontWeight: "normal", marginTop: "2px" }}>
                      {price.fullAmount} F
                    </div>
                  )}
                </div>
                {PLAN_TAGLINE[p.id] && <p className="price-desc">{PLAN_TAGLINE[p.id]}</p>}
                <ul className="price-features">
                  {planFeatures(p).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="#reserver" className="price-cta">
                  {p.price_monthly === null ? "Parler à l'équipe" : `Choisir ${p.name}`}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
