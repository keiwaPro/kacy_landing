import { useState, useEffect, useRef } from 'react'

const SCRIPT = [
  { who: 'user', text: 'Bonjour ! Vous livrez ce soir à Cocody ?', t: '19:42' },
  { who: 'bot',  text: 'Bonsoir 🌙 Oui, on livre jusqu\'à 23h ! Vous souhaitez voir le menu du soir ?', t: '19:42' },
  { who: 'user', text: 'Oui s\'il vous plaît', t: '19:43' },
  { who: 'bot',  text: '🍽 Top 3 ce soir :\n· Attiéké poisson — 3 500 F\n· Poulet yassa — 4 000 F\n· Garba spécial — 2 500 F', t: '19:43' },
  { who: 'user', text: 'Un attiéké + un yassa pour 20h30 svp', t: '19:44' },
  { who: 'bot',  text: 'Parfait ✅  7 500 F + 1 000 F livraison. Lien Wave envoyé !', t: '19:44' },
]

function BotAvatar() {
  return (
    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-[11px] font-bold shrink-0 shadow-sm">
      K
    </div>
  )
}

function Bubble({ msg, index }) {
  const isUser = msg.who === 'user'
  const lines = msg.text.split('\n')

  return (
    <div
      className={`flex items-end gap-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
      style={{ animation: `msgSlideUp 0.45s cubic-bezier(0.34,1.56,0.64,1) both`, animationDelay: '0ms' }}
    >
      {!isUser && <BotAvatar />}

      <div className={`max-w-[72%] ${isUser ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
        <div className={`px-3.5 py-2.5 rounded-2xl text-[13px] leading-[1.5] ${
          isUser
            ? 'bg-primary-600 text-white rounded-br-[6px] shadow-[0_4px_12px_-2px_oklch(0.42_0.09_165/0.4)]'
            : 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 rounded-bl-[6px] border border-neutral-100 dark:border-neutral-700 shadow-sm'
        }`}>
          {lines.map((line, i) => (
            <span key={i}>{line}{i < lines.length - 1 && <><br /></>}</span>
          ))}
        </div>
        <span className="text-[10px] text-neutral-400 dark:text-neutral-600 px-1">{msg.t}</span>
      </div>
    </div>
  )
}

function TypingDots() {
  return (
    <div className="flex items-end gap-2" style={{ animation: 'msgSlideUp 0.35s ease-out both' }}>
      <BotAvatar />
      <div className="px-4 py-3 rounded-2xl rounded-bl-[6px] bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 shadow-sm">
        <div className="flex gap-1 items-center h-3">
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 block"
              style={{ animation: `typingBounce 1.2s ${i * 0.15}s infinite ease-in-out` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ChatPreview() {
  const [messages, setMessages] = useState([])
  const [typing, setTyping] = useState(false)
  const [fading, setFading] = useState(false)
  const timers = useRef([])
  const cycleRef = useRef(0)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
    }
  }, [messages, typing])

  const run = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    const cycle = ++cycleRef.current
    setMessages([])
    setTyping(false)
    setFading(false)

    let acc = 800

    SCRIPT.forEach((msg, i) => {
      if (msg.who === 'bot' && i > 0) {
        timers.current.push(setTimeout(() => {
          if (cycleRef.current !== cycle) return
          setTyping(true)
        }, acc))
        acc += 1400
      }
      acc += i === 0 ? 0 : msg.who === 'user' ? 700 : 200
      timers.current.push(setTimeout(() => {
        if (cycleRef.current !== cycle) return
        setTyping(false)
        setMessages(prev => [...prev, { ...msg, uid: `${cycle}-${i}` }])
      }, acc))
      acc += msg.who === 'user' ? 500 : 800
    })

    timers.current.push(setTimeout(() => {
      if (cycleRef.current !== cycle) return
      setFading(true)
      timers.current.push(setTimeout(() => {
        if (cycleRef.current !== cycle) return
        run()
      }, 900))
    }, acc + 2500))
  }

  useEffect(() => {
    run()
    return () => timers.current.forEach(clearTimeout)
  }, [])

  return (
    <div
      className="relative select-none"
      style={{ transition: 'opacity 0.8s ease', opacity: fading ? 0 : 1 }}
    >
      {/* Glow orbs behind */}
      <div className="absolute -inset-8 -z-10 pointer-events-none">
        <div className="absolute top-8 left-4 w-48 h-48 rounded-full bg-primary-400/20 dark:bg-primary-500/15 blur-3xl" />
        <div className="absolute bottom-8 right-4 w-56 h-56 rounded-full bg-accent-500/15 dark:bg-accent-500/10 blur-3xl" />
      </div>

      {/* Card */}
      <div className="w-[340px] rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.18),0_8px_32px_-8px_rgba(0,0,0,0.08)] border border-neutral-200/80 dark:border-neutral-700/50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl">

        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 grid place-items-center text-white font-bold text-sm shadow-sm">K</div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white dark:border-neutral-900" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-neutral-900 dark:text-white leading-tight">Keiwa Agent</div>
            <div className="text-[11px] text-emerald-500 font-medium">En ligne · répond en &lt; 8s</div>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          </div>
        </div>

        {/* Messages area */}
        <div
          ref={scrollRef}
          className="h-72 overflow-y-auto flex flex-col gap-3 px-4 py-4 bg-neutral-50/80 dark:bg-neutral-950/50"
          style={{ scrollbarWidth: 'none' }}
        >
          <style>{`.no-sb::-webkit-scrollbar{display:none}`}</style>
          {messages.map((m) => (
            <Bubble key={m.uid} msg={m} />
          ))}
          {typing && <TypingDots key="typing" />}
        </div>

        {/* Fake input bar */}
        <div className="px-4 py-3 border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center gap-2.5">
          <div className="flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-full px-4 py-2 text-[12px] text-neutral-400 dark:text-neutral-600">
            Écrivez un message…
          </div>
          <button className="w-8 h-8 rounded-full bg-primary-600 grid place-items-center text-white shadow-sm hover:bg-primary-700 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
