"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Sections() {

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
        <section  ref={container}  className="my-10">
            <div className="grid grid-cols-10 mx-4 md:mx-10 gap-5">
                <div className="relative col-span-10 md:col-span-4 group overflow-hidden w-full h-[40vh] md:h-[60vh]">
                    <a href="/services/marketingove-kampane">
                        <div className="absolute w-full h-full ">
                            <img src="./image/works_type/spolupraca.webp" alt="" className="parallax-img w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 cursor-pointer" />
                        </div>
                        <div className="z-10 absolute bottom-5 md:bottom-10 mx-2 md:mx-4 space-y-2  cursor-pointer">
                            <div className="bg-white p-1">
                                <h3 className="font-instrument text-2xl">Úspešné marketingové kampane</h3>
                            </div>
                            <div className="bg-white p-1 text-sm max-w-md">Realizácia kampaní s jasným cieľom – od budovania povedomia o značke až po priamy nárast predajov cez strategicky cielenú komunikáciu.</div>
                        </div>
                    </a>
                    
                </div>
                <div className="relative col-span-10 md:col-span-6 group overflow-hidden w-full h-[40vh] md:h-[60vh]">
                    <a href="/services/web-pre-developersky-projekt">
                        <div className="absolute w-full h-full ">
                            <img
                                src="./image/works_type/web.webp"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 cursor-pointer  parallax-img "
                            />
                        </div>
                        <div className="z-10 absolute bottom-5 md:bottom-10 mx-4 space-y-2  cursor-pointer">
                            <div className="bg-white p-1">
                                <h3 className="font-instrument text-2xl">Web pre developérsky projekt</h3>
                            </div>
                            <div className="bg-white p-1 text-sm max-w-md">Tvorba vizuálne atraktívneho a responzívneho webu, ktorý mení návštevníkov na budúcich majiteľov cez silný storytelling.</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-12 mx-4 md:mx-10 gap-5 mt-5">
                <div className="relative col-span-12 md:col-span-3 group overflow-hidden w-full h-[40vh] md:h-[60vh]">
                    <a href="/services/sprava-socialnych-sieti">
                        <div className="absolute w-full h-full">
                            <img src="./image/works_type/siete.webp" alt="" className=" parallax-img  w-full h-full  object-cover transition-transform duration-700 ease-out group-hover:scale-110 cursor-pointer" />
                        </div>
                        <div className="z-10 absolute bottom-5 md:bottom-10 mx-4 space-y-2  cursor-pointer">
                            <div className="bg-white p-1">
                                <h3 className="font-instrument text-2xl">Správa sociálnych sietí</h3>
                            </div>
                            <div className="bg-white p-1 text-sm max-w-md">Tvorba Reels a postov s využitím vlastnej profi techniky (kamery, drony), čo zaručuje vysokú vizuálnu úroveň bez externých dodávateľov.</div>
                        </div>
                    </a>
                </div>
                <div className="col-span-12 md:col-span-3 flex justify-center items-center h-[20vh] md:h-[60vh]">
                    <span className="text-center font-instrument text-3xl md:text-4xl uppercase">
                        Príbehy našich klientov vzbudili medzi zákazníkmi záujem a priniesli im dobré výsledky.
                    </span>
                </div>
                <div className="relative col-span-12 md:col-span-6 group overflow-hidden w-full h-[40vh] md:h-[60vh]">
                    <a href="/services/fyzicke-firemne-portfolia">
                        <div className="absolute w-full h-full">
                            <img src="./image/works_type/firemne_portfolio.webp" alt="" className=" parallax-img  w-full h-full  object-cover transition-transform duration-700 ease-out group-hover:scale-110 cursor-pointer" />
                        </div>
                        <div className="z-10 absolute bottom-5 md:bottom-10 mx-4 space-y-2  cursor-pointer">
                            <div className="bg-white p-1">
                                <h3 className="font-instrument text-2xl ">Fyzické firemné portfóliá (Knihy)</h3>
                            </div>
                            <div className="bg-white p-1 text-sm max-w-md">Transformácia firemnej identity do formy luxusných printových publikácií, ktoré budujú dôveryhodnosť pri osobných stretnutiach.</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-10 mx-4 md:mx-10 gap-5 mt-5">
                <div className="relative col-span-10 md:col-span-6 group overflow-hidden w-full h-[40vh] md:h-[60vh]">
                    <a href="/services/billboardy-ooh">
                        <div className="absolute w-full h-full">
                            <img src="./image/works_type/bilboardy.png" alt="" className=" parallax-img  w-full h-full  object-cover transition-transform duration-700 ease-out group-hover:scale-110 cursor-pointer" />
                        </div>
                        <div className="z-10 absolute bottom-5 md:bottom-10 mx-4 space-y-2  cursor-pointer">
                            <div className="bg-white p-1">
                                <h3 className="font-instrument text-2xl">Billboardy a OOH</h3>
                            </div>
                            <div className="bg-white p-1 text-sm max-w-md">Návrh grafiky, ktorá v mestskom šume vystúpi z davu a doručí jasné posolstvo v priebehu pár sekúnd.</div>
                        </div>
                    </a>
                </div>
                <div className="relative col-span-10 md:col-span-4 group overflow-hidden w-full h-[40vh] md:h-[60vh]">
                    <a href="/services/dronove-zabery-video-produkcia">
                        <div className="absolute w-full h-full">
                            <img src="./image/works_type/dron.webp" alt="" className=" parallax-img  w-full h-full  object-cover transition-transform duration-700 ease-out group-hover:scale-110 cursor-pointer" />
                        </div>
                        <div className="z-10 absolute bottom-5 md:bottom-10 mx-4 space-y-2  cursor-pointer">
                            <div className="bg-white p-1">
                                <h3 className="font-instrument text-2xl">Dronové zábery a video produkcia</h3>
                            </div>
                            <div className="bg-white p-1 text-sm max-w-md">Profesionálne dronové zábery, ktoré dodávajú projektom filmový rozmer a nový pohľad na priestor či architektúru.</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}