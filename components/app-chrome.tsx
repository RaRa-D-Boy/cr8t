"use client";

import { useSyncExternalStore } from "react";
import { DashboardScreen, type TabId } from "@/components/dashboard-screen";
import { getRoleServerSnapshot, getRoleSnapshot, subscribeToSession } from "@/lib/session";

type AppChromeProps = {
  activeTab: TabId;
  children: React.ReactNode;
};

export function AppChrome({ activeTab, children }: AppChromeProps) {
  const role = useSyncExternalStore(subscribeToSession, getRoleSnapshot, getRoleServerSnapshot);

  return (
    <DashboardScreen activeTab={activeTab} role={role}>
      {children}
    </DashboardScreen>
  );
}
