"use client";

import { useEffect, useMemo, useState } from "react";
import { CookTimeBadge, RecipePlaceholder, SafetyBadge } from "@/components/ui";
import { useApp } from "@/lib/app-context";
import { RECIPES } from "@/lib/recipes";
import { recipeMatchesQuery } from "@/lib/search";
import type { Recipe } from "@/lib/types";

function shuffleRecipes(recipes: Recipe[]): Recipe[] {
  const next = [...recipes];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function DiscoverCard({ recipe }: { recipe: Recipe }) {
  const { isSaved, toggleSave, startCooking } = useApp();
  const saved = isSaved(recipe.id);
  const [pop, setPop] = useState(false);

  return (
    <article className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_12px_32px_rgba(60,40,10,0.15)]">
      <RecipePlaceholder
        recipe={recipe}
        className="discover-card-image relative min-h-[42%] flex-1 basis-0"
        large
      />
      <div className="flex shrink-0 flex-col gap-2 p-3 pb-4 sm:gap-2.5 sm:p-4">
        <h2 className="font-display text-xl font-bold leading-tight text-ink sm:text-2xl">
          {recipe.title}
        </h2>
        <div className="flex flex-wrap gap-2">
          <CookTimeBadge mins={recipe.cookTimeMins} />
          <SafetyBadge safety={recipe.safety} />
        </div>
        <div className="discover-card-desc line-clamp-3 rounded-2xl bg-cream px-3 py-2.5 text-sm leading-snug text-ink/85 sm:text-base">
          {recipe.description}
        </div>
        <div className="mt-0.5 flex gap-3">
          <button
            type="button"
            onClick={() => {
              setPop(true);
              toggleSave(recipe.id);
              window.setTimeout(() => setPop(false), 400);
            }}
            className={`star-btn flex min-h-12 min-w-[6.5rem] flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-sun bg-sun/40 text-base font-bold text-ink shadow-sm active:scale-95 sm:min-h-14 sm:text-lg ${
              pop ? "star-pop" : ""
            } ${saved ? "bg-sun" : ""}`}
            aria-pressed={saved}
          >
            <span className="text-2xl">{saved ? "⭐" : "☆"}</span>
            {saved ? "Saved" : "Save"}
          </button>
          <button
            type="button"
            onClick={() => startCooking(recipe.id)}
            className="flex min-h-12 flex-[1.4] items-center justify-center gap-2 rounded-2xl bg-orange text-base font-bold text-white shadow-md active:scale-95 sm:min-h-14 sm:text-lg"
          >
            👨‍🍳 Cook This!
          </button>
        </div>
      </div>
    </article>
  );
}

export function DiscoverScreen() {
  const { searchQuery } = useApp();
  const [deck, setDeck] = useState<Recipe[]>(RECIPES);

  useEffect(() => {
    setDeck(shuffleRecipes(RECIPES));
  }, []);

  const list = useMemo(() => {
    const q = searchQuery.trim();
    return deck.filter((r) => recipeMatchesQuery(r, q));
  }, [deck, searchQuery]);

  if (list.length === 0) {
    return (
      <div className="flex h-full flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="text-4xl">🔎</p>
        <p className="mt-3 font-display text-xl font-bold text-ink">No recipes found</p>
        <p className="mt-1 text-ink/70">Try a different search word.</p>
      </div>
    );
  }

  return (
    <div className="discover-feed" aria-label="Discover recipe feed">
      {list.map((recipe) => (
        <section key={recipe.id} className="discover-slide">
          <div className="mx-auto flex h-full w-full max-w-lg items-stretch px-3 py-2">
            <DiscoverCard recipe={recipe} />
          </div>
        </section>
      ))}
    </div>
  );
}
