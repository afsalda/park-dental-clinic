'use client';

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    let lenis: Lenis | null = null;
    let rafId: number;

    const initLenis = () => {
      if (lenis) return;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    };

    // Initialize on first interaction or scroll, or after a timeout
    const triggerInit = () => {
      initLenis();
      cleanUpListeners();
    };

    const cleanUpListeners = () => {
      window.removeEventListener("scroll", triggerInit);
      window.removeEventListener("pointermove", triggerInit);
      window.removeEventListener("touchstart", triggerInit);
      window.removeEventListener("wheel", triggerInit);
      window.removeEventListener("keydown", triggerInit);
    };

    window.addEventListener("scroll", triggerInit, { passive: true });
    window.addEventListener("pointermove", triggerInit, { passive: true });
    window.addEventListener("touchstart", triggerInit, { passive: true });
    window.addEventListener("wheel", triggerInit, { passive: true });
    window.addEventListener("keydown", triggerInit, { passive: true });

    // Fallback timeout to initialize it after 2 seconds
    const timeoutId = setTimeout(triggerInit, 2000);

    // Click handler for anchor links to handle smooth scrolling with offset
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      
      // Only handle anchor links on the current page
      if (href && href.startsWith("#") && href.length > 1) {
        const id = href.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          e.preventDefault();
          
          // Ensure Lenis is initialized
          initLenis();

          // Let's account for navigation height when scrolling
          const navHeight = 80;
          
          lenis?.scrollTo(element, {
            offset: -navHeight,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    // Clean up
    return () => {
      clearTimeout(timeoutId);
      cleanUpListeners();
      cancelAnimationFrame(rafId);
      if (lenis) {
        lenis.destroy();
      }
      document.removeEventListener("click", handleAnchorClick, { capture: true });
    };
  }, []);

  return <>{children}</>;
}
