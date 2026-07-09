"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const people = [
    {
        name: "Samuel Stesňák",
        role: "Spolumajiteľ",
        image: "/image/people/Samuel_1.png",
        quote:
            "V Dionise pristupujeme ku každému klientovi individuálne. Každá zákazka je pre nás jedinečná – a práve v tom spočíva krása našej práce. Spolu s celým tímom urobíme maximum pre to, aby sme stopercentne splnili vaše požiadavky a dodali produkt v tej najvyššej kvalite.",
    },
    {
        name: "Maxim Troščák",
        role: "Spolumajiteľ",
        image: "/image/people/Troscak_1.png",
        quote:
            "Dionis pre mňa znamená kreativitu, disciplínu a merateľné výsledky. Každému projektu venujeme maximum energie, skúseností a pozornosti k detailom, pretože veríme, že skvelé výsledky nevznikajú náhodou. “ Spolu s tímom Dionis pristupujeme ku každému klientovi individuálne a vytvárame stratégie na mieru, ktoré odrážajú jeho jedinečné ciele a víziu. Našou prioritou nie je len odviesť kvalitnú prácu, ale prinášať reálny rast, hodnotu a dlhodobý úspech.",
    },
    {
        name: "Tobias Lorencovič",
        role: "Spolumajiteľ",
        image: "/image/people/Lorencovic_1.png",
        quote:
            "V Dionise pristupujeme ku každému klientovi individuálne. Každá zákazka je pre nás jedinečná – a práve v tom spočíva krása našej práce. Spolu s celým tímom urobíme maximum pre to, aby sme stopercentne splnili vaše požiadavky a dodali produkt v tej najvyššej kvalite.",
    },
];


export default function PeopleSection(){

    const section = useRef<HTMLDivElement>(null);
    const cards = useRef<HTMLDivElement[]>([]);


    useLayoutEffect(()=>{

    const ctx = gsap.context(()=>{

        const items = cards.current;


        items.forEach((card,index)=>{

            if(index === 0) return;


            gsap.fromTo(
                card,
                {
                    y:"120%",
                },
                {
                    y:"0%",
                    ease:"none",
                    scrollTrigger:{
                        trigger:section.current,
                        start:`${index * 22}% top`,
                        end:`${(index + 1) * 22}% top`,
                        scrub:1,
                    }
                }
            );


        });


    },section);


    return ()=>ctx.revert();


},[]);



    return (

        <section
            ref={section}
            className="
            md:h-[300vh]
            h-[240vh]
            "
        >

            <div
                className="
                sticky
                top-0
                h-screen
                flex 
                justify-center
                px-5
                "
            >

                <div
                    className="
                    relative
                    w-full
                    max-w-7xl
                    h-[760px]
                    md:h-[700px]
                    overflow-hidden
                    "
                >


                {
                    people.map((person,index)=>(

                        <div

                        key={person.name}

                        ref={(el)=>{
                            if(el) cards.current[index]=el
                        }}

                        className="
                        absolute
                        inset-0

                        flex
                        flex-col
                        md:flex-row

                        gap-8
                        md:gap-20

                        items-start
                        md:items-center

                        bg-white
                        "

                        >


                            <div className="
                            relative
                            w-full
                            md:w-[340px]
                            h-[480px]
                            shrink-0
                            ">

                                <Image
                                src={person.image}
                                alt=""
                                fill
                                className="
                                object-cover
                                "
                                />


                                <div className="
                                absolute
                                bottom-5
                                left-5
                                text-white
                                ">

                                    <h3 className="
                                    font-instrument
                                    text-3xl
                                    ">
                                        {person.name}
                                    </h3>


                                    <p className="
                                    uppercase
                                    text-xs
                                    ">
                                        {person.role}
                                    </p>


                                </div>


                            </div>



                            <p className="
                            font-instrument
                            text-xl md:text-2xl
                            leading-tight
                            italic
                            max-w-3xl
                            mb-10
                            ">
                                “ {person.quote} ”
                            </p>



                        </div>


                    ))
                }


                </div>

            </div>


        </section>

    )

}