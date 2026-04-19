import { ArrowRight, Sparkles } from "lucide-react";
import { creatorOpportunities } from "@/app/screens/shared/creator-data";

export function CreatorDiscoverScreen() {
  return (
    <div className="theme-surface app-scrollbar h-full overflow-y-auto px-4 pb-28 pt-2">
      <div className="sticky-page-header -mx-2 flex items-end justify-between gap-3 rounded-[40px] p-4 backdrop-blur-xl">
        <div>
          <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Opportunities</p>
          <h3 className="text-theme-primary mt-1 text-xl font-semibold">Client briefs for creators</h3>
        </div>
        <div className="theme-card rounded-full px-3 py-2 text-xs font-semibold">{creatorOpportunities.length} live</div>
      </div>

      <div className="theme-card-strong rounded-[30px] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">Discover work</p>
        <h2 className="mt-2 text-3xl font-semibold">Find briefs that match your services and response style.</h2>
        <p className="mt-3 text-sm leading-6 text-white/72">
          Review budgets, timelines, and fit signals before you decide where to spend your energy.
        </p>
      </div>

      <div className="mt-4 space-y-3">
        {creatorOpportunities.map((opportunity) => (
          <article key={`${opportunity.client}-${opportunity.title}`} className="theme-card rounded-[28px] p-4">
            <div className="">
              <div className="flex justify-between  items-center">
                <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.18em]">{opportunity.category}</p>
                <span className="rounded-full text-[#d8ff37] px-3 py-1 text-xs font-semibold text-[#111111]">
                  {opportunity.urgency}
                </span>
              </div>
              <div>
                <h3 className="text-theme-primary mt-2 text-lg font-semibold">{opportunity.title}</h3>
                <p className="text-theme-muted mt-2 text-sm">
                  {opportunity.client} • {opportunity.budget}
                </p>
              </div>

            </div>

            <p className="text-theme-secondary mt-4 text-sm leading-6">{opportunity.summary}</p>

            <div className="mt-4 flex items-center justify-between gap-3">
              <span className="theme-card-subtle rounded-full px-3 py-2 text-xs font-semibold">{opportunity.timeline}</span>
              <button type="button" className="theme-card-traction rounded-full px-4 py-1 text-black inline-flex items-center gap-2 text-sm font-semibold">
                <span className="text-[#111111]">Open brief</span>
                <ArrowRight className="h-4 w-4 text-[#111111]" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="theme-card mt-4 rounded-[28px] p-4">
        <div className="flex items-center gap-3">
          <div className="theme-card-strong flex h-11 w-11 items-center justify-center rounded-full text-[--accent-lime]">
            <Sparkles className="h-4 w-4" />
          </div>
          <p className="text-theme-secondary text-sm leading-6">
            Better match quality appears here when your studio profile, turnaround, and categories stay updated.
          </p>
        </div>
      </div>
    </div>
  );
}
