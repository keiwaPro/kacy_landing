import { Check } from '../icons'

const TIERS = [
  {
    name: 'Starter',
    price: '20 000',
    desc: 'Pour démarrer sur les canaux essentiels avec une configuration guidée.',
    features: ['WhatsApp + Widget web', '2 modules au choix', 'Politique Client : génération assistée', 'Tableau de bord inclus', 'Support email'],
    cta: 'Démarrer',
    featured: false,
  },
  {
    name: 'Pro',
    price: '50 000',
    desc: 'Pour les établissements qui veulent activer tous les modules métier.',
    features: ['WhatsApp + Telegram + SMS + Web', 'Tous les modules', 'Politique Client + PDF charte client', 'API backoffice', 'Support email + chat'],
    cta: 'Choisir Pro',
    featured: true,
  },
  {
    name: 'Premium',
    price: '100 000',
    desc: 'Pour les opérations avancées avec canal vocal et priorisation.',
    features: ['Tous canaux + appel vocal', 'Tous les modules', 'Politique Client + PDF + multi-versions', 'API avancée + webhooks', 'Support dédié & prioritaire'],
    cta: 'Parler à l\'équipe',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="tarifs" className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-500/25">
          Tarifs simples
        </div>
        <h2 className="mt-5 text-[clamp(32px,3.8vw,52px)] font-semibold tracking-[-0.03em] leading-[1.08] text-balance text-neutral-900 dark:text-white">
          Un prix clair, en FCFA. Annulable à tout moment.
        </h2>
        <p className="mt-5 text-[clamp(16px,1.3vw,18px)] leading-[1.55] text-neutral-600 dark:text-neutral-400">
          Tous les plans incluent l'accompagnement de configuration, sans frais d'installation ni de résiliation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {TIERS.map((t, i) => (
          <div key={i} className={`relative flex flex-col gap-6 rounded-2xl p-8 border ${
            t.featured
              ? 'bg-primary-900 border-primary-800 text-white'
              : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800'
          }`}>
            {t.featured && (
              <div className="absolute -top-3 right-6 bg-accent-500 text-neutral-900 text-[11px] font-semibold px-3 py-1 rounded-full tracking-[0.04em]">
                LE PLUS CHOISI
              </div>
            )}

            <div>
              <div className={`text-sm font-semibold tracking-wide uppercase ${t.featured ? 'text-primary-300' : 'text-neutral-500 dark:text-neutral-400'}`}>{t.name}</div>
              <p className={`text-sm mt-2 leading-[1.5] min-h-11 ${t.featured ? 'text-primary-300' : 'text-neutral-600 dark:text-neutral-400'}`}>{t.desc}</p>
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className={`text-[clamp(40px,5vw,56px)] font-semibold tracking-[-0.04em] leading-none ${t.featured ? 'text-white' : 'text-neutral-900 dark:text-white'}`}>{t.price}</span>
              <span className={`text-sm ${t.featured ? 'text-primary-300' : 'text-neutral-500'}`}>FCFA / mois</span>
            </div>

            <div className="flex flex-col gap-2.5 flex-1">
              {t.features.map((f, j) => (
                <div key={j} className="flex gap-3 items-start">
                  <span className={`w-5 h-5 rounded-full grid place-items-center shrink-0 mt-0.5 ${t.featured ? 'bg-primary-700 text-primary-300' : 'bg-primary-100 dark:bg-primary-500/18 text-primary-700 dark:text-primary-300'}`}>
                    <Check size={11} />
                  </span>
                  <span className={`text-sm ${t.featured ? 'text-primary-100' : 'text-neutral-700 dark:text-neutral-300'}`}>{f}</span>
                </div>
              ))}
            </div>

            <a href="#cta" className={`mt-auto text-center font-medium py-3.5 rounded-xl text-base transition-all ${
              t.featured
                ? 'bg-white text-primary-900 hover:bg-primary-50'
                : 'bg-primary-600 hover:bg-primary-700 text-white shadow-[0_6px_20px_-4px_oklch(0.42_0.09_165/0.35)]'
            }`}>
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
