import { MessageCircleMore, MoveRight } from "lucide-react";
import { creatorInboxItems } from "@/app/screens/shared/creator-data";

export function CreatorInboxScreen() {
  return (
    <div className="theme-surface app-scrollbar h-full overflow-y-auto px-4 pb-28 pt-2">
      <div className="sticky-page-header flex items-start justify-between gap-4 rounded-[35px] p-4 backdrop-blur-xl">
        <div>
          <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Inbox</p>
          <h2 className="text-theme-primary mt-1 text-xl font-semibold">Client conversations</h2>
        </div>
        <div className="theme-card rounded-full px-4 py-2 text-sm font-semibold">4 active</div>
      </div>

      <div className="theme-card mt-4 rounded-[30px] p-5">
        <div className="flex items-center gap-3">
          <div className="theme-card-strong flex h-12 w-12 items-center justify-center rounded-full">
            <MessageCircleMore className="h-5 w-5" />
          </div>
          <div>
            <p className="text-theme-primary text-sm font-semibold">Response queue</p>
            <p className="text-theme-muted text-sm">Reply quickly to keep your profile ranking and conversion healthy.</p>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {creatorInboxItems.map((item) => (
          <button
            key={`${item.client}-${item.time}`}
            type="button"
            className="theme-card block w-full rounded-[28px] p-4 text-left"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-theme-primary text-sm font-semibold">{item.client}</p>
                <p className="text-theme-muted mt-2 text-sm leading-6">{item.message}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-2">
                <span className="theme-card-subtle rounded-full px-3 py-1 text-xs font-semibold">{item.time}</span>
                <span className="rounded-full text-[#d8ff37] px-3 py-1 text-[11px] font-semibold text-[#111111]">
                  {item.state}
                </span>
              </div>
            </div>
            <div className="text-theme-primary mt-4 inline-flex items-center gap-2 text-sm font-semibold">
              Open conversation
              <MoveRight className="h-4 w-4" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
