"use client";
import { useRef } from "react";
import Image from "next/image";
import { AnimatedBeam } from "@/components/ui/animated-beam";

/** Les clients écrivent par les canaux, Kacy centralise, vous reprenez la main. */
export default function HandoffBeam() {
  const container = useRef<HTMLDivElement>(null);
  const kacy = useRef<HTMLDivElement>(null);
  const human = useRef<HTMLDivElement>(null);
  const whatsapp = useRef<HTMLDivElement>(null);
  const telegram = useRef<HTMLDivElement>(null);
  const miniapp = useRef<HTMLDivElement>(null);

  return (
    <div className="hbeam" ref={container}>
      <div className="hbeam-col">
        <div className="hbeam-chan" ref={whatsapp} title="WhatsApp">
          <Image
            src="/assets/images/logo/whatsapp.svg"
            alt=""
            width={26}
            height={26}
            unoptimized
          />
        </div>
        <div className="hbeam-chan" ref={telegram} title="Telegram">
          <Image
            src="/assets/images/logo/telegram.png"
            alt=""
            width={26}
            height={26}
            unoptimized
          />
        </div>
        <div className="hbeam-chan mini" ref={miniapp} title="Mini-app">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
            <path d="M10.5 18.5h3" />
          </svg>
        </div>
      </div>

      <div className="hbeam-node">
        <div className="hbeam-circle kacy" ref={kacy}>
          <Image src="/logo_2.svg" alt="" width={38} height={38} />
        </div>
        <span>Kacy</span>
      </div>

      <div className="hbeam-node">
        <div className="hbeam-circle human" ref={human}>
          <svg
            width="24"
            height="24"
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

      {/* Les canaux convergent vers Kacy. */}
      <AnimatedBeam
        containerRef={container}
        fromRef={whatsapp}
        toRef={kacy}
        curvature={-32}
        pathWidth={1.5}
        pathOpacity={0.1}
        gradientStartColor="#82BC46"
        gradientStopColor="#5A8F2E"
        duration={3.2}
      />
      <AnimatedBeam
        containerRef={container}
        fromRef={telegram}
        toRef={kacy}
        pathWidth={1.5}
        pathOpacity={0.1}
        gradientStartColor="#82BC46"
        gradientStopColor="#5A8F2E"
        duration={3.2}
        delay={0.8}
      />
      <AnimatedBeam
        containerRef={container}
        fromRef={miniapp}
        toRef={kacy}
        curvature={32}
        pathWidth={1.5}
        pathOpacity={0.1}
        gradientStartColor="#82BC46"
        gradientStopColor="#5A8F2E"
        duration={3.2}
        delay={1.6}
      />

      {/* Puis Kacy vous passe la main, dans les deux sens. */}
      <AnimatedBeam
        containerRef={container}
        fromRef={kacy}
        toRef={human}
        curvature={-26}
        pathWidth={2}
        pathOpacity={0.12}
        gradientStartColor="#82BC46"
        gradientStopColor="#5A8F2E"
        duration={3.4}
        delay={0.4}
      />
      <AnimatedBeam
        containerRef={container}
        fromRef={kacy}
        toRef={human}
        curvature={26}
        reverse
        pathWidth={2}
        pathOpacity={0.12}
        gradientStartColor="#5A8F2E"
        gradientStopColor="#82BC46"
        duration={3.4}
        delay={2}
      />
    </div>
  );
}
