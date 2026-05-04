const BLOB_PATH =
  "M200 0C240.83 0 275.943 24.4709 291.478 59.5459C298.716 57.8797 306.255 57 314 57C369.228 57 414 101.772 414 157C414 188.588 399.353 216.754 376.481 235.08C385.693 250.214 391 267.987 391 287C391 342.228 346.228 387 291 387C267.044 387 245.057 378.575 227.837 364.528C209.996 391.903 179.112 410 144 410C88.7715 410 44 365.228 44 310C44 301.339 45.1013 292.936 47.1709 284.922C18.848 267.265 0 235.834 0 200C0 144.772 44.7715 100 100 100C100 44.7715 144.772 0 200 0Z";

const problems = [
  {
    num: "01",
    iconPath: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12 12 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12 12 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    title: "Le téléphone sonne dans le vide",
    body: "7 appels sur 10 quand vous êtes en salle. Chaque appel manqué, une commande perdue.",
  },
  {
    num: "02",
    iconPath: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
    title: "Les DM WhatsApp s'accumulent",
    body: "« Vous livrez où ? », « C'est combien ? ». Vous répétez 50 fois les mêmes réponses.",
  },
  {
    num: "03",
    iconPath: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
    title: "Les réservations vous échappent",
    body: "Vos clients veulent réserver à 23h. Vous dormez. Ils appellent la concurrence.",
  },
];

export default function Problem() {
  return (
    <section id="problem">
      <div className="wrap">
        <div className="problem-head">
          <div className="reveal">
            <span className="eyebrow">Le problème</span>
            <h2>Vous perdez des heures sur les mêmes trois questions.</h2>
          </div>
          <p className="section-lede reveal reveal-d-1">
            Pendant que vous répondez à « vous êtes ouvert ? » pour la 50ᵉ
            fois, vos vrais clients attendent au comptoir.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((p, i) => (
            <div
              key={p.num}
              className={`problem-card reveal${i > 0 ? ` reveal-d-${i}` : ""}`}
            >
              <svg
                className="problem-icon"
                viewBox="0 0 414 410"
                width="64"
                height="64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <g className="problem-icon-bg">
                  <path className="problem-icon-bg-path" d={BLOB_PATH} />
                </g>
                <g
                  className="problem-icon-glyph"
                  transform="translate(132 130) scale(6.25)"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {p.iconPath}
                </g>
              </svg>
              <div className="problem-num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
