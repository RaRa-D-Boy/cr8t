"use client";

import { useState } from "react";
import { Bell, ChevronRight, LockKeyhole, ShieldCheck, SlidersHorizontal, Sparkles, UserRound } from "lucide-react";
import { AppBackButton } from "@/components/app-back-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { clearAuthenticatedSession, type AppRole } from "@/lib/session";

type SettingToggleRowProps = {
  label: string;
  description: string;
  checked: boolean;
  onChange: () => void;
};

function SettingToggleRow({
  label,
  description,
  checked,
  onChange,
}: SettingToggleRowProps) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="theme-card-subtle flex w-full items-center justify-between gap-3 rounded-[24px] p-4 text-left"
    >
      <div>
        <p className="text-theme-primary text-sm font-semibold">{label}</p>
        <p className="text-theme-muted mt-1 text-sm leading-6">{description}</p>
      </div>
      <span
        className={`flex h-7 w-12 items-center rounded-full p-1 transition ${
          checked ? "bg-[--accent-lime]" : "bg-black/10 dark:bg-white/10"
        }`}
      >
        <span
          className={`h-5 w-5 rounded-full bg-white shadow-[0_3px_10px_rgba(0,0,0,0.15)] transition ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </span>
    </button>
  );
}

type SettingLinkRowProps = {
  label: string;
  description: string;
};

function SettingLinkRow({ label, description }: SettingLinkRowProps) {
  return (
    <button
      type="button"
      className="theme-card-subtle flex w-full items-center justify-between gap-3 rounded-[24px] p-4 text-left"
    >
      <div>
        <p className="text-theme-primary text-sm font-semibold">{label}</p>
        <p className="text-theme-muted mt-1 text-sm leading-6">{description}</p>
      </div>
      <ChevronRight className="text-theme-muted h-4 w-4 shrink-0" />
    </button>
  );
}

type SettingsScreenProps = {
  role?: AppRole;
};

export function SettingsScreen({ role = "consumer" }: SettingsScreenProps) {
  const [bookingAlerts, setBookingAlerts] = useState(true);
  const [messageAlerts, setMessageAlerts] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [privateProfile, setPrivateProfile] = useState(false);
  const isCreator = role === "creator";

  const signOut = () => {
    clearAuthenticatedSession();
    window.location.replace("/auth");
  };

  return (
    <div className="theme-surface app-scrollbar h-full overflow-y-auto px-4 pb-28">
      <div className="sticky-page-header -mx-4 flex items-center justify-between px-4 pb-4 pt-5">
        <AppBackButton fallbackHref="/app/profile" ariaLabel="Back to profile" />
      </div>

      <section className="theme-card-strong theme-hero-gradient mt-1 rounded-[30px] p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
            <SlidersHorizontal className="h-5 w-5 text-[--accent-lime]" />
          </div>
          <div>
            <p className="text-sm font-semibold">Application settings</p>
            <p className="mt-1 text-sm text-white/72">
              {isCreator
                ? "Manage studio alerts, visibility, appearance, and creator account tools."
                : "Manage appearance, alerts, privacy, and your account tools."}
            </p>
          </div>
        </div>
      </section>

      <section className="theme-card mt-4 rounded-[30px] p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Appearance</p>
            <h2 className="text-theme-primary mt-1 text-2xl font-semibold">Theme</h2>
            <p className="text-theme-muted mt-2 text-sm leading-6">
              Switch the app between light and dark appearance from one place.
            </p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[--accent-lime] text-[#111111]">
            <Sparkles className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-4">
          <ThemeToggle />
        </div>
      </section>

      <section className="theme-card mt-4 rounded-[30px] p-5">
        <div className="flex items-center gap-3">
          <div className="theme-card-traction flex h-12 w-12 items-center justify-center rounded-full">
            <Bell className="h-4 w-4" />
          </div>
          <div>
            <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Notifications</p>
            <h2 className="text-theme-primary mt-1 text-2xl font-semibold">Alerts</h2>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <SettingToggleRow
            label={isCreator ? "Lead updates" : "Booking updates"}
            description={
              isCreator
                ? "Receive alerts when new briefs match your services or clients respond to quotes."
                : "Receive alerts when creatives reply to project requests and bookings."
            }
            checked={bookingAlerts}
            onChange={() => setBookingAlerts((value) => !value)}
          />
          <SettingToggleRow
            label={isCreator ? "Client messages" : "Direct messages"}
            description={
              isCreator
                ? "Get notified about new client messages, approvals, and unread studio conversations."
                : "Get notified about new creator messages and unread inbox activity."
            }
            checked={messageAlerts}
            onChange={() => setMessageAlerts((value) => !value)}
          />
          <SettingToggleRow
            label="Product emails"
            description={
              isCreator
                ? "Occasional updates about new features, lead quality improvements, and creator growth tips."
                : "Occasional updates about new features, discovery tools, and creator tips."
            }
            checked={marketingEmails}
            onChange={() => setMarketingEmails((value) => !value)}
          />
        </div>
      </section>

      <section className="theme-card mt-4 rounded-[30px] p-5">
        <div className="flex items-center gap-3">
          <div className="theme-card-traction flex h-12 w-12 items-center justify-center rounded-full">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Privacy</p>
            <h2 className="text-theme-primary mt-1 text-2xl font-semibold">Security and visibility</h2>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <SettingToggleRow
            label={isCreator ? "Pause public profile" : "Private profile mode"}
            description={
              isCreator
                ? "Hide your studio from discovery while you catch up on jobs and still access existing conversations."
                : "Reduce public visibility and share your profile only through direct links."
            }
            checked={privateProfile}
            onChange={() => setPrivateProfile((value) => !value)}
          />
          <SettingLinkRow
            label="Password and sign-in"
            description="Change your password, review sign-in methods, and manage account access."
          />
          <SettingLinkRow
            label={isCreator ? "Blocked clients" : "Blocked accounts"}
            description={
              isCreator
                ? "Review clients or collaborators you have muted or blocked from contacting your studio."
                : "Review any creatives or users you have muted or blocked from contact."
            }
          />
        </div>
      </section>

      <section className="theme-card mt-4 rounded-[30px] p-5">
        <div className="flex items-center gap-3">
          <div className="theme-card-traction flex h-12 w-12 items-center justify-center rounded-full">
            <UserRound className="h-4 w-4" />
          </div>
          <div>
            <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Account</p>
            <h2 className="text-theme-primary mt-1 text-2xl font-semibold">Profile tools</h2>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <SettingLinkRow
            label={isCreator ? "Edit studio profile" : "Edit profile"}
            description={
              isCreator
                ? "Update your studio name, service categories, bio, and public visibility settings."
                : "Update your personal details, creator bio, and public information."
            }
          />
          <SettingLinkRow
            label={isCreator ? "Service packages" : "Saved creatives"}
            description={
              isCreator
                ? "Review your active packages, pricing, and what clients see first on your public profile."
                : "Review your bookmarked makers, artisans, and creators in one place."
            }
          />
          <SettingLinkRow
            label="Support and help"
            description={
              isCreator
                ? "Contact support, report a problem, or review app guidance for managing your studio."
                : "Contact support, report a problem, or review app guidance and FAQs."
            }
          />
        </div>
      </section>

      <section className="theme-card mt-4 rounded-[30px] p-5">
        <div className="flex items-center gap-3">
          <div className="theme-card-traction flex h-12 w-12 items-center justify-center rounded-full">
            <LockKeyhole className="h-4 w-4" />
          </div>
          <div>
            <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Session</p>
            <h2 className="text-theme-primary mt-1 text-2xl font-semibold">Safety</h2>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <button
            type="button"
            onClick={signOut}
            className="w-full rounded-[24px] bg-[#ffd9d9] px-4 py-4 text-left text-sm font-semibold text-[#8b1f1f]"
          >
            Sign out of this device
          </button>
        </div>
      </section>
    </div>
  );
}
