"use client";
import React, { useEffect, useRef, useState } from "react";

const EYE_CENTERS = [
  { cx: 171.5, cy: 210.5 },
  { cx: 272.5, cy: 199 },
];

const MAX_EYE_OFFSET = 14;

export default function AiMascot() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [offsets, setOffsets] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let mx = 0;
    let my = 0;

    const update = () => {
      raf = 0;
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      if (rect.width === 0) return;

      const sx = 414 / rect.width;
      const sy = 410 / rect.height;
      const px = (mx - rect.left) * sx;
      const py = (my - rect.top) * sy;

      setOffsets(
        EYE_CENTERS.map((c) => {
          const dx = px - c.cx;
          const dy = py - c.cy;
          const dist = Math.hypot(dx, dy);
          if (dist < 1) return { x: 0, y: 0 };
          const k = Math.min(MAX_EYE_OFFSET, dist * 0.06) / dist;
          return { x: dx * k, y: dy * k };
        }),
      );
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-64 h-auto drop-shadow-2xl">
        <svg
          ref={svgRef}
          viewBox="0 0 414 410"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <style>
            {`
              .mascot-body {
                animation: float 4.2s ease-in-out infinite;
                transform-origin: center;
                transform-box: fill-box;
              }

              .eye-track {
                transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
              }

              .eye {
                transform-origin: center;
                transform-box: fill-box;
                animation: blink 6s infinite;
              }

              /* Asymmetric blink: quick close, slightly slower open,
                 with an occasional double-blink near the end of the cycle. */
              @keyframes blink {
                0%, 86%, 100%   { transform: scaleY(1); }
                88%             { transform: scaleY(0.05); }
                90.5%           { transform: scaleY(1); }
                93%             { transform: scaleY(1); }
                94.5%           { transform: scaleY(0.05); }
                97%             { transform: scaleY(1); }
              }

              @keyframes float {
                0%, 100% { transform: translateY(0); }
                50%      { transform: translateY(-8px); }
              }

              @media (prefers-reduced-motion: reduce) {
                .mascot-body, .eye { animation: none; }
                .eye-track { transition: none; }
              }
            `}
          </style>

          <g className="mascot-body">
            <path
              d="M200 0C240.83 0 275.943 24.4709 291.478 59.5459C298.716 57.8797 306.255 57 314 57C369.228 57 414 101.772 414 157C414 188.588 399.353 216.754 376.481 235.08C385.693 250.214 391 267.987 391 287C391 342.228 346.228 387 291 387C267.044 387 245.057 378.575 227.837 364.528C209.996 391.903 179.112 410 144 410C88.7715 410 44 365.228 44 310C44 301.339 45.1013 292.936 47.1709 284.922C18.848 267.265 0 235.834 0 200C0 144.772 44.7715 100 100 100C100 44.7715 144.772 0 200 0Z"
              fill="#82BC46"
            />

            <g
              className="eye-track"
              transform={`translate(${offsets[0].x} ${offsets[0].y})`}
            >
              <path
                className="eye left"
                d="M207 210.5C207 235.629 191.106 256 171.5 256C151.894 256 136 235.629 136 210.5C136 185.371 151.894 165 171.5 165C191.106 165 207 185.371 207 210.5Z"
                fill="white"
              />
            </g>

            <g
              className="eye-track"
              transform={`translate(${offsets[1].x} ${offsets[1].y})`}
            >
              <path
                className="eye right"
                d="M308 199C308 224.129 292.106 244.5 272.5 244.5C252.894 244.5 237 224.129 237 199C237 173.871 252.894 153.5 272.5 153.5C292.106 153.5 308 173.871 308 199Z"
                fill="white"
              />
            </g>

            <path
              d="M187.072 285.87C197.5 314.5 252.587 310 252.587 276"
              stroke="white"
              strokeWidth="15"
              strokeLinecap="square"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
