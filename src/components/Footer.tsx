import Image from "next/image";
import Link from "next/link";
// import AiMascot from "./AiMascot";

export default function Footer() {
  return (
    <footer>
      <div className="foot-wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#" className="logo">
              <Image src="/logo_large.svg" alt="" width="180" height={32} />
            </a>
            <p>
              Faire mieux, simplement. L&apos;agent IA qui répond à vos clients
              pendant que vous faites tourner votre commerce.
            </p>
          </div>
          <div className="foot-col">
            <h4>Produit</h4>
            <a href="#product">Fonctionnalités</a>
            <a href="#pricing">Tarifs</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="foot-col">
            <h4>Société</h4>
            <a href="#">À propos</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>
          <div className="foot-col">
            <h4>Légal</h4>
            <Link href="/legal/cgu">CGU</Link>
            <Link href="/legal/cgv">CGV</Link>
            <Link href="/legal/privacy">Confidentialité</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Kacy · Abidjan, Côte d&apos;Ivoire</span>
          <span>Faire mieux, simplement.</span>
        </div>
      </div>
    </footer>
  );
}
