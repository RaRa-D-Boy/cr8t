"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { ArrowRight, CirclePlus, Pencil, Trash2, X } from "lucide-react";
import { discoverCategories, getDiscoverCategoryById } from "@/app/screens/shared/screen-data";
import {
  deletePost,
  getPostsServerSnapshot,
  getPostsSnapshot,
  savePost,
  subscribeToPosts,
  type UserPost,
} from "@/lib/posts";

const postTypeOptions: Array<{ id: UserPost["type"]; label: string }> = [
  { id: "work", label: "Work" },
  { id: "item", label: "Item" },
  { id: "idea", label: "Idea" },
];

const emptyForm = {
  id: "",
  type: "idea" as UserPost["type"],
  title: "",
  categoryId: "",
  budget: "",
  details: "",
};

export function PostsScreen() {
  const postsSnapshot = useSyncExternalStore(subscribeToPosts, getPostsSnapshot, getPostsServerSnapshot);
  const posts = useMemo(() => JSON.parse(postsSnapshot) as UserPost[], [postsSnapshot]);
  const [form, setForm] = useState(emptyForm);
  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const isEditing = Boolean(form.id);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isComposerOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isComposerOpen && dialog.open) {
      dialog.close();
    }
  }, [isComposerOpen]);

  const closeComposer = () => {
    setIsComposerOpen(false);
    setForm(emptyForm);
  };

  const openComposer = () => {
    setIsComposerOpen(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.title.trim() || !form.categoryId || !form.details.trim()) {
      return;
    }

    savePost({
      id: form.id || undefined,
      type: form.type,
      title: form.title.trim(),
      categoryId: form.categoryId,
      budget: form.budget.trim() || "Open budget",
      details: form.details.trim(),
    });

    closeComposer();
  };

  const handleEdit = (post: UserPost) => {
    setForm({
      id: post.id,
      type: post.type,
      title: post.title,
      categoryId: post.categoryId,
      budget: post.budget,
      details: post.details,
    });
    setIsComposerOpen(true);
  };

  const totalTraction = posts.reduce((total, post) => total + post.traction.length, 0);

  return (
    <div className="theme-surface app-scrollbar h-full overflow-y-auto px-4 pb-28 pt-2">
      <div className="sticky-page-header backdrop-blur-xl rounded-[35px] -mx-2 flex items-center justify-between px-4 pb-4 pt-5">
        <div>
          <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Post board</p>
          <h1 className="text-theme-primary mt-1 text-xl font-semibold">Share your request</h1>
        </div>
        <div className="theme-card rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
          {posts.length} posts
        </div>
      </div>

      <section className="theme-card mt-4 rounded-[30px] px-3 py-4">
        <div>
          <div className="flex items-center justify-between gap-3 w-full ">
            <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">My posts</p>
            <div className="rounded-full bg-[#d8ff37] px-3 py-2 text-xs font-semibold text-[#111111]">
              {totalTraction} creator actions
            </div>
          </div>

          <h2 className="username mt-1 text-xl font-semibold">Traction and responses</h2>
        </div>

        <div className="mt-4 space-y-3">
          {posts.length > 0 ? (
            posts.map((post) => {
              const category = getDiscoverCategoryById(post.categoryId);

              return (
                <article key={post.id} className="theme-card-subtle rounded-[26px] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.18em]">{post.type}</p>
                      <h3 className="text-theme-primary mt-2 text-lg font-semibold">{post.title}</h3>
                      <p className="text-theme-muted mt-1 text-sm">
                        {category?.label ?? "General"} • {post.budget} • {post.createdAt}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleEdit(post)}
                        className="theme-card rounded-full p-3"
                        aria-label="Edit post"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => deletePost(post.id)}
                        className="rounded-full bg-[#ffd9d9] p-3 text-[#8b1f1f]"
                        aria-label="Delete post"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-theme-secondary mt-3 text-sm leading-6">{post.details}</p>

                  <div className="mt-4">
                    <p className="text-theme-primary text-sm font-semibold">Creator traction</p>
                    <div className="mt-3 space-y-3">
                      {post.traction.map((creator) => (
                        <div
                          key={`${post.id}-${creator.slug}`}
                          className="theme-card-traction flex items-center justify-between gap-3 rounded-[22px] p-3"
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                              <Image src={creator.avatar} alt={creator.name} fill className="object-cover" sizes="44px" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[#111111] truncate text-sm font-semibold">{creator.name}</p>
                              <p className="text-[#111111] text-xs">Rating {creator.rating}</p>
                            </div>
                          </div>
                          <span className="rounded-full bg-black px-3 py-1 text-[8px] font-semibold text-white">
                            {creator.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="theme-card-subtle rounded-[26px] p-5">
              <p className="text-theme-primary text-lg font-semibold">No posts yet.</p>
              <p className="text-theme-muted mt-2 text-sm leading-6">
                Create your first request above and matching creators will start showing traction here.
              </p>
            </div>
          )}
        </div>
      </section>

      <button
        type="button"
        onClick={openComposer}
        aria-label="Create new post"
        className="absolute bottom-24 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#d8ff37] text-[#111111] shadow-[0_18px_40px_rgba(216,255,55,0.35)]"
      >
        <CirclePlus className="h-6 w-6" />
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setIsComposerOpen(false)}
        className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none overflow-hidden border-0 bg-transparent p-0 backdrop:bg-black/45"
      >
        <div className="flex h-full items-end justify-center">
          <div className="theme-surface app-scrollbar max-h-[92dvh] min-h-[70dvh] w-full max-w-[420px] overflow-y-auto rounded-t-[32px] px-5 pb-10 pt-5 shadow-[0_-20px_60px_rgba(0,0,0,0.28)]">
            <div className="mx-auto h-1.5 w-16 rounded-full bg-black/12 dark:bg-white/12" />

            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Composer</p>
                <h2 className="text-theme-primary mt-1 text-2xl font-semibold">
                  {isEditing ? "Update post" : "Create new post"}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeComposer}
                className="theme-card rounded-full p-3"
                aria-label="Close composer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="grid gap-4">
                <label className="block">
                  <span className="text-theme-primary mb-2 block text-sm font-medium">Post type</span>
                  <div className="flex gap-2 overflow-x-auto app-scrollbar pb-1">
                    {postTypeOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setForm((current) => ({ ...current, type: option.id }))}
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${
                          form.type === option.id ? "bg-[--accent-lime] text-[#111111]" : "theme-card-subtle"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </label>

                <label className="block">
                  <span className="text-theme-primary mb-2 block text-sm font-medium">Title</span>
                  <input
                    value={form.title}
                    onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
                    placeholder="Need a custom wardrobe, mural, decor setup..."
                    className="theme-input w-full rounded-[22px] px-4 py-4 text-sm outline-none placeholder:text-[--muted]"
                  />
                </label>

                <label className="block">
                  <span className="text-theme-primary mb-2 block text-sm font-medium">Category</span>
                  <select
                    value={form.categoryId}
                    onChange={(event) => setForm((current) => ({ ...current, categoryId: event.target.value }))}
                    className="theme-input w-full rounded-[22px] px-4 py-4 text-sm outline-none"
                  >
                    <option value="">Choose a category</option>
                    {discoverCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-theme-primary mb-2 block text-sm font-medium">Budget</span>
                  <input
                    value={form.budget}
                    onChange={(event) => setForm((current) => ({ ...current, budget: event.target.value }))}
                    placeholder="$300 - $800 or Open budget"
                    className="theme-input w-full rounded-[22px] px-4 py-4 text-sm outline-none placeholder:text-[--muted]"
                  />
                </label>

                <label className="block">
                  <span className="text-theme-primary mb-2 block text-sm font-medium">Details</span>
                  <textarea
                    value={form.details}
                    onChange={(event) => setForm((current) => ({ ...current, details: event.target.value }))}
                    placeholder="Describe your item, service, or idea so creators know how to respond."
                    rows={4}
                    className="theme-input w-full rounded-[22px] px-4 py-4 text-sm outline-none placeholder:text-[--muted]"
                  />
                </label>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d8ff37] px-5 py-3 text-sm font-semibold text-[#111111]"
                >
                  {isEditing ? "Update post" : "Post request"}
                  <ArrowRight className="h-4 w-4" />
                </button>
                {isEditing ? (
                  <button
                    type="button"
                    onClick={closeComposer}
                    className="theme-card-subtle rounded-full px-4 py-3 text-sm font-semibold"
                  >
                    Cancel
                  </button>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
