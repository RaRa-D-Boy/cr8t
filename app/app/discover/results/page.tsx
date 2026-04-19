import { DiscoverResultsScreen } from "@/app/screens/client/discover-results-screen";
import { AppChrome } from "@/components/app-chrome";
import { getCreatorsByTags } from "@/lib/creators";

type DiscoverResultsPageProps = {
  searchParams: Promise<{
    categories?: string;
  }>;
};

export default async function DiscoverResultsPage({
  searchParams,
}: DiscoverResultsPageProps) {
  const params = await searchParams;
  const selectedCategoryIds = params.categories
    ? params.categories.split(",").map((value) => value.trim()).filter(Boolean)
    : [];
  const filteredCreators = getCreatorsByTags(selectedCategoryIds);

  return (
    <AppChrome activeTab="discover">
      <DiscoverResultsScreen creators={filteredCreators} selectedCategoryIds={selectedCategoryIds} />
    </AppChrome>
  );
}
