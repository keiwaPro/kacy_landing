import Image from "next/image";

export default function Quote() {
  return (
    <section className="quote">
      <div className="quote-inner">
        <span className="quote-mark reveal" aria-hidden>
          “
        </span>
        <p className="quote-text reveal reveal-d-1">
          Avant, je ratais les appels du soir. Maintenant Kacy prend les
          commandes <em>pendant le service</em>, et je valide d&apos;un pouce
          entre deux tables.
        </p>
        <div className="quote-who reveal reveal-d-2">
          <div className="quote-avatar">
            <Image src="/logo_2.svg" alt="" width={24} height={24} />
          </div>
          <div>
            <div className="quote-name">Gérant d&apos;un restaurant pilote</div>
            <div className="quote-role">Cocody · Abidjan</div>
          </div>
        </div>
      </div>
    </section>
  );
}
