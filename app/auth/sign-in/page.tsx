"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Eye, LockKeyhole, Mail } from "lucide-react";
import { AuthRoleSwitcher } from "@/components/auth-role-switcher";
import { EnterAppButton } from "@/components/enter-app-button";
import { MobileFrame } from "@/components/mobile-frame";
import type { AppRole } from "@/lib/session";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");
  const [role, setRole] = useState<AppRole>(() => (roleParam === "creator" ? "creator" : "consumer"));

  const content = useMemo(
    () =>
      role === "creator"
        ? {
            badge: "Creator access",
            title: "Welcome back.",
            description: "Sign in to manage your studio, reply to clients, and keep your creator profile active.",
            placeholder: "studio@cr8t.app",
            cta: "Sign in as creator",
          }
        : {
            badge: "Client access",
            title: "Explore and connect.",
            description: "Sign in to discover creators, track your requests, and keep client conversations in one place.",
            placeholder: "you@cr8t.app",
            cta: "Sign in as client",
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
          <h1 className="text-theme-primary mt-6 text-4xl font-semibold tracking-tight">{content.title}</h1>
          <p className="text-theme-muted mt-3 max-w-[18rem] text-sm leading-6">
            {content.description}
          </p>
        </div>

        <AuthRoleSwitcher role={role} onChange={setRole} />

        <div className="mt-8 space-y-4">
          <label className="block">
            <span className="text-theme-primary mb-2 block text-sm font-medium">Email</span>
            <div className="theme-input flex items-center gap-3 rounded-[22px] px-4 py-4">
              <Mail className="h-4 w-4 text-[--muted]" />
              <input
                type="email"
                placeholder={content.placeholder}
                className="w-full bg-transparent text-sm outline-none placeholder:text-[--muted]"
              />
            </div>
          </label>

          <label className="block">
            <span className="text-theme-primary mb-2 block text-sm font-medium">Password</span>
            <div className="theme-input flex items-center gap-3 rounded-[22px] px-4 py-4">
              <LockKeyhole className="h-4 w-4 text-[--muted]" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent text-sm outline-none placeholder:text-[--muted]"
              />
              <Eye className="h-4 w-4 text-[--muted]" />
            </div>
          </label>

          <div className="flex items-center justify-between">
            <label className="text-theme-muted flex items-center gap-2 text-sm">
              <input type="checkbox" className="h-4 w-4 rounded border-black/20 bg-green-200 text-green-200" defaultChecked />
              Keep me signed in
            </label>
            <Link href="/auth/forgot-password" className="text-theme-primary text-sm font-medium">
              Forgot password?
            </Link>
          </div>
        </div>

        <div className="mt-auto pt-8">
          <div className="space-y-3">
            <EnterAppButton
              role={role}
              className="bg-[#d8ff37] flex w-full items-center text-black justify-center rounded-full px-5 py-4 text-sm font-semibold shadow-[0_18px_40px_rgba(17,18,23,0.24)]"
            >
              {content.cta}
            </EnterAppButton>
            <button type="button" className="theme-input w-full rounded-full px-5 py-4 text-sm font-semibold">
              Continue with Google
            </button>
          </div>

          <p className="text-theme-muted mt-5 text-center text-sm">
            New here?{" "}
            <Link href="/auth/sign-up" className="text-theme-primary font-semibold">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </MobileFrame>
  );
}
