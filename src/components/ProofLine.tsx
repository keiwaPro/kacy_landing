"use client";
import { useEffect, useRef } from "react";

export default function ProofLine() {
  return (
    <div className="proof-line">
      <div className="proof-wrap">
        <div className="proof-label">Pilotes en cours à Abidjan</div>
        <div className="proof-stats">
          <div className="proof-stat">
            <Counter target={3} />établissements pilotes
          </div>
          <div className="proof-stat">
            <strong>48h</strong>mise en service
          </div>
          <div className="proof-stat">
            <strong>&lt;8s</strong>temps de réponse
          </div>
          <div className="proof-stat">
            <strong>24/7</strong>disponibilité
          </div>
        </div>
      </div>
    </div>
  );
}

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || hasRun.current) return;
        hasRun.current = true;
        const dur = 1400;
        let start = 0;
        const tick = (t: number) => {
          if (!start) start = t;
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = String(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return <strong ref={ref}>0</strong>;
}
