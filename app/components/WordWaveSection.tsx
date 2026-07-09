"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WordWaveSection() {
  useEffect(() => {
    const words = gsap.utils.toArray<HTMLElement>(".word");

    gsap.fromTo(
      words,
      {
        y: 140,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: {
          each: 0.18,
          from: "start",
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".word-wrapper",
          start: "top 70%",
          end: "bottom 70%",
          scrub: 1.5,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="relative z-10 flex h-full pt-10 justify-between px-4 md:px-10 uppercase text-6xl md:text-7xl font-instrument text-white md:hidden">
        <span>Pre všetkých našich klientov</span>
      </div>

      <div className="word-wrapper relative z-10 md:flex h-full pt-10 justify-between px-10 text-center uppercase text-7xl font-instrument text-white  hidden">
        {["Pre", "všetkých", "našich", "klientov"].map((word, i) => (
            <span
            key={i}
            className="word inline-block will-change-transform"
            >
            {word}
            </span>
        ))}
        </div>
    </>
    
  );
}