"use client";

import { useEffect, useRef } from "react";

const heroVideos = [
  { src: "/hero-videos/acceptance-reaction-01.mp4", offset: 0 },
  { src: "/hero-videos/acceptance-reaction-02.mp4", offset: 0.7 },
  { src: "/hero-videos/acceptance-reaction-03.mp4", offset: 1.3 },
  { src: "/hero-videos/acceptance-reaction-04.mp4", offset: 1.9 },
  { src: "/hero-videos/acceptance-reaction-05.mp4", offset: 2.5 },
  { src: "/hero-videos/acceptance-reaction-06.mp4", offset: 1 },
  { src: "/hero-videos/acceptance-reaction-07.mp4", offset: 1.6 },
];

export default function HeroVideoMosaic() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const cleanups = videoRefs.current.map((video, index) => {
      if (!video) {
        return undefined;
      }

      const offset = heroVideos[index]?.offset ?? 0;
      const staggerPlayback = () => {
        if (Number.isFinite(video.duration) && video.duration > offset) {
          video.currentTime = offset;
        }

        void video.play().catch(() => {
          // Browsers can still defer autoplay in low-power modes.
        });
      };

      if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
        staggerPlayback();
        return undefined;
      }

      video.addEventListener("loadedmetadata", staggerPlayback, { once: true });

      return () => {
        video.removeEventListener("loadedmetadata", staggerPlayback);
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup?.());
    };
  }, []);

  return (
    <aside
      aria-label="Student acceptance reaction highlights"
      className="grid w-full max-w-2xl grid-cols-2 gap-3 justify-self-center lg:justify-self-end"
    >
      {heroVideos.map((video, index) => (
        <div
          key={video.src}
          className={`relative overflow-hidden border border-white/25 bg-black/30 shadow-2xl shadow-black/25 ${
            index === 0 ? "col-span-2" : ""
          }`}
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
            className="aspect-video h-full w-full object-cover"
          />
        </div>
      ))}
    </aside>
  );
}
