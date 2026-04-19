import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Star } from "lucide-react";
import { AppBackButton } from "@/components/app-back-button";
import { MediaCarousel } from "@/components/media-carousel";
import type { CreatorProfile } from "@/lib/creators";

type CreatorProfileScreenProps = {
  creator: CreatorProfile;
};

export function CreatorProfileScreen({ creator }: CreatorProfileScreenProps) {
  return (
    <div className="theme-surface app-scrollbar relative h-full overflow-y-auto px-4 pb-8">
      <div className="sticky-page-header -mx-4 flex items-center justify-between px-4 pb-4 pt-5">
        <AppBackButton fallbackHref="/app" ariaLabel="Back to previous screen" />
        <div className="theme-card-strong rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em]">Creator</div>
      </div>

      <div className="theme-card mt-1 rounded-[30px] p-3">
        <MediaCarousel
          media={creator.media}
          priority
          className="aspect-[5/6] rounded-[26px]"
          overlay={
            <div className="flex h-full flex-col justify-between p-4 text-white">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-medium backdrop-blur">
                  {creator.category}
                </span>
                <span className="rounded-full bg-black/35 px-3 py-1 text-xs font-medium backdrop-blur">
                  {creator.handle}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <MapPin className="h-4 w-4" />
                  <span>{creator.location}</span>
                </div>
                <h1 className="mt-3 max-w-[14rem] text-3xl font-semibold leading-tight">{creator.name}</h1>
                <p className="mt-2 max-w-[16rem] text-sm leading-6 text-white/80">{creator.intro}</p>
              </div>
            </div>
          }
        />

        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="theme-card-muted rounded-[22px] p-3">
            <p className="text-theme-muted text-xs uppercase tracking-[0.18em]">Rating</p>
            <p className="mt-2 text-lg font-semibold">{creator.rating}</p>
          </div>
          <div className="theme-card-muted rounded-[22px] p-3">
            <p className="text-theme-muted text-xs uppercase tracking-[0.18em]">Turnaround</p>
            <p className="mt-2 text-lg font-semibold">{creator.turnaround}</p>
          </div>
          <div className="theme-card-strong rounded-[22px] p-3">
            <p className="text-xs uppercase tracking-[0.18em] text-white/60">Starts</p>
            <p className="mt-2 text-lg font-semibold">{creator.startingAt}</p>
          </div>
        </div>
      </div>

      <section className="theme-card-strong mt-4 rounded-[30px] p-5">
        <div className="flex items-center gap-2 text-sm text-white/72">
          <Star className="h-4 w-4 text-[#d8ff37]" />
          <span>Profile overview</span>
        </div>
        <p className="mt-3 text-sm leading-7 text-white/80">{creator.bio}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {creator.highlights.map((highlight) => (
            <span key={highlight} className="rounded-full bg-white/8 px-3 py-2 text-xs font-medium text-white/78">
              {highlight}
            </span>
          ))}
        </div>
      </section>

      <section className="theme-card mt-4 rounded-[30px] p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Services</p>
            <h2 className="mt-1 text-2xl font-semibold">Fees and offerings</h2>
          </div>
          <div className="rounded-full bg-[#eef6d2] px-3 py-1 text-xs font-semibold text-[#111111]">Available</div>
        </div>

        <div className="mt-4 space-y-3">
          {creator.services.map((service) => (
            <article key={service.name} className="theme-card-muted rounded-[24px] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold">{service.name}</h3>
                  <div className="text-theme-muted mt-2 flex items-center gap-2 text-sm">
                    <Clock3 className="h-4 w-4" />
                    <span>{service.delivery}</span>
                  </div>
                </div>
                <div className="theme-card rounded-full px-3 py-2 text-sm font-semibold">
                  {service.fee}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-4 rounded-[30px] bg-[linear-gradient(135deg,#d8ff37_0%,#c4ff87_100%)] p-5 text-[#111111]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/60">Next step</p>
        <h2 className="mt-2 text-2xl font-semibold">Book this creator</h2>
        <p className="mt-2 text-sm leading-6 text-black/70">
          Use the available service tiers above to start a conversation around your project scope, delivery timeline, and
          preferred budget.
        </p>
        <Link
          href="/app/inbox"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(17,17,17,0.18)]"
        >
          Message creator
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
