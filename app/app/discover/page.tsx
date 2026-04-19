import { AppChrome } from "@/components/app-chrome";
import { RoleScreen } from "@/components/role-screen";

export default function DiscoverPage() {
  return (
    <AppChrome activeTab="discover">
      <RoleScreen screen="discover" />
    </AppChrome>
  );
}
