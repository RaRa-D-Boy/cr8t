"use client";

import { Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

type ThemeToggleProps = {
  className?: string;
  compact?: boolean;
};

export function ThemeToggle({ className = "", compact = false }: ThemeToggleProps) {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`theme-toggle ${compact ? "h-11 w-11 px-0" : "gap-2 px-4 py-3"} ${className}`}
    >
      <Moon className="h-4 w-4" />
      {compact ? null : <span>Theme</span>}
    </button>
  );
}
