import Image from "next/image";
import { testimonials } from "@/lib/home-sections";

export function Testimonials() {
  const looped = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#FAFAF9] py-12">
      <div className="container-page">
        <h2 className="text-3xl font-black text-[#0B3221]">
          Loved by pet parents
        </h2>
      </div>
      <div className="mt-8 overflow-hidden">
        <div className="flex w-max animate-[testimonialScroll_45s_linear_infinite] gap-5 px-8 hover:[animation-play-state:paused]">
          {looped.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="flex min-h-[350px] w-[380px] flex-col rounded-xl border border-[#E6EAE6] bg-[#FDFEFD] p-7 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="h-[60px] w-[60px] rounded-full object-cover"
                />
                <div>
                  <strong className="block text-lg text-[#0B3221]">
                    {item.name}
                  </strong>
                  <span className="text-sm text-[#4F4F4F]">{item.role}</span>
                  <div className="mt-1 text-sm tracking-[0.18em] text-[#438342]">
                    {"*****"}
                  </div>
                </div>
              </div>
              <div className="relative mt-7 flex flex-1 flex-col">
                <div className="absolute -left-1 top-2 text-7xl leading-none text-[#EEF5EE]">
                  &ldquo;
                </div>
                <p className="relative z-10 mt-5 text-sm leading-7 text-[#4F4F4F]">
                  {item.text}
                </p>
                <span className="mt-auto self-center text-xs font-black uppercase tracking-[0.12em] text-[#438342]">
                  Read More
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
