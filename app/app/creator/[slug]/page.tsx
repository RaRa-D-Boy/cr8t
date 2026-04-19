import { notFound } from "next/navigation";
import { CreatorProfileScreen } from "@/components/creator-profile-screen";
import { getCreatorBySlug } from "@/lib/creators";

type CreatorPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CreatorPage({ params }: CreatorPageProps) {
  const { slug } = await params;
  const creator = getCreatorBySlug(slug);

  if (!creator) {
    notFound();
  }

  return <CreatorProfileScreen creator={creator} />;
}
