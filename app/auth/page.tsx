 "use client";

import { useRouter } from "next/navigation";
import { ArrowRight, BriefcaseBusiness, ShieldCheck, Sparkles } from "lucide-react";
import { MobileFrame } from "@/components/mobile-frame";

export default function AuthPage() {
  const router = useRouter();

  return (
    <MobileFrame contentClassName="app-scrollbar overflow-y-auto px-5 pb-8 pt-0">
      <div className="flex min-h-full flex-col justify-center items-center">
        <div>
         

          <div className="mt-10">
            {/* <div className="theme-card-strong flex h-20 w-20 items-center justify-center rounded-[28px] shadow-[0_24px_60px_rgba(17,18,23,0.28)]">
              <Sparkles className="h-8 w-8 text-[--accent-lime]" />
            </div> */}
            <h1 className="text-theme-primary mt-8 max-w-[16rem] text-5xl font-semibold tracking-tight">
              Social commerce for makers.
            </h1>
          </div>

          <div className="mt-8 grid gap-3">
            <div className="theme-card rounded-[28px] p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[--accent-lime] text-black">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-theme-primary text-sm font-semibold">Built for trusted creators</p>
                  <p className="text-theme-muted text-sm">Profiles, bookings, and client conversations stay in one place.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="theme-card rounded-[28px] p-4">
                <div className=" flex flex-col items-start justify-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef6d2] text-[#111111]">
                    <BriefcaseBusiness className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-theme-primary text-sm font-semibold">Client</p>
                    <p className="text-theme-muted text-sm">Discover creatives, post requests, and manage responses.</p>
                  </div>
                </div>
              </div>

              <div className="theme-card rounded-[28px] p-4">
                <div className="flex flex-col items-start justify-start gap-3">
                  <div className="theme-card-strong flex h-11 w-11 items-center justify-center rounded-full text-[--accent-lime]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-theme-primary text-sm font-semibold">Creator</p>
                    <p className="text-theme-muted text-sm">Showcase services, track leads, and reply to clients fast.</p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        <div className="space-y-3 pt-8 w-full">
          <button
            type="button"
            onClick={() => router.push("/auth/sign-up")}
            className="bg-[#d8ff37] flex items-center w-full justify-center gap-2 rounded-full px-5 py-4 text-sm font-semibold text-[#111111] shadow-[0_16px_40px_rgba(17,18,23,0.24)]"
          >
            Create account
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => router.push("/auth/sign-in")}
            className="theme-input flex items-center w-full justify-center rounded-full px-5 py-4 text-sm font-semibold"
          >
            I already have an account
          </button>
        </div>
      </div>
    </MobileFrame>
  );
}
