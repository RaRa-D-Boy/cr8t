"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, LockKeyhole, Mail, UserRound } from "lucide-react";
import { AuthRoleSwitcher } from "@/components/auth-role-switcher";
import { EnterAppButton } from "@/components/enter-app-button";
import { MobileFrame } from "@/components/mobile-frame";
import type { AppRole } from "@/lib/session";

export default function SignUpPage() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");
  const [role, setRole] = useState<AppRole>(() => (roleParam === "creator" ? "creator" : "consumer"));

  const content = useMemo(
    () =>
      role === "creator"
        ? {
            badge: "Creator access",
            title: "Build your presence.",
            description:
              "Set up your maker account, launch your profile, and start taking bookings, orders, and direct client messages.",
            namePlaceholder: "Janice K. Studio",
            emailPlaceholder: "studio@cr8t.app",
            bulletTitle: "What you get on day one",
            bullets: [
              "A public studio profile and service packages",
              "Client briefs, inbox conversations, and response tools",
              "A polished creator dashboard built for mobile",
            ],
            cta: "Create creator account",
          }
        : {
            badge: "Client access",
            title: "Start your next request.",
            description:
              "Create your client account, post what you need, discover creatives, and manage responses from one workspace.",
            namePlaceholder: "Clara Sekar",
            emailPlaceholder: "you@cr8t.app",
            bulletTitle: "What you get on day one",
            bullets: [
              "A personalized feed of creators and services",
              "Project posts, discoveries, and direct inbox replies",
              "A saved workspace for your briefs and bookings",
            ],
            cta: "Create client account",
          },
    [role],
  );

  return (
    <MobileFrame contentClassName="app-scrollbar overflow-y-auto px-5 pb-8 pt-0">
      <div className="flex min-h-full flex-col">
        <div className="sticky-page-header -mx-5 flex items-center justify-between px-5 pb-4 pt-6">
          <Link
            href="/"
            className="theme-icon-button flex h-11 w-11 items-center justify-center rounded-full"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          
        </div>

        <div className="mt-4">
          {/* <div className="theme-card-strong inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[--accent-lime]">
            {role === "creator" ? <Sparkles className="h-4 w-4" /> : <BriefcaseBusiness className="h-4 w-4" />}
            {content.badge}
          </div> */}
          <h1 className="text-theme-primary mt-2 text-2xl font-semibold tracking-tight">{content.title}</h1>
          <p className="text-theme-muted mt-3 max-w-[18rem] text-sm leading-6">
            {content.description}
          </p>
        </div>

        <AuthRoleSwitcher role={role} onChange={setRole} />

        <div className="mt-8 space-y-4">
          <label className="block">
            <span className="text-theme-primary mb-2 block text-sm font-medium">Full name</span>
            <div className="theme-input flex items-center gap-3 rounded-[22px] px-4 py-4">
              <UserRound className="h-4 w-4 text-[--muted]" />
              <input
                type="text"
                placeholder={content.namePlaceholder}
                className="w-full bg-transparent text-sm outline-none placeholder:text-[--muted]"
              />
            </div>
          </label>

          <label className="block">
            <span className="text-theme-primary mb-2 block text-sm font-medium">Email</span>
            <div className="theme-input flex items-center gap-3 rounded-[22px] px-4 py-4">
              <Mail className="h-4 w-4 text-[--muted]" />
              <input
                type="email"
                placeholder={content.emailPlaceholder}
                className="w-full bg-transparent text-sm outline-none placeholder:text-[--muted]"
              />
            </div>
          </label>

          <label className="block">
            <span className="text-theme-primary mb-2 block text-sm font-medium">Create password</span>
            <div className="theme-input flex items-center gap-3 rounded-[22px] px-4 py-4">
              <LockKeyhole className="h-4 w-4 text-[--muted]" />
              <input
                type="password"
                placeholder="Use at least 8 characters"
                className="w-full bg-transparent text-sm outline-none placeholder:text-[--muted]"
              />
            </div>
          </label>
        </div>

        {/* <div className="theme-card-strong mt-6 rounded-[24px] p-4 shadow-[0_20px_50px_rgba(17,18,23,0.2)]">
          <p className="text-sm font-semibold">{content.bulletTitle}</p>
          <ul className="mt-3 space-y-2 text-sm text-white/72">
            {content.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div> */}

        <div className="mt-auto pt-8">
          <div className="space-y-3">
            <EnterAppButton
              role={role}
              className="bg-[#d8ff37] flex w-full items-center text-black dark:text-[#111111 !important] justify-center rounded-full px-5 py-4 text-sm font-semibold shadow-[0_18px_40px_rgba(17,18,23,0.24)]"
            >
              {content.cta}
            </EnterAppButton>
            <button type="button" className="theme-input w-full rounded-full px-5 py-4 text-sm font-semibold">
              Continue with Apple
            </button>
          </div>

          <p className="text-theme-muted mt-5 text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/sign-in" className="text-theme-primary font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </MobileFrame>
  );
}
