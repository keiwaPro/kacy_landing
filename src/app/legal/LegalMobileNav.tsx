"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Section } from "./LegalTOC";

const DOCS = [
  { key: "cgu", label: "CGU" },
  { key: "cgv", label: "CGV" },
  { key: "privacy", label: "Confidentialité" },
] as const;

export default function LegalMobileNav({ sections }: { sections: Section[] }) {
  const pathname = usePathname();
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <div className="legal-mobile-nav">
      {/* Doc tabs */}
      <div
        style={{
          display: "flex",
          gap: 6,
          padding: "10px 16px",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {DOCS.map((doc) => {
          const isActive = pathname?.includes(`/legal/${doc.key}`);
          return (
            <Link
              key={doc.key}
              href={`/legal/${doc.key}`}
              style={{
                whiteSpace: "nowrap",
                fontSize: 13,
                padding: "5px 14px",
                borderRadius: 20,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "var(--ink)" : "var(--ink-soft)",
                background: isActive ? "var(--line-soft)" : "transparent",
                textDecoration: "none",
                border: "1px solid",
                borderColor: isActive ? "var(--line)" : "var(--line-soft)",
                flexShrink: 0,
                transition: "all 0.15s",
              }}
            >
              {doc.label}
            </Link>
          );
        })}
      </div>

      {/* TOC toggle */}
      {sections.length > 0 && (
        <div style={{ borderTop: "1px solid var(--line-soft)" }}>
          <button
            onClick={() => setTocOpen(!tocOpen)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "9px 16px",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 500,
              color: "var(--ink-soft)",
              fontFamily: "var(--font-body)",
            }}
          >
            <span>Sommaire</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              style={{
                transition: "transform 0.2s",
                transform: tocOpen ? "rotate(180deg)" : "rotate(0deg)",
                color: "var(--ink-muted)",
              }}
            >
              <path
                d="M2 4l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {tocOpen && (
            <nav
              style={{
                padding: "4px 10px 12px",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxHeight: "46vh",
                overflowY: "auto",
              }}
            >
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setTocOpen(false)}
                  style={{
                    fontSize: 13,
                    padding: "6px 8px",
                    borderRadius: 5,
                    textDecoration: "none",
                    color: "var(--ink-soft)",
                    display: "block",
                    lineHeight: 1.45,
                  }}
                >
                  {s.title}
                </a>
              ))}
            </nav>
          )}
        </div>
      )}
    </div>
  );
}
