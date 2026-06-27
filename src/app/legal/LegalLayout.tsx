import Image from "next/image";
import Link from "next/link";
import LegalTOC, { type Section } from "./LegalTOC";
import LegalMobileNav from "./LegalMobileNav";
export type { Section };

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  lastUpdated,
  sections,
  children,
}: LegalLayoutProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--canvas)",
        fontFamily: "var(--font-body)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          background: "rgba(251,250,247,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 56,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image src="/logo_large.svg" alt="Kacy" width={110} height={28} priority style={{ height: "auto" }} />
          </Link>
          <span style={{ color: "var(--line-soft)", fontSize: 18 }}>/</span>
          <span style={{ fontSize: 14, color: "var(--ink-soft)", fontWeight: 500 }}>
            Juridique
          </span>
        </div>
      </header>

      <LegalMobileNav sections={sections} />

      <div
        style={{
          display: "flex",
          flex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <LegalTOC sections={sections} />

        {/* Content */}
        <main
          className="legal-main"
          style={{
            flex: 1,
            minWidth: 0,
            paddingTop: 48,
            paddingBottom: 96,
            paddingLeft: 56,
            paddingRight: 40,
          }}
        >
          <div style={{ maxWidth: 680 }}>
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: "var(--ink)",
                lineHeight: 1.08,
                marginBottom: 16,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 13.5,
                color: "var(--ink-muted)",
                marginBottom: 40,
                paddingBottom: 40,
                borderBottom: "1px solid var(--line)",
              }}
            >
              <strong style={{ color: "var(--ink-soft)" }}>
                Dernière mise à jour :
              </strong>{" "}
              {lastUpdated}
            </p>
            <div className="legal-body">{children}</div>
          </div>
        </main>
      </div>

      <style>{`
        .legal-sidebar { display: flex; flex-direction: column; }
        .legal-mobile-nav { display: none; }
        @media (max-width: 768px) {
          .legal-sidebar { display: none; }
          .legal-mobile-nav {
            display: block;
            position: sticky;
            top: 56px;
            z-index: 20;
            background: rgba(251,250,247,0.96);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--line);
          }
          .legal-main {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: 28px !important;
            padding-bottom: 64px !important;
          }
          .legal-body h2 { scroll-margin-top: 9rem; }
          .legal-body h3 { scroll-margin-top: 9rem; }
        }
        .legal-body h2 {
          font-size: 1.375rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin-top: 2.75rem;
          margin-bottom: 0.625rem;
          scroll-margin-top: 5rem;
          line-height: 1.2;
        }
        .legal-body h3 {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--ink);
          margin-top: 1.5rem;
          margin-bottom: 0.375rem;
          scroll-margin-top: 5rem;
        }
        .legal-body p {
          font-size: 0.9375rem;
          line-height: 1.75;
          color: var(--ink-soft);
          margin-bottom: 0.875rem;
        }
        .legal-body strong {
          color: var(--ink);
          font-weight: 600;
        }
        .legal-body em {
          color: var(--ink-muted);
          font-style: italic;
        }
        .legal-body ul {
          margin: 0.5rem 0 0.875rem 1.25rem;
          list-style: disc;
        }
        .legal-body li {
          font-size: 0.9375rem;
          line-height: 1.75;
          color: var(--ink-soft);
          margin-bottom: 0.3rem;
          padding-left: 0.25rem;
        }
        .legal-body table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1.25rem;
          font-size: 0.875rem;
        }
        .legal-body th {
          text-align: left;
          font-weight: 600;
          padding: 8px 12px;
          background: var(--line-soft);
          border: 1px solid var(--line);
          color: var(--ink);
          white-space: nowrap;
          vertical-align: top;
        }
        .legal-body td {
          padding: 8px 12px;
          border: 1px solid var(--line);
          color: var(--ink-soft);
          vertical-align: top;
        }
        .legal-body a {
          color: var(--green-deep);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .legal-body a:hover {
          color: var(--green);
        }
      `}</style>
    </div>
  );
}
