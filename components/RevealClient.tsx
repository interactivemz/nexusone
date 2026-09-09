"use client";
import { useEffect } from "react";

export default function RevealClient() {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    reveals.forEach((el) => observer.observe(el));

    // stagger benefit cards if present
    document.querySelectorAll(".benefit-card").forEach((card, i) => {
      (card as HTMLElement).style.transitionDelay = `${i * 0.08}s`;
      card.classList.add("reveal");
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);
  return null;
}
