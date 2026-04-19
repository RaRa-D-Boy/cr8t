import { AppChrome } from "@/components/app-chrome";
import { RoleScreen } from "@/components/role-screen";

export default function PostsPage() {
  return (
    <AppChrome activeTab="posts">
      <RoleScreen screen="posts" />
    </AppChrome>
  );
}
