import Image from "next/image";

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

const STAR_PATH =
  "M25.0225 0C25.0089 0.331508 25 0.665156 25 1C25.0003 14.2546 35.7453 25 49 25C49.335 25 49.6683 24.9902 50 24.9766V25.0215C49.6683 25.0078 49.335 25 49 25C35.7452 25 25 35.8011 25 49.125C25 49.4179 25.0073 49.7096 25.0176 50H24.9824C24.9928 49.7096 25 49.4179 25 49.125C25 35.8012 14.1988 25.0001 0.875 25C0.582113 25 0.290361 25.0063 0 25.0166V24.9814C0.290379 24.9917 0.582095 25 0.875 25C14.1986 24.9999 24.9997 14.2546 25 1C25 0.665159 24.9912 0.331505 24.9775 0H25.0225Z";

export default function Logo({
  size = 36,
  showText = true,
  className,
}: LogoProps) {
  const fontSize = Math.round(size * 0.55);
  const starSize = Math.round(size * 0.22);

  return (
    <span className={`brand-logo${className ? ` ${className}` : ""}`}>
      <Image
        src="/logo.svg"
        alt="Kacy"
        width={size}
        height={size}
        className="brand-logo-mark"
        priority
      />
      {showText && (
        <span className="brand-logo-text" style={{ fontSize: `${fontSize}px` }}>
          <span className="brand-logo-name">Kacy</span>
          <svg
            className="brand-logo-star"
            viewBox="0 0 50 50"
            width={starSize}
            height={starSize}
            fill="currentColor"
            aria-hidden
          >
            <path d={STAR_PATH} />
          </svg>
        </span>
      )}
    </span>
  );
}
