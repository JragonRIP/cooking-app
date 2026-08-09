"use client";

import { useState } from "react";
import { RecipePlaceholder, SafetyBadge } from "@/components/ui";
import { useApp } from "@/lib/app-context";
import { getRecipeById } from "@/lib/recipes";
import { recipeMatchesQuery } from "@/lib/search";
import { COOKBOOKS, type CookbookId } from "@/lib/types";

type SavedFilter = "all" | CookbookId;

const FILTERS: { id: SavedFilter; label: string; emoji: string }[] = [
  { id: "all", label: "All", emoji: "⭐" },
  ...COOKBOOKS.map((book) => ({
    id: book.id as SavedFilter,
    label: book.title,
    emoji: book.emoji,
  })),
];

export function SavedScreen() {
  const { state, searchQuery, setTab, startCooking, toggleSave } = useApp();
  const [filter, setFilter] = useState<SavedFilter>("all");

  const savedRecipes = state.savedIds
    .map((id) => getRecipeById(id))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const recipes = savedRecipes
    .filter((r) => filter === "all" || r.suggestedCookbook === filter)
    .filter((r) => recipeMatchesQuery(r, searchQuery));

  if (state.savedIds.length === 0) {
    return (
      <div className="mx-auto flex max-w-lg flex-1 flex-col items-center justify-center px-6 py-10 text-center">
        <p className="text-5xl">⭐</p>
        <h2 className="mt-4 font-display text-2xl font-bold text-ink">
          Nothing saved yet
        </h2>
        <p className="mt-2 text-base text-ink/70">
          Star recipes on Discover to keep them here until you cook!
        </p>
        <button
          type="button"
          onClick={() => setTab("discover")}
          className="mt-6 min-h-14 rounded-2xl bg-orange px-6 text-lg font-bold text-white shadow-md active:scale-95"
        >
          Go Discover →
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-lg flex-1 flex-col">
      <div
        className="flex gap-2 overflow-x-auto px-4 pb-1 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Filter saved recipes"
      >
        {FILTERS.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(item.id)}
              className={`flex shrink-0 items-center gap-1.5 rounded-2xl px-3.5 py-2.5 text-sm font-bold transition-all active:scale-95 ${
                active
                  ? "bg-orange text-white shadow-md"
                  : "bg-white text-ink/75 shadow-sm ring-1 ring-sun/40"
              }`}
            >
              <span aria-hidden>{item.emoji}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {recipes.length === 0 ? (
        <div className="flex flex-1 items-center justify-center px-6 py-10 text-center">
          <p className="font-bold text-ink/70">
            {searchQuery.trim()
              ? "No saved recipes match your search."
              : filter === "all"
                ? "No saved recipes here."
                : `No ${FILTERS.find((f) => f.id === filter)?.label.toLowerCase()} recipes saved yet.`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 px-4 py-4">
          {recipes.map((recipe) => (
            <article
              key={recipe.id}
              className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-md"
            >
              <RecipePlaceholder recipe={recipe} className="aspect-[4/3]" />
              <div className="flex flex-1 flex-col gap-2 p-3">
                <h2 className="font-display text-base font-bold leading-snug text-ink">
                  {recipe.title}
                </h2>
                <SafetyBadge safety={recipe.safety} />
                <button
                  type="button"
                  onClick={() => startCooking(recipe.id)}
                  className="mt-auto min-h-11 rounded-xl bg-orange text-sm font-bold text-white active:scale-95"
                >
                  👨‍🍳 Cook This!
                </button>
                <button
                  type="button"
                  onClick={() => toggleSave(recipe.id)}
                  className="min-h-10 text-sm font-bold text-ink/60"
                >
                  Unstar
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
