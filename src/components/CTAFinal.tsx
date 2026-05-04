"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function CTAFinal() {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");
  const [places, setPlaces] = useState("37 / 50");
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fill = fillRef.current;
    if (!fill) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          fill.style.width = "74%";
          io.unobserve(e.target);
        }
      },
      { threshold: 0.3 },
    );
    io.observe(fill);
    return () => io.disconnect();
  }, []);

  const goToStep2 = () => {
    if (whatsapp.trim().length < 8) {
      alert("Merci de saisir un numéro WhatsApp valide.");
      return;
    }
    setStep(2);
  };

  const submitForm = () => {
    setSuccess(true);
    setTimeout(() => setPlaces("36 / 50"), 500);
  };

  const formTitle = success
    ? ""
    : step === 1
      ? "Réservez en 2 minutes."
      : "Presque terminé.";
  const formSub = success
    ? ""
    : step === 1
      ? "On vous rappelle sous 2h ouvrées."
      : "Quelques infos pour mieux configurer Kacy.";

  return (
    <section className="cta-final" id="reserver">
      <div className="cta-final-bg" />
      <Image
        src="/logo.png"
        alt=""
        width={320}
        height={320}
        className="cta-final-mark"
      />

      <div className="cta-wrap">
        <div className="cta-left">
          <span className="eyebrow reveal">Accès anticipé</span>
          <h2 className="reveal reveal-d-1">
            Réservez votre place.
            <br />
            Avant que Kacy soit complet.
          </h2>
          <p className="reveal reveal-d-2">
            2 minutes pour vous inscrire. On vous rappelle sous 2h ouvrées. Pas
            de carte bancaire, pas d&apos;engagement.
          </p>
          <div className="cta-meta reveal reveal-d-3">
            <span>
              <span className="bullet" />3 mois offerts
            </span>
            <span>
              <span className="bullet" />
              Tarif bloqué à vie
            </span>
            <span>
              <span className="bullet" />
              Déploiement prioritaire
            </span>
          </div>
        </div>

        <div className="cta-form reveal reveal-d-2">
          <div className="cta-places">
            <span className="cta-places-label">Places restantes</span>
            <span className="cta-places-count">{places}</span>
          </div>
          <div className="cta-places-bar">
            <div className="cta-places-fill" ref={fillRef} />
          </div>

          {!success && (
            <>
              <div className="cta-form-title">{formTitle}</div>
              <p className="cta-form-sub">{formSub}</p>
            </>
          )}

          <div
            className={`form-step${step === 1 && !success ? " active" : ""}`}
          >
            <div className="field">
              <label htmlFor="whatsapp">Votre WhatsApp</label>
              <input
                type="tel"
                id="whatsapp"
                placeholder="+225 07 00 00 00 00"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </div>
            <button className="submit-btn" onClick={goToStep2}>
              Continuer →
            </button>
            <p className="form-trust">🔒 Aucun spam. Un seul appel.</p>
          </div>

          <div
            className={`form-step${step === 2 && !success ? " active" : ""}`}
          >
            <div className="field">
              <label>Nom de votre établissement</label>
              <input type="text" placeholder="Maquis Chez Rita" />
            </div>
            <div className="field">
              <label>Type d&apos;activité</label>
              <select>
                <option>Restaurant / Maquis</option>
                <option>Hôtel / Auberge</option>
                <option>Salon de coiffure / beauté</option>
                <option>Autre</option>
              </select>
            </div>
            <button className="submit-btn" onClick={submitForm}>
              Réserver ma place
            </button>
          </div>

          <div className={`form-success${success ? " active" : ""}`}>
            <div className="check">✓</div>
            <h3>C&apos;est noté.</h3>
            <p>
              On vous rappelle sous 2h ouvrées sur WhatsApp.
              <br />
              Bienvenue chez Kacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
