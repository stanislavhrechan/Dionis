'use client';

import { useEffect, useState } from "react";
import AnimatedLink from "./AnimatedLink";
import GlowButton from "./HoverButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`mt-5 w-full z-50 transition-all duration-500`}
      >
        <div className="max-w-8xl mx-auto flex items-center justify-between px-4 md:px-10">
          <a href="/">
            <div className="flex gap-2 items-center mb-3">
              
                <img src="../image/logo.svg" alt="" className="w-9"/>
                <span className="font-instrument text-2xl font-bold">DIONIS</span>
            </div>
          </a>
          {/* Desktop */}
          <div className="hidden md:flex items-center flex-1">
           
            <nav className="flex items-center justify-end text-lg w-full gap-8 uppercase font-instrument ml-10">
              <div className="flex gap-8">
                <AnimatedLink href="/services">Služby</AnimatedLink>
                <AnimatedLink href="/about">O nás</AnimatedLink>
              </div>
            </nav>

            <div className="ml-30 mb-3">
              <a href="/contact">
                <GlowButton
                  className="
                    bg-[#245372]
                    px-4 py-1
                    rounded-full
                    uppercase
                    text-white
                    font-instrument cursor-pointer
                  "
                >
                  #runbydionis
                </GlowButton>
              </a>
               
            </div>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-right gap-1.5 md:hidden z-[60]"
          >
            <div className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-sky-400/80 to-blue-700/60 blur-xl"></div>
              <span
                className={`absolute w-8 h-[1.5px] bg-black/80 transition-all duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute w-4 h-[1.5px] bg-black/80 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute w-8 h-[1.5px] bg-black/80 transition-all duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        <div
          className={`
            fixed
            top-4
            right-4
            z-40
            md:hidden
            transition-all
            duration-700
            ease-[cubic-bezier(.77,0,.175,1)]
            ${
              menuOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }
          `}
        >
          <div
            className="
              w-72
              h-[260px]
              bg-orange-50
              shadow-md
              p-6
            "
          >
            <div className="flex flex-col">

              <div className="flex flex-col gap-4 mt-10">
                <a 
                  href="/services" 
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="
                    text-black
                    text-3xl
                    uppercase
                    font-instrument
                  ">
                    Služby
                  </span>
                </a>

                <a 
                  href="/about" 
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="
                    text-black
                    text-3xl
                    uppercase
                    font-instrument
                  ">
                    O nás
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}