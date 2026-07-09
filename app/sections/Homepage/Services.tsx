import GlowButton from "@/app/components/HoverButton";
import { link } from "fs";
type ServiceCardProps = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
};

export default function ServiceCard({
  title,
  description,
  tags,
  image,
  link
}: ServiceCardProps) {
  return (
    <section className="relative w-full bg-[#EBEBEB] border-t border-t-black/35 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-5 md:gap-10 p-5 md:p-10 min-h-[500px] bg-white">
        <div className="relative overflow-hidde h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex flex-col justify-between md:max-w-[60%] md:mt-10">
              <div>
                <h2 className="font-instrument uppercase text-xl md:text-3xl leading-none">
                  {title}
                </h2>
                <p className="mt-4 text-sm md:text-md max-w-2xl"> {description} </p>
                <div className="mt-2 md:mt-5 flex gap-2 flex-wrap">
                  {tags.map((tag, index) => (
                    <span
                      key={`${tag}-${index}`}
                      className="bg-[#F5F2E8] px-4 py-1 uppercase text-black font-dm-mono font-light text-sm md:text-md"> {tag} </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <a href={link}>
                  <GlowButton
                  className="
                      mt-5 md:mt-10 w-fit   px-8 py-2 md:text-lg rounded-full bg-[#245372] text-white uppercase font-instrument cursor-pointer
                  "
                  >
                  Prečítajte si viac
                </GlowButton>
              </a>
            </div>
        </div>
      </div>
    </section>
  );
}