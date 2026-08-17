"use client";

import { useEffect } from "react";

export function EditorialFx() {
  useEffect(() => {
    const root = document.querySelector(".edh");
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = Array.from(root.querySelectorAll(".reveal"));

    if (reduced) {
      reveals.forEach((el) => el.classList.add("vis"));
      return;
    }

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

    const limes = root.querySelectorAll(".limeword");
    const limeTimer = window.setTimeout(() => {
      limes.forEach((el) => el.classList.add("swipe"));
    }, 400);

    return () => {
      observer.disconnect();
      window.clearTimeout(limeTimer);
    };
  }, []);

  return null;
}
