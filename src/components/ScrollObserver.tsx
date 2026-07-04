"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    // ── Split Text Animation Setup ────────────────────────────────────
    const splitTextElements = document.querySelectorAll(".split-text-animate");
    splitTextElements.forEach((el) => {
      if (el.getAttribute("data-split-done") === "true") return;
      el.setAttribute("data-split-done", "true");

      let charCount = 0;
      const processNode = (node: Node) => {
        if (node.nodeType === 3) {
          // Text node
          const text = node.textContent || "";
          const words = text.split(/(\s+)/); // keep whitespace
          const fragment = document.createDocumentFragment();

          words.forEach((word) => {
            if (word.trim() === "") {
              fragment.appendChild(document.createTextNode(word));
            } else {
              const wordSpan = document.createElement("span");
              wordSpan.className = "word";
              wordSpan.style.display = "inline-block";
              wordSpan.style.whiteSpace = "nowrap";

              word.split("").forEach((char) => {
                const charSpan = document.createElement("span");
                charSpan.className = "char";
                charSpan.style.display = "inline-block";
                charSpan.style.transitionDelay = `${charCount * 25}ms`;
                charSpan.textContent = char;
                wordSpan.appendChild(charSpan);
                charCount++;
              });
              fragment.appendChild(wordSpan);
            }
          });
          node.parentNode?.replaceChild(fragment, node);
        } else if (node.nodeType === 1 && (node as Element).tagName !== "BR") {
          // Element node
          Array.from(node.childNodes).forEach(processNode);
        }
      };

      // Copy the raw text to aria-label for screen readers, then split
      if (!el.hasAttribute("aria-label")) {
        el.setAttribute("aria-label", el.textContent?.trim() || "");
      }
      el.setAttribute("role", "text");

      Array.from(el.childNodes).forEach(processNode);
    });

    // ── Scroll Animations (Intersection Observer) ─────────────────────
    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .animate-slide-left, .animate-scale, .split-text-animate"
    );

    let observer: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      const observerOptions = {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      };

      let staggerDelay = 0;
      let staggerTimeout: NodeJS.Timeout | null = null;

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            // If the element is inside a stagger container, apply a dynamic delay
            if (target.closest(".stagger-children")) {
              target.style.transitionDelay = `${staggerDelay}ms`;
              staggerDelay += 100;

              // Reset the delay counter after a short period of no new intersections
              if (staggerTimeout) clearTimeout(staggerTimeout);
              staggerTimeout = setTimeout(() => {
                staggerDelay = 0;
              }, 50);
            }

            target.classList.add("in-view");
            observer?.unobserve(target);
          }
        });
      }, observerOptions);

      animatedElements.forEach((el) => observer?.observe(el));
    } else {
      // Fallback: show all elements immediately
      animatedElements.forEach((el) => el.classList.add("in-view"));
    }

    // ── Active Nav Link Highlight ─────────────────────────────────────
    const sections = document.querySelectorAll("section[id]");
    const navLinkItems = document.querySelectorAll(
      '.nav-link[href^="#"], .drawer-link[href^="#"]'
    );

    let sectionObserver: IntersectionObserver | null = null;

    if (sections.length > 0 && navLinkItems.length > 0 && "IntersectionObserver" in window) {
      sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              navLinkItems.forEach((link) => {
                link.classList.toggle(
                  "active",
                  link.getAttribute("href") === "#" + id
                );
              });
            }
          });
        },
        { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
      );

      sections.forEach((section) => sectionObserver?.observe(section));
    }

    // ── Parallax-lite on hero (subtle) ────────────────────────────────
    const heroBg = document.querySelector(".hero-bg img") as HTMLElement;
    const handleParallax = () => {
      const scroll = window.pageYOffset;
      if (scroll < 1000 && heroBg) {
        heroBg.style.transform = `scale(1.05) translateY(${scroll * 0.08}px)`;
      }
    };

    if (heroBg && window.innerWidth > 809) {
      window.addEventListener("scroll", handleParallax, { passive: true });
    }

    return () => {
      if (observer) {
        animatedElements.forEach((el) => observer?.unobserve(el));
      }
      if (sectionObserver) {
        sections.forEach((section) => sectionObserver?.unobserve(section));
      }
      if (heroBg) {
        window.removeEventListener("scroll", handleParallax);
      }
    };
  }, []);

  return null;
}
