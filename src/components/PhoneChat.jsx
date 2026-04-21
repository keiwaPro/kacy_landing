import { useState, useEffect, useRef, useMemo } from 'react'
import { Phone, DoubleCheck } from '../icons'

const SCRIPT = [
  { who: 'user', text: 'Bonjour, vous livrez ce soir vers Cocody ?', t: '19:42' },
  { who: 'bot',  text: 'Bonsoir 🌙 Oui, on livre à Cocody jusqu\'à 23h. Vous voulez voir notre menu ?', t: '19:42' },
  { who: 'user', text: 'Oui s\'il vous plaît', t: '19:43' },
  { who: 'bot',  text: 'Je vous envoie notre Top 3 du soir : Attiéké poisson braisé (3 500 F), Poulet yassa (4 000 F), Garba spécial (2 500 F). Je note pour quelle heure ?', t: '19:43' },
  { who: 'user', text: 'Un attiéké et un yassa pour 20h30', t: '19:44' },
  { who: 'bot',  text: 'Parfait ✅ 7 500 F au total, livraison 1 000 F. Je vous envoie le lien de paiement Wave dans 10s.', t: '19:44' },
]

function Bubble({ msg }) {
  const isUser = msg.who === 'user'
  return (
    <div className={`wa-in max-w-[78%] px-3 py-2 rounded-[14px] text-[13px] leading-[1.35] ${
      isUser
        ? 'self-end bg-[#DCF8C6] text-[#1F2421] dark:bg-[#005C4B] dark:text-[#E9EDEF] rounded-tr-[4px]'
        : 'self-start bg-white text-[#1F2421] dark:bg-[#1F2C33] dark:text-[#E9EDEF] rounded-tl-[4px] shadow-[0_1px_1px_rgba(0,0,0,0.05)]'
    }`}>
      {msg.text}
      <div className="flex justify-end items-center gap-1 mt-0.5 text-[10px] text-[#667781]">
        {msg.t}
        {isUser && <DoubleCheck size={11} style={{ color: '#53BDEB' }} />}
      </div>
    </div>
  )
}

export default function PhoneChat() {
  const [visible, setVisible] = useState(0)
  const [typing, setTyping] = useState(false)
  const timers = useRef([])

  const schedule = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    setVisible(0)
    setTyping(false)
    let acc = 0
    SCRIPT.forEach((m, i) => {
      acc += i === 0 ? 400 : m.who === 'bot' ? 900 : 700
      if (m.who === 'bot' && i > 0) {
        timers.current.push(setTimeout(() => setTyping(true), acc))
        acc += 1200
      }
      timers.current.push(setTimeout(() => {
        setTyping(false)
        setVisible(v => Math.max(v, i + 1))
      }, acc))
    })
    timers.current.push(setTimeout(schedule, acc + 4000))
  }

  useEffect(() => {
    schedule()
    return () => timers.current.forEach(clearTimeout)
  }, [])

  return (
    <div className="w-[300px] h-[600px] mx-auto rounded-[42px] bg-neutral-900 p-[10px] shadow-[0_60px_120px_-40px_oklch(0.42_0.09_165/0.35),0_40px_80px_-30px_oklch(0.2_0.01_75/0.25)] relative">
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-6 bg-neutral-950 rounded-full z-10" />
      <div className="w-full h-full bg-[#ECE5DD] dark:bg-[#0B1013] rounded-[34px] overflow-hidden flex flex-col">
        <div className="bg-primary-700 text-white pt-14 pb-3 px-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-accent-500 text-neutral-900 grid place-items-center font-bold text-sm">K</div>
          <div className="flex-1">
            <div className="text-sm font-semibold leading-tight">Maquis Chez Rita</div>
            <div className="text-[11px] opacity-85">agent Keiwa · en ligne</div>
          </div>
          <Phone size={15} />
        </div>

        <div className="flex-1 px-3 py-3.5 flex flex-col gap-2.5 overflow-hidden bg-[radial-gradient(circle_at_20%_30%,oklch(0.92_0.01_75)_1px,transparent_2px),radial-gradient(circle_at_80%_70%,oklch(0.92_0.01_75)_1px,transparent_2px)] dark:[background-image:radial-gradient(circle_at_20%_30%,oklch(0.2_0.01_75)_1px,transparent_2px),radial-gradient(circle_at_80%_70%,oklch(0.2_0.01_75)_1px,transparent_2px)] [background-size:48px_48px]">
          {SCRIPT.slice(0, visible).map((m, i) => <Bubble key={i} msg={m} />)}
          {typing && (
            <div className="wa-in self-start bg-white dark:bg-[#1F2C33] px-3 py-2 rounded-[14px] rounded-tl-[4px] shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              <div className="flex gap-1 py-0.5">
                {[0, 1, 2].map(i => (
                  <span key={i} className="typing-bounce w-1.5 h-1.5 rounded-full bg-[#667781] block" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
