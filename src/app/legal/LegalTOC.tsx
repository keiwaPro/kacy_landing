"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface Section {
  id: string;
  title: string;
}

const DOCS = [
  { key: "cgu", label: "Conditions Générales d'Utilisation" },
  { key: "cgv", label: "Conditions Générales de Vente" },
  { key: "privacy", label: "Politique de Confidentialité" },
] as const;

export default function LegalTOC({ sections }: { sections: Section[] }) {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current?.disconnect();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    observerRef.current = observer;
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside
      className="legal-sidebar"
      style={{
        width: 260,
        flexShrink: 0,
        paddingTop: 40,
        paddingBottom: 64,
        paddingLeft: 24,
        paddingRight: 24,
        position: "sticky",
        top: 56,
        height: "calc(100vh - 56px)",
        overflowY: "auto",
        borderRight: "1px solid var(--line)",
      }}
    >
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--ink-muted)",
          marginBottom: 10,
        }}
      >
        Juridique
      </p>
      <nav style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 32 }}>
        {DOCS.map((doc) => {
          const isActive = pathname?.includes(`/legal/${doc.key}`);
          return (
            <Link
              key={doc.key}
              href={`/legal/${doc.key}`}
              style={{
                fontSize: 13.5,
                padding: "6px 10px",
                borderRadius: 6,
                textDecoration: "none",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "var(--ink)" : "var(--ink-soft)",
                background: isActive ? "var(--line-soft)" : "transparent",
                transition: "all 0.15s",
                display: "block",
                lineHeight: 1.4,
              }}
            >
              {doc.label}
            </Link>
          );
        })}
      </nav>

      {sections.length > 0 && (
        <>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              marginBottom: 8,
            }}
          >
            Sommaire
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {sections.map((s) => {
              const isActive = activeId === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  style={{
                    fontSize: 12.5,
                    padding: "5px 10px",
                    borderRadius: 5,
                    textDecoration: "none",
                    color: isActive ? "var(--green-deep)" : "var(--ink-muted)",
                    fontWeight: isActive ? 500 : 400,
                    background: isActive ? "var(--green-tint)" : "transparent",
                    transition: "all 0.15s",
                    display: "block",
                    lineHeight: 1.4,
                  }}
                >
                  {s.title}
                </a>
              );
            })}
          </nav>
        </>
      )}
    </aside>
  );
}
