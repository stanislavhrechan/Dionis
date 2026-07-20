import Hero from "../sections/Sluzbypage/Hero";
import Sections from "../sections/Sluzbypage/Sections";
import Footer from "../components/Footer";
export default function Works() {
  return (
    <main>
      <Hero/>
      <Sections/>
        <section className="pt-10 md:pt-20 pb-10 text-center relative bg-white">
          <h3 className="text-xl md:text-3xl mx-auto max-w-sm md:max-w-5xl font-instrument text-center">“Spolu s tímom Dionis pristupujeme ku každému klientovi individuálne a vytvárame stratégie na mieru, ktoré odrážajú jeho jedinečné ciele a víziu. Našou prioritou nie je len odviesť kvalitnú prácu, ale prinášať reálny rast, hodnotu a dlhodobý úspech.“</h3>
          <p className="font-instrument text-xl md:text-xl mt-3">Maxim Troščák<br /></p>
          <span className="uppercase font-dm-mono text-black/85 text-xs">Spolumajiteľ</span>
        </section>
        <Footer></Footer>
    </main>
  );
}