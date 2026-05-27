import { useEffect } from "react";

/** Adds .is-visible to any element with .reveal when it enters the viewport.
 *  Also watches for newly added .reveal nodes (e.g. tab switches). */
export function useScrollReveal() {
  useEffect(() => {
    const pendingFrames = new Map<Element, number[]>();

    const reveal = (el: Element) => {
      if (el.classList.contains("is-visible")) return;

      const firstFrame = window.requestAnimationFrame(() => {
        const secondFrame = window.requestAnimationFrame(() => {
          el.classList.add("is-visible");
          pendingFrames.delete(el);
        });

        pendingFrames.set(el, [firstFrame, secondFrame]);
      });

      pendingFrames.set(el, [firstFrame]);
    };

    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll<HTMLElement>(".reveal")
        .forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => io.observe(el));
    };

    observeAll();

    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      pendingFrames.forEach((frames) => {
        frames.forEach((frame) => window.cancelAnimationFrame(frame));
      });
      pendingFrames.clear();
    };
  }, []);
}
