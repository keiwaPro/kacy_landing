import { Message, Globe, Send, Mail, MicCircle } from '../icons'

const CHANNELS = [
  { name: 'WhatsApp',    icon: Message,   color: 'oklch(0.58 0.13 155)', bg: 'oklch(0.95 0.04 155)', desc: 'Le canal n°1. Connecté à votre numéro WhatsApp Business.' },
  { name: 'Web',         icon: Globe,     color: 'oklch(0.42 0.09 165)', bg: 'oklch(0.93 0.04 165)', desc: 'Widget sur votre site web. Conversation textuelle, intégration 2 min.' },
  { name: 'Telegram',    icon: Send,      color: 'oklch(0.52 0.12 240)', bg: 'oklch(0.95 0.03 240)', desc: 'Bot Telegram connecté à l\'agent. Idéal pour clients internationaux.' },
  { name: 'SMS',         icon: Mail,      color: 'oklch(0.55 0.11 70)',  bg: 'oklch(0.95 0.05 70)',  desc: 'Pour les clients hors connexion data. Fonctionne sur tout téléphone.' },
  { name: 'Appel vocal', icon: MicCircle, color: 'oklch(0.48 0.09 225)', bg: 'oklch(0.94 0.04 225)', desc: 'Réception des appels entrants avec réponse vocale IA (plan Premium).' },
]

export default function Channels() {
  return (
    <section id="fonctionnalites" className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-500/25">
          Tous vos canaux
        </div>
        <h2 className="mt-5 text-[clamp(32px,3.8vw,52px)] font-semibold tracking-[-0.03em] leading-[1.08] text-balance text-neutral-900 dark:text-white">
          Un seul agent, partout où sont vos clients.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CHANNELS.map(({ name, icon: Icon, color, bg, desc }, i) => (
          <div key={i} className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-7 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-default">
            <div className="w-12 h-12 rounded-[14px] grid place-items-center" style={{ background: bg, color }}>
              <Icon size={22} />
            </div>
            <div className="font-semibold text-[17px] text-neutral-900 dark:text-white">{name}</div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-[1.5]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
