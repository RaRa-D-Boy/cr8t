"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import type { AppRole } from "@/lib/session";
import { CirclePlus, Compass, Home, MessageCircleMore, UserRound } from "lucide-react";
import { useScrollVisibility } from "@/lib/util/useScrollElementVisibility";

const consumerNavItems = [
  { id: "home", label: "Home", href: "/app", icon: Home },
  { id: "posts", label: "Post", href: "/app/posts", icon: CirclePlus },
  { id: "discover", label: "Discover", href: "/app/discover", icon: Compass },
  { id: "inbox", label: "Inbox", href: "/app/inbox", icon: MessageCircleMore },
  { id: "profile", label: "Profile", href: "/app/profile", icon: UserRound },
] as const;

const creatorNavItems = [
  { id: "home", label: "Home", href: "/app", icon: Home },
  { id: "posts", label: "Studio", href: "/app/posts", icon: CirclePlus },
  { id: "discover", label: "Leads", href: "/app/discover", icon: Compass },
  { id: "inbox", label: "Inbox", href: "/app/inbox", icon: MessageCircleMore },
  { id: "profile", label: "Profile", href: "/app/profile", icon: UserRound },
] as const;

export type TabId = (typeof consumerNavItems)[number]["id"];

type DashboardScreenProps = {
  activeTab: TabId;
  children: ReactNode;
  role?: AppRole;
};

export function DashboardScreen({ activeTab, children, role = "consumer" }: DashboardScreenProps) {
  const router = useRouter();
  const navItems = role === "creator" ? creatorNavItems : consumerNavItems;
  const isNavVisible = useScrollVisibility(50);

  const handleTabChange = (href: string, tab: TabId) => {
    if (tab === activeTab) {
      return;
    }

    router.push(href);
  };

  return (
    <div className="theme-surface relative h-full">
      {children}

      <nav 
        className={`theme-nav fixed inset-x-4 bottom-4 z-20 rounded-[28px] px-2 py-2 text-white shadow-[0_20px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-transform duration-300 ease-in-out ${
          isNavVisible ? "translate-y-0" : "translate-y-[calc(100%+1rem)]"
        }`}
      >
        <ul className="flex items-center justify-between gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeTab;

            return (
              <li key={item.id} className={isActive ? "flex-1" : "w-11"}>
                <button
                  type="button"
                  onClick={() => handleTabChange(item.href, item.id)}
                  aria-label={item.label}
                  className={`flex w-full items-center justify-center rounded-full py-4 text-center text-[11px] font-medium transition ${
                    isActive
                      ? "theme-nav-active gap-2 px-4 shadow-[0_10px_22px_rgba(216,255,55,0.2)]"
                      : "theme-nav-inactive"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {isActive ? <span>{item.label}</span> : <span className="sr-only">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}