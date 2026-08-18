"use client";

import { useEffect } from "react";

function formatCount(value: number, format: string | null) {
  return format === "comma" ? value.toLocaleString() : String(value);
}

export function EditorialFx() {
  useEffect(() => {
    const root = document.querySelector(".edh") || document.querySelector(".olv");
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = Array.from(root.querySelectorAll(".reveal"));

    if (reduced) {
      reveals.forEach((el) => el.classList.add("vis"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("vis");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );

      reveals.forEach((el, index) => {
        (el as HTMLElement).style.transitionDelay = `${0.06 * Math.min(index % 6, 6)}s`;
        observer.observe(el);
      });

      const lime = root.querySelector("#lime");
      const limeTimer = window.setTimeout(() => lime?.classList.add("swipe"), 400);

      const counters = root.querySelectorAll<HTMLElement>("[data-count]");
      const countObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = Number(el.getAttribute("data-count"));
          const suffix = el.getAttribute("data-suffix") || "";
          const format = el.getAttribute("data-format");
          const start = performance.now();
          const duration = 1100;

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = formatCount(Math.round(target * eased), format) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          countObserver.unobserve(el);
        });
      }, { threshold: 0.4 });

      counters.forEach((el) => countObserver.observe(el));

      return () => {
        observer.disconnect();
        countObserver.disconnect();
        window.clearTimeout(limeTimer);
      };
    }

    root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      const target = Number(el.getAttribute("data-count"));
      const suffix = el.getAttribute("data-suffix") || "";
      el.textContent = formatCount(target, el.getAttribute("data-format")) + suffix;
    });
  }, []);

  return null;
}
