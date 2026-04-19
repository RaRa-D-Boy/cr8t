import { Bell, Search } from "lucide-react";
import { CreatorCard } from "@/app/screens/shared/creator-card";
import { categoryPills } from "@/app/screens/shared/screen-data";
import { creators } from "@/lib/creators";

export function HomeScreen() {
  return (
    <div className="theme-surface app-scrollbar h-full overflow-y-auto px-4 pb-28">
      <header className="sticky-page-header -mx-4 flex items-center justify-between gap-4 px-2 pb-4 pt-2 ">
        <div>
          <p className="text-sm font-medium backdrop-blur-xl  rounded-full p-4 username">Hi, Clara Sekar</p>
        </div>
        <div className="flex items-center gap-2 backdrop-blur-xl rounded-full p-4 ">
          <button
            type="button"
            aria-label="Open notifications"
            className="theme-icon-button flex h-11 w-11 items-center justify-center rounded-full"
          >
            <Bell className="h-4 w-4" />
          </button>
        </div>
      </header>

      <h1 className="text-theme-primary mt-1 max-w-[14rem] text-[2.2rem] font-semibold leading-none tracking-tight">
        Explore creative work near you
      </h1>
      <div className="theme-card mt-4 flex items-center gap-3 rounded-full px-4 py-4">
        <Search className="text-theme-muted h-4 w-4" />
        <span className="text-theme-muted text-sm">Search creators, services, or locations</span>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto app-scrollbar pb-1">
        {categoryPills.map((category, index) => (
          <span
            key={category}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${
              index === 0 ? "theme-card-traction" : "theme-card text-theme-secondary"
            }`}
          >
            {category}
          </span>
        ))}
      </div>

      <section className="mt-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Featured cards</p>
            <h2 className="text-theme-primary mt-1 text-xl font-semibold">Creative media showcase</h2>
          </div>
          <div className="theme-card rounded-full px-3 py-2 text-xs font-semibold">{creators.length} creators</div>
        </div>

        <div className="mt-4 space-y-4">
          {creators.map((creator, index) => (
            <CreatorCard key={creator.slug} creator={creator} featured={index === 0} />
          ))}
        </div>
      </section>
    </div>
  );
}
