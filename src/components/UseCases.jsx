import { useState } from 'react'
import { Check } from '../icons'

const CASES = {
  restaurant: {
    title: 'Gagnez chaque commande, même à 23h',
    desc: 'Menu du jour, réservations, livraison, paiement Wave. Votre agent connaît vos plats, vos prix et vos horaires — et répond exactement comme vous l\'auriez fait.',
    features: ['Menu dynamique avec prix du jour', 'Confirmation de commande automatique', 'Intégration paiement Wave & Orange Money', 'Transfert humain pendant le service'],
    accent: 'var(--color-accent-500)',
    accentBg: 'oklch(0.95 0.06 80)',
  },
  hotel: {
    title: 'Vos chambres se réservent pendant que vous dormez',
    desc: 'Disponibilités en temps réel, tarifs, check-in, services annexes. L\'agent répond aux questions fréquentes et capte les réservations 24h/24.',
    features: ['Calendrier de disponibilités en temps réel', 'Devis automatisé selon la saison', 'Confirmation par email + WhatsApp', 'Upsell spa, petit-déjeuner, navette'],
    accent: 'var(--color-primary-500)',
    accentBg: 'oklch(0.93 0.04 165)',
  },
  salon: {
    title: 'Plus jamais de rendez-vous oublié',
    desc: 'Prise de rendez-vous, rappels, liste d\'attente, tarifs. Votre agenda se remplit tout seul et vos clientes reçoivent des rappels la veille.',
    features: ['Agenda connecté avec créneaux libres', 'Rappels automatiques la veille', 'Gestion de la liste d\'attente', 'Catalogue prestations et tarifs'],
    accent: 'var(--color-accent-600)',
    accentBg: 'oklch(0.94 0.05 75)',
  },
}

const TABS = [['restaurant', 'Restaurants'], ['hotel', 'Hôtels'], ['salon', 'Salons']]

export default function UseCases() {
  const [tab, setTab] = useState('restaurant')
  const active = CASES[tab]

  return (
    <section id="cas" className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-500/25">
          Conçu pour vous
        </div>
        <h2 className="mt-5 text-[clamp(32px,3.8vw,52px)] font-semibold tracking-[-0.03em] leading-[1.08] text-balance text-neutral-900 dark:text-white">
          Un agent par métier, pas une solution générique.
        </h2>
      </div>

      <div className="inline-flex gap-1 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-[14px] mb-8">
        {TABS.map(([k, l]) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={`px-5 py-2.5 text-sm font-medium rounded-[10px] transition-all duration-150 ${
              tab === k
                ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-10 md:p-12">
        <div>
          <h3 className="text-[28px] font-semibold tracking-[-0.02em] leading-[1.15] text-neutral-900 dark:text-white">{active.title}</h3>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 leading-[1.55]">{active.desc}</p>
          <div className="mt-7 flex flex-col gap-3">
            {active.features.map((f, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-[22px] h-[22px] rounded-full bg-primary-100 dark:bg-primary-500/18 text-primary-700 dark:text-primary-300 grid place-items-center shrink-0 mt-0.5">
                  <Check size={12} />
                </div>
                <span className="text-[15px] text-neutral-800 dark:text-neutral-200">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="aspect-[4/3] rounded-2xl overflow-hidden relative" style={{ background: `linear-gradient(135deg, ${active.accentBg} 0%, oklch(0.93 0.04 165) 100%)` }}>
          <svg width="100%" height="100%" viewBox="0 0 400 300" className="absolute inset-0">
            <defs>
              <pattern id={`pat-${tab}`} width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="14" cy="14" r="1.2" fill={active.accent} opacity="0.3" />
              </pattern>
            </defs>
            <rect width="400" height="300" fill={`url(#pat-${tab})`} />
            <circle cx="120" cy="150" r="70" fill={active.accent} opacity="0.22" />
            <circle cx="280" cy="150" r="100" fill="var(--color-primary-500)" opacity="0.15" />
            <rect x="140" y="110" width="140" height="90" rx="16" fill="white" opacity="0.88" />
            <rect x="156" y="128" width="60" height="8" rx="4" fill={active.accent} />
            <rect x="156" y="144" width="108" height="6" rx="3" fill="#d1d5db" />
            <rect x="156" y="156" width="90" height="6" rx="3" fill="#d1d5db" />
            <rect x="156" y="176" width="48" height="18" rx="9" fill="var(--color-primary-600)" />
          </svg>
        </div>
      </div>
    </section>
  )
}
