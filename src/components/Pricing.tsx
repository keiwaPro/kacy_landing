import { apiFetch, describeError } from "@/lib/api";
import { FRONTEND_LOGIN_URL } from "@/lib/links";

type Plan = {
  id: string;
  name: string;
  price_monthly: number | null;
  max_restaurants: number | null;
  max_messages_per_month: number | null;
  max_products: number | null;
  channels: string[];
  features: Record<string, boolean>;
  limits: Record<string, number | null>;
  discount_percent?: number | null;
  discount_months?: number | null;
  discount_label?: string | null;
};

type FeatureDefinition = {
  key: string;
  name: string;
  kind: "boolean" | "limit";
};

type ChannelDefinition = {
  id: string;
  label: string;
  availability: "available" | "coming_soon";
};

const PLAN_TAGLINE: Record<string, string> = {
  starter: "Testez sur votre vrai commerce, sans carte bancaire.",
  pro: "Pour lancer Kacy avec votre équipe.",
  business: "Pour les commerces qui tournent à plein régime.",
  premium: "Pour les gros volumes de conversations.",
  corporate: "Pour les groupes, hôtels, cliniques et multi-établissements.",
};

const CHANNEL_MANAGED_FEATURES = new Set(["whatsapp", "whatsapp_catalog"]);

/**
 * Replis : une API injoignable affichait une section Tarifs vide, y compris
 * en production quand API_URL manquait au process PM2.
 */
const FALLBACK_PLANS: Plan[] = [
  {
    id: "starter",
    name: "Gratuit",
    price_monthly: 0,
    max_restaurants: 1,
    max_messages_per_month: 500,
    max_products: 50,
    channels: ["telegram", "whatsapp"],
    features: {},
    limits: { members: 0 },
  },
  {
    id: "pro",
    name: "Pro",
    price_monthly: 15000,
    max_restaurants: 1,
    max_messages_per_month: 1000,
    max_products: null,
    channels: ["telegram", "whatsapp", "messenger"],
    features: { store: true, copilot: true },
    limits: { members: 4 },
  },
  {
    id: "business",
    name: "Business",
    price_monthly: 35000,
    max_restaurants: 2,
    max_messages_per_month: 3500,
    max_products: null,
    channels: ["telegram", "whatsapp", "messenger"],
    features: { store: true, copilot: true },
    limits: { members: 4 },
  },
  {
    id: "premium",
    name: "Premium",
    price_monthly: 75000,
    max_restaurants: 3,
    max_messages_per_month: 8000,
    max_products: null,
    channels: ["telegram", "whatsapp", "messenger"],
    features: { store: true, copilot: true },
    limits: { members: 4 },
  },
  {
    id: "corporate",
    name: "Corporate",
    price_monthly: null,
    max_restaurants: null,
    max_messages_per_month: null,
    max_products: null,
    channels: ["telegram", "whatsapp", "messenger"],
    features: { store: true, copilot: true },
    limits: { members: null },
  },
];

const FALLBACK_FEATURES: FeatureDefinition[] = [
  { key: "copilot", name: "Copilot", kind: "boolean" },
  { key: "store", name: "Boutique en ligne", kind: "boolean" },
  { key: "members", name: "Membres par établissement", kind: "limit" },
];

const FALLBACK_CHANNELS: ChannelDefinition[] = [
  { id: "telegram", label: "Telegram", availability: "available" },
  { id: "whatsapp", label: "WhatsApp", availability: "available" },
  { id: "messenger", label: "Messenger", availability: "available" },
  { id: "instagram", label: "Instagram", availability: "available" },
];

async function getJson<T>(label: string, path: string, fallback: T[]): Promise<T[]> {
  try {
    const res = await apiFetch(label, path, {
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) {
      console.error(`[landing][${label}] HTTP ${res.status} → REPLI`);
      return fallback;
    }
    const data: T[] = await res.json();
    console.log(`[landing][${label}] ${data.length} élément(s) reçu(s)`);
    return data.length ? data : fallback;
  } catch (err) {
    console.error(`[landing][${label}] échec → REPLI · ${describeError(err)}`);
    return fallback;
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

function planFeatures(
  plan: Plan,
  features: FeatureDefinition[],
  channels: ChannelDefinition[],
): string[] {
  const channelLabels = channels
    .filter((c) => c.availability === "available" && plan.channels?.includes(c.id))
    .map((c) => c.label);
  const lines: string[] = [];
  if (channelLabels.length > 0) lines.push(`Canaux : ${channelLabels.join(", ")}`);
  lines.push(
    plan.max_restaurants === null
      ? "Établissements illimités"
      : `${plan.max_restaurants} établissement(s)`,
    plan.max_messages_per_month === null
      ? "Volume de crédits négocié"
      : `${plan.max_messages_per_month.toLocaleString("fr-FR")} crédits IA inclus / mois`,
    plan.max_products === null ? "Produits illimités" : `${plan.max_products} produits`,
  );
  for (const feature of features) {
    if (CHANNEL_MANAGED_FEATURES.has(feature.key)) continue;
    if (feature.kind === "limit" && plan.limits?.[feature.key] !== undefined) {
      const value = plan.limits[feature.key];
      lines.push(`${feature.name} : ${value === null ? "illimité" : value.toLocaleString("fr-FR")}`);
    } else if (feature.kind === "boolean" && plan.features?.[feature.key]) {
      lines.push(feature.name);
    }
  }
  return lines;
}

export default async function Pricing() {
  const [plans, features, channels] = await Promise.all([
    getJson<Plan>("pricing", "/api/plans", FALLBACK_PLANS),
    getJson<FeatureDefinition>("features", "/api/plans/features", FALLBACK_FEATURES),
    getJson<ChannelDefinition>("channels", "/api/channels", FALLBACK_CHANNELS),
  ]);
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
            const hasPromo = Boolean(p.discount_percent && p.discount_percent > 0);
            return (
              <div
                key={p.id}
                className={`price-card reveal${i > 0 ? ` reveal-d-${i}` : ""}`}
              >
                {hasPromo && (
                  <span className="price-badge">
                    {p.discount_label || `-${p.discount_percent}%`}
                  </span>
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
                  {planFeatures(p, features, channels).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href={FRONTEND_LOGIN_URL} className="price-cta">
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
              {planFeatures(corporate, features, channels).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="price-corp-right">
              <span className="price-corp-amount">Sur devis</span>
              <a href={FRONTEND_LOGIN_URL} className="price-cta">
                Parler à l&apos;équipe
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
