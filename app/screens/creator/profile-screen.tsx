import Link from "next/link";
import { ArrowRight, Settings2, Sparkles } from "lucide-react";
import { creatorProfileStats, creatorServicePackages } from "@/app/screens/shared/creator-data";
import { useScrollVisibility } from "@/lib/util/useScrollElementVisibility";

export function CreatorProfileScreen() {
  const isNavVisible = useScrollVisibility(70);
  
  return (
    <div className="theme-surface app-scrollbar h-full overflow-y-auto px-4 pb-28">
      <section className="theme-card-strong theme-hero-gradient mt-5 rounded-[32px] p-5">
        <div className={`sticky-page-header -mx-5 -mt-5 flex items-center justify-between rounded-t-[32px] px-5 pb-4 pt-5 ${isNavVisible ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/12 text-lg font-semibold text-white">
              JK
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">Creator profile</p>
              <h2 className="mt-1 text-2xl font-semibold">Janice K. Studio</h2>
            </div>
          </div>
          <Link
            href="/app/settings"
            aria-label="Open creator settings"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
          >
            <Settings2 className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-4 text-sm leading-6 text-white/75">
          Custom interiors, fashion-led commissions, and creative direction packaged for clients who want premium work.
        </p>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {creatorProfileStats.map((stat) => (
            <div key={stat.label} className="rounded-[22px] bg-white/10 p-3">
              <p className="text-lg text-[#d8ff37] font-semibold">{stat.value}</p>
              <p className="mt-1 text-xs text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="theme-card mt-4 rounded-[30px] p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef6d2] text-[#111111]">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-theme-primary text-sm font-semibold">Recommended next action</p>
            <p className="text-theme-muted text-sm">Refresh your top package pricing and respond to the newest wardrobe lead today.</p>
          </div>
        </div>
      </section>

      <section className="theme-card mt-4 rounded-[30px] p-5">
        <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Public services</p>
        <div className="mt-4 space-y-3">
          {creatorServicePackages.map((service) => (
            <div key={service.title} className="theme-card-subtle flex items-center justify-between gap-3 rounded-[24px] p-4">
              <div>
                <p className="text-theme-primary text-sm font-semibold">{service.title}</p>
                <p className="text-theme-muted mt-1 text-sm">
                  {service.price} • {service.turnaround}
                </p>
              </div>
              <div className="bg-[#d8ff37] rounded-full p-2">
              <ArrowRight className="text-theme-primary h-4 w-4" />
              </div>
              
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
