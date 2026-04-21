import { useState } from 'react'
import { Plus, X } from '../icons'

const ITEMS = [
  { q: 'Est-ce que mes clients savent qu\'ils parlent à une IA ?', a: 'Oui, et c\'est volontaire. L\'agent se présente dès le début (« Bonjour, je suis l\'assistant de [votre nom] »). La transparence construit la confiance. Si un client insiste, l\'agent transfère vers vous en un clic.' },
  { q: 'Qu\'est-ce que le Module Politique Client ?', a: 'C\'est la nouveauté v2. En 5 minutes, vous répondez à un questionnaire guidé et Keiwa génère vos règles relationnelles (annulation, plaintes, escalade, ton). Ces règles sont injectées automatiquement dans l\'agent.' },
  { q: 'Est-ce que ça marche en nouchi, en bambara, en wolof ?', a: 'Oui. L\'agent comprend le français courant, le français familier ivoirien, et peut être configuré pour répondre en bambara, dioula ou wolof selon vos clients. La configuration linguistique se fait en 2 minutes.' },
  { q: 'Qu\'est-ce qu\'il se passe si l\'agent ne sait pas répondre ?', a: 'L\'agent vous transfère automatiquement la conversation via WhatsApp. Vous recevez le contexte complet et vous reprenez la main. Après coup, on améliore l\'agent ensemble pour que ça n\'arrive plus.' },
  { q: 'Combien de temps pour être opérationnel ?', a: 'Le déploiement standard est de 48h. L\'onboarding se fait en 4 étapes, dont la Politique Client, sans compétence technique requise.' },
  { q: 'Est-ce que je peux annuler facilement ?', a: 'Oui, l\'abonnement est mensuel sans engagement, sans frais de résiliation.' },
  { q: 'Mes données clients restent-elles privées ?', a: 'Oui. Les données sont chiffrées en transit et au repos. Chaque établissement (tenant) est isolé, et les règles internes de Politique Client ne sont jamais partagées.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="max-w-[880px] mx-auto px-6 md:px-10 py-20">
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-500/25">
          Questions fréquentes
        </div>
        <h2 className="mt-5 text-[clamp(32px,3.8vw,52px)] font-semibold tracking-[-0.03em] leading-[1.08] text-balance text-neutral-900 dark:text-white">
          Tout ce que vous vouliez demander.
        </h2>
      </div>

      <div>
        {ITEMS.map((it, i) => {
          const isOpen = open === i
          return (
            <div key={i} className="border-b border-neutral-200 dark:border-neutral-800">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full py-6 flex justify-between items-center gap-6 text-left text-[17px] font-medium tracking-[-0.01em] text-neutral-900 dark:text-white"
              >
                <span>{it.q}</span>
                <span className={`w-8 h-8 rounded-[10px] bg-neutral-100 dark:bg-neutral-800 grid place-items-center shrink-0 text-neutral-600 dark:text-neutral-400 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                  <Plus size={14} />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="text-[15px] leading-[1.6] text-neutral-600 dark:text-neutral-400">{it.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
