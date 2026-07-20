"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import WordWaveSection from "../components/WordWaveSection";
import GlowButton from "../components/HoverButton";

export default function CTA(){
    const container = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((img) => {

                gsap.fromTo(
                    img,
                    {
                        y: -20,
                    },
                    {
                        y: 20,
                        ease: "none",
                        scrollTrigger: {
                            trigger: img.parentElement,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    }
                );

            });

        }, container);

        return () => ctx.revert();

    }, []);
    return (
        <>
            <section ref={container} className="relative z-20 h-[80vh] overflow-hidden">
                <img
                src="/image/bg_cta.webp"
                alt=""
                className="absolute inset-0 hidden md:block h-full w-full object-cover parallax-img"
                />
                <img
                src="/image/logo.svg"
                alt=""
                className="absolute md:hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 parallax-img"
                />
                <div className="absolute inset-0 bg-[linear-gradient(253.74deg,rgba(52,52,198,0.26)_33.45%,rgba(149,169,219,0.26)_100.02%)]"></div>
                <WordWaveSection/>
                <div className="absolute inset-0 flex md:flex-row flex-col justify-end md:justify-between md:items-end z-10 p-4 md:p-10 text-white">
                <div className="space-y-2">
                    <p className="md:max-w-md font-instrument text-2xl mb-5">
                    Ďakujeme za vašu dôveru. Je pre nás záväzkom neustále posúvať hranice a prinášať výsledky, na ktoré môžeme byť spoločne hrdí.
                    </p>
                    <span className="font-instrument italic text-md">-Samuel Stesňák, Maxim Troščák, Tobias Lorencovič</span>
                    <img
                        src="/image/logo_cta.svg"
                        alt=""
                        className="w-20"
                    />
                </div>
                <div className="">
                    <a href="/contact">
                        <GlowButton
                        className="
                            px-6 py-1 mt-2 md:mt-0 bg-white font-instrument text-black rounded-full text-xl mb-5 cursor-pointer
                        "
                        >
                        #runbydionis
                        </GlowButton>
                    </a>
                </div>
                </div>
            </section>
        </>
    );
}