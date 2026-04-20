// hooks/useScrollVisibility.ts
import { useEffect, useRef, useState } from "react";

export function useScrollVisibility(threshold = 20) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollTop = useRef(0);
  const lastScrollElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const target = event.target;

      if (!(target instanceof HTMLElement)) {
        return;
      }

      const currentScrollTop = target.scrollTop;

      if (lastScrollElement.current !== target) {
        lastScrollElement.current = target;
        lastScrollTop.current = currentScrollTop;
        return;
      }

      // Scrolling DOWN - hide
      if (currentScrollTop > lastScrollTop.current && currentScrollTop > threshold) {
        setIsVisible(false);
      }
      // Scrolling UP - show
      else if (currentScrollTop < lastScrollTop.current) {
        setIsVisible(true);
      }

      lastScrollTop.current = currentScrollTop;
    };

    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });

    return () => document.removeEventListener("scroll", handleScroll, true);
  }, [threshold]);

  return isVisible;
}