"use client";

import Image from "next/image";
import { useState } from "react";
import { CirclePlus, FolderOpenDot } from "lucide-react";
import { creatorPortfolioItems, creatorServicePackages } from "@/app/screens/shared/creator-data";

export function CreatorPostsScreen() {
  const [activeTab, setActiveTab] = useState<"services" | "posts">("services");

  return (
    <div className="theme-surface app-scrollbar h-full overflow-y-auto px-4 pb-28 pt-2">
      <div className="sticky-page-header -mx-2 flex items-center justify-between gap-3 rounded-[35px] px-4 pb-4 pt-5 backdrop-blur-xl">
        <div>
          <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Studio</p>
          <h1 className="text-theme-primary mt-1 text-xl font-semibold">Services and portfolio</h1>
        </div>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[--accent-lime] text-[#111111]"
          aria-label="Add new studio item"
        >
          <CirclePlus className="h-5 w-5" />
        </button>
      </div>

      <section className="theme-card-strong theme-hero-gradient mt-1 rounded-[30px] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">Creator tools</p>
        <h2 className="mt-2 text-3xl font-semibold">Package your offers so clients can choose quickly.</h2>
        <p className="mt-3 text-sm leading-6 text-white/72">
          Keep services clear, show recent work, and make it easy for a client to decide you are the right fit.
        </p>
      </section>

      <section className="theme-card mt-4 rounded-[30px] p-3">
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("services")}
            className={`rounded-[22px] px-4 py-3 text-sm font-semibold transition ${
              activeTab === "services" ? "theme-card-traction text-[#111111]" : "theme-card-subtle text-theme-primary"
            }`}
          >
            <span className={activeTab === "services" ? "text-[#111111]" : undefined}>Active services</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("posts")}
            className={`rounded-[22px] px-4 py-3 text-sm font-semibold transition ${
              activeTab === "posts" ? "theme-card-traction text-[#111111]" : "theme-card-subtle text-theme-primary"
            }`}
          >
            <span className={activeTab === "posts" ? "text-[#111111]" : undefined}>Recent posts</span>
          </button>
        </div>
      </section>

      {activeTab === "services" ? (
        <section className="theme-card mt-4 rounded-[30px] p-5">
          <div className="flex items-center gap-3">
            <div className="theme-card-strong flex h-12 w-12 items-center justify-center rounded-full">
              <FolderOpenDot className="h-5 w-5" />
            </div>
            <div>
              <p className="text-theme-primary text-sm font-semibold">Active services</p>
              <p className="text-theme-muted text-sm">Your most visible offers for new inbound leads.</p>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {creatorServicePackages.map((service) => (
              <article key={service.title} className="theme-card-subtle rounded-[24px] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-theme-primary text-base font-semibold">{service.title}</h3>
                    <p className="text-theme-muted mt-2 text-sm">
                      {service.price} • {service.turnaround}
                    </p>
                  </div>
                  <span className="rounded-full bg-[#d8ff37] px-3 py-1 text-xs font-semibold text-black">Live</span>
                </div>
                <p className="text-theme-secondary mt-3 text-sm leading-6">{service.description}</p>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className="mt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Recent posts</p>
              <h2 className="text-theme-primary mt-1 text-xl font-semibold">Portfolio highlights</h2>
            </div>
            <div className="theme-card rounded-full px-3 py-2 text-xs font-semibold">{creatorPortfolioItems.length} items</div>
          </div>

          <div className="mt-4 space-y-3">
            {creatorPortfolioItems.map((item) => (
              <article key={item.title} className="theme-card overflow-hidden rounded-[28px]">
                <div className="relative h-40 w-full">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 380px" />
                </div>
                <div className="p-4">
                  <p className="text-theme-muted text-xs font-semibold uppercase tracking-[0.18em]">{item.category}</p>
                  <h3 className="text-theme-primary mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-theme-secondary mt-2 text-sm">{item.result}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
