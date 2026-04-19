import { AppChrome } from "@/components/app-chrome";
import { RoleScreen } from "@/components/role-screen";

export default function AppPage() {
  return (
    <AppChrome activeTab="home">
      <RoleScreen screen="home" />
    </AppChrome>
  );
}
