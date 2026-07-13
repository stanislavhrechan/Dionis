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
                <AnimatedLink href="/contact">Kontakt</AnimatedLink>
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
          <div className="mt-12 flex flex-col bg-orange-50 shadow-md p-5 rounded-md">

            {[
              { number: "01", title: "Služby", href: "/services" },
              { number: "02", title: "O nás", href: "/about" },
              { number: "03", title: "Kontakt", href: "/contact" },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
                  group
                  relative
                  overflow-hidden
                  border-b
                  border-black/10
                  py-6
                "
              >
                <div className="flex items-center justify-between">

                  <div className="flex items-start gap-5">

                    <span
                      className="
                        text-xs
                        text-black/40
                        mt-2
                        transition-colors
                        duration-300
                        group-hover:text-black
                      "
                    >
                      {item.number}
                    </span>

                    <div className="relative h-[52px] overflow-hidden">

                      <span
                        className="
                          block
                          text-5xl
                          uppercase
                          font-instrument
                          leading-none
                          transition-transform
                          duration-500
                          group-hover:-translate-y-full
                        "
                      >
                        {item.title}
                      </span>


                    </div>

                  </div>

                  <span
                    className="
                      text-2xl
                      transition-all
                      duration-500
                      group-hover:translate-x-2
                      group-hover:-translate-y-1
                    "
                  >
                    ↗
                  </span>

                </div>

                <span
                  className="
                    absolute
                    left-0
                    bottom-0
                    h-px
                    w-0
                    bg-black
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

              </a>
            ))}

            <div className="mt-14 border-t border-black/10 pt-5">

              <p className="uppercase text-xs tracking-[0.2em] text-black/40 mb-6">
                Kontakt
              </p>

              <div className="flex gap-6 mt-4 uppercase text-sm">
                <a href="#">Instagram</a>
                <a
                  href="mailto:info@dionis.sk"
                  className="block text-sm hover:opacity-60 transition"
                >
                  info@dionis.sk
                </a>
              </div>

            </div>

          </div>
        </div>
    </>
  );
}