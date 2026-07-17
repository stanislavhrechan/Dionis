import HeroParticles from "@/app/components/HeroParticles";
import GlowButton from "@/app/components/HoverButton";
import Marquee from "react-fast-marquee";

export default function Hero() {
    return (
        <>
        <section className="relative mt-30 md:mt-0 md:pt-20 flex flex-col">
            <h1 className="font-instrument text-4xl md:text-6xl uppercase text-center md:leading-[0.6]">
                <div className="flex items-center justify-center gap-4">
                    <span>Digitálny</span>

                    <img
                    src="/image/header_logo 1.png"
                    alt=""
                    className="hidden md:block w-24 z-20"
                    />

                    <span>marketing</span>
                </div>

                <span className="">
                    ktorý podporuje rast vášho podnikania
                </span>
            </h1>
            <p className="text-center mt-4 md:mt-8 mx-auto max-w-xs md:max-w-2xl leading-[1.2] text-sm text-black/85">Pomáhame firmám zvyšovať viditeľnosť, získavať nových zákazníkov a budovať silnú značku pomocou efektívnych marketingových stratégií.</p>
            <div className="flex justify-center z-20">
                <a href="/contact">
                    <GlowButton
                    className="
                        mt-4 px-12 py-1 md:text-2xl rounded-full bg-[#245372] text-white uppercase font-instrument cursor-pointer
                    "
                    >
                    Ozvite sa nÁm
                    </GlowButton>
                </a>
            </div>
            <HeroParticles />

        </section>

        <section className="py-5 md:py-10 overflow-hidden">
            <div className="flex gap-2 mx-4 md:mx-10 items-center mb-8">
                <span className="font-dm-mono uppercase text-xs md:text-sm text-black/85 whitespace-nowrap">
                    Spoločnosti, ktoré nám dôverujú a aktívne s nami spolupracujú
                </span>
                <div className="h-px flex-1 bg-black/15"></div>
            </div>

            <Marquee
                speed={35}
                gradient
                gradientColor="#fff"
                gradientWidth={120}
                autoFill
            >

                <img src="/image/company_who_trust/benard.svg" className="h-11 mx-10 opacity-80" />
                <img src="/image/company_who_trust/sportova-hala.svg" className="h-12 mx-10 opacity-80" />
                <img src="/image/company_who_trust/camasatra.svg" className="h-8 mx-10 opacity-80" />
                <img src="/image/company_who_trust/phodem.svg" className="h-12 mx-10 opacity-80" />
                <img src="/image/company_who_trust/cistota.png" className="h-24 mx-10 opacity-80" />
                <img src="/image/company_who_trust/tatra.png" className="h-24 mx-10 opacity-80" />

            </Marquee>
        </section>
        </>
    );
}