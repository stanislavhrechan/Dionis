import { notFound } from "next/navigation";
import { services } from "../services";
import HeroSlug from "@/app/sections/Sluzbypage/HeroSlug";
import Footer from "@/app/components/Footer";
import CTA from "@/app/sections/CTA";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;


  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }
 
  return (
    <>
    
    <HeroSlug service={service} />
    <section className="my-5">
        <img src={service.img} alt="" className=""/>
    </section>
    <section className="mx-auto max-w-4xl">
        <div className="mx-4 md:mx-0 md:mt-10">
            <h2 className="text-3xl md:text-5xl uppercase  font-instrument ">POPIS</h2>
            <p className="md:ml-10 whitespace-pre-line text-sm">{service.opis}</p>
        </div>
        <div className="mx-4 md:mx-0 mt-5 md:mt-10 mb-10 md:mb-30">
            <h2 className="text-3xl md:text-5xl uppercase  font-instrument ">STRATÉGIA</h2>
            <p className="md:ml-10 whitespace-pre-line text-sm">{service.stategy}</p>
        </div>
    </section>
    <CTA></CTA>
    <Footer></Footer>
    </>
  );
}