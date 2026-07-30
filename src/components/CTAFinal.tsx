"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const TOTAL_PLACES = 100;

const BUSINESS_TYPES = [
  { value: "restaurant", label: "Restaurant / Maquis" },
  { value: "hotel", label: "Hôtel / Auberge" },
  { value: "beauty", label: "Salon de coiffure / beauté" },
  { value: "other", label: "Autre" },
] as const;

export default function CTAFinal() {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [whatsapp, setWhatsapp] = useState("");
  const [establishmentName, setEstablishmentName] = useState("");
  const [businessType, setBusinessType] = useState<string>(BUSINESS_TYPES[0].value);

  const [taken, setTaken] = useState<number | null>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/waitlist")
      .then((res) => res.json())
      .then((data: { count: number | null }) => {
        if (typeof data.count === "number") setTaken(data.count);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const fill = fillRef.current;
    if (!fill || taken === null) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const pct = Math.min(100, Math.round((taken / TOTAL_PLACES) * 100));
          fill.style.width = `${pct}%`;
          io.unobserve(e.target);
        }
      },
      { threshold: 0.3 },
    );
    io.observe(fill);
    return () => io.disconnect();
  }, [taken]);

  const remaining = taken === null ? null : Math.max(0, TOTAL_PLACES - taken);
  const places = remaining === null ? `— / ${TOTAL_PLACES}` : `${remaining} / ${TOTAL_PLACES}`;

  const goToStep2 = () => {
    const digits = whatsapp.replace(/\D/g, "");
    if (digits.length < 8) {
      setError("Merci de saisir un numéro WhatsApp valide.");
      return;
    }
    setError(null);
    setStep(2);
  };

  const submitForm = async () => {
    if (!establishmentName.trim()) {
      setError("Merci d'indiquer le nom de votre établissement.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          whatsapp,
          establishment_name: establishmentName.trim(),
          business_type: businessType,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Une erreur est survenue, réessayez.");
      }
      setSuccess(true);
      setTaken((t) => (t === null ? null : t + 1));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue, réessayez.");
    } finally {
      setSubmitting(false);
    }
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
                onChange={(e) => {
                  setWhatsapp(e.target.value);
                  if (error) setError(null);
                }}
              />
            </div>
            {error && step === 1 && <p className="form-error">{error}</p>}
            <button className="submit-btn" onClick={goToStep2}>
              Continuer →
            </button>
            <p className="form-trust">🔒 Aucun spam. Un seul appel.</p>
          </div>

          <div
            className={`form-step${step === 2 && !success ? " active" : ""}`}
          >
            <div className="field">
              <label htmlFor="establishment">Nom de votre établissement</label>
              <input
                type="text"
                id="establishment"
                placeholder="Maquis Chez Rita"
                value={establishmentName}
                onChange={(e) => {
                  setEstablishmentName(e.target.value);
                  if (error) setError(null);
                }}
              />
            </div>
            <div className="field">
              <label htmlFor="business-type">Type d&apos;activité</label>
              <select
                id="business-type"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
              >
                {BUSINESS_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            {error && step === 2 && <p className="form-error">{error}</p>}
            <button
              className="submit-btn"
              onClick={submitForm}
              disabled={submitting}
            >
              {submitting ? "Envoi…" : "Réserver ma place"}
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
