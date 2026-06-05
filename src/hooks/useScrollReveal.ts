import { useEffect, useRef, RefObject } from "react";

type Direction = "up" | "left" | "right";

interface ScrollRevealOptions {
  direction?: Direction;
  threshold?: number;
}

const HIDDEN: Record<Direction, React.CSSProperties> = {
  up:    { opacity: 0, transform: "translateY(28px)",  transition: "opacity 0.6s ease, transform 0.6s ease" },
  left:  { opacity: 0, transform: "translateX(-40px)", transition: "opacity 0.6s ease, transform 0.6s ease" },
  right: { opacity: 0, transform: "translateX(40px)",  transition: "opacity 0.6s ease, transform 0.6s ease" },
};

const VISIBLE: React.CSSProperties = {
  opacity: 1,
  transform: "translate(0, 0)",
};

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {},
): RefObject<T> {
  const { direction = "up", threshold = 0.12 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply initial hidden state immediately
    const hidden = HIDDEN[direction];
    Object.assign(el.style, hidden);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          Object.assign(el.style, VISIBLE);
          observer.unobserve(el); // fires once only
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, threshold]);

  return ref;
}
