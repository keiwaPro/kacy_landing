"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import { Iphone } from "./ui/iphone";

type Msg =
  | { id: number; who: "client" | "bot"; text: string; time?: string }
  | { id: number; who: "typing" }
  | { id: number; who: "quick"; options: string[] };

const initialMessages: Msg[] = [
  {
    id: 1,
    who: "bot",
    text: "Bonsoir 👋 Je suis Kacy, l'assistant de Maquis Chez Rita. Comment je peux vous aider ce soir ?",
    time: "22:47",
  },
  {
    id: 2,
    who: "quick",
    options: ["Voir le menu", "Livrez-vous ?", "Réserver une table"],
  },
];

function formatTime() {
  const d = new Date();
  return `${d.getHours().toString().padStart(2, "0")}:${d
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
}

function getBotReply(text: string): string {
  const t = text.toLowerCase();
  if (/menu|manger|plat|carte|faim/.test(t)) {
    return "Top 3 du soir :\n• Attiéké poisson braisé — 3 500 F\n• Poulet yassa — 4 000 F\n• Garba spécial — 2 500 F";
  }
  if (/livr|cocody|yopougon|riviera|plateau|abidjan/.test(t)) {
    return "On livre partout dans Abidjan jusqu'à 23h 🛵. Frais à partir de 1 000 F selon la zone.";
  }
  if (/prix|combien|coût|tarif|cher/.test(t)) {
    return "Nos plats vont de 1 500 F à 8 000 F. Vous voulez un plat précis ?";
  }
  if (/réserv|table|place|pour\s*\d/.test(t)) {
    return "Avec plaisir 🙏 Pour quelle date et combien de personnes ?";
  }
  if (/horaire|ouvert|fermer|heure/.test(t)) {
    return "Ouverts tous les jours de 11h à 23h, et jusqu'à minuit le week-end 🌙";
  }
  if (/wave|orange money|momo|mtn|paie|payer|paiement/.test(t)) {
    return "On accepte Wave, Orange Money, MTN Money et espèces à la livraison 💳";
  }
  if (/yassa|poisson|garba|attiéké|attieke|alloco/.test(t)) {
    return "Excellent choix ! Combien de portions et à quelle adresse je livre ?";
  }
  if (/merci|super|génial|cool|parfait|👍|🙏/.test(t)) {
    return "Avec plaisir 🙌 Je suis là 24/7 si vous avez d'autres questions.";
  }
  if (/bonjour|bonsoir|salut|hello|hi/.test(t)) {
    return "Salut 👋 Vous voulez voir le menu ou réserver ?";
  }
  return "Bonne question ! Vous pouvez essayer « voir le menu », « livrez-vous ? » ou « réserver une table » — sinon je transfère à l'équipe.";
}

export default function PhoneChat() {
  const [messages, setMessages] = useState<Msg[]>(initialMessages);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(initialMessages.length + 1);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    requestAnimationFrame(() => {
      body.scrollTop = body.scrollHeight;
    });
  }, [messages]);

  const sendMessage = (raw: string) => {
    const text = raw.trim();
    if (!text || busy) return;

    setBusy(true);
    setInput("");

    setMessages((prev) => [
      ...prev.filter((m) => m.who !== "quick"),
      { id: idRef.current++, who: "client", text, time: formatTime() },
    ]);

    const typingId = idRef.current++;
    const typingDelay = 350;
    const replyDelay = 1300 + Math.random() * 500;

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { id: typingId, who: "typing" }]);
    }, typingDelay);

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev.filter((m) => m.id !== typingId),
        {
          id: idRef.current++,
          who: "bot",
          text: getBotReply(text),
          time: formatTime(),
        },
      ]);
      setBusy(false);
      inputRef.current?.focus();
    }, replyDelay);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <Iphone className="lg-phone">
      <div className="lg-screen">
        <div className="lg-aurora" aria-hidden />
        <div className="lg-blob lg-blob-1" aria-hidden />
        <div className="lg-blob lg-blob-2" aria-hidden />

        <div className="lg-status">
          <span>22:47</span>
          <span className="lg-status-icons">
            <svg viewBox="0 0 18 12" width="16" height="11" fill="currentColor">
              <rect x="0" y="6" width="3" height="6" rx="1" />
              <rect x="5" y="4" width="3" height="8" rx="1" />
              <rect x="10" y="2" width="3" height="10" rx="1" />
              <rect x="15" y="0" width="3" height="12" rx="1" />
            </svg>
            <span className="lg-battery">
              <span />
            </span>
          </span>
        </div>

        <div className="lg-header">
          <div className="lg-back">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>
          <div className="lg-avatar">
            <Image src="/logo.png" alt="" width={40} height={40} />
            {/* <span className="lg-presence-dot" /> */}
          </div>
          <div className="lg-id">
            <div className="lg-name">Maquis Chez Rita</div>
            <div className="lg-presence">
              <span className="lg-pulse" /> Kacy en ligne
            </div>
          </div>
          <div className="lg-actions">
            <button aria-label="Appeler" type="button">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12 12 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12 12 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="lg-body" ref={bodyRef}>
          {messages.map((m) => {
            if (m.who === "typing") {
              return (
                <div key={m.id} className="lg-typing">
                  <span />
                  <span />
                  <span />
                </div>
              );
            }
            if (m.who === "quick") {
              return (
                <div key={m.id} className="lg-quick-replies">
                  {m.options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className="lg-quick"
                      onClick={() => sendMessage(opt)}
                      disabled={busy}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              );
            }
            return (
              <div key={m.id} className={`lg-bubble ${m.who}`}>
                <span
                  className="lg-bubble-inner"
                  dangerouslySetInnerHTML={{
                    __html: m.text.replace(/\n/g, "<br>"),
                  }}
                />
                {m.time && <span className="lg-t">{m.time}</span>}
              </div>
            );
          })}
        </div>

        <form className="lg-input" onSubmit={onSubmit}>
          <input
            ref={inputRef}
            className="lg-input-field"
            type="text"
            placeholder="Écrivez à Kacy…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={busy}
            maxLength={160}
            autoComplete="off"
          />
          <button
            type="submit"
            className="lg-send"
            aria-label="Envoyer"
            disabled={busy || !input.trim()}
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
          </button>
        </form>
      </div>
    </Iphone>
  );
}
