"use client";
import { useState } from "react";

const fmtFCFA = (n: number) =>
  new Intl.NumberFormat("fr-FR").format(Math.round(n)).replace(/,/g, " ") + " F";

export default function Calculator() {
  const [msgPerDay, setMsgPerDay] = useState(80);
  const [minPerMsg, setMinPerMsg] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(1500);

  const monthly = msgPerDay * 30 * (minPerMsg / 60) * hourlyRate;
  const savings = monthly - 50000;

  return (
    <section className="calc">
      <div className="wrap">
        <div className="calc-head">
          <div className="reveal">
            <span className="eyebrow">ROI</span>
            <h2>Combien vous coûtent vos réponses manuelles ?</h2>
          </div>
          <p className="section-lede reveal reveal-d-1">
            Bougez les curseurs. Le calcul est en temps réel.
          </p>
        </div>

        <div className="calc-box reveal">
          <div className="calc-inputs">
            <Slider
              label="Messages reçus par jour"
              min={10}
              max={300}
              value={msgPerDay}
              display={String(msgPerDay)}
              onChange={setMsgPerDay}
            />
            <Slider
              label="Temps moyen par réponse"
              min={1}
              max={10}
              value={minPerMsg}
              display={`${minPerMsg} min`}
              onChange={setMinPerMsg}
            />
            <Slider
              label="Coût horaire équipe"
              min={500}
              max={5000}
              step={250}
              value={hourlyRate}
              display={`${new Intl.NumberFormat("fr-FR").format(hourlyRate).replace(/,/g, " ")} F`}
              onChange={setHourlyRate}
            />
          </div>

          <div className="calc-result">
            <div className="calc-result-label">Vous perdez / mois</div>
            <div className="calc-result-value">{fmtFCFA(monthly)}</div>
            <div className="calc-result-sub">en temps de réponse manuel</div>
            <div className="calc-savings-row">
              <span className="calc-savings-label">Économie avec Kacy Pro</span>
              <span className="calc-savings-val">
                {savings > 0 ? `${fmtFCFA(savings)} / mois` : "Break-even"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  min,
  max,
  step = 1,
  value,
  display,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  display: string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="calc-row">
      <label>{label}</label>
      <div className="calc-slider-wrap">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          style={{ backgroundSize: `${pct}% 100%` }}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <div className="calc-value">{display}</div>
      </div>
    </div>
  );
}
