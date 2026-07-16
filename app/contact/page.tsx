import Hero from "../sections/Contact/Hero";
import ContactForm from "../sections/Contact/ContactMain";
import Footer from "../components/Footer";
export default function Contact() {
  return (
    <main>
        <Hero></Hero>
        <ContactForm/>
        <section className="pt-10 md:pt-20 pb-10 text-center relative bg-white">
          <h3 className="text-2xl md:text-3xl mx-auto max-w-sm md:max-w-5xl font-instrument text-center">“Robíme veci, ktoré dávajú zmysel. Počúvame, premýšľame a tvoríme tak, aby výsledok stál za to – nielen na prvý pohľad, ale aj o mesiace neskôr. Každý projekt je pre nás príležitosť ukázať, že kvalitná práca a osobný prístup stále niečo znamenajú. Veríme, že najlepšie výsledky vznikajú vtedy, keď si s klientom rozumieme a ťaháme za jeden povraz. Ďakujeme všetkým, ktorí nám dôverujú – je to pre nás motivácia robiť veci ešte lepšie.”</h3>
          <p className="font-instrument text-2xl md:text-xl mt-3">Tobias Lorencovič<br /></p>
          <span className="uppercase font-dm-mono text-black/85 text-xs">Spolumajiteľ</span>
        </section>
        <Footer></Footer>
    </main>
  );
}