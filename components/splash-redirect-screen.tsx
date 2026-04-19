"use client";

import { useEffect } from "react";
import { Sparkles } from "lucide-react";
import { MobileFrame } from "@/components/mobile-frame";

export function SplashRedirectScreen() {
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.location.replace("/auth");
    }, 1800);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <MobileFrame contentClassName="app-scrollbar flex h-full flex-col items-center justify-center overflow-y-auto px-6 py-0">
      <div className="flex flex-col items-center text-center">
        <div className="theme-card-strong flex h-24 w-24 items-center justify-center rounded-[32px] shadow-[0_30px_80px_rgba(17,18,23,0.28)]">
          <Sparkles className="h-10 w-10 text-[--accent-lime]" />
        </div>
        <p className="text-theme-primary mt-8 text-xs font-semibold uppercase tracking-[0.42em]">cr8t</p>
        <h1 className="text-theme-primary mt-4 max-w-[12rem] text-4xl font-semibold tracking-tight">
          Loading your maker space.
        </h1>
        <p className="text-theme-muted mt-4 max-w-[15rem] text-sm leading-6">
          Bringing your storefront, bookings, and creative network into one mobile experience.
        </p>
      </div>

      <div className="mt-12 flex items-center gap-3" aria-label="Loading">
        <span className="bg-[var(--text-primary)] h-2.5 w-2.5 rounded-full animate-pulse [animation-delay:0ms]" />
        <span className="bg-[color-mix(in_srgb,var(--text-primary)_65%,transparent)] h-2.5 w-2.5 rounded-full animate-pulse [animation-delay:150ms]" />
        <span className="bg-[color-mix(in_srgb,var(--text-primary)_35%,transparent)] h-2.5 w-2.5 rounded-full animate-pulse [animation-delay:300ms]" />
      </div>
    </MobileFrame>
  );
}
