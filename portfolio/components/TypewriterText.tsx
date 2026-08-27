"use client";

import { useEffect, useState } from "react";

export default function TypewriterText({
  text,
  className = "",
  speed = 35,
  startDelay = 0,
  showCaret = true,
  onDone,
}: {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  showCaret?: boolean;
  onDone?: () => void;
}) {
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setDisplayed(text);
      setDone(true);
      onDone?.();
      return;
    }

    let i = 0;
    let interval: ReturnType<typeof setInterval>;

    const startTimeout = setTimeout(() => {
      setTyping(true);
      interval = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setTyping(false);
          setDone(true);
          onDone?.();
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {displayed}
      {showCaret && (typing || !done) && (
        <span
          aria-hidden="true"
          className="typing-caret ml-0.5 inline-block w-[0.08em] translate-y-[0.05em] bg-current align-middle"
          style={{ height: "0.85em" }}
        />
      )}
    </span>
  );
}
