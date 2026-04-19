import { AppChrome } from "@/components/app-chrome";
import { RoleScreen } from "@/components/role-screen";

export default function SettingsPage() {
  return (
    <AppChrome activeTab="profile">
      <RoleScreen screen="settings" />
    </AppChrome>
  );
}
