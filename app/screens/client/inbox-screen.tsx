import Link from "next/link";
import { BriefcaseBusiness, MoveRight } from "lucide-react";
import { inboxItems } from "@/app/screens/shared/screen-data";

export function InboxScreen() {
  return (
    <div className="theme-surface app-scrollbar h-full overflow-y-auto px-4 pb-28 pt-2">
      <div className="sticky-page-header flex items-start justify-between p-4 gap-4 backdrop-blur-xl rounded-[35px]">
        <div>
          <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Inbox</p>
          <h2 className="text-theme-primary mt-1 text-xl font-semibold">Creator conversations</h2>
        </div>
        <div className="theme-card rounded-full px-4 py-2 text-sm font-semibold">3 new</div>
      </div>

      <div className="theme-card mt-4 rounded-[30px] p-5">
        <div className="flex items-center gap-3">
          <div className="theme-card-strong flex h-12 w-12 items-center justify-center rounded-full">
            <BriefcaseBusiness className="h-5 w-5" />
          </div>
          <div>
            <p className="text-theme-primary text-sm font-semibold">Quick status</p>
            <p className="text-theme-muted text-sm">Two creators are waiting on approvals and one has sent a fresh quote.</p>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {inboxItems.map((item, index) => (
          <Link key={`${item.creator}-${item.time}-${index}`} href={item.href} className="theme-card block rounded-[28px] p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-theme-primary text-sm font-semibold">{item.creator}</p>
                <p className="text-theme-muted mt-2 text-sm leading-6">{item.update}</p>
              </div>
              <span className="theme-card-subtle rounded-full px-3 py-1 text-xs font-semibold">{item.time}</span>
            </div>
            <div className="theme-card-traction rounded-full px-4 py-2 mt-4 inline-flex items-center gap-2 text-sm font-semibold">
              Open conversation
              <MoveRight className="h-4 w-4 text-black" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
