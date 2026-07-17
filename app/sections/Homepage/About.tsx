import GlowButton from "@/app/components/HoverButton";
export default function About() {
    return(
        <>
            <section className="bg-white md:pt-20">
                <div className="md:mx-10 flex flex-col md:flex-row justify-between ">
                    <div className="mx-4 flex flex-col justify-around">
                        <div className="w-full">
                            <h2 className="font-instrument text-3xl md:text-5xl uppercase">Sme marketingová spoločnosť, ktorá pomáha firmám zlepšovať ich výsledky.</h2>
                        </div>
                        <div className="md:ml-20 mt-5 md:mt-0">
                            <p className="text-left max-w-md text-center mt-5 text-sm ">Pomáhame firmám rásť v digitálnom svete. Tvoríme webové stránky, reklamu, branding, profesionálne videá, grafiku a obsah, ktorý premieňa návštevníkov na zákazníkov.</p>
                            <a href="/about">
                                <GlowButton
                                    className="
                                        mt-5 mb-5 md:mb-0 px-8 py-2 text-xl md:text-xl rounded-full bg-[#245372]/80 hover:bg-[#245372] transition text-white uppercase font-instrument cursor-pointer
                                    "
                                    >
                                    Prečítajte si o nás
                                </GlowButton>
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <img src="./image/about_image.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}