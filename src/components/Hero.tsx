"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import PhoneChat from "./PhoneChat";
import { WordRotate } from "./ui/word-rotate";
import { Highlighter } from "./ui/highlighter";

const WORDS = ["restaurant", "hôtel", "salon"];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-mark-float m1">
        <Image src="/logo_2.svg" alt="" width={200} height={200} />
      </div>
      <div className="hero-mark-float m2">
        <Image src="/logo_2.svg" alt="" width={200} height={200} />
      </div>
      <div className="hero-mark-float m3">
        <Image src="/logo_2.svg" alt="" width={200} height={200} />
      </div>

      <div className="hero-wrap">
        <div className="hero-tag reveal">
          <span className="hero-tag-badge">BETA</span>
          Accès anticipé · 50 places pour Abidjan
          <span className="arrow">→</span>
        </div>

        <h1 className="reveal reveal-d-1">
          L&apos;agent IA pour votre
          <br />
          <span style={{ color: "var(--green-deep)" }}>
            <WordRotate
              words={WORDS}
              duration={2600}
              renderWord={(word) => (
                <Highlighter
                  action="underline"
                  color="#5a8f2e"
                  strokeWidth={3}
                  animationDuration={700}
                  iterations={2}
                  padding={4}
                  isView={false}
                >
                  {word}
                </Highlighter>
              )}
            />
          </span>
        </h1>

        <p className="hero-lede reveal reveal-d-2">
          Kacy répond à vos clients sur WhatsApp 24/7. Commandes, réservations,
          FAQ, plaintes - configuré en 48h, sans compétence technique.
        </p>

        <div className="hero-cta reveal reveal-d-3">
          <a href="#reserver" className="btn-primary">
            <span>Réserver ma place</span>
            <span className="arrow">→</span>
          </a>
          <a href="#product" className="btn-ghost">
            Voir le produit
          </a>
        </div>

        <div className="hero-meta reveal reveal-d-4">
          <span>
            <span className="bullet" />3 mois offerts
          </span>
          <span>
            <span className="bullet" />
            Tarif bloqué à vie
          </span>
          <span>
            <span className="bullet" />
            Sans engagement
          </span>
          <span>
            <span className="bullet" />
            Déploiement 48h
          </span>
        </div>

        <div className="hero-phone-row">
          <div className="hero-phone-side reveal reveal-d-2">
            <CounterNum target={24} />
            <p>réponses traitées par Kacy pendant que vous lisez cette page.</p>
          </div>

          <div className="reveal reveal-d-3">
            <PhoneChat />
          </div>

          <div className="hero-phone-side right reveal reveal-d-4">
            <CounterNum target={98} suffix="%" />
            <p>de questions clients résolues sans intervention humaine.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CounterNum({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          let start = 0;
          const duration = 1400;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const val = Math.round(target * eased);
            if (suffix === "%") {
              el.innerHTML =
                val +
                '<small style="font-family:var(--font);font-size:.5em;">%</small>';
            } else {
              el.textContent = String(val);
            }
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return (
    <span className="num" ref={ref}>
      0
    </span>
  );
}
