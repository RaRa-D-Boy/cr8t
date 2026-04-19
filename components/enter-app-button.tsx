"use client";

import { useRouter } from "next/navigation";
import { setAuthenticatedSession, type AppRole } from "@/lib/session";

type EnterAppButtonProps = {
  children: React.ReactNode;
  className: string;
  role: AppRole;
};

export function EnterAppButton({ children, className, role }: EnterAppButtonProps) {
  const router = useRouter();

  const handleEnterApp = () => {
    setAuthenticatedSession(role);
    router.push("/app");
  };

  return (
    <button type="button" onClick={handleEnterApp} className={className}>
      {children}
    </button>
  );
}
