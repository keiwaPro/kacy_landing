import { useState } from 'react'
import { Check, ArrowRight } from '../icons'

export default function FinalCTA() {
  const [sent, setSent] = useState(false)

  return (
    <section id="cta" className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="relative overflow-hidden rounded-[32px] grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center p-12 md:p-16 bg-gradient-to-br from-primary-800 to-primary-600 text-white">
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_25%_25%,oklch(0.35_0.078_165)_1.2px,transparent_1.8px),radial-gradient(circle_at_75%_75%,oklch(0.35_0.078_165)_1.2px,transparent_1.8px),linear-gradient(45deg,transparent_48%,oklch(0.35_0.078_165)_48.5%,oklch(0.35_0.078_165)_51.5%,transparent_52%)] [background-size:32px_32px,32px_32px,32px_32px]" />

        <div className="relative">
          <h2 className="text-[clamp(28px,3.4vw,44px)] font-semibold tracking-[-0.03em] leading-[1.1]">
            Prêt à activer Keiwa Customer AI dans votre établissement ?
          </h2>
          <p className="mt-5 text-[17px] leading-[1.5] max-w-[440px]" style={{ color: 'oklch(0.9 0.03 75)' }}>
            Demandez une démo : nous configurons votre agent sur votre métier, vos canaux et votre politique client, avec mise en service sous 48h.
          </p>
          <div className="flex flex-wrap gap-5 mt-8 text-sm">
            {['Essai gratuit 30 jours', 'Déploiement en 48h', 'Support en français'].map((l, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <Check size={14} /> {l}
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-white text-neutral-900 rounded-3xl p-8 shadow-[0_40px_80px_-20px_oklch(0.15_0.01_75/0.3)]">
          {!sent ? (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
              <div className="font-semibold text-lg tracking-tight mb-1">Demander une démo</div>
              <div className="text-sm text-neutral-500 mb-6">On vous rappelle sous 2h ouvrées. Aucun engagement.</div>

              {[
                { label: 'Votre nom', placeholder: 'Rita Kouassi', type: 'text' },
                { label: 'WhatsApp', placeholder: '+225 07 00 00 00 00', type: 'tel' },
              ].map(({ label, placeholder, type }) => (
                <div key={label} className="flex flex-col gap-1.5 mb-4">
                  <label className="text-sm font-medium text-neutral-700">{label}</label>
                  <input type={type} placeholder={placeholder} required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all placeholder:text-neutral-400" />
                </div>
              ))}

              <div className="flex flex-col gap-1.5 mb-4">
                <label className="text-sm font-medium text-neutral-700">Type de commerce</label>
                <select required className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all text-neutral-700 bg-white">
                  <option>Restaurant / Maquis</option>
                  <option>Hôtel / Résidence</option>
                  <option>Salon de beauté / Coiffure</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 mb-6">
                <label className="text-sm font-medium text-neutral-700">Votre commerce <span className="text-neutral-400 font-normal">(optionnel)</span></label>
                <input placeholder="Maquis Chez Rita, Cocody"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all placeholder:text-neutral-400" />
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-3.5 rounded-xl text-base transition-all shadow-[0_6px_20px_-4px_oklch(0.42_0.09_165/0.35)]">
                Envoyer ma demande <ArrowRight size={16} />
              </button>
              <p className="text-[11px] text-neutral-400 text-center mt-4 leading-[1.5]">
                En continuant, vous acceptez notre politique de confidentialité.<br />
                Vos infos ne sont partagées avec personne.
              </p>
            </form>
          ) : (
            <div className="text-center py-10">
              <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 grid place-items-center mx-auto mb-4">
                <Check size={24} />
              </div>
              <div className="font-semibold text-xl">Demande envoyée !</div>
              <p className="text-sm text-neutral-500 mt-2">On vous rappelle sous 2h ouvrées. À très vite 🌿</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
