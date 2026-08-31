import Image from "next/image";
import { APPLE_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/links";

const DOWNLOAD_IMAGE_SRC = "/assets/images/download.png?v=2";

const STORES = [
  {
    label: "Télécharger sur l’App Store",
    src: "/assets/badge/applestore/fr/black.svg",
    width: 127,
    height: 40,
    href: APPLE_STORE_URL,
  },
  {
    label: "Disponible sur Google Play",
    src: "/assets/badge/googleplay/GetItOnGooglePlay_Badge_Web_color_French (1).svg",
    width: 239,
    height: 71,
    href: GOOGLE_PLAY_URL,
  },
] as const;

export default function DownloadSection() {
  return (
    <section className="download-section" id="download">
      <div className="download-shell">
        <Image
          className="download-pattern download-pattern-light download-pattern-left"
          src="/assets/images/patern/patern_2.svg"
          alt=""
          width={414}
          height={410}
          aria-hidden="true"
        />
        <Image
          className="download-pattern download-pattern-light download-pattern-right"
          src="/assets/images/patern/patern_5.svg"
          alt=""
          width={414}
          height={410}
          aria-hidden="true"
        />
        <Image
          className="download-pattern download-pattern-dark download-pattern-left"
          src="/assets/images/patern/patern_1.svg"
          alt=""
          width={414}
          height={410}
          aria-hidden="true"
        />
        <Image
          className="download-pattern download-pattern-dark download-pattern-right"
          src="/assets/images/patern/patern_6.svg"
          alt=""
          width={414}
          height={410}
          aria-hidden="true"
        />
        <div className="download-copy">
          <h2>
            Téléchargez <span>l&apos;application</span>
          </h2>
          <p className="section-lede">
            Accédez à toutes les fonctionnalités de Kacy directement depuis
            votre smartphone ou tablette.
          </p>
          <div className="download-stores" aria-label="Télécharger l’application Kacy">
            {STORES.map((store) => (
              <a
                key={store.href}
                className="download-store"
                href={store.href}
                target="_blank"
                rel="noreferrer"
                aria-label={store.label}
              >
                <Image
                  src={store.src}
                  alt=""
                  width={store.width}
                  height={store.height}
                />
              </a>
            ))}
          </div>
          <p className="download-note">Disponible sur iOS et Android.</p>
        </div>

        <div className="download-visual" aria-hidden="true">
          <div className="download-glow" />
          <Image
            className="download-image"
            src={DOWNLOAD_IMAGE_SRC}
            alt=""
            width={706}
            height={1003}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
