"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ExitModal() {
  const [open, setOpen] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    let triggered = false;
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered) {
        triggered = true;
        setOpen(true);
      }
    };
    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, []);

  const close = () => setOpen(false);

  const submit = () => {
    if (whatsapp.trim().length < 8) {
      alert("Merci de saisir un numéro valide.");
      return;
    }
    alert("Merci. La démo et votre 1 mois bonus arrivent sur WhatsApp.");
    close();
  };

  return (
    <div
      className={`exit-modal${open ? " active" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="exit-card">
        <button className="exit-close" onClick={close}>
          ×
        </button>
        <Image
          src="/logo.png"
          alt=""
          width={80}
          height={80}
          className="exit-mascot"
        />
        <span className="tag">Bonus de bienvenue</span>
        <h3>1 mois offert en plus, juste pour vous.</h3>
        <p>
          Laissez votre WhatsApp, on vous envoie la démo vidéo et 1 mois offert
          supplémentaire.
        </p>
        <div className="field" style={{ textAlign: "left" }}>
          <input
            type="tel"
            placeholder="+225 07 00 00 00 00"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
        </div>
        <button className="submit-btn" onClick={submit}>
          Recevoir la démo + 1 mois bonus
        </button>
        <p
          style={{
            marginTop: 12,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--ink-muted)",
          }}
        >
          Pas de spam. Un seul message.
        </p>
      </div>
    </div>
  );
}
