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
  const sms = useRef<HTMLDivElement>(null);
  const phone = useRef<HTMLDivElement>(null);

  return (
    <div className="hbeam" ref={container}>
      <div className="hbeam-col">
        <div className="hbeam-chan" ref={telegram} title="Telegram">
          <Image
            src="/assets/images/logo/telegram.svg"
            alt=""
            width={46}
            height={46}
            unoptimized
          />
        </div>
        <div className="hbeam-chan" ref={whatsapp} title="WhatsApp">
          <Image
            src="/assets/images/logo/whatsapp.svg"
            alt=""
            width={46}
            height={46}
            unoptimized
          />
        </div>
        <div className="hbeam-chan" ref={sms} title="SMS">
          <Image
            src="/assets/images/logo/message.png"
            alt=""
            width={46}
            height={46}
            unoptimized
          />
        </div>
        <div className="hbeam-chan" ref={phone} title="Appel">
          <Image
            src="/assets/images/logo/phone.png"
            alt=""
            width={46}
            height={46}
            unoptimized
          />
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
          <Image src="/assets/images/logo/avatar.svg" alt="" width={74} height={74} />
        </div>
        <span>Vous</span>
      </div>

      {/* Les canaux convergent vers Kacy. */}
      {[
        { ref: telegram, curvature: -38, delay: 0 },
        { ref: whatsapp, curvature: -14, delay: 0.6 },
        { ref: sms, curvature: 14, delay: 1.2 },
        { ref: phone, curvature: 38, delay: 1.8 },
      ].map((b, i) => (
        <AnimatedBeam
          key={i}
          containerRef={container}
          fromRef={b.ref}
          toRef={kacy}
          curvature={b.curvature}
          pathWidth={1.5}
          pathOpacity={0.1}
          gradientStartColor="#82BC46"
          gradientStopColor="#5A8F2E"
          duration={3.2}
          delay={b.delay}
        />
      ))}

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
