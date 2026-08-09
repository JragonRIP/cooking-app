"use client";

import { RecipePlaceholder, SafetyBadge } from "@/components/ui";
import { useApp } from "@/lib/app-context";
import { getRecipeById } from "@/lib/recipes";

export function SavedScreen() {
  const { state, searchQuery, setTab, startCooking, toggleSave } = useApp();
  const q = searchQuery.trim().toLowerCase();
  const recipes = state.savedIds
    .map((id) => getRecipeById(id))
    .filter((r): r is NonNullable<typeof r> => Boolean(r))
    .filter((r) => !q || r.title.toLowerCase().includes(q));

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

  if (recipes.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center px-6 text-center">
        <p className="font-bold text-ink/70">No saved recipes match your search.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto grid w-full max-w-lg grid-cols-2 gap-3 px-4 py-4">
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
  );
}
