"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type HelpItem = {
  title: string;
  subtitle: string;
  image: string;
};

type HelpCarouselProps = {
  items: HelpItem[];
};

export default function HelpCarousel({ items }: HelpCarouselProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const interactionTimer = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const scrollToCard = useCallback((index: number) => {
    const rail = railRef.current;
    const card = cardRefs.current[index];

    if (!rail || !card) {
      return;
    }

    const left = card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2;
    rail.scrollTo({ left, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const updateActiveCard = () => {
      const railBox = rail.getBoundingClientRect();
      const railCenter = railBox.left + railBox.width / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) {
          return;
        }

        const cardBox = card.getBoundingClientRect();
        const cardCenter = cardBox.left + cardBox.width / 2;
        const distance = Math.abs(railCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateActiveCard();
    rail.addEventListener("scroll", updateActiveCard, { passive: true });
    window.addEventListener("resize", updateActiveCard);

    return () => {
      rail.removeEventListener("scroll", updateActiveCard);
      window.removeEventListener("resize", updateActiveCard);
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || isInteracting) {
      return;
    }

    const interval = window.setInterval(() => {
      scrollToCard((activeIndex + 1) % items.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [activeIndex, isInteracting, items.length, scrollToCard]);

  useEffect(() => {
    return () => {
      if (interactionTimer.current) {
        window.clearTimeout(interactionTimer.current);
      }
    };
  }, []);

  const pauseForInteraction = () => {
    setIsInteracting(true);

    if (interactionTimer.current) {
      window.clearTimeout(interactionTimer.current);
    }

    interactionTimer.current = window.setTimeout(() => {
      setIsInteracting(false);
    }, 4800);
  };

  return (
    <div className="help-focus-carousel relative mt-12">
      <div
        ref={railRef}
        className="help-focus-rail flex snap-x snap-mandatory gap-5 overflow-x-auto pb-8 pt-4 sm:gap-6"
        onMouseDown={pauseForInteraction}
        onTouchStart={pauseForInteraction}
        onWheel={pauseForInteraction}
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={item.title}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className={`help-focus-card relative h-[520px] w-[78vw] max-w-[350px] shrink-0 snap-center overflow-hidden rounded-[8px] bg-[#111b17] shadow-[0_24px_70px_rgba(24,33,31,0.16)] transition duration-700 ease-out sm:h-[560px] sm:w-[350px] ${
                isActive
                  ? "scale-100 opacity-100"
                  : "scale-[0.92] opacity-55 blur-[0.5px]"
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              <Image
                src={item.image}
                alt=""
                fill
                priority={index === 0}
                sizes="(min-width: 640px) 350px, 78vw"
                className={`object-cover transition duration-700 ease-out ${
                  isActive ? "scale-[1.03]" : "scale-100"
                }`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#06120f]/88 via-[#06120f]/18 to-transparent transition duration-700 ${
                  isActive ? "opacity-100" : "opacity-75"
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3c64e]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-2xl font-black leading-7 tracking-normal sm:text-3xl sm:leading-9">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/78 sm:text-base sm:leading-7">
                  {item.subtitle}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-5 lg:px-8">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-9 bg-[#0b5d4a]"
                : "w-2.5 bg-[#18211f]/18 hover:bg-[#18211f]/34"
            }`}
            aria-label={`Show ${item.title}`}
            onClick={() => {
              pauseForInteraction();
              scrollToCard(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
