import Image from "next/image";

export default function Channels() {
  return (
    <div className="channels">
      <div className="channels-band reveal">
        <span>API officielle WhatsApp Business</span>
        <Image
          src="/assets/images/logo/whatsapp_inline.png"
          alt="WhatsApp"
          width={296}
          height={69}
        />
      </div>
    </div>
  );
}
