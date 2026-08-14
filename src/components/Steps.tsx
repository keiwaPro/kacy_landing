"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

/** Durée d'une étape. La barre verticale se remplit sur ce temps. */
const STEP_MS = 7000;

const STEPS = [
  {
    num: "01",
    title: "Ajoutez vos produits",
    body: "Plats, chambres, prestations ou articles de boutique : nom, prix, catégorie, photo. Un interrupteur suffit à rendre un produit indisponible — Kacy arrête aussitôt de le proposer.",
  },
  {
    num: "02",
    title: "Personnalisez votre agent",
    body: "Son prénom, son ton, vos horaires, votre zone et vos frais de livraison. Ajoutez vos instructions maison : Kacy les applique à chaque conversation.",
  },
  {
    num: "03",
    title: "Gérez vos commandes",
    body: "Chaque commande arrive avec son client, ses articles et son paiement. Vous la faites avancer d'un clic : confirmée, en livraison, livrée.",
  },
  {
    num: "04",
    title: "Pilotez vos crédits",
    body: "Une conversation = un crédit sur Telegram, cinq sur WhatsApp. Vous suivez ce qu'il reste et rechargez par pack quand vous le décidez.",
  },
];

export default function Steps() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setTimeout(
      () => setActive((i) => (i + 1) % STEPS.length),
      STEP_MS,
    );
    return () => clearTimeout(t);
  }, [active]);

  return (
    <section id="comment" style={{ "--step-ms": `${STEP_MS}ms` } as React.CSSProperties}>
      <div className="wrap">
        <div className="sec-head-center">
          <h2 className="reveal reveal-d-1">Tout se pilote au même endroit.</h2>
          <p className="section-lede reveal reveal-d-2">
            Vos produits, votre agent, vos commandes et vos crédits — depuis
            votre téléphone comme depuis un ordinateur.
          </p>
        </div>

        <div className="steps-grid">
          <div className="steps-list reveal">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                className={`step-item${i === active ? " active" : ""}`}
              >
                <button
                  className="step-btn"
                  onClick={() => setActive(i)}
                  aria-expanded={i === active}
                >
                  <span className="step-num">{s.num}</span>
                  <span className="step-title">{s.title}</span>
                </button>
                <div className="step-body">
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="steps-panel reveal reveal-d-1">
            <div className="sp-frame">
              {MOCKS.map((Mock, i) => (
                <div
                  key={i}
                  className={`sp-slide${i === active ? " active" : ""}`}
                  aria-hidden={i !== active}
                >
                  <Mock />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const MOCKS = [ProductsMock, AgentMock, OrdersMock, CreditsMock];

function MockHead({
  title,
  count,
  action,
}: {
  title: string;
  count: string;
  action?: string;
}) {
  return (
    <div className="sp-head">
      <div>
        <strong>{title}</strong>
        <em>{count}</em>
      </div>
      {action && <span className="sp-btn">{action}</span>}
    </div>
  );
}

function ProductsMock() {
  const rows = [
    {
      name: "iPhone 17 Pro Max",
      cat: "Smartphones",
      price: "1 250 000",
      on: true,
      img: "/menu/iphone17promax.png",
    },
    {
      name: "iPhone 17",
      cat: "Smartphones",
      price: "890 000",
      on: true,
      img: "/menu/iphone17.png",
    },
    {
      name: "iPhone 17 · Vert",
      cat: "Smartphones",
      price: "890 000",
      on: false,
      img: "/menu/iphone17_vert.png",
    },
    {
      name: "iPhone 16 Pro Max",
      cat: "Smartphones",
      price: "980 000",
      on: true,
      img: "/menu/iphone16promax.png",
    },
    {
      name: "iPhone 16 Pro",
      cat: "Smartphones",
      price: "820 000",
      on: true,
      img: "/menu/iphone16pro.png",
    },
    {
      name: "iPhone 16 · Sarcelle",
      cat: "Smartphones",
      price: "690 000",
      on: true,
      img: "/menu/iphone16.png",
    },
    {
      name: "iPhone 15 Pro Max",
      cat: "Smartphones",
      price: "740 000",
      on: false,
      img: "/menu/iphone15promax.png",
    },
    {
      name: "iPhone 16 Pro · 256 Go",
      cat: "Smartphones",
      price: "895 000",
      on: true,
      img: "/menu/iphone16pro.png",
    },
    {
      name: "iPhone 15 Pro Max · 512 Go",
      cat: "Smartphones",
      price: "860 000",
      on: true,
      img: "/menu/iphone15promax.png",
    },
    {
      name: "Apple Watch",
      cat: "Montres",
      price: "420 000",
      on: true,
      img: "/menu/iwatch.png",
    },
    {
      name: "Apple Watch · 45 mm",
      cat: "Montres",
      price: "465 000",
      on: true,
      img: "/menu/iwatch.png",
    },
    {
      name: "AirPods Pro",
      cat: "Audio",
      price: "185 000",
      on: true,
      img: "/menu/airpods.png",
    },
    {
      name: "AirPods Pro · 2ᵉ génération",
      cat: "Audio",
      price: "210 000",
      on: false,
      img: "/menu/airpods.png",
    },
  ];
  return (
    <>
      <MockHead
        title="Produits"
        count={`${rows.length} produit(s)`}
        action="Ajouter un produit"
      />
      <div className="sp-table">
        <div className="sp-tr sp-th">
          <span>Nom</span>
          <span>Catégorie</span>
          <span className="right">Prix</span>
          <span className="right">Disponibilité</span>
        </div>
        {rows.map((r) => (
          <div className="sp-tr" key={r.name}>
            <span className="sp-cell-name">
              <Image
                className="sp-thumb"
                src={r.img}
                alt=""
                width={26}
                height={26}
              />
              {r.name}
            </span>
            <span>
              <em className="sp-badge">{r.cat}</em>
            </span>
            <span className="right sp-mono">{r.price} XOF</span>
            <span className="right">
              <i className={`sp-switch${r.on ? " on" : ""}`} />
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

function AgentMock() {
  const fields = [
    ["Prénom de l'agent", "Sara"],
    ["Personnalité", "chaleureux et professionnel"],
    ["Horaires", "10h - 22h, 7j/7"],
    ["Zone de livraison", "Cocody, Plateau"],
    ["Frais de livraison", "1 000 FCFA"],
  ];
  return (
    <>
      <div className="sp-agent-hero">
        <span className="sp-avatar">S</span>
        <div>
          <strong>Sara</strong>
          <em>Agent de Chez Rita</em>
        </div>
        <span className="sp-badge ok">Actif</span>
      </div>
      <div className="sp-fields">
        {fields.map(([label, value]) => (
          <div className="sp-field" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <div className="sp-instr">
        <span>Instructions personnalisées</span>
        <p>Propose toujours le plat du jour et le jus de bissap maison.</p>
      </div>
    </>
  );
}

function OrdersMock() {
  const rows = [
    {
      ref: "a3f9c21b",
      client: "Aminata",
      total: "12 500",
      status: "Confirmée",
      sv: "info",
      pay: "Réglée",
      pv: "ok",
    },
    {
      ref: "7d2e08a4",
      client: "Koffi",
      total: "8 000",
      status: "En livraison",
      sv: "warn",
      pay: "Réglée",
      pv: "ok",
    },
    {
      ref: "b1c5f930",
      client: "Mariam",
      total: "3 500",
      status: "En attente",
      sv: "warn",
      pay: "Non réglée",
      pv: "",
    },
  ];
  return (
    <>
      <MockHead
        title="Commandes"
        count={`${rows.length} commande(s)`}
        action="Export CSV"
      />
      <div className="sp-table">
        <div className="sp-tr sp-th orders">
          <span>Réf.</span>
          <span>Client</span>
          <span className="right">Total</span>
          <span>Statut</span>
          <span>Paiement</span>
        </div>
        {rows.map((r) => (
          <div className="sp-tr orders" key={r.ref}>
            <span className="sp-mono muted">{r.ref}</span>
            <span>{r.client}</span>
            <span className="right sp-mono">{r.total} XOF</span>
            <span>
              <em className={`sp-badge ${r.sv}`}>
                <i /> {r.status}
              </em>
            </span>
            <span>
              <em className={`sp-badge ${r.pv}`}>{r.pay}</em>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

function CreditsMock() {
  return (
    <>
      <div className="sp-head">
        <div>
          <strong>Consommation</strong>
          <em>Plan Standard · se renouvelle le 14 sept.</em>
        </div>
      </div>
      <div className="sp-bars">
        <div className="sp-bar-row">
          <span>Établissements</span>
          <strong>1 / 1</strong>
        </div>
        <div className="sp-track">
          <i style={{ width: "100%" }} />
        </div>
        <div className="sp-bar-row">
          <span>Produits</span>
          <strong>12 / Illimité</strong>
        </div>
        <div className="sp-track">
          <i style={{ width: "22%" }} />
        </div>
      </div>
      <div className="sp-credits">
        <div className="sp-bar-row">
          <span>Crédits de conversation IA</span>
          <strong className="green">1 240 restants</strong>
        </div>
        <em>3 500 inclus dans votre période · 240 achetés</em>
      </div>
      <div className="sp-pack">
        <span>
          <strong>Pack 1 500 crédits</strong> — 16 500 FCFA
        </span>
        <span className="sp-btn ghost">Acheter</span>
      </div>
    </>
  );
}
