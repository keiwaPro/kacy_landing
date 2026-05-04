const steps = [
  { num: "00", active: true, title: "Vous réservez votre place", body: "2 minutes maintenant. Gratuit, sans engagement." },
  { num: "01", title: "On vous rappelle sous 2h", body: "Appel court pour comprendre votre activité et vos besoins." },
  { num: "02", title: "Configuration de Kacy", body: "Menu, prix, horaires, politique client. On configure tout, vous validez." },
  { num: "03", title: "Mise en service", body: "48h après. Premiers clients, premières conversations, vous observez." },
  { num: "04", title: "Bilan à 30 jours", body: "On affine ensemble selon vos retours et vos statistiques." },
];

export default function Timeline() {
  return (
    <section id="comment">
      <div className="wrap">
        <span className="eyebrow reveal">Déploiement</span>
        <h2 className="reveal reveal-d-1">De la réservation au service en 5 étapes.</h2>

        <div className="timeline-list">
          {steps.map((s) => (
            <div key={s.num} className="timeline-row reveal">
              <div className={`timeline-num${s.active ? " active" : ""}`}>{s.num}</div>
              <div className="timeline-body">
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
