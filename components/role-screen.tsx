"use client";

import { useSyncExternalStore } from "react";
import { DiscoverScreen } from "@/app/screens/client/discover-screen";
import { HomeScreen } from "@/app/screens/client/home-screen";
import { InboxScreen } from "@/app/screens/client/inbox-screen";
import { PostsScreen } from "@/app/screens/client/posts-screen";
import { ProfileScreen } from "@/app/screens/client/profile-screen";
import { SettingsScreen } from "@/app/screens/client/settings-screen";
import { CreatorDiscoverScreen } from "@/app/screens/creator/discover-screen";
import { CreatorHomeScreen } from "@/app/screens/creator/home-screen";
import { CreatorInboxScreen } from "@/app/screens/creator/inbox-screen";
import { CreatorPostsScreen } from "@/app/screens/creator/posts-screen";
import { CreatorProfileScreen } from "@/app/screens/creator/profile-screen";
import { getRoleServerSnapshot, getRoleSnapshot, subscribeToSession } from "@/lib/session";

type RoleScreenKey = "home" | "discover" | "inbox" | "posts" | "profile" | "settings";

type RoleScreenProps = {
  screen: RoleScreenKey;
};

export function RoleScreen({ screen }: RoleScreenProps) {
  const role = useSyncExternalStore(subscribeToSession, getRoleSnapshot, getRoleServerSnapshot);

  if (role === "creator") {
    switch (screen) {
      case "home":
        return <CreatorHomeScreen />;
      case "discover":
        return <CreatorDiscoverScreen />;
      case "inbox":
        return <CreatorInboxScreen />;
      case "posts":
        return <CreatorPostsScreen />;
      case "profile":
        return <CreatorProfileScreen />;
      case "settings":
        return <SettingsScreen role={role} />;
      default:
        return null;
    }
  }

  switch (screen) {
    case "home":
      return <HomeScreen />;
    case "discover":
      return <DiscoverScreen />;
    case "inbox":
      return <InboxScreen />;
    case "posts":
      return <PostsScreen />;
    case "profile":
      return <ProfileScreen />;
    case "settings":
      return <SettingsScreen role={role} />;
    default:
      return null;
  }
}
