import { Sparkles } from "lucide-react";
import { MobileFrame } from "@/components/mobile-frame";

type SkeletonBlockProps = {
  className: string;
};

export function SkeletonBlock({ className }: SkeletonBlockProps) {
  return <div className={`skeleton-block ${className}`} />;
}

export function AppGateLoader() {
  return (
    <div className="theme-surface flex h-full flex-col items-center justify-center px-6 text-center">
      <div className="theme-card-strong flex h-20 w-20 items-center justify-center rounded-[28px] shadow-[0_24px_60px_rgba(17,18,23,0.24)]">
        <Sparkles className="h-8 w-8 text-[--accent-lime]" />
      </div>
      <p className="text-theme-primary mt-6 text-xl font-semibold">Loading your workspace</p>
      <p className="text-theme-muted mt-2 max-w-[14rem] text-sm leading-6">
        Preparing your creators, messages, and saved projects.
      </p>
      <div className="mt-6 flex items-center gap-2">
        <span className="skeleton-dot" />
        <span className="skeleton-dot [animation-delay:120ms]" />
        <span className="skeleton-dot [animation-delay:240ms]" />
      </div>
    </div>
  );
}

export function AppScreenSkeleton() {
  return (
    <div className="theme-surface app-scrollbar h-full overflow-y-auto px-4 pb-28 pt-5">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <SkeletonBlock className="h-4 w-24 rounded-full" />
          <SkeletonBlock className="h-10 w-52 rounded-[18px]" />
        </div>
        <div className="flex gap-2">
          <SkeletonBlock className="h-11 w-11 rounded-full" />
          <SkeletonBlock className="h-11 w-11 rounded-full" />
        </div>
      </div>

      <SkeletonBlock className="mt-4 h-14 w-full rounded-full" />

      <div className="mt-4 flex gap-2">
        <SkeletonBlock className="h-10 w-24 rounded-full" />
        <SkeletonBlock className="h-10 w-20 rounded-full" />
        <SkeletonBlock className="h-10 w-24 rounded-full" />
      </div>

      <div className="mt-5 space-y-4">
        {[0, 1, 2].map((item) => (
          <div key={item} className="theme-card rounded-[30px] p-3">
            <SkeletonBlock className="aspect-[5/6] w-full rounded-[26px]" />
            <div className="mt-3 space-y-3 rounded-[24px] p-1">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <SkeletonBlock className="h-3 w-24 rounded-full" />
                  <SkeletonBlock className="h-4 w-40 rounded-full" />
                </div>
                <SkeletonBlock className="h-10 w-20 rounded-full" />
              </div>
              <div className="flex gap-2">
                <SkeletonBlock className="h-8 w-24 rounded-full" />
                <SkeletonBlock className="h-8 w-28 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CreatorProfileSkeleton() {
  return (
    <div className="theme-surface app-scrollbar h-full overflow-y-auto px-4 pb-8 pt-5">
      <div className="flex items-center justify-between">
        <SkeletonBlock className="h-11 w-11 rounded-full" />
        <div className="flex gap-2">
          <SkeletonBlock className="h-10 w-20 rounded-full" />
          <SkeletonBlock className="h-11 w-11 rounded-full" />
        </div>
      </div>

      <div className="theme-card mt-5 rounded-[30px] p-3">
        <SkeletonBlock className="aspect-[5/6] w-full rounded-[26px]" />
        <div className="mt-3 grid grid-cols-3 gap-2">
          <SkeletonBlock className="h-20 rounded-[22px]" />
          <SkeletonBlock className="h-20 rounded-[22px]" />
          <SkeletonBlock className="h-20 rounded-[22px]" />
        </div>
      </div>

      <SkeletonBlock className="mt-4 h-44 w-full rounded-[30px]" />
      <SkeletonBlock className="mt-4 h-64 w-full rounded-[30px]" />
      <SkeletonBlock className="mt-4 h-40 w-full rounded-[30px]" />
    </div>
  );
}

export function AuthScreenSkeleton() {
  return (
    <MobileFrame contentClassName="flex h-full flex-col justify-between px-5 pb-8 pt-6">
      <div>
        <div className="flex items-center justify-between">
          <SkeletonBlock className="h-11 w-11 rounded-full" />
          <div className="flex gap-2">
            <SkeletonBlock className="h-10 w-24 rounded-full" />
            <SkeletonBlock className="h-11 w-11 rounded-full" />
          </div>
        </div>

        <div className="mt-8">
          <SkeletonBlock className="h-16 w-16 rounded-[24px]" />
          <SkeletonBlock className="mt-6 h-10 w-44 rounded-[16px]" />
          <SkeletonBlock className="mt-3 h-4 w-64 rounded-full" />
          <SkeletonBlock className="mt-2 h-4 w-52 rounded-full" />
        </div>

        <div className="mt-8 space-y-4">
          <SkeletonBlock className="h-20 w-full rounded-[22px]" />
          <SkeletonBlock className="h-20 w-full rounded-[22px]" />
          <SkeletonBlock className="h-20 w-full rounded-[22px]" />
        </div>
      </div>

      <div className="space-y-3">
        <SkeletonBlock className="h-14 w-full rounded-full" />
        <SkeletonBlock className="h-14 w-full rounded-full" />
      </div>
    </MobileFrame>
  );
}
