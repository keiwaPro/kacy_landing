import { apiFetch, describeError } from "@/lib/api";

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
  starter: "Testez sur votre vrai commerce, sans carte bancaire.",
  pro: "Pour démarrer : Kacy répond sur WhatsApp.",
  business: "Kacy répond partout où sont vos clients.",
  premium: "Kacy répond même au téléphone.",
  corporate: "Pour les groupes, hôtels, cliniques et multi-établissements.",
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

/**
 * Copie de la grille 0043_tarifs_2026. Sert de repli : une API injoignable
 * affichait une section Tarifs vide, y compris en production quand API_URL
 * manquait au process PM2.
 */
const FALLBACK_PLANS: Plan[] = [
  {
    id: "starter",
    name: "Démo",
    price_monthly: 0,
    max_restaurants: 1,
    max_messages_per_month: 500,
    max_products: 50,
    features: { whatsapp: true },
  },
  {
    id: "pro",
    name: "Essentiel",
    price_monthly: 10000,
    max_restaurants: 1,
    max_messages_per_month: 1000,
    max_products: null,
    features: { whatsapp: true, analytics: true, reservations: true },
  },
  {
    id: "business",
    name: "Standard",
    price_monthly: 25000,
    max_restaurants: 1,
    max_messages_per_month: 3500,
    max_products: null,
    features: {
      whatsapp: true,
      analytics: true,
      reservations: true,
      export: true,
    },
  },
  {
    id: "premium",
    name: "Premium",
    price_monthly: 50000,
    max_restaurants: 1,
    max_messages_per_month: 8000,
    max_products: null,
    features: {
      whatsapp: true,
      analytics: true,
      reservations: true,
      export: true,
      copilot: true,
      multi_vertical: true,
    },
  },
  {
    id: "corporate",
    name: "Corporate",
    price_monthly: null,
    max_restaurants: null,
    max_messages_per_month: null,
    max_products: null,
    features: {
      whatsapp: true,
      analytics: true,
      reservations: true,
      export: true,
      copilot: true,
      multi_vertical: true,
      api_access: true,
    },
  },
];

async function getPlans(): Promise<Plan[]> {
  try {
    const res = await apiFetch("pricing", "/api/plans", {
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) {
      console.error(`[landing][pricing] HTTP ${res.status} → grille de REPLI`);
      return FALLBACK_PLANS;
    }
    const plans: Plan[] = await res.json();
    console.log(
      `[landing][pricing] ${plans.length} plan(s) reçu(s): ${plans.map((p) => p.id).join(", ") || "aucun"}`,
    );
    return plans.length ? plans : FALLBACK_PLANS;
  } catch (err) {
    console.error(`[landing][pricing] échec → grille de REPLI · ${describeError(err)}`);
    return FALLBACK_PLANS;
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
      ? "Volume de crédits négocié"
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
  /* Corporate est sur devis et sans limites : il sort de la grille pour
     ne pas être comparé colonne à colonne avec les plans chiffrés. */
  const standard = plans.filter((p) => p.id !== "corporate");
  const corporate = plans.find((p) => p.id === "corporate");

  return (
    <section id="pricing">
      <div className="wrap">
        <div className="pricing-head">
          <h2 className="reveal reveal-d-1">Un tarif simple, qui grandit avec vous.</h2>
          <p className="section-lede reveal reveal-d-2">
            Choisissez le plan adapté à votre activité. Changez ou évoluez à tout moment.
          </p>
        </div>

        <div className="pricing-grid">
          {standard.map((p, i) => {
            const price = formatPrice(p);
            const featured = p.id === "business";
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

        {corporate && (
          <div className="price-corp reveal">
            <div className="price-corp-left">
              <div className="price-plan">{corporate.name}</div>
              <h3>Un déploiement sur mesure, à votre échelle.</h3>
              <p>{PLAN_TAGLINE[corporate.id]}</p>
            </div>
            <ul className="price-corp-features">
              {planFeatures(corporate).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="price-corp-right">
              <span className="price-corp-amount">Sur devis</span>
              <a href="#reserver" className="price-cta">
                Parler à l&apos;équipe
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
