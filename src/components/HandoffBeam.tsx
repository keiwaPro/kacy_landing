"use client";
import { useRef } from "react";
import Image from "next/image";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const BEAM_FROM = "#82BC46";
const BEAM_TO = "#5A8F2E";

function Channel({
  src,
  name,
  innerRef,
}: {
  src: string;
  name: string;
  innerRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="hbeam-chan" ref={innerRef} title={name}>
      <Image src={src} alt="" width={48} height={48} unoptimized />
    </div>
  );
}

/** Les clients écrivent par les canaux, Kacy centralise, vous reprenez la main. */
export default function HandoffBeam() {
  const container = useRef<HTMLDivElement>(null);
  const kacy = useRef<HTMLDivElement>(null);
  const human = useRef<HTMLDivElement>(null);
  const telegram = useRef<HTMLDivElement>(null);
  const whatsapp = useRef<HTMLDivElement>(null);
  const sms = useRef<HTMLDivElement>(null);
  const phone = useRef<HTMLDivElement>(null);

  return (
    <div className="hbeam" ref={container}>
      <div className="hbeam-row">
        <div className="hbeam-col">
          <Channel
            innerRef={telegram}
            name="Telegram"
            src="/assets/images/logo/telegram.svg"
          />
          <Channel
            innerRef={whatsapp}
            name="WhatsApp"
            src="/assets/images/logo/whatsapp.svg"
          />
          <Channel
            innerRef={sms}
            name="SMS"
            src="/assets/images/logo/message.png"
          />
          <Channel
            innerRef={phone}
            name="Appel"
            src="/assets/images/logo/phone.png"
          />
        </div>

        <div className="hbeam-col center">
          <div className="hbeam-node">
            <div className="hbeam-kacy" ref={kacy}>
              <Image src="/logo_2.svg" alt="" width={50} height={50} />
            </div>
            <span>Kacy</span>
          </div>
        </div>

        <div className="hbeam-col center">
          <div className="hbeam-node">
            <div className="hbeam-human" ref={human}>
              <Image
                src="/assets/images/logo/avatar.svg"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <span>Vous</span>
          </div>
        </div>
      </div>

      {/* Réglages du modèle : tout par défaut, seul le dégradé passe au vert. */}
      <AnimatedBeam
        containerRef={container}
        fromRef={telegram}
        toRef={kacy}
        gradientStartColor={BEAM_FROM}
        gradientStopColor={BEAM_TO}
      />
      <AnimatedBeam
        containerRef={container}
        fromRef={whatsapp}
        toRef={kacy}
        gradientStartColor={BEAM_FROM}
        gradientStopColor={BEAM_TO}
      />
      <AnimatedBeam
        containerRef={container}
        fromRef={sms}
        toRef={kacy}
        gradientStartColor={BEAM_FROM}
        gradientStopColor={BEAM_TO}
      />
      <AnimatedBeam
        containerRef={container}
        fromRef={phone}
        toRef={kacy}
        gradientStartColor={BEAM_FROM}
        gradientStopColor={BEAM_TO}
      />
      <AnimatedBeam
        containerRef={container}
        fromRef={kacy}
        toRef={human}
        gradientStartColor={BEAM_FROM}
        gradientStopColor={BEAM_TO}
      />
    </div>
  );
}
