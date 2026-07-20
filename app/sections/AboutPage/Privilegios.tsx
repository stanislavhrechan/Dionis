export default function Privilegios() {
    return (
        <>
            <section className="relative mt-10 flex flex-col mx-4 md:mx-10">
                <h2 className="font-instrument text-2xl md:text-5xl uppercase mt-15 max-w-3xl">
                    Zásady klienta, ktoré<br />formujú každé naše rozhodnutie
                </h2>
                <div className="flex flex-col md:flex-row justify-between w-full md:mt-10">
                    <div className="flex md:w-2/4 flex-col md:mx-20">
                        <div className="border border-black/15 border-b-0 border-l-0 border-r-0 mt-5 md:mt-10 pt-8">
                            <h3 className="font-instrument text-4xl mb-2">Transparentnosť</h3>
                            <p className="text-sm max-w-lg">Hovoríme otvorene o tom, čo funguje a čo nie. Nesľubujeme nemožné ani nepredávame ilúzie. Radšej nastavíme reálne očakávania a doručíme výsledky.</p>
                        </div>
                        <div className="border border-black/15 border-b-0 border-l-0 border-r-0 mt-5 md:mt-10 pt-8">
                            <h3 className="font-instrument text-4xl mb-2">Kreativita s cieľom</h3>
                            <p className="text-sm max-w-lg">Každý dizajn, video, fotografia či webová stránka má jasný dôvod. Netvoríme pre efekt, ale preto, aby značka zaujala, budovala dôveru a prinášala nové príležitosti.</p>
                        </div>
                        <div className="border border-black/15 border-b-0 border-l-0 border-r-0 mt-5 md:mt-10 pt-8">
                            <h3 className="font-instrument text-4xl mb-2">Postavené na dátach</h3>
                            <p className="text-sm max-w-lg">Nenaháňame sa za zobrazeniami ani za „márnivými“ metrikami. Sledujeme zmysluplné signály, vysvetľujeme ich význam a promptne robíme úpravy. Každé rozhodnutie musí prinášať skutočnú obchodnú hodnotu a nie slúžiť len ako nástroj povrchnej iluzii.</p>
                        </div>
                        <div className="border border-black/15  border-l-0 border-r-0 mt-5 md:mt-10 py-8">
                            <h3 className="font-instrument text-4xl mb-2">Spolupráca</h3>
                            <p className="text-sm max-w-lg">Váš úspech berieme ako vlastný. Nie sme len dodávateľ služieb – sme partner, ktorý premýšľa nad vaším podnikaním a hľadá riešenia s dlhodobou hodnotou.</p>
                        </div>
                    </div>
                   <div className="">
                        <div className="sticky top-20">
                        <img
                            src="/image/about_about.jpg"
                            alt=""
                            className="
                            w-[450px]
                            object-cover
                            "
                        />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}