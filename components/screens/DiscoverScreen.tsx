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
    <article className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[22px] bg-white shadow-[0_12px_32px_rgba(60,40,10,0.15)] short:rounded-[18px]">
      <RecipePlaceholder
        recipe={recipe}
        className="relative min-h-[7.5rem] flex-[1.1] basis-0 short:min-h-[5.5rem] short:flex-1"
        large
      />
      <div className="flex min-h-0 shrink-0 flex-col gap-1.5 p-2.5 short:gap-1 short:p-2 sm:gap-2.5 sm:p-4">
        <h2 className="font-display text-lg font-bold leading-tight text-ink short:text-base sm:text-2xl">
          {recipe.title}
        </h2>
        <div className="flex flex-wrap gap-1.5 short:gap-1">
          <CookTimeBadge mins={recipe.cookTimeMins} />
          <SafetyBadge safety={recipe.safety} />
        </div>
        <div className="line-clamp-2 rounded-xl bg-cream px-2.5 py-2 text-xs leading-snug text-ink/85 short:line-clamp-1 short:py-1.5 sm:line-clamp-3 sm:rounded-2xl sm:px-3 sm:py-2.5 sm:text-base">
          {recipe.description}
        </div>
        <div className="mt-0.5 flex gap-2 short:gap-1.5 sm:gap-3">
          <button
            type="button"
            onClick={() => {
              setPop(true);
              toggleSave(recipe.id);
              window.setTimeout(() => setPop(false), 400);
            }}
            className={`star-btn flex min-h-11 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-xl border-2 border-sun bg-sun/40 text-sm font-bold text-ink shadow-sm active:scale-95 short:min-h-10 short:rounded-lg short:text-xs sm:min-h-14 sm:gap-2 sm:rounded-2xl sm:text-lg ${
              pop ? "star-pop" : ""
            } ${saved ? "bg-sun" : ""}`}
            aria-pressed={saved}
          >
            <span className="text-xl short:text-lg sm:text-2xl">{saved ? "⭐" : "☆"}</span>
            {saved ? "Saved" : "Save"}
          </button>
          <button
            type="button"
            onClick={() => startCooking(recipe.id)}
            className="flex min-h-11 min-w-0 flex-[1.35] items-center justify-center gap-1.5 rounded-xl bg-orange px-2 text-sm font-bold text-white shadow-md active:scale-95 short:min-h-10 short:rounded-lg short:text-xs sm:min-h-14 sm:rounded-2xl sm:text-lg"
          >
            <span className="narrow:hidden">👨‍🍳 </span>Cook!
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
          <div className="mx-auto flex h-full min-h-0 w-full max-w-lg items-stretch px-2 py-1.5 short:px-1.5 short:py-1 sm:px-3 sm:py-2">
            <DiscoverCard recipe={recipe} />
          </div>
        </section>
      ))}
    </div>
  );
}
