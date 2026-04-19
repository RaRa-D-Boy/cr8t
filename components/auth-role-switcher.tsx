"use client";

import type { AppRole } from "@/lib/session";

type AuthRoleSwitcherProps = {
  role: AppRole;
  onChange: (role: AppRole) => void;
};

const roleOptions: Array<{ id: AppRole; label: string; description: string }> = [
  { id: "consumer", label: "Client", description: "Hire, discover, and manage requests" },
  { id: "creator", label: "Creator", description: "Showcase services and respond to briefs" },
];

export function AuthRoleSwitcher({ role, onChange }: AuthRoleSwitcherProps) {
  return (
    <div className="theme-card mt-6 rounded-[28px] p-2">
      <div className="grid grid-cols-2 gap-2">
        {roleOptions.map((option) => {
          const isActive = option.id === role;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              aria-pressed={isActive}
              className={`rounded-[22px] px-4 py-4 text-left transition ${
                isActive
                  ? "bg-[#d8ff37] text-[#111111] shadow-[0_12px_30px_rgba(216,255,55,0.2)]"
                  : "theme-card-subtle border border-black/5 dark:border-white/8"
              }`}
            >
              <p className={`text-sm font-semibold ${isActive ? "text-[#111111]" : "text-theme-primary"}`}>{option.label}</p>
              <p className={`mt-2 text-xs leading-5 ${isActive ? "text-black/68" : "text-theme-muted"}`}>{option.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
