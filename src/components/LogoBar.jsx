const logos = [
  'Maquis Chez Rita',
  'Hôtel Les Baobabs',
  'Salon Awa Beauty',
  'Résidence Palmeraie',
  'Grill du Plateau',
]

export default function LogoBar() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-8">
      <div className="text-center text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.08em] mb-8">
        Déjà utilisé par des commerces à Abidjan
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-75">
        {logos.map((name, i) => (
          <div key={i} className="flex items-center gap-2 text-lg font-semibold text-neutral-400 dark:text-neutral-600 tracking-tight">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="1" y="1" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.4" />
              <path d="M5 9 L8 12 L13 6" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {name}
          </div>
        ))}
      </div>
    </section>
  )
}
