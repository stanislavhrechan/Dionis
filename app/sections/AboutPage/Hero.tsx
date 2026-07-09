"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((img) => {

                gsap.fromTo(
                    img,
                    {
                        y: 10,
                    },
                    {
                        y: -10,
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
            <section className="relative mt-10 flex flex-col justify-center">
                <h1 className="font-instrument text-4xl md:text-6xl uppercase text-center mx-auto max-w-4xl">
                    TVORÍME ZNAČKY,KTORÉ SI ĽUDIA ZAPAMÄTAJÚ.
                </h1>
                <div className="flex justify-center mt-5">
                    <div className="overflow-hidden">
                        <img
                            src="/image/about_us.png"
                            alt=""
                            className="parallax-img scale-110"
                        />
                    </div>
                </div>
                <p className="mx-auto max-w-sm md:max-w-3xl text-center mt-5 text-sm">
                    Nie sme len marketingová agentúra. Sme kreatívny partner, ktorý spája stratégiu, dizajn, moderné technológie a obsah do jedného funkčného celku. Vytvárame webové stránky, branding, profesionálne fotografie, videá z dronu aj reklamné kampane, ktoré pomáhajú firmám rásť.
                </p>
            </section>
        </>
    );
}