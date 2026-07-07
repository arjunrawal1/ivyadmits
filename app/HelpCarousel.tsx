"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import posthog from "posthog-js";

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
  const [activeLoopIndex, setActiveLoopIndex] = useState(items.length * 2);
  const [isInteracting, setIsInteracting] = useState(false);
  const loopedItems = Array.from({ length: 5 }, () => items).flat();
  const initialItemIndex = Math.floor(items.length / 2);
  const initialLoopIndex = items.length * 2 + initialItemIndex;

  const scrollToCard = useCallback((index: number) => {
    const rail = railRef.current;
    const card = cardRefs.current[index];

    if (!rail || !card) {
      return;
    }

    const left = card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2;
    rail.scrollTo({ left, behavior: "smooth" });
  }, []);

  const jumpToCard = useCallback((index: number) => {
    const rail = railRef.current;
    const card = cardRefs.current[index];

    if (!rail || !card) {
      return;
    }

    const left = card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2;
    rail.scrollTo({ left, behavior: "instant" });
  }, []);

  const recenterFromCard = useCallback(
    (currentIndex: number, recenteredIndex: number) => {
      const rail = railRef.current;
      const currentCard = cardRefs.current[currentIndex];
      const recenteredCard = cardRefs.current[recenteredIndex];

      if (!rail || !currentCard || !recenteredCard) {
        return;
      }

      const left = rail.scrollLeft + recenteredCard.offsetLeft - currentCard.offsetLeft;
      rail.scrollTo({ left, behavior: "instant" });
    },
    [],
  );

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

      setActiveIndex(closestIndex % items.length);
      setActiveLoopIndex(closestIndex);

      if (closestIndex < items.length || closestIndex >= items.length * 4) {
        const recenteredIndex = items.length * 2 + (closestIndex % items.length);

        window.requestAnimationFrame(() => {
          setActiveLoopIndex(recenteredIndex);
          recenterFromCard(closestIndex, recenteredIndex);
        });
      }
    };

    jumpToCard(initialLoopIndex);
    setActiveIndex(initialItemIndex);
    setActiveLoopIndex(initialLoopIndex);
    rail.addEventListener("scroll", updateActiveCard, { passive: true });
    window.addEventListener("resize", updateActiveCard);

    return () => {
      rail.removeEventListener("scroll", updateActiveCard);
      window.removeEventListener("resize", updateActiveCard);
    };
  }, [
    initialItemIndex,
    initialLoopIndex,
    items.length,
    jumpToCard,
    recenterFromCard,
  ]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || isInteracting) {
      return;
    }

    const interval = window.setInterval(() => {
      const currentLoopIndex = cardRefs.current.findIndex((card) => {
        if (!card || !railRef.current) {
          return false;
        }

        const railBox = railRef.current.getBoundingClientRect();
        const cardBox = card.getBoundingClientRect();
        const railCenter = railBox.left + railBox.width / 2;
        const cardCenter = cardBox.left + cardBox.width / 2;

        return Math.abs(railCenter - cardCenter) < cardBox.width / 2;
      });

      scrollToCard(
        (currentLoopIndex === -1 ? initialLoopIndex : currentLoopIndex) + 1,
      );
    }, 3200);

    return () => window.clearInterval(interval);
  }, [initialLoopIndex, isInteracting, scrollToCard]);

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
        {loopedItems.map((item, index) => {
          const isActive = index === activeLoopIndex;

          return (
            <article
              key={`${item.title}-${index}`}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className={`help-focus-card relative h-[520px] w-[78vw] max-w-[350px] shrink-0 snap-center overflow-hidden rounded-[8px] bg-[#111b17] transition duration-700 ease-out sm:h-[560px] sm:w-[350px] ${
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
                priority={index === initialLoopIndex}
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
                <h3 className="text-2xl font-black leading-7 tracking-normal sm:text-3xl sm:leading-9">
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
              scrollToCard(items.length * 2 + index);
              posthog.capture("help_carousel_card_selected", {
                card_title: item.title,
                card_index: index,
              });
            }}
          />
        ))}
      </div>
    </div>
  );
}
