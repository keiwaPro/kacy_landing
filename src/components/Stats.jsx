const STATS = [
  { num: '87%',  label: 'Messages traités sans intervention humaine' },
  { num: '3,2×', label: 'Plus de commandes confirmées la nuit' },
  { num: '< 8s', label: 'Temps de réponse moyen, 24h/24' },
  { num: '18h',  label: 'Économisées par semaine en moyenne' },
]

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="bg-primary-900 rounded-[32px] px-10 md:px-16 py-16 md:py-[72px] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_25%_25%,oklch(0.35_0.078_165)_1.2px,transparent_1.8px),radial-gradient(circle_at_75%_75%,oklch(0.35_0.078_165)_1.2px,transparent_1.8px),linear-gradient(45deg,transparent_48%,oklch(0.35_0.078_165)_48.5%,oklch(0.35_0.078_165)_51.5%,transparent_52%)] [background-size:32px_32px,32px_32px,32px_32px]" />

        <div className="relative mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-[oklch(0.92_0.06_80)] border" style={{ background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.18)' }}>
            Impact mesuré
          </div>
          <h2 className="mt-5 text-[clamp(32px,3.8vw,52px)] font-semibold tracking-[-0.03em] leading-[1.08] text-white max-w-2xl">
            Les chiffres de nos 60 premiers clients.
          </h2>
        </div>

        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i}>
              <div className="text-[clamp(48px,6vw,84px)] font-semibold tracking-[-0.04em] leading-none text-accent-400 tabular-nums">
                {s.num}
              </div>
              <div className="text-sm mt-2.5 max-w-[180px]" style={{ color: 'oklch(0.85 0.02 75)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
