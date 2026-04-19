"use client";

import { useEffect, useSyncExternalStore } from "react";
import { AppGateLoader } from "@/components/loading-ui";
import {
  getIsAuthenticatedServerSnapshot,
  getIsAuthenticatedSnapshot,
  subscribeToSession,
} from "@/lib/session";

type AppAccessGateProps = {
  children: React.ReactNode;
};

export function AppAccessGate({ children }: AppAccessGateProps) {
  const isAuthenticated = useSyncExternalStore(
    subscribeToSession,
    getIsAuthenticatedSnapshot,
    getIsAuthenticatedServerSnapshot,
  );

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.replace("/auth");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <AppGateLoader />;
  }

  return <>{children}</>;
}
