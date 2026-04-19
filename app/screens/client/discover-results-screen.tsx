import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { getDiscoverCategoryById } from "@/app/screens/shared/screen-data";
import type { CreatorProfile } from "@/lib/creators";

type DiscoverResultsScreenProps = {
  creators: CreatorProfile[];
  selectedCategoryIds: string[];
};

export function DiscoverResultsScreen({
  creators,
  selectedCategoryIds,
}: DiscoverResultsScreenProps) {
  const selectedCategories = selectedCategoryIds
    .map((categoryId) => getDiscoverCategoryById(categoryId))
    .filter((category): category is NonNullable<typeof category> => Boolean(category));

  const title =
    selectedCategories.length === 1
      ? `${selectedCategories[0].label} creatives`
      : `${selectedCategories.length} categories selected`;

  return (
    <div className="theme-surface app-scrollbar h-full overflow-y-auto px-4 pb-28 pt-5">
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/app/discover"
          className="theme-icon-button flex h-11 w-11 items-center justify-center rounded-full"
          aria-label="Back to discover"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>

      <section className="theme-card-strong mt-5 rounded-[30px] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">Discover results</p>
        <h1 className="mt-2 text-3xl font-semibold">{title}</h1>
        <p className="mt-3 text-sm leading-6 text-white/72">
          {selectedCategories.length === 1
            ? `Showing makers that match ${selectedCategories[0].label.toLowerCase()} requests.`
            : "Showing creatives that match any of the categories you selected."}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {selectedCategories.map((category) => (
            <span key={category.id} className="rounded-full bg-white/10 px-3 py-2 text-xs font-medium text-white/82">
              {category.label}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-4 space-y-3">
        {creators.length > 0 ? (
          creators.map((creator) => (
            <Link
              key={creator.slug}
              href={`/app/creator/${creator.slug}`}
              className="theme-card block rounded-[28px] p-4"
            >
              <div className="flex items-start gap-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={creator.media[0].src}
                    alt={creator.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-theme-primary text-base font-semibold">{creator.name}</p>
                      <p className="text-theme-muted mt-1 text-sm">{creator.category}</p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-[#d8ff37] px-3 py-1 text-xs font-semibold text-[#111111]">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span>{creator.rating}</span>
                    </div>
                  </div>

                  <p className="text-theme-secondary mt-3 text-sm leading-6">{creator.intro}</p>

                  <div className="text-theme-muted mt-3 flex flex-wrap gap-3 text-xs font-medium">
                    <span>{creator.location}</span>
                    <span>{creator.turnaround}</span>
                    <span>Starts {creator.startingAt}</span>
                  </div>

                  <div className="text-theme-primary mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                    View creative
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="theme-card rounded-[28px] p-5">
            <p className="text-theme-primary text-lg font-semibold">No creatives found yet.</p>
            <p className="text-theme-muted mt-2 text-sm leading-6">
              Try removing a category or go back and choose a broader handwork field.
            </p>
            <Link
              href="/app/discover"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[--accent-lime] px-5 py-3 text-sm font-semibold text-[#111111]"
            >
              Choose categories again
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
