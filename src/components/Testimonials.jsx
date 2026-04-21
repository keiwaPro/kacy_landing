import { Star } from '../icons'

const ITEMS = [
  { quote: 'Depuis qu\'on utilise Keiwa, on ne rate plus aucune commande le soir. Mes serveurs sont concentrés sur la salle, pas sur leur téléphone.', name: 'Rita K.', role: 'Gérante, Maquis Chez Rita · Cocody' },
  { quote: 'J\'ai gagné 20 chambres réservées par mois juste parce que l\'agent répond à minuit. Ça paie largement l\'abonnement.', name: 'Bakary S.', role: 'Directeur, Hôtel Les Baobabs · Marcory' },
  { quote: 'Mes clientes adorent les rappels la veille. Moins de no-show, et elles arrivent préparées. Pour moi c\'est du temps en or.', name: 'Awa D.', role: 'Propriétaire, Salon Awa Beauty · Yopougon' },
]

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-500/25">
          Ils nous font confiance
        </div>
        <h2 className="mt-5 text-[clamp(32px,3.8vw,52px)] font-semibold tracking-[-0.03em] leading-[1.08] text-balance text-neutral-900 dark:text-white">
          Des gérants qui dorment mieux.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {ITEMS.map((t, i) => (
          <div key={i} className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 flex flex-col gap-5">
            <div className="flex gap-0.5 text-accent-500">
              {[0,1,2,3,4].map(j => <Star key={j} size={14} />)}
            </div>
            <p className="text-[17px] leading-[1.5] tracking-[-0.01em] text-neutral-800 dark:text-neutral-200 flex-1">
              «&nbsp;{t.quote}&nbsp;»
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300 grid place-items-center font-semibold text-sm shrink-0">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral-900 dark:text-white">{t.name}</div>
                <div className="text-xs text-neutral-500 dark:text-neutral-500">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
