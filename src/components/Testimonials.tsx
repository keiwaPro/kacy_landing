type Quote = {
  text: string;
  hl: string;
  name: string;
  role: string;
};

const COLUMNS: Quote[][] = [
  [
    {
      text: "Kacy a pris 43 commandes le premier week-end. ",
      hl: "Le téléphone ne sonne plus dans le vide.",
      name: "Awa K.",
      role: "Gérante de maquis · Cocody",
    },
    {
      text: "La mise en service a pris deux jours, comme promis. ",
      hl: "On a envoyé le menu, tout était configuré.",
      name: "Jean-Marc D.",
      role: "Restaurant · Marcory",
    },
    {
      text: "Les clientes règlent par Wave depuis la conversation. ",
      hl: "Plus besoin de courir après les paiements.",
      name: "Fatou B.",
      role: "Salon de coiffure · Riviera",
    },
  ],
  [
    {
      text: "Je valide les réservations d'un pouce entre deux tables. ",
      hl: "Kacy fait tout le reste.",
      name: "Serge A.",
      role: "Maquis · Yopougon",
    },
    {
      text: "Le transfert humain marche vraiment : ",
      hl: "dès que Kacy hésite, ça bascule sur mon téléphone.",
      name: "Mariam S.",
      role: "Hôtel · Grand-Bassam",
    },
    {
      text: "Le tableau de bord me montre ce que les clients demandent le plus. ",
      hl: "On a ajusté la carte en conséquence.",
      name: "Yves K.",
      role: "Restaurant · Plateau",
    },
  ],
  [
    {
      text: "Il comprend le nouchi de mes clients, ",
      hl: "franchement je ne m'y attendais pas.",
      name: "Aïcha T.",
      role: "Maquis · Abobo",
    },
    {
      text: "98 % des questions traitées sans moi. ",
      hl: "Je me concentre sur la salle.",
      name: "Landry G.",
      role: "Restaurant · Deux-Plateaux",
    },
    {
      text: "WhatsApp et Telegram branchés le même jour. ",
      hl: "Une seule boîte de réception, enfin.",
      name: "Clarisse M.",
      role: "Auberge · Bingerville",
    },
  ],
];

function Card({ q }: { q: Quote }) {
  return (
    <figure className="tcard">
      <blockquote>
        {q.text}
        <mark>{q.hl}</mark>
      </blockquote>
      <figcaption>
        <span className="tcard-avatar" aria-hidden>
          {q.name.charAt(0)}
        </span>
        <span>
          <span className="tcard-name">{q.name}</span>
          <span className="tcard-role">{q.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="temoignages">
      <div className="wrap">
        <div className="sec-head-center">
          <span className="eyebrow reveal">Témoignages</span>
          <h2 className="reveal reveal-d-1">
            Ils font tourner leur commerce avec Kacy.
          </h2>
          <p className="section-lede reveal reveal-d-2">
            Restaurateurs, hôteliers et gérants de salons testent Kacy en
            avant-première à Abidjan.
          </p>
        </div>

        <div className="twall reveal reveal-d-2">
          {COLUMNS.map((col, i) => (
            <div className={`tcol tcol-${i + 1}`} key={i}>
              <div className="tcol-track">
                {[...col, ...col].map((q, j) => (
                  <Card q={q} key={j} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
