"use client";

import { RecipePlaceholder } from "@/components/ui";
import { useApp } from "@/lib/app-context";
import { getRecipeById } from "@/lib/recipes";

export function CookingTabScreen() {
  const { state, setTab, setCookingModeOpen, stopCooking } = useApp();
  const session = state.cooking;
  const recipe = session ? getRecipeById(session.recipeId) : null;

  if (!session || !recipe) {
    return (
      <div className="mx-auto flex max-w-lg flex-1 flex-col items-center justify-center px-6 py-10 text-center">
        <p className="text-5xl">👨‍🍳</p>
        <h2 className="mt-4 font-display text-2xl font-bold text-ink">
          No recipe cooking yet
        </h2>
        <p className="mt-2 text-base text-ink/70">
          Pick one from Discover and tap Cook This!
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

  const totalSteps = recipe.steps.length;
  const progressIndex = Math.max(session.stepIndex, 0);
  const onIngredients = session.stepIndex < 0;
  const pct = onIngredients
    ? 5
    : Math.round(((progressIndex + 1) / (totalSteps + 1)) * 100);
  const stepLabel = onIngredients
    ? "Gathering ingredients"
    : `Step ${session.stepIndex + 1} of ${totalSteps}`;

  return (
    <div className="mx-auto w-full max-w-lg px-4 py-4">
      <article className="overflow-hidden rounded-[28px] bg-white shadow-lg">
        <RecipePlaceholder recipe={recipe} className="aspect-[16/10]" />
        <div className="space-y-4 p-5">
          <h2 className="font-display text-2xl font-bold text-ink">{recipe.title}</h2>
          <p className="text-base font-semibold text-ink/75">{stepLabel}</p>
          <div className="h-4 overflow-hidden rounded-full bg-cream">
            <div
              className="h-full rounded-full bg-mint transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <button
            type="button"
            onClick={() => setCookingModeOpen(true)}
            className="flex min-h-14 w-full items-center justify-center rounded-2xl bg-orange text-lg font-bold text-white shadow-md active:scale-95"
          >
            Resume Cooking!
          </button>
          <button
            type="button"
            onClick={stopCooking}
            className="flex min-h-12 w-full items-center justify-center rounded-2xl border-2 border-orange/40 bg-white text-base font-bold text-orange-deep active:scale-95"
          >
            Stop recipe
          </button>
        </div>
      </article>
    </div>
  );
}
