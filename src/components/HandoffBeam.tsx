"use client";
import { useRef } from "react";
import Image from "next/image";
import { AnimatedBeam } from "@/components/ui/animated-beam";

/** Kacy passe la main à un humain : deux faisceaux en sens inverse. */
export default function HandoffBeam() {
  const container = useRef<HTMLDivElement>(null);
  const kacy = useRef<HTMLDivElement>(null);
  const human = useRef<HTMLDivElement>(null);

  return (
    <div className="hbeam" ref={container}>
      <div className="hbeam-node">
        <div className="hbeam-circle kacy" ref={kacy}>
          <Image src="/logo_2.svg" alt="" width={34} height={34} />
        </div>
        <span>Kacy</span>
      </div>

      <div className="hbeam-node">
        <div className="hbeam-circle human" ref={human}>
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <span>Vous</span>
      </div>

      <AnimatedBeam
        containerRef={container}
        fromRef={kacy}
        toRef={human}
        curvature={-42}
        pathWidth={2}
        pathOpacity={0.12}
        gradientStartColor="#82BC46"
        gradientStopColor="#5A8F2E"
        duration={3.4}
      />
      <AnimatedBeam
        containerRef={container}
        fromRef={kacy}
        toRef={human}
        curvature={42}
        reverse
        pathWidth={2}
        pathOpacity={0.12}
        gradientStartColor="#5A8F2E"
        gradientStopColor="#82BC46"
        duration={3.4}
        delay={1.2}
      />
    </div>
  );
}
