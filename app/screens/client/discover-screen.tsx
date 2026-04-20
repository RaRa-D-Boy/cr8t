"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { discoverCategories } from "@/app/screens/shared/screen-data";
import { useScrollVisibility } from "@/lib/util/useScrollElementVisibility";

export function DiscoverScreen() {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const isNavVisible = useScrollVisibility(70);
  const selectedCount = selectedCategories.length;
  const buttonLabel = useMemo(() => {
    if (selectedCount === 0) {
      return "";
    }

    return selectedCount === 1 ? "See 1 category result" : `See ${selectedCount} category results`;
  }, [selectedCount]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((current) =>
      current.includes(categoryId) ? current.filter((item) => item !== categoryId) : [...current, categoryId],
    );
  };

  const openResults = () => {
    if (selectedCategories.length === 0) {
      return;
    }

    const params = new URLSearchParams();
    params.set("categories", selectedCategories.join(","));
    router.push(`/app/discover/results?${params.toString()}`);
  };

  return (
    <div className="theme-surface app-scrollbar h-full overflow-y-auto px-4 pb-28 pt-2">
      <div className={`sticky-page-header -mx-2 flex items-center justify-between gap-3 px-4 pb-4 pt-5 rounded-[40px] p-4 backdrop-blur-xl ${isNavVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div>
          <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Creative handwork</p>
          {/* <h3 className="text-theme-primary mt-1 text-xl font-semibold">Choose categories</h3> */}
        </div>

        {selectedCount > 0 ? (
          <button
            type="button"
            onClick={openResults}
            className="flex shrink-0 items-center gap-2 rounded-full bg-[#d8ff37] px-4 py-3 text-sm font-semibold text-[#111111] shadow-[0_18px_40px_rgba(216,255,55,0.28)] backdrop-blur-xl"
          >
            <span>{selectedCount}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <div className="theme-card shrink-0 rounded-full px-3 py-2 text-xs font-semibold">
            {selectedCount} selected
          </div>
        )}
      </div>

      <div className="theme-card-strong rounded-[30px] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">Discover</p>
        <h2 className="mt-2 text-3xl font-semibold">Find the right creative for your next project.</h2>
        <p className="mt-3 text-sm leading-6 text-white/72">
          Select one or more handwork categories and we will show matching creatives ready for your project.
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-theme-muted text-sm">
          {selectedCount > 0 ? buttonLabel : "Select one or more categories to continue."}
        </p>
        <div className="theme-card rounded-full px-3 py-2 text-xs font-semibold">{selectedCount} selected</div>
      </div>

      <div className="mt-4 grid gap-3">
        {discoverCategories.map((category) => {
          const isSelected = selectedCategories.includes(category.id);

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => toggleCategory(category.id)}
              className={`rounded-[26px] p-4 text-left transition ${
                isSelected
                  ? "bg-[#d8ff37] text-[#111111] "
                  : "theme-card"
              }`}
            >
              <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${isSelected ? "text-black/55" : "text-theme-muted"}`}>
                Category
              </p>
              <div className="mt-2 flex items-start justify-between gap-3">
                <div>
                  <h3 className={`text-xl font-semibold ${isSelected ? "text-[#111111]" : "text-theme-primary"}`}>
                    {category.label}
                  </h3>
                  <p className={`mt-2 text-sm leading-6 ${isSelected ? "text-black/72" : "text-theme-secondary"}`}>
                    {category.description}
                  </p>
                </div>
                <span
                  className={`mt-1 rounded-full px-3 py-1 text-xs font-semibold ${
                    isSelected ? "bg-black text-white" : "theme-card-traction"
                  }`}
                >
                  {isSelected ? "Selected" : (<strong className="text-black">Pick</strong>)}
                </span>
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
}
