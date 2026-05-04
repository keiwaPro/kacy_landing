"use client"

import { forwardRef, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => (
    <div ref={ref} className={cn("beam-circle", className)}>
      {children}
    </div>
  )
)
Circle.displayName = "Circle"

export default function FeatureHandoff() {
  const containerRef = useRef<HTMLDivElement>(null)
  const fromRef = useRef<HTMLDivElement>(null)
  const toRef = useRef<HTMLDivElement>(null)

  return (
    <div className="beam-wrap" ref={containerRef}>
      <div className="beam-node-wrap">
        <Circle ref={fromRef}>
          <Image src="/logo.svg" alt="Kacy" width={22} height={22} unoptimized />
        </Circle>
        <span className="beam-label">Kacy</span>
      </div>

      <div className="beam-node-wrap">
        <Circle ref={toRef} className="beam-circle-dark">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </Circle>
        <span className="beam-label">Vous</span>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef}
        toRef={toRef}
        pathColor="rgba(0,0,0,0.1)"
        pathWidth={2}
        pathOpacity={1}
        gradientStartColor="#82BC46"
        gradientStopColor="#1A1818"
        duration={3}
      />
    </div>
  )
}
