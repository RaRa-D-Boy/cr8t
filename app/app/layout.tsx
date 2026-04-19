import { AppAccessGate } from "@/components/app-access-gate";
import { MobileFrame } from "@/components/mobile-frame";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MobileFrame viewportClassName="sm:h-[860px]">
      <AppAccessGate>{children}</AppAccessGate>
    </MobileFrame>
  );
}
