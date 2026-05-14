"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=1800&auto=format&fit=crop",
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [dragging, setDragging] = useState(false);
  const pointer = useRef({ x: 0, y: 0 });
  const moved = useRef(false);

  const goTo = (nextIndex: number) => {
    setTransitioning(true);
    window.setTimeout(() => {
      setIndex((nextIndex + slides.length) % slides.length);
      setTransitioning(false);
    }, 180);
  };

  useEffect(() => {
    if (dragging) return;
    const timer = window.setInterval(() => {
      goTo(index + 1);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [dragging, index]);

  return (
    <section
      className={`relative mx-auto mt-0 flex h-[50vh] min-h-[380px] touch-pan-y items-center justify-center overflow-hidden text-center text-white md:w-full ${
        dragging ? "cursor-grabbing" : "cursor-grab"
      } max-md:mt-3 max-md:aspect-[1.88/1] max-md:h-auto max-md:min-h-0 max-md:w-[calc(100%-32px)] max-md:items-stretch max-md:rounded-[18px]`}
      onPointerDown={(event) => {
        setDragging(true);
        moved.current = false;
        pointer.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerMove={(event) => {
        if (!dragging) return;
        const dx = event.clientX - pointer.current.x;
        const dy = event.clientY - pointer.current.y;
        if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) moved.current = true;
      }}
      onPointerUp={(event) => {
        if (!dragging) return;
        const dx = event.clientX - pointer.current.x;
        const dy = event.clientY - pointer.current.y;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
          goTo(index + (dx < 0 ? 1 : -1));
        }
        setDragging(false);
        window.setTimeout(() => {
          moved.current = false;
        }, 0);
      }}
      onPointerCancel={() => setDragging(false)}
    >
      <Image
        src={slides[index]}
        alt="Blits Pets shop hero"
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-opacity duration-300 ${
          transitioning ? "opacity-60" : "opacity-100"
        }`}
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/35 p-6 max-md:items-start max-md:bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.28)_72%,rgba(0,0,0,0.08))] max-md:p-[18px_18px_26px] max-md:text-left">
        <span className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#438342] max-md:mb-1 max-md:text-[0.54rem] max-md:tracking-[0.12em]">
          Blits Pets Collection 2026
        </span>
        <h1 className="mb-3 max-w-4xl text-[clamp(3.5rem,6vw,6rem)] font-normal leading-[1.1] max-md:mb-1.5 max-md:max-w-[12.8em] max-md:text-[clamp(1.18rem,6.1vw,1.72rem)] max-md:font-black max-md:leading-none">
          Happier Pets Start Here
        </h1>
        <p className="mb-6 text-sm font-normal uppercase tracking-[0.15em] text-white/90 max-md:mb-3 max-md:max-w-[15.5em] max-md:text-[clamp(0.56rem,2.5vw,0.72rem)] max-md:tracking-[0.03em]">
          Food, medicine, cages, and accessories
        </p>
        <Link
          href="/shop"
          className="brand-button rounded-none max-md:rounded-full max-md:px-5 max-md:py-2.5 max-md:text-[0.62rem]"
          onClick={(event) => {
            if (moved.current) event.preventDefault();
          }}
        >
          Shop Now
        </Link>
      </div>
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3 max-md:bottom-2 max-md:gap-2">
        {slides.map((slide, dotIndex) => (
          <button
            key={slide}
            type="button"
            aria-label={`Show hero slide ${dotIndex + 1}`}
            onClick={(event) => {
              event.stopPropagation();
              goTo(dotIndex);
            }}
            className={`h-2 rounded-full transition-all max-md:h-1.5 ${
              dotIndex === index
                ? "w-6 bg-[#057429] max-md:w-4"
                : "w-2 bg-white/40 max-md:w-1.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
