import Hero from "../sections/AboutPage/Hero";
import Privilegios from "../sections/AboutPage/Privilegios";
import People from "../sections/AboutPage/People";
import CTA from "../sections/CTA";
import Footer from "../components/Footer";
export default function AboutUs() {
  return (
    <main>
        <Hero/>
        <Privilegios/>
        <People/>
        <CTA/>
        <Footer/>
    </main>
  );
}