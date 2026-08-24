"use client";
import { useEffect, useRef, useState } from "react";

const DAYS = [
  { day: "Lun", value: 46 },
  { day: "Mar", value: 61 },
  { day: "Mer", value: 55 },
  { day: "Jeu", value: 78 },
  { day: "Ven", value: 94 },
  { day: "Sam", value: 128 },
  { day: "Dim", value: 112 },
];

const W = 520;
const H = 180;
const PAD_Y = 26;
const PEAK = Math.max(...DAYS.map((d) => d.value));
const PEAK_INDEX = DAYS.findIndex((d) => d.value === PEAK);
const COUNT_MS = 1200;

/** Points de la courbe, dans le repère du viewBox. */
const POINTS = (() => {
  const values = DAYS.map((d) => d.value);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const span = max - min || 1;
  return values.map((v, i) => ({
    x: (i / (values.length - 1)) * W,
    y: H - PAD_Y - ((v - min) / span) * (H - PAD_Y * 2),
  }));
})();

/** Catmull-Rom converti en cubiques : une courbe douce qui passe par
 *  chaque point, au lieu d'un tracé dessiné à la main. */
function smoothPath(pts: { x: number; y: number }[]): string {
  let d = `M${pts[0].x},${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C${c1x},${c1y} ${c2x},${c2y} ${p2.x},${p2.y}`;
  }
  return d;
}

const LINE = smoothPath(POINTS);
const AREA = `${LINE} L${W},${H} L0,${H} Z`;

export default function OrdersChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio >= 0.3) setLive(true);
        else if (!e.isIntersecting && e.boundingClientRect.top >= 0)
          setLive(false);
      },
      { threshold: [0, 0.3] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!live) return;
    let raf = 0;
    let start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / COUNT_MS);
      setCount(Math.round(PEAK * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [live]);

  const peak = POINTS[PEAK_INDEX];

  return (
    <div className={`ochart${live ? " live" : ""}`} ref={ref}>
      <div className="ochart-value">
        <strong>{count}</strong>
        <span>commandes samedi</span>
      </div>

      <div className="ochart-plot">
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="ochartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--green)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="ochart-area" d={AREA} fill="url(#ochartFill)" />
          <path className="ochart-line" pathLength={1} d={LINE} />
        </svg>

        <span
          className="ochart-marker"
          style={{ left: `${(peak.x / W) * 100}%`, top: `${(peak.y / H) * 100}%` }}
        />
      </div>

      <div className="ochart-days">
        {DAYS.map((d, i) => (
          <em key={d.day} className={i === PEAK_INDEX ? "on" : undefined}>
            {d.day}
          </em>
        ))}
      </div>
    </div>
  );
}
