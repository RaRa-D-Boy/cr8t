import type { ReactNode } from "react";

type MobileFrameProps = {
  children: ReactNode;
  contentClassName?: string;
  shellClassName?: string;
  viewportClassName?: string;
};

export function MobileFrame({
  children,
  contentClassName = "",
  shellClassName = "",
  viewportClassName = "",
}: MobileFrameProps) {
  return (
    <main className="app-shell-background min-h-screen px-0 py-0 transition-colors sm:px-6 sm:py-8">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center sm:min-h-0">
        <section className={`h-full w-full sm:max-w-[420px] sm:rounded-[36px] sm:p-2 app-device-shell ${shellClassName}`}>
          <div
            className={`app-device-viewport relative h-[100svh] overflow-hidden sm:h-[860px] sm:rounded-[30px] ${viewportClassName}`}
          >
            <div className="app-device-glow pointer-events-none absolute inset-x-0 top-0 h-48" />
            <div className={`relative h-full ${contentClassName}`}>{children}</div>
          </div>
        </section>
      </div>
    </main>
  );
}
