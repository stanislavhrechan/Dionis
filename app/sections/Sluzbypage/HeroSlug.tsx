import Link from "next/link";

type RelatedService = {
  title: string;
  slug: string;
};

type HeroSlugProps = {
  service: {
    title: string;
    relatedServices?: readonly RelatedService[];
  };
};

export default function HeroSlug({ service }: HeroSlugProps) {
  return (
    <section className="relative mt-10 flex flex-col ">
      <h1 className="font-instrument text-4xl md:text-6xl uppercase text-center mx-auto max-w-4xl">
        {service.title}
      </h1>
      <div className="mx-10 flex justify-center md:justify-between items-center">
        {service.relatedServices && service.relatedServices.length > 0 && (
            <div className="mt-5 md:mt-12 flex flex-wrap justify-center gap-3">
            {service.relatedServices.map((item) => (
                <span
                key={item.slug}
                className="px-5 py-2 bg-[#F5F2E8] uppercase font-dm-mono text-xs"
                >
                {item.title}
                </span>
            ))}
            </div>
        )}
      </div>
      
    </section>
  );
}