"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Message, MessageAvatar, MessageContent } from "@/components/ui/message";

type Line = {
  from: "client" | "kacy";
  text: string;
  chip?: string;
};

type Scenario = {
  id: string;
  label: string;
  customer: string;
  lines: Line[];
};

const SCENARIOS: Scenario[] = [
  {
    id: "commande",
    label: "Commande",
    customer: "Koffi",
    lines: [
      { from: "client", text: "Bonsoir, vous livrez encore à Riviera 3 ?" },
      {
        from: "kacy",
        text: "Bonsoir ! Oui, jusqu'à 23h. Voici la carte du soir 👇",
        chip: "Voir la carte",
      },
      { from: "client", text: "C'est bon, j'ai commandé 2 poulets braisés." },
      {
        from: "kacy",
        text: "Commande #214 enregistrée — 12 500 F. Réglez par Wave, Orange Money ou carte avec le lien envoyé.",
      },
    ],
  },
  {
    id: "reservation",
    label: "Réservation",
    customer: "Aminata",
    lines: [
      { from: "client", text: "Une table pour 4 samedi vers 20h ?" },
      {
        from: "kacy",
        text: "Avec plaisir ! Samedi 20h, pour 4 personnes. C'est à quel nom ?",
      },
      { from: "client", text: "Aminata K." },
      {
        from: "kacy",
        text: "Réservation confirmée ✓ Samedi 20h, table de 4 au nom d'Aminata K. À samedi !",
      },
    ],
  },
  {
    id: "plainte",
    label: "Plainte",
    customer: "Mariam",
    lines: [
      {
        from: "client",
        text: "Ma commande est arrivée froide, je suis vraiment déçue.",
      },
      {
        from: "kacy",
        text: "Je suis désolé pour ce désagrément, et je le note tout de suite. Je préviens le gérant : il vous répond ici même.",
        chip: "Transfert humain",
      },
      { from: "client", text: "Merci, c'est rapide au moins 🙏" },
    ],
  },
];

const START_DELAY = 500;
const TYPING_MS = 1300;
const BETWEEN_MS = 950;
const HOLD_MS = 3000;

export default function ConversationDemo() {
  const [active, setActive] = useState(0);

  const next = useCallback(
    () => setActive((i) => (i + 1) % SCENARIOS.length),
    [],
  );

  return (
    <div className="convo">
      <div className="convo-tabs">
        {SCENARIOS.map((s, i) => (
          <button
            key={s.id}
            className={`convo-tab${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
          >
            {s.label}
          </button>
        ))}
      </div>

      <Thread key={SCENARIOS[active].id} scenario={SCENARIOS[active]} onDone={next} />
    </div>
  );
}

function Thread({
  scenario,
  onDone,
}: {
  scenario: Scenario;
  onDone: () => void;
}) {
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = boxRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [shown, typing]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let at = START_DELAY;

    scenario.lines.forEach((line, i) => {
      if (line.from === "kacy") {
        timers.push(setTimeout(() => setTyping(true), at));
        at += TYPING_MS;
        timers.push(
          setTimeout(() => {
            setTyping(false);
            setShown(i + 1);
          }, at),
        );
      } else {
        timers.push(setTimeout(() => setShown(i + 1), at));
      }
      at += BETWEEN_MS;
    });

    timers.push(setTimeout(onDone, at + HOLD_MS));
    return () => timers.forEach(clearTimeout);
  }, [scenario, onDone]);

  return (
    <div className="convo-thread" ref={boxRef}>
      {scenario.lines.slice(0, shown).map((line, i) => (
        <Message
          key={i}
          align={line.from === "client" ? "end" : "start"}
          className="convo-line"
        >
          {line.from === "kacy" ? (
            <KacyAvatar />
          ) : (
            <MessageAvatar className="convo-avatar convo-avatar-client">
              {scenario.customer.charAt(0)}
            </MessageAvatar>
          )}
          <MessageContent>
            <Bubble
              variant={line.from === "client" ? "default" : "muted"}
              align={line.from === "client" ? "end" : "start"}
            >
              <BubbleContent>{line.text}</BubbleContent>
            </Bubble>
            {line.chip && <span className="convo-chip">{line.chip}</span>}
          </MessageContent>
        </Message>
      ))}

      {typing && (
        <Message align="start" className="convo-line">
          <KacyAvatar />
          <MessageContent>
            <Bubble variant="muted" align="start">
              <BubbleContent className="convo-typing">
                <i />
                <i />
                <i />
              </BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      )}
    </div>
  );
}

function KacyAvatar() {
  return (
    <MessageAvatar className="convo-avatar">
      <Image src="/logo_2.svg" alt="" width={16} height={16} />
    </MessageAvatar>
  );
}
