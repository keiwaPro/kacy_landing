import { ArrowRight, Play, Dot } from "../icons";
import PhoneChat from "./PhoneChat";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-24">
      <div className="absolute -top-32 -left-24 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.135_80/0.18)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.42_0.09_165/0.15)_0%,transparent_60%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-500/25 tracking-wide">
            <Dot size={6} color="var(--color-primary-600)" />
            Nouveau v2 · Module Politique Client intégré
          </div>

          <h1 className="mt-6 text-[clamp(40px,5.6vw,72px)] font-semibold tracking-[-0.035em] leading-[1.02] text-balance text-neutral-900 dark:text-white">
            Votre agent IA multicanal
            <br />
            <span className="text-primary-600 dark:text-primary-400">
              disponible 24h/24, 7j/7.
            </span>
          </h1>

          <p className="mt-7 text-[clamp(16px,1.3vw,19px)] leading-[1.55] text-neutral-600 dark:text-neutral-400 max-w-[520px]">
            Keiwa gère commandes, réservations, FAQ et plaintes sur WhatsApp,
            widget web, Telegram, SMS et appel vocal (Premium), avec une
            politique client générée en 5 minutes.
          </p>

          <div className="flex flex-wrap gap-3 mt-9">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white dark:text-white font-medium px-6 py-3.5 rounded-xl text-base transition-all shadow-[0_8px_24px_-4px_oklch(0.42_0.09_165/0.35)] hover:shadow-[0_12px_32px_-6px_oklch(0.42_0.09_165/0.45)]"
            >
              Demander une démo <ArrowRight size={16} />
            </a>
            <a
              href="#comment"
              className="inline-flex items-center gap-2 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-medium px-6 py-3.5 rounded-xl text-base border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all shadow-sm"
            >
              <Play size={12} /> Voir comment ça marche
            </a>
          </div>

          <div className="flex flex-wrap gap-7 mt-10">
            {[
              ["30 jours", "offerts"],
              ["48h", "mise en service"],
              ["Sans CB", "requise"],
            ].map(([a, b], i) => (
              <div key={i}>
                <div className="font-semibold text-[15px] tracking-tight text-neutral-900 dark:text-white">
                  {a}
                </div>
                <div className="text-[13px] text-neutral-500 dark:text-neutral-500">
                  {b}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhoneChat />
        </div>
      </div>
    </section>
  );
}
