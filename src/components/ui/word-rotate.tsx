"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
  renderWord?: (word: string) => React.ReactNode;
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
    transition: { duration: 0.3, ease: "easeOut" },
  },
  className,
  renderWord,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={cn(className)}
          {...motionProps}
        >
          {renderWord ? renderWord(words[index]) : words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
