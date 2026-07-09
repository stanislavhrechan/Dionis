import Link from "next/link";

type Props = {
  href: string;
  children: string;
};

export default function AnimatedLink({ href, children }: Props) {
  return (
    <Link href={href} className="group relative inline-block">
      {children.split("").map((char, index) => (
        <span
          key={index}
          className="relative inline-block overflow-hidden"
        >
          <span
            className="block transition-transform duration-500 text-[16px] ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${index * 30}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>

          <span
            className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full text-[16px]"
            style={{ transitionDelay: `${index * 30}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
       <span className="absolute bottom-0 left-0 h-[0.8px] w-full bg-[#245372] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

    </Link>
  );
}