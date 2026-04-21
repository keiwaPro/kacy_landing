import { CheckCircle, Message, Bot, Chart } from '../icons'

const STEPS = [
  { n: 'ÉTAPE 0', icon: CheckCircle, title: 'Politique Client', desc: 'Répondez à 12 questions guidées. Keiwa génère vos règles relationnelles et les injecte dans l\'agent en 5 minutes.' },
  { n: 'ÉTAPE 1', icon: Message,     title: 'Infos établissement', desc: 'Nom, secteur, horaires et identité de l\'agent IA depuis la console no-code.' },
  { n: 'ÉTAPE 2', icon: Bot,         title: 'Modules à activer', desc: 'Commandes, réservations, FAQ, plaintes et canal vocal selon votre plan.' },
  { n: 'ÉTAPE 3', icon: Chart,       title: 'Données métier', desc: 'Menu, tarifs, prestations et créneaux. Mise en service en 48h, sans compétence technique.' },
]

export default function HowItWorks() {
  return (
    <section id="comment" className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-500/25">
          Comment ça marche
        </div>
        <h2 className="mt-5 text-[clamp(32px,3.8vw,52px)] font-semibold tracking-[-0.03em] leading-[1.08] text-balance text-neutral-900 dark:text-white">
          Onboarding structuré en 4 étapes.
        </h2>
        <p className="mt-5 text-[clamp(16px,1.3vw,18px)] leading-[1.55] text-neutral-600 dark:text-neutral-400">
          La v2 intègre le Module Politique Client dès le départ pour garantir des réponses cohérentes sur tous vos canaux.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STEPS.map(({ n, icon: Icon, title, desc }, i) => (
          <div key={i} className="relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-7">
            <div className="font-mono text-[11px] text-primary-600 dark:text-primary-400 tracking-[0.06em] font-medium mb-3">{n}</div>
            <div className="w-12 h-12 rounded-[14px] bg-primary-100 dark:bg-primary-500/18 text-primary-700 dark:text-primary-300 grid place-items-center mb-5">
              <Icon size={20} />
            </div>
            <h3 className="font-semibold text-[17px] tracking-tight text-neutral-900 dark:text-white">{title}</h3>
            <p className="mt-2.5 text-sm text-neutral-600 dark:text-neutral-400 leading-[1.55]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
