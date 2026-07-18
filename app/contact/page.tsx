import Hero from "../sections/Contact/Hero";
import ContactForm from "../sections/Contact/ContactMain";
import Footer from "../components/Footer";
export default function Contact() {
  return (
    <main>
        <Hero></Hero>
        <ContactForm/>
        <section className="flex flex-wrap justify-center gap-12 py-10">
          <div className="flex flex-col items-center text-center">
            <img
              src="/image/people/Samuel_1.png"
              alt="Samuel Stesňák"
              className="w-[350px]"
            />

            <span className="mt-5 font-instrument text-3xl">
              Samuel Stesňák
            </span>

            <span className="uppercase text-xs text-center">
              Strategický rozvoj, investície <br />
              a značka
            </span>

            <a
              href="tel:+421919084501"
              className="uppercase text-lg md:mt-6 font-mono underline"
            >
              +421 919 084 501
            </a>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/image/people/Lorencovic.png"
              alt="Tobias Lorencovič"
              className="w-[350px]"
            />

            <span className="mt-5 font-instrument text-3xl">
              Tobias Lorencovič
            </span>

            <span className="uppercase text-xs text-center">
              Vývoj a realizácia projektov
            </span>

            <a
              href="tel:+421944496743"
              className="uppercase text-lg md:mt-13 font-mono underline"
            >
              +421 944 496 743
            </a>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="/image/people/Troscak_1.png"
              alt="Maxim Troščák"
              className="w-[350px]"
            />

            <span className="mt-5 font-instrument text-3xl">
              Maxim Troščák
            </span>

            <span className="uppercase text-xs text-center">
              Manažér externých vzťahov,<br />
              koordinátor marketingových<br /> stratégií
            </span>

            <a
              href="tel:+421902799715"
              className="uppercase text-lg mt-2 font-mono underline"
            >
              +421 902 799 715
            </a>
          </div>

          
        </section>
        <section className="pt-10 md:pt-20 pb-10 text-center relative bg-white">
          <h3 className="text-2xl md:text-3xl mx-auto max-w-sm md:max-w-5xl font-instrument text-center">“Robíme veci, ktoré dávajú zmysel. Počúvame, premýšľame a tvoríme tak, aby výsledok stál za to – nielen na prvý pohľad, ale aj o mesiace neskôr. Každý projekt je pre nás príležitosť ukázať, že kvalitná práca a osobný prístup stále niečo znamenajú. Veríme, že najlepšie výsledky vznikajú vtedy, keď si s klientom rozumieme a ťaháme za jeden povraz. Ďakujeme všetkým, ktorí nám dôverujú – je to pre nás motivácia robiť veci ešte lepšie.”</h3>
          <p className="font-instrument text-2xl md:text-xl mt-3">Tobias Lorencovič<br /></p>
          <span className="uppercase font-dm-mono text-black/85 text-xs">Spolumajiteľ</span>
        </section>
        <Footer></Footer>
    </main>
  );
}