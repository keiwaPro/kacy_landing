import Image from "next/image";

const CHANNELS: { name: string; src?: string; icon?: "miniapp" | "card" }[] = [
  { name: "WhatsApp", src: "/assets/images/logo/whatsapp.svg" },
  { name: "Telegram", src: "/assets/images/logo/telegram.png" },
  { name: "SMS", src: "/assets/images/logo/message.png" },
  { name: "Appel vocal", src: "/assets/images/logo/phone.png" },
  { name: "Mini app", icon: "miniapp" },
  { name: "Wave", src: "/assets/images/logo/wave.jpg" },
  { name: "Orange Money", src: "/assets/images/logo/orange_money.jpg" },
  { name: "Paystack", icon: "card" },
];

function CellIcon({ c }: { c: (typeof CHANNELS)[number] }) {
  if (c.src) {
    return (
      <Image src={c.src} alt={c.name} width={26} height={26} unoptimized />
    );
  }
  if (c.icon === "miniapp") {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--green-deep)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M10.5 18.5h3" />
        <path d="M9.8 9.5l1.6 1.6 3-3.2" stroke="var(--green)" />
      </svg>
    );
  }
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--green-deep)"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden
    >
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 9.5h19" />
      <path d="M6 14.5h4" stroke="var(--green)" />
    </svg>
  );
}

export default function Channels() {
  return (
    <div className="channels">
      <p className="channels-caption reveal">
        Kacy répond et encaisse partout où sont vos clients
      </p>
      <div className="channels-grid reveal reveal-d-1">
        {CHANNELS.map((c) => (
          <div className="channel-cell" key={c.name}>
            <CellIcon c={c} />
            <span>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
