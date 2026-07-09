"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CTA from "../CTA";
import Footer from "@/app/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function RevealFooter() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.to(contentRef.current, {
                yPercent: -120,
                ease: "none",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                },
            });

        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={wrapperRef}
            className="relative"
        >
            <div className="sticky bottom-0 z-10">
                <Footer />
            </div>

            <div
                ref={contentRef}
                className="absolute inset-0 z-20 "
            >
                <CTA />
            </div>
        </section>
    );
}