"use client";
import { useState, useEffect, useRef } from "react";
import { onPrefillWhatsapp } from "@/lib/prefill";

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
      .then((res) => {
        console.log(`[landing][cta] GET /api/waitlist → ${res.status}`);
        return res.json();
      })
      .then((data: { count: number | null }) => {
        console.log("[landing][cta] places:", data);
        if (typeof data.count === "number") setTaken(data.count);
        else console.error(`[landing][cta] count non numérique → affichage « — / ${TOTAL_PLACES} »`);
      })
      .catch((err) => console.error("[landing][cta] échec GET /api/waitlist:", err));
  }, []);

  useEffect(() => onPrefillWhatsapp(setWhatsapp), []);

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
      const data = await res.json().catch(() => ({}));
      console.log(`[landing][cta] POST /api/waitlist → ${res.status}`, data);
      if (!res.ok) {
        throw new Error(data.error || "Une erreur est survenue, réessayez.");
      }
      setSuccess(true);
      setTaken((t) => (t === null ? null : t + 1));
    } catch (err) {
      console.error("[landing][cta] échec POST /api/waitlist:", err);
      setError(err instanceof Error ? err.message : "Une erreur est survenue, réessayez.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="cta-final" id="reserver">
      <div className="cta-final-bg" />

      <div className="cta-wrap">
        <svg
          className="cta-watermark"
          viewBox="0 0 414 410"
          fill="none"
          aria-hidden
        >
          <path
            d="M200 0C240.83 0 275.943 24.4709 291.478 59.5459C298.716 57.8797 306.255 57 314 57C369.228 57 414 101.772 414 157C414 188.588 399.353 216.754 376.481 235.08C385.693 250.214 391 267.987 391 287C391 342.228 346.228 387 291 387C267.044 387 245.057 378.575 227.837 364.528C209.996 391.903 179.112 410 144 410C88.7715 410 44 365.228 44 310C44 301.339 45.1013 292.936 47.1709 284.922C18.848 267.265 0 235.834 0 200C0 144.772 44.7715 100 100 100C100 44.7715 144.772 0 200 0Z"
            stroke="currentColor"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="cta-left">
          <span className="eyebrow reveal">Accès anticipé</span>
          <h2 className="reveal reveal-d-1">Réservez votre place.</h2>
        </div>

        <div className="cta-form reveal reveal-d-2">
          <div className="cta-places">
            <span className="cta-places-label">Places restantes</span>
            <span className="cta-places-count">{places}</span>
          </div>
          <div className="cta-places-bar">
            <div className="cta-places-fill" ref={fillRef} />
          </div>

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
            <h3>Merci !</h3>
            <p>
              Votre inscription a bien été prise en compte.
              <br />
              Bienvenue chez Kacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
