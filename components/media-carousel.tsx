"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import type { CreatorMedia } from "@/lib/creators";

type MediaCarouselProps = {
  media: CreatorMedia[];
  className?: string;
  priority?: boolean;
  overlay?: ReactNode;
};

export function MediaCarousel({
  media,
  className = "aspect-[4/5]",
  priority = false,
  overlay,
}: MediaCarouselProps) {
  const [index, setIndex] = useState(0);
  const hasMultipleItems = media.length > 1;

  const showPrevious = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIndex((currentIndex) => (currentIndex - 1 + media.length) % media.length);
  };

  const showNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIndex((currentIndex) => (currentIndex + 1) % media.length);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {media.map((item, itemIndex) => (
          <div key={`${item.src}-${itemIndex}`} className="relative h-full w-full shrink-0">
            {item.type === "video" ? (
              <video
                className="h-full w-full object-cover"
                poster={item.poster}
                muted
                playsInline
                loop
                autoPlay
              >
                <source src={item.src} />
              </video>
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={priority && itemIndex === 0}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 420px"
              />
            )}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/10" />
      {overlay ? <div className="absolute inset-0">{overlay}</div> : null}

      {hasMultipleItems ? (
        <>
          <div className="absolute inset-x-3 top-3 flex items-center justify-between">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous media"
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Show next media"
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-1.5">
            {media.map((item, dotIndex) => (
              <span
                key={`${item.src}-dot`}
                className={`h-1.5 rounded-full transition-all ${dotIndex === index ? "w-5 bg-white" : "w-1.5 bg-white/45"}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
