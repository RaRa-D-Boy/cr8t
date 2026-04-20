import Image from "next/image";
import { Bell, BriefcaseBusiness, TrendingUp } from "lucide-react";
import { creatorLeadPreview, creatorOverviewStats } from "@/app/screens/shared/creator-data";
import { useScrollVisibility } from "@/lib/util/useScrollElementVisibility";

export function CreatorHomeScreen() {
  const isNavVisible = useScrollVisibility(70);
  
  return (
    <div className="theme-surface app-scrollbar h-full overflow-y-auto px-4 pb-28">
      <header className={`sticky-page-header pt-2 ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className=" -mx-2 flex items-center justify-between gap-3  rounded-[40px] p-3 backdrop-blur-xl ">
        <div>
          <p className="theme-card inline-flex rounded-full px-4 py-3 text-sm font-medium">Creator mode</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Open creator alerts"
            className="theme-icon-button flex h-11 w-11 items-center justify-center rounded-full"
          >
            <Bell className="h-4 w-4" />
          </button>
        </div>
        </div>
        
      </header>

      <h1 className="text-theme-primary mt-1 max-w-[18rem] text-[2.2rem] font-semibold leading-none tracking-tight">
        Run your studio from one creator dashboard
      </h1>

      <section className="theme-card-traction  mt-4 rounded-[32px] p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black">Studio snapshot</p>
            <h2 className="mt-2 text-3xl font-semibold text-black">Janice K. Studio</h2>
            <p className="mt-3 text-sm leading-6 text-black">
              New briefs, active quotes, and project updates are all flowing into one place.
            </p>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
        </div>
      </section>

      <section className="mt-4 grid grid-cols-3 gap-3">
        {creatorOverviewStats.map((stat) => (
          <div key={stat.label} className="theme-card rounded-[26px] p-4">
            <p className="text-[#d8ff37] text-sm font-semibold">{stat.value}</p>
            <p className="text-theme-muted mt-1 text-[10px] font-semibold uppercase tracking-[0.18em]">{stat.label}</p>
            <p className="text-theme-secondary mt-3 text-xs leading-5">{stat.detail}</p>
          </div>
        ))}
      </section>

      <section className="theme-card mt-4 rounded-[30px] p-5">
        <div className="flex items-center gap-3">
          <div className="theme-card-strong flex h-12 w-12 items-center justify-center rounded-full">
            <BriefcaseBusiness className="h-5 w-5" />
          </div>
          <div>
            <p className="text-theme-primary text-sm font-semibold">Lead focus</p>
            <p className="text-theme-muted text-sm">These are the briefs most likely to convert next.</p>
          </div>
        </div>
      </section>

      <section className="mt-4 space-y-3">
        {creatorLeadPreview.map((lead) => (
          <article key={`${lead.client}-${lead.title}`} className="theme-card rounded-[28px] p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-start gap-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[18px]">
                  <Image src={lead.image} alt={lead.title} fill className="object-cover" sizes="56px" />
                </div>
                <div className="min-w-0">
                  <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.18em]">{lead.client}</p>
                  <h3 className="text-theme-primary mt-2 text-lg font-semibold">{lead.title}</h3>
                  <p className="text-theme-muted mt-2 text-sm">
                    {lead.budget} • {lead.status}
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-[#d8ff37] px-3 py-1 text-xs font-semibold text-black">Open</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
