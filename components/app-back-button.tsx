"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type AppBackButtonProps = {
  fallbackHref?: string;
  ariaLabel?: string;
  className?: string;
};

export function AppBackButton({
  fallbackHref = "/app",
  ariaLabel = "Go back",
  className = "theme-icon-button flex h-11 w-11 items-center justify-center rounded-full",
}: AppBackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallbackHref);
  };

  return (
    <button type="button" onClick={handleBack} aria-label={ariaLabel} className={className}>
      <ArrowLeft className="h-4 w-4" />
    </button>
  );
}
