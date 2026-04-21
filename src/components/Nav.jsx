import { useState, useEffect } from 'react'
import { Moon, Sun } from '../icons'

export default function Nav({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-200 ${
      scrolled
        ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3.5 flex items-center gap-8">
        <a href="#" className="flex items-center gap-2.5 font-semibold tracking-tight shrink-0">
          <div className="w-8 h-8 rounded-[10px] bg-primary-600 text-white grid place-items-center font-bold text-base">K</div>
          <span className="text-neutral-900 dark:text-white">Keiwa</span>
        </a>

        <div className="hidden md:flex gap-7 ml-6">
          {[
            ['#fonctionnalites', 'Fonctionnalités'],
            ['#comment', 'Comment ça marche'],
            ['#cas', "Cas d'usage"],
            ['#tarifs', 'Tarifs'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
            className="w-9 h-9 rounded-xl grid place-items-center text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <a href="#login" className="hidden sm:inline-flex text-sm font-medium text-neutral-700 dark:text-neutral-300 px-3 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors">
            Connexion
          </a>
          <a href="#cta" className="inline-flex items-center text-sm font-medium bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-xl transition-colors shadow-[0_0_0_0_oklch(0.42_0.09_165/0),0_6px_20px_-4px_oklch(0.42_0.09_165/0.35)] hover:shadow-[0_8px_24px_-4px_oklch(0.42_0.09_165/0.45)]">
            Demander une démo
          </a>
        </div>
      </div>
    </nav>
  )
}
