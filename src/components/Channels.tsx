import Image from "next/image";

const CHANNELS = [
  { name: "WhatsApp", src: "/assets/images/logo/whatsapp.svg" },
  { name: "Telegram", src: "/assets/images/logo/telegram.png" },
  { name: "SMS", src: "/assets/images/logo/message.png" },
  { name: "Appel vocal", src: "/assets/images/logo/phone.png" },
  { name: "Widget web", src: "/logo.svg" },
  { name: "Wave", src: "/assets/images/logo/wave.jpg" },
  { name: "Orange Money", src: "/assets/images/logo/orange_money.jpg" },
  { name: "MTN MoMo", src: "/assets/images/logo/mtn_money.jpg" },
];

export default function Channels() {
  return (
    <div className="channels">
      <p className="channels-caption reveal">
        Kacy répond et encaisse partout où sont vos clients
      </p>
      <div className="channels-grid reveal reveal-d-1">
        {CHANNELS.map((c) => (
          <div className="channel-cell" key={c.name}>
            <Image src={c.src} alt={c.name} width={26} height={26} unoptimized />
            <span>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
