import { AppChrome } from "@/components/app-chrome";
import { RoleScreen } from "@/components/role-screen";

export default function ProfilePage() {
  return (
    <AppChrome activeTab="profile">
      <RoleScreen screen="profile" />
    </AppChrome>
  );
}
