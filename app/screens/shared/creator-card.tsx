"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Star } from "lucide-react";
import { MediaCarousel } from "@/components/media-carousel";
import type { CreatorProfile } from "@/lib/creators";

type CreatorCardProps = {
  creator: CreatorProfile;
  featured?: boolean;
};

export function CreatorCard({ creator, featured = false }: CreatorCardProps) {
  const router = useRouter();

  const openProfile = () => {
    router.push(`/app/creator/${creator.slug}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProfile();
    }
  };

  return (
    <article
      role="link"
      tabIndex={0}
      onClick={openProfile}
      onKeyDown={handleKeyDown}
      className="theme-card rounded-[30px] p-3 outline-none transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#111111]/15"
    >
      <MediaCarousel
        media={creator.media}
        priority={featured}
        className={featured ? "aspect-[5/6] rounded-[26px]" : "aspect-[4/5] rounded-[24px]"}
        overlay={
          <div className="flex h-full flex-col justify-between p-4 text-white">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-medium backdrop-blur">
                {featured ? "Featured creator" : creator.category}
              </span>
              <span className="rounded-full bg-black/35 px-3 py-1 text-xs font-medium backdrop-blur">
                {creator.media.length > 1 ? `${creator.media.length} slides` : "Profile"}
              </span>
            </div>

            <div>
              <p className="text-sm font-medium text-white/75">{creator.location}</p>
              <h2 className={`mt-2 font-semibold leading-tight ${featured ? "max-w-[13rem] text-3xl" : "text-2xl"}`}>
                {creator.name}
              </h2>
              <p className="mt-2 max-w-[15rem] text-sm leading-6 text-white/78">{creator.intro}</p>
            </div>
          </div>
        }
      />

      <div className="theme-card-subtle mt-3 rounded-[24px] p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.2em]">{creator.handle}</p>
            <p className="text-theme-secondary mt-2 text-sm leading-6">{creator.category}</p>
          </div>
          <div className="theme-card rounded-full px-3 py-2 text-sm font-semibold">{creator.startingAt}</div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {creator.services.slice(0, 2).map((service) => (
            <span key={service.name} className="theme-card rounded-full px-3 py-2 text-xs font-medium text-theme-secondary">
              {service.name}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-theme-secondary flex items-center gap-2 text-sm">
            <Star className="text-[#d8ff37] h-4 w-4 fill-current" />
            <span>{creator.rating}</span>
          </div>
          <span className="text-black px-3 py-2 rounded-full inline-flex items-center gap-2 text-sm font-semibold theme-card-traction">
            Open profile
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
