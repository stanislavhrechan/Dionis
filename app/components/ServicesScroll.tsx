"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "../sections/Homepage/Services";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".stack-card");

    cards.forEach((card, i) => {
      const next = cards[i + 1];
      if (!next) return;

      gsap.to(card.querySelector(".card-overlay"), {
        backgroundColor: "rgba(0,0,0,0.25)",
        scrollTrigger: {
            trigger: card,
            start: "top top",
            end: "bottom top",
            scrub: true,
        },
        });
    });
  }, []);

  return (
    <>
      <div className="px-5 md:px-10 md:pt-10 pb-4 md:pb-12 bg-white">
        <h2 className="font-instrument text-2xl md:text-5xl md:max-w-5xl">Úspech nemeriame počtom zobrazení, ale umiestneniami, ktoré ovplyvňujú vašich kupujúcich, pomáhajú uzatvárať obchody a robia z vás lídra vo vašej kategórii.</h2>
      </div>
      <section ref={containerRef} className="relative w-full">

        <div className="stack-card sticky top-0 w-full">
          <ServiceCard
            title="Web pre developérsky projekt. Komerčné weby, firemné prezentácie a rezervačné systémy."
            description="Tvorba moderného, vizuálne atraktívneho a responzívneho webu, ktorý profesionálne prezentuje developerský projekt, podporuje predaj a premieňa návštevníkov na budúcich klientov."
            tags={['Optimalizácia', 'SEO']}
            image="/image/works_type/web.webp"
            link="/services/web-pre-developersky-projekt"
          />
        </div>

        <div className="stack-card sticky top-0 w-full">
          <ServiceCard
            title="Billboardy a OOH (Outdoor) reklama. Firemné tričká."
            description="Od kreatívneho konceptu a zachytenia podkladov vlastnou technikou až po technickú prípravu pre bezchybnú veľkoformátovú tlač. Vytvárame vizuály pre billboardy a OOH (outdoor) reklamu, ktoré upútajú pozornosť v mestskom priestore a posilnia vašu značku."
            tags={["Vysoko kvalitná grafika"]}
            image="/image/works_type/benard.png"
            link="/services/billboardy-ooh"
          />
        </div>

        <div className="stack-card sticky top-0 w-full">
          <ServiceCard
            title="Fyzické firemné portfóliá (Knihy)"
            description="Premeníme vašu značku do podoby prémiovej tlačenej publikácie, ktorá vytvára silný prvý dojem pri osobných stretnutiach."
            tags={["Branding", "Print", "Dizajn"]}
            image="/image/works_type/firemne_portfolio.webp"
            link="/services/fyzicke-firemne-portfolia"
          />
        </div>

        <div className="stack-card sticky top-0 w-full">
          <ServiceCard
            title="Úspešné marketingové kampane"
            description="Navrhujeme a realizujeme marketingové kampane, ktoré spájajú kreatívny obsah so strategickými cieľmi vašej firmy."
            tags={["Marketing", "Stratégia"]}
            image="/image/works_type/spolupraca.webp"
            link="/services/marketingove-kampane"
          />
        </div>

        <div className="stack-card sticky top-0 w-full">
          <ServiceCard
            title="Správa sociálnych médií"
            description="Každý projekt začína analýzou značky, cieľovej skupiny a komunikačných cieľov. Na základe týchto informácií pripravujeme obsahovú stratégiu, kreatívny smer a vizuálny štýl, ktorý odráža charakter firmy. "
            tags={["UI/UX dizajn", "Marketingové kampane"]}
            image="/image/works_type/siete.webp"
            link="/services/sprava-socialnych-media"
          />
        </div>

        <div className="stack-card sticky top-0 w-full">
          <ServiceCard
            title="Dronové zábery a video produkcia"
            description="Vytvárame profesionálne video a letecké zábery, ktoré prinášajú dynamický pohľad na vaše projekty, priestory alebo produkty. "
            tags={["Video", "Dron", "Produkcia"]}
            image="/image/works_type/dron.jpg"
            link="/services/dronove-zabery-video-produkcia"
          />
        </div>
      </section>
      <a href="/services">
        <button className="w-full px-5 md:px-10 py-5 mb-5 bg-[#F5F2E8] text-left border-t border-t-black/15 hover:rounded-full cursor-pointer hover:bg-[#245372] hover:text-white transition duration-250">
          <span className="font-instrument text-2xl uppercase">POzriet’ Všetky služby</span>
        </button>
      </a>
    </>
  );
}