import { Message, Mail, Phone } from "../icons";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_repeat(3,1fr)] gap-8 md:gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 font-semibold tracking-tight mb-4"
            >
              <div className="w-8 h-8 rounded-[10px] bg-primary-600 text-white grid place-items-center font-bold text-base">
                K
              </div>
              <span className="text-neutral-900 dark:text-white">Keiwa</span>
            </a>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-[1.55] mt-4 max-w-[300px]">
              Keiwa Customer AI, plateforme SaaS d'agents IA conversationnels
              pour restaurants, hôtels et salons. Construit à Abidjan.
            </p>
            <div className="flex gap-3 mt-5">
              {[Message, Mail, Phone].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-[10px] border border-neutral-200 dark:border-neutral-700 grid place-items-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Produit",
              links: [
                ["#fonctionnalites", "Fonctionnalités"],
                ["#comment", "Comment ça marche"],
                ["#cas", "Cas d'usage"],
                ["#tarifs", "Tarifs"],
                ["#", "Nouveautés"],
              ],
            },
            {
              title: "Entreprise",
              links: [
                ["#", "À propos"],
                ["#", "Blog"],
                ["#", "Partenaires"],
                ["#", "Carrières"],
                ["#", "Contact"],
              ],
            },
            {
              title: "Ressources",
              links: [
                ["#", "Centre d'aide"],
                ["#", "Documentation"],
                ["#faq", "FAQ"],
                ["#", "Confidentialité"],
                ["#", "CGU"],
              ],
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.08em] text-neutral-400 dark:text-neutral-500 mb-4">
                {title}
              </h4>
              {links.map(([href, label]) => (
                <a
                  key={href + label}
                  href={href}
                  className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white py-1.5 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-[13px] text-neutral-500 dark:text-neutral-500">
          <div>
            © 2026 Keiwa Customer AI · contact@keiwa.ci · +225 XX XX XX XX XX
          </div>
        </div>
      </div>
    </footer>
  );
}
