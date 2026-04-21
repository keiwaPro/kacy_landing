import { Phone, Message, Calendar } from '../icons'

const CARDS = [
  {
    icon: Phone,
    title: 'Le téléphone sonne dans le vide',
    desc: '7 appels sur 10 quand vous êtes en salle. Chaque appel manqué, c\'est une commande perdue.',
  },
  {
    icon: Message,
    title: 'Les DM WhatsApp s\'accumulent',
    desc: '« Vous êtes ouvert ? », « Vous livrez où ? », « C\'est combien ? » Vous répétez 50 fois les mêmes réponses.',
  },
  {
    icon: Calendar,
    title: 'Les réservations vous échappent',
    desc: 'Vos clients veulent réserver à 23h. Vous, vous dormez. Ils appellent la concurrence.',
  },
]

export default function Problem() {
  return (
    <section id="probleme" className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-500/25">
          Le vrai problème
        </div>
        <h2 className="mt-5 text-[clamp(32px,3.8vw,52px)] font-semibold tracking-[-0.03em] leading-[1.08] text-balance text-neutral-900 dark:text-white">
          Votre équipe perd des heures<br />sur les mêmes trois questions.
        </h2>
        <p className="mt-5 text-[clamp(16px,1.3vw,18px)] leading-[1.55] text-neutral-600 dark:text-neutral-400 max-w-[520px]">
          Et pendant ce temps, vos vrais clients attendent en salle ou au comptoir. On a vu des gérants répondre à 200 messages avant minuit. Ça n'est pas tenable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {CARDS.map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-7">
            <div className="w-9 h-9 rounded-[10px] bg-red-50 dark:bg-red-500/15 text-red-600 dark:text-red-400 grid place-items-center mb-4">
              <Icon size={18} />
            </div>
            <h3 className="font-semibold text-[17px] tracking-tight text-neutral-900 dark:text-white">{title}</h3>
            <p className="mt-2.5 text-sm text-neutral-600 dark:text-neutral-400 leading-[1.55]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
