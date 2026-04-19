import Link from "next/link";
import { ArrowLeft, MailCheck } from "lucide-react";
import { MobileFrame } from "@/components/mobile-frame";

export default function ForgotPasswordPage() {
  return (
    <MobileFrame contentClassName="app-scrollbar overflow-y-auto flex h-full flex-col px-5 pb-8 pt-0">
      <div className="sticky-page-header -mx-5 flex items-center justify-between px-5 pb-4 pt-6">
        <Link
          href="/auth/sign-in"
          className="theme-icon-button flex h-11 w-11 items-center justify-center rounded-full"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex items-center gap-2">
          <div className="theme-card-strong rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em]">
            Reset
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="theme-card-strong flex h-16 w-16 items-center justify-center rounded-[24px]">
          <MailCheck className="h-6 w-6 text-[--accent-lime]" />
        </div>
        <h1 className="text-theme-primary mt-6 text-4xl font-semibold tracking-tight">Reset your password.</h1>
        <p className="text-theme-muted mt-3 max-w-[18rem] text-sm leading-6">
          Enter your email and we will send a secure sign-in link so you can get back to your account.
        </p>
      </div>

      <div className="mt-8">
        <label className="block">
          <span className="text-theme-primary mb-2 block text-sm font-medium">Email</span>
          <input
            type="email"
            placeholder="janice@cr8t.app"
            className="theme-input w-full rounded-[22px] px-4 py-4 text-sm outline-none placeholder:text-[--muted]"
          />
        </label>
      </div>

      <div className="mt-auto space-y-3 pt-8">
        <Link
          href="/auth/sign-in"
          className="theme-card-strong flex items-center justify-center rounded-full px-5 py-4 text-sm font-semibold shadow-[0_18px_40px_rgba(17,18,23,0.24)]"
        >
          Send reset link
        </Link>
        <Link href="/auth/sign-in" className="text-theme-muted block text-center text-sm font-medium">
          Back to sign in
        </Link>
      </div>
    </MobileFrame>
  );
}
