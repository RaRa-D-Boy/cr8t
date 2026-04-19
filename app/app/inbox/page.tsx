import { AppChrome } from "@/components/app-chrome";
import { RoleScreen } from "@/components/role-screen";

export default function InboxPage() {
  return (
    <AppChrome activeTab="inbox">
      <RoleScreen screen="inbox" />
    </AppChrome>
  );
}
