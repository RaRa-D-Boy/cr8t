import Link from "next/link";
import { ArrowRight, Settings2, Sparkles } from "lucide-react";
import { profileStats } from "@/app/screens/shared/screen-data";
import { creators } from "@/lib/creators";
import { useScrollVisibility } from "@/lib/util/useScrollElementVisibility";

export function ProfileScreen() {
  const isNavVisible = useScrollVisibility(70);
  return (
    <div className="theme-surface app-scrollbar h-full overflow-y-auto px-4 pb-28">
      <section className="theme-card-strong theme-hero-gradient mt-5 rounded-[32px] p-5">
        <div className={`sticky-page-header backdrop-blur-xl rounded-[32px] -mx-5 -mt-5 flex items-center justify-between rounded-t-[32px] px-5 pb-4 pt-5 ${isNavVisible ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/12 text-lg font-semibold text-white">
              CS
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">Profile</p>
              <h2 className="mt-1 text-2xl font-semibold">Clara Sekar</h2>
            </div>
          </div>
          <Link
            href="/app/settings"
            aria-label="Open profile settings"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
          >
            <Settings2 className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-4 text-sm leading-6 text-white/75">
          Managing saved creators, active bookings, and personalized recommendations from one workspace.
        </p>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {profileStats.map((stat) => (
            <div key={stat.label} className="rounded-[22px] bg-white/10 p-3">
              <p className="text-lg font-semibold text-[#d8ff37]">{stat.value}</p>
              <p className="mt-1 text-xs text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="theme-card mt-4 rounded-[30px] p-5">
        <div className="">
          <div className="flex items-center gap-3 justify-between ">
            <p className="text-theme-primary text-sm font-semibold">Recommended next action</p>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef6d2] text-[#111111]">
              <Sparkles className="h-5 w-5" />
            </div>

          </div>

          <div className="max-w-[80%]">
            <p className="text-theme-muted text-xs">Open Studio Forma or Clara Woodworks to compare their service packages.</p>
          </div>
        </div>
      </section>

      <section className="theme-card mt-4 rounded-[30px] p-5">
        <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Saved creators</p>
        <div className="mt-4 space-y-3">
          {creators.slice(0, 3).map((creator) => (
            <Link key={creator.slug} href={`/app/creator/${creator.slug}`} className="theme-card-subtle  w-full flex flex-col gap-3 rounded-[24px] p-4">
              <div className="flex items-center gap-3 justify-between">
                <p className="text-theme-primary text-sm font-semibold">{creator.name}</p>
                <span className="bg-[#d8ff37] rounded-full p-2">
                  <ArrowRight className="text-black h-4 w-4" />
                </span>
              </div>
              <p className="text-theme-muted mt-1 text-sm">{creator.category}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
