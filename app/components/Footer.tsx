import AnimatedLink from "../components/AnimatedLink";
export default function Footer() {
    return(
        <footer className="relative z-10 bg-white flex flex-col gap-5 md:gap-0 text-black overflow-hidden">
            <div className="px-6 md:px-10 pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 w-full">
                    <div>
                        <div className="flex items-center gap-2 pb-2">
                        <span className="text-xs md:text-sm uppercase tracking-widest text-black/55 font-dm-mono">Odbornosť</span>
                        <div className="w-full bg-black/15 h-[0.8px]"></div>
                        </div>
                        <div className="flex md:flex-row flex-col gap-2 md:gap-20">
                            <ul className="space-y-2 text-sm uppercase font-instrument text-xl">
                            <li><AnimatedLink href="/services/fyzicke-firemne-portfolia">Fyzické firemné portfóliá</AnimatedLink></li>
                            <li><AnimatedLink href="/services/sprava-socialnych-sieti">Správa sociálnych médií</AnimatedLink></li>
                            <li><AnimatedLink href="/services/web-pre-developersky-projekt">Web tvorba na mieru</AnimatedLink></li>
                            <li><AnimatedLink href="/services/billboardy-ooh">Billboardy a OOH reklama</AnimatedLink></li>
                            </ul>
                            <ul className="space-y-2 text-sm uppercase font-instrument text-xl">
                            <li><AnimatedLink href="/services/dronove-zabery-video-produkcia">Dronove zabery a video</AnimatedLink></li>
                            <li><AnimatedLink href="/services/marketingove-kampane">MARKETINGOVE KAMPANE</AnimatedLink></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 pb-2">
                        <span className="text-xs md:text-sm  uppercase tracking-widest text-black/55 font-dm-mono">Info</span>
                        <div className="w-full bg-black/15 h-[0.8px]"></div>
                        </div>
                        <ul className="space-y-2 text-sm uppercase font-instrument text-xl">
                        <li><AnimatedLink href="/">Úvod</AnimatedLink></li>
                        <li><AnimatedLink href="/services">Služby</AnimatedLink></li>
                        <li><AnimatedLink href="/about">O nás</AnimatedLink></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-5">

                <div >
                    <div>
                    <div className="flex items-center gap-2 pb-2">
                        <span className="text-xs md:text-sm  uppercase tracking-widest text-black/55 font-dm-mono">Kontakt</span>
                        <div className="w-full bg-black/15 h-[0.8px]"></div>
                        </div>

                    <ul className="space-y-2 text-sm uppercase font-instrument text-xl">
                        <li><AnimatedLink href="https://www.instagram.com/dionis.marketing?igsh=OXp6ZDkzbnh0dHcy">Instagram</AnimatedLink></li>
                    </ul>
                    </div>

                </div>

                </div>

            </div>
            <div className="mt-auto pb-5">

                <div className="absolute bottom-0 blur-xl w-full h-60 bg-[linear-gradient(104.99deg,_rgba(72,0,242,0.2)_-20.98%,_rgba(24,84,174,0.2)_55.13%,_rgba(77,25,25,0.2)_131.97%)]" />
                <div
                    className="
                        relative
                        px-4
                        md:px-10
                    "
                >
                    <img
                        src="/image/logo_footer.svg"
                        alt=""
                        className=""
                    />
                </div>

                <div className="relative flex md:flex-row flex-col gap-2 w-full justify-between md:items-center z-10 px-6 md:px-10 mt-10">
                    <div className="flex justify-start md:gap-30">
                        <span className="text-sm  text-white text-[13px]">2026 Dionis. Všetky práva vyhradené.</span>
                    </div>
                    <div className="flex md:justify-end">
                        <span className="text-sm  text-white text-[13px]">Created By Dionis</span>
                    </div>
                </div>
            </div>
        </footer> 
    );
}