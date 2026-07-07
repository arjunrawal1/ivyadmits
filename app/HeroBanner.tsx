"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import posthog from "posthog-js";

const heroVideos = [
  { src: "/hero-videos/acceptance-reaction-01.mp4", offset: 0, delay: 250 },
  { src: "/hero-videos/acceptance-reaction-02.mp4", offset: 0.7, delay: 650 },
  { src: "/hero-videos/acceptance-reaction-03.mp4", offset: 1.3, delay: 1050 },
  { src: "/hero-videos/acceptance-reaction-05.mp4", offset: 2.5, delay: 1450 },
  { src: "/hero-videos/acceptance-reaction-06.mp4", offset: 1, delay: 1850 },
  { src: "/hero-videos/acceptance-reaction-07.mp4", offset: 1.6, delay: 2250 },
];

export default function HeroBanner() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const cleanups = videoRefs.current.map((video, index) => {
      if (!video) {
        return undefined;
      }

      const offset = heroVideos[index]?.offset ?? 0;
      const preparePlayback = () => {
        if (Number.isFinite(video.duration) && video.duration > offset) {
          video.currentTime = offset;
        }

        void video.play().catch(() => {
          // Browsers can defer autoplay in low-power modes.
        });
      };

      if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
        preparePlayback();
        return undefined;
      }

      video.addEventListener("loadedmetadata", preparePlayback, { once: true });

      return () => {
        video.removeEventListener("loadedmetadata", preparePlayback);
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup?.());
    };
  }, []);

  return (
    <section className="relative min-h-[720px] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=85"
          alt="Students walking on a university campus"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#06120f]/45" />
      </div>

      <div
        aria-label="Student acceptance reaction highlights"
        className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-between gap-[clamp(6px,1vw,18px)] px-[clamp(10px,2vw,36px)]"
      >
        {heroVideos.map((video, index) => (
          <div
            key={video.src}
            className="hero-video-reveal min-w-0 flex-1 overflow-hidden border border-white/25 bg-black/40 shadow-2xl shadow-black/35"
            style={{ "--hero-delay": `${video.delay}ms` } as CSSProperties}
          >
            <video
              ref={(element) => {
                videoRefs.current[index] = element;
              }}
              src={video.src}
              aria-label={`Acceptance reaction clip ${index + 1}`}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="aspect-[9/16] w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="hero-finale-overlay pointer-events-none absolute inset-0 z-20 bg-[#06120f]/76" />

      <div className="hero-copy-reveal relative z-30 mx-auto flex min-h-[720px] max-w-5xl flex-col items-center justify-center px-5 py-20 text-center text-white lg:px-8">
        <p className="mb-5 inline-flex border border-white/30 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#d6f5e8]">
          College admissions consulting
        </p>
        <h1 className="max-w-5xl text-5xl font-black leading-[0.96] tracking-normal sm:text-6xl lg:text-7xl">
          Ivy-caliber guidance for standout applications.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/84">
          IvyAdmits helps ambitious students turn strong grades, activities,
          essays, and goals into a focused application strategy for highly
          selective colleges.
        </p>
        <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href="#contact"
            onClick={() => posthog.capture("hero_primary_cta_clicked")}
            className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#f3c64e] px-7 text-sm font-black text-[#10201b] transition hover:bg-[#ffd762]"
          >
            Start your admissions plan
          </a>
          <a
            href="#services"
            onClick={() => posthog.capture("hero_secondary_cta_clicked")}
            className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/35 px-7 text-sm font-extrabold text-white transition hover:bg-white/10"
          >
            Explore services
          </a>
        </div>
      </div>
    </section>
  );
}
