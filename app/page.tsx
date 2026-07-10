import Hero from "./sections/Homepage/Hero";
import About from "./sections/Homepage/About";
import ServicesStack from "./components/ServicesScroll";
import RevealFooter from "./sections/Homepage/RevealFooter";
import CTA from "./sections/CTA";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main>
        <Hero/>
        <About/>
        <section className="pt-10 md:pt-20 pb-10 text-center relative bg-white">
          <h3 className="text-2xl md:text-3xl mx-auto max-w-sm md:max-w-5xl font-instrument text-center">“V Dionise pristupujeme ku každému klientovi individuálne. Každá zákazka je pre nás jedinečná – a práve v tom spočíva krása našej práce. Spolu s celým tímom urobíme maximum pre to, aby sme stopercentne splnili vaše požiadavky a dodali produkt v tej najvyššej kvalite. ”</h3>
          <p className="font-instrument text-2xl md:text-xl mt-3">Samuel  Stesňák<br /></p>
          <span className="uppercase font-dm-mono text-black/85 text-xs">Spolumajiteľ</span>
        </section>
        <ServicesStack/>
        <section className="relative min-h-[50vh] md:h-screen bg-white">
          <div className="absolute inset-0">
            <img
              src="./image/home_bg_privilegios.webp"
              alt=""
              className="w-full h-full object-cover blur-xl"
            />
          </div>

          <div className="w-full  absolute md:justify-center bottom-1/2 translate-y-1/2 flex gap-10 z-10 overflow-x-auto pb-2">
            <div className="w-80 h-80 shrink-0 bg-white p-4 overflow-hidden">
              <span className="font-instrument text-6xl">01</span>
              <h4 className="font-instrument text-3xl mb-5 mt-5">Stratégia, ktorá prináša výsledky</h4>
              <p className="text-sm">Každý projekt začína dôkladným pochopením vášho podnikania. Navrhujeme riešenia, ktoré posilňujú vašu značku, oslovujú správnych zákazníkov a premieňajú návštevnosť na reálne obchodné príležitosti.</p>
            </div>
           <div className="w-80 h-80 shrink-0 bg-white p-4 overflow-hidden">
              <span className="font-instrument text-6xl">02</span>
              <h4 className="font-instrument text-3xl mb-5 mt-5">Kompletné kreatívne služby pod jednou strechou</h4>
              <p className="text-sm">Tvoríme moderné webové stránky, reklamné bannery, firemnú identitu, profesionálne fotografie, videá z dronu aj marketingový obsah. Všetko navrhujeme tak, aby spolu vytváralo silnú a dôveryhodnú značku.</p>
            </div>
           <div className="w-80 h-80 shrink-0 bg-white p-4 overflow-hidden">
              <span className="font-instrument text-6xl">03</span>
              <h4 className="font-instrument text-3xl mb-5 mt-5">Partnerstvo, na ktoré sa môžete spoľahnúť</h4>
              <p className="text-sm">Nie sme len dodávateľ. Sme partner, ktorý s vami dlhodobo spolupracuje, prináša nové nápady, reaguje na potreby vášho podnikania a pomáha vám rásť v digitálnom prostredí.</p>
            </div>
            <div className="w-80 h-80 shrink-0 bg-white p-4 overflow-hidden">
              <span className="font-instrument text-6xl">04</span>
              <h4 className="font-instrument text-3xl mb-5 mt-5">Výsledky, ktoré prichádzajú rýchlo</h4>
              <p className="text-sm">Výsledky našej práce budú viditeľné už v priebehu niekoľkých týždňov; vytvárame produkty a riešenia navrhnuté tak, aby prinášali výsledky.</p>
            </div>
          </div>
        </section>
        <CTA></CTA>
        <Footer></Footer>
    </main>
  );
}