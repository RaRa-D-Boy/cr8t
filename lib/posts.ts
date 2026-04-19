import { creators } from "@/lib/creators";

export type CreatorTraction = {
  slug: string;
  name: string;
  rating: string;
  avatar: string;
  status: "Reached out" | "Interested" | "Committed";
};

export type UserPost = {
  id: string;
  type: "work" | "item" | "idea";
  title: string;
  categoryId: string;
  budget: string;
  details: string;
  createdAt: string;
  traction: CreatorTraction[];
};

export type PostInput = {
  id?: string;
  type: UserPost["type"];
  title: string;
  categoryId: string;
  budget: string;
  details: string;
};

const STORAGE_KEY = "cr8t-user-posts";
const listeners = new Set<() => void>();
const tractionStates: CreatorTraction["status"][] = ["Reached out", "Interested", "Committed"];

function readPosts(): UserPost[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const rawPosts = window.localStorage.getItem(STORAGE_KEY);
    return rawPosts ? (JSON.parse(rawPosts) as UserPost[]) : [];
  } catch {
    return [];
  }
}

function writePosts(posts: UserPost[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  listeners.forEach((listener) => listener());
}

function buildTraction(categoryId: string): CreatorTraction[] {
  const matchingCreators = creators.filter((creator) => creator.discoveryTags.includes(categoryId));
  const fallbackCreators = matchingCreators.length > 0 ? matchingCreators : creators.slice(0, 3);

  return fallbackCreators.slice(0, 3).map((creator, index) => ({
    slug: creator.slug,
    name: creator.name,
    rating: creator.rating,
    avatar: creator.media[0]?.src ?? "/icon",
    status: tractionStates[index % tractionStates.length],
  }));
}

export function subscribeToPosts(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function getPostsSnapshot() {
  return JSON.stringify(readPosts());
}

export function getPostsServerSnapshot() {
  return "[]";
}

export function savePost(input: PostInput) {
  const existingPosts = readPosts();
  const nextPost: UserPost = {
    id: input.id ?? `post-${Date.now()}`,
    type: input.type,
    title: input.title,
    categoryId: input.categoryId,
    budget: input.budget,
    details: input.details,
    createdAt: input.id
      ? existingPosts.find((post) => post.id === input.id)?.createdAt ?? "Just now"
      : "Just now",
    traction: buildTraction(input.categoryId),
  };

  const updatedPosts = input.id
    ? existingPosts.map((post) => (post.id === input.id ? nextPost : post))
    : [nextPost, ...existingPosts];

  writePosts(updatedPosts);
}

export function deletePost(postId: string) {
  const remainingPosts = readPosts().filter((post) => post.id !== postId);
  writePosts(remainingPosts);
}
