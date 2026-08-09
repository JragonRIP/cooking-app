"use client";

import { useEffect, useMemo, useState } from "react";
import { StepTimer } from "@/components/StepTimer";
import { StarRating } from "@/components/ui";
import { useApp } from "@/lib/app-context";
import { getRecipeById } from "@/lib/recipes";
import { scaleIngredientName } from "@/lib/servings";
import { COOKBOOKS, type CookbookId } from "@/lib/types";

type Phase = "wizard" | "celebration" | "review";

const SERVING_OPTIONS = [1, 2, 3, 4, 5, 6, 8];

export function CookingMode() {
  const {
    state,
    cookingModeOpen,
    exitCookingMode,
    updateCooking,
    completeCookingReview,
    burstConfetti,
    showToast,
  } = useApp();

  const session = state.cooking;
  const recipe = session ? getRecipeById(session.recipeId) : null;
  const [phase, setPhase] = useState<Phase>("wizard");
  const [rating, setRating] = useState(0);
  const [notes, setNotes] = useState("");
  const [pickedBook, setPickedBook] = useState<CookbookId | null>(null);

  useEffect(() => {
    if (!session) return;
    setPhase("wizard");
    setRating(0);
    setNotes("");
    setPickedBook(null);
  }, [session?.recipeId, session?.startedAt]);

  const step = useMemo(() => {
    if (!recipe || !session || session.stepIndex < 0) return null;
    return recipe.steps[session.stepIndex] ?? null;
  }, [recipe, session]);

  if (!cookingModeOpen || !session || !recipe) return null;

  const servings = session.servings || 1;
  const baseServings = recipe.baseServings ?? 1;
  const totalSteps = recipe.steps.length;
  const onServings = session.stepIndex === -2;
  const onIngredients = session.stepIndex === -1;
  const isLastStep = session.stepIndex === totalSteps - 1;

  const scaledIngredients = recipe.ingredients.map((ing) => ({
    ...ing,
    name: scaleIngredientName(ing.name, servings, baseServings),
  }));

  const stepIngredients = step
    ? scaledIngredients.filter((ing) => step.ingredientIds.includes(ing.id))
    : [];

  const toggleIngredient = (id: string) => {
    const set = new Set(session.checkedIngredients);
    if (set.has(id)) set.delete(id);
    else set.add(id);
    updateCooking({ checkedIngredients: Array.from(set) });
  };

  const goNext = () => {
    if (onServings) {
      updateCooking({ stepIndex: -1 });
      return;
    }
    if (onIngredients) {
      updateCooking({ stepIndex: 0 });
      return;
    }
    if (isLastStep) {
      burstConfetti();
      showToast("Great job, Chef! 🎉");
      setPhase("celebration");
      window.setTimeout(() => setPhase("review"), 1600);
      return;
    }
    updateCooking({ stepIndex: session.stepIndex + 1 });
  };

  const goBack = () => {
    if (session.stepIndex <= -2) return;
    updateCooking({ stepIndex: session.stepIndex - 1 });
  };

  const headerSub = onServings
    ? "How many servings?"
    : onIngredients
      ? `Ingredients · ${servings} ${servings === 1 ? "serving" : "servings"}`
      : `Step ${session.stepIndex + 1} of ${totalSteps} · ${servings} ${servings === 1 ? "serving" : "servings"}`;

  if (phase === "celebration") {
    return (
      <div className="fixed inset-0 z-[55] flex flex-col items-center justify-center bg-gradient-to-b from-sun via-cream to-mint/40 px-6 text-center">
        <p className="text-7xl animate-bounce">🎉</p>
        <h2 className="mt-4 font-display text-4xl font-bold text-ink">
          Great job, Chef!
        </h2>
        <p className="mt-2 text-lg text-ink/80">You finished {recipe.title}!</p>
      </div>
    );
  }

  if (phase === "review") {
    return (
      <div className="fixed inset-0 z-[55] overflow-y-auto bg-cream">
        <div className="mx-auto flex min-h-full max-w-lg flex-col px-4 py-6">
          <h2 className="font-display text-3xl font-bold text-ink">How was it?</h2>
          <p className="mt-1 text-ink/70">Rate your dish and leave Chef&apos;s Notes.</p>

          <div className="mt-6 rounded-3xl bg-white p-5 shadow-md">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-ink/50">
              Your rating
            </p>
            <StarRating value={rating} onChange={setRating} size="lg" />
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder="Cooking notes — tips, tastes, funny moments…"
              className="mt-5 w-full rounded-2xl border-2 border-sun/40 bg-cream px-3 py-3 text-base outline-none focus:ring-4 focus:ring-mint/40"
            />
          </div>

          <div className="mt-5 rounded-3xl bg-white p-5 shadow-md">
            <p className="font-display text-xl font-bold text-ink">Keep it where?</p>
            <p className="mt-1 text-sm text-ink/65">
              Stay in Saved, or add it to a cookbook (it can live in both!).
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {COOKBOOKS.map((book) => (
                <button
                  key={book.id}
                  type="button"
                  onClick={() => setPickedBook(book.id)}
                  className={`min-h-16 rounded-2xl p-3 text-left font-bold text-white shadow-sm ${
                    pickedBook === book.id ? "ring-4 ring-ink/30 scale-[1.02]" : ""
                  }`}
                  style={{ backgroundColor: book.accent }}
                >
                  <span className="text-2xl">{book.emoji}</span>
                  <span className="mt-1 block">{book.title}</span>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setPickedBook(null)}
              className={`mt-3 min-h-12 w-full rounded-2xl border-2 font-bold ${
                pickedBook === null
                  ? "border-sun bg-sun text-ink"
                  : "border-sun/40 bg-cream text-ink/80"
              }`}
            >
              ⭐ Keep in Saved only
            </button>
          </div>

          <button
            type="button"
            disabled={rating < 1}
            onClick={() =>
              completeCookingReview({
                recipeId: recipe.id,
                rating,
                notes,
                cookbookId: pickedBook,
              })
            }
            className="mt-6 min-h-14 rounded-2xl bg-orange text-lg font-bold text-white shadow-md disabled:cursor-not-allowed disabled:opacity-40"
          >
            All done!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[55] flex flex-col bg-cream">
      <header className="flex items-center gap-2 border-b border-sun/40 bg-sun/70 px-3 py-3">
        <button
          type="button"
          onClick={exitCookingMode}
          className="min-h-12 min-w-12 rounded-2xl bg-white text-lg font-bold shadow-sm"
          aria-label="Exit cooking mode"
        >
          ←
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-lg font-bold text-ink">
            {recipe.title}
          </p>
          <p className="text-sm font-semibold text-ink/65">{headerSub}</p>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-lg flex-1 flex-col overflow-y-auto px-4 py-4">
        {onServings ? (
          <>
            <h2 className="font-display text-2xl font-bold text-ink">
              How many people?
            </h2>
            <p className="mt-1 text-ink/70">
              We&apos;ll scale the ingredients so you can cook for more friends!
            </p>
            <div className="mt-6 grid grid-cols-4 gap-3">
              {SERVING_OPTIONS.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => updateCooking({ servings: n })}
                  className={`flex min-h-16 flex-col items-center justify-center rounded-2xl border-2 text-xl font-bold ${
                    servings === n
                      ? "border-orange bg-orange text-white shadow-md"
                      : "border-sun/50 bg-white text-ink"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <p className="mt-4 text-center text-base font-bold text-ink/70">
              Making{" "}
              <span className="text-orange-deep">
                {servings} {servings === 1 ? "serving" : "servings"}
              </span>
            </p>
          </>
        ) : null}

        {onIngredients ? (
          <>
            <h2 className="font-display text-2xl font-bold text-ink">
              Check your ingredients
            </h2>
            <p className="mt-1 text-ink/70">
              Amounts are for {servings} {servings === 1 ? "serving" : "servings"}.
              Tap each one when you have it ready.
            </p>
            <ul className="mt-4 space-y-3">
              {scaledIngredients.map((ing) => {
                const checked = session.checkedIngredients.includes(ing.id);
                return (
                  <li key={ing.id}>
                    <button
                      type="button"
                      onClick={() => toggleIngredient(ing.id)}
                      className={`flex min-h-14 w-full items-center gap-3 rounded-2xl border-2 px-4 text-left text-lg font-bold ${
                        checked
                          ? "border-mint bg-mint/25 text-leaf"
                          : "border-sun/50 bg-white text-ink"
                      }`}
                    >
                      <span className="text-2xl">{checked ? "✅" : "⬜"}</span>
                      {ing.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </>
        ) : null}

        {!onServings && !onIngredients && step ? (
          <>
            <div className="rounded-3xl bg-white p-5 shadow-md">
              <p className="text-xl font-bold leading-relaxed text-ink">
                {step.instruction}
              </p>
            </div>

            {stepIngredients.length > 0 ? (
              <div className="mt-4">
                <p className="text-sm font-bold uppercase tracking-wide text-ink/50">
                  For this step
                </p>
                <ul className="mt-2 space-y-2">
                  {stepIngredients.map((ing) => (
                    <li
                      key={ing.id}
                      className="rounded-2xl bg-sun/30 px-4 py-3 text-base font-bold text-ink"
                    >
                      {ing.name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {step.timerSeconds ? (
              <StepTimer
                seconds={step.timerSeconds}
                label={step.timerLabel}
                stepKey={`${recipe.id}-${step.id}`}
              />
            ) : null}
          </>
        ) : null}
      </div>

      <div className="safe-bottom border-t border-sun/40 bg-white px-4 pt-3 pb-4">
        <div className="mx-auto max-w-lg">
          {!onServings && !onIngredients && step?.needsAdult ? (
            <div className="mb-3 rounded-2xl bg-orange/20 px-4 py-3 text-center">
              <p className="text-base font-bold text-orange-deep">
                ⚠️ Ask an Adult Helper for help!
              </p>
              {step.adultReason ? (
                <p className="mt-1 text-sm text-orange-deep/80">{step.adultReason}</p>
              ) : null}
            </div>
          ) : null}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={goBack}
              disabled={onServings}
              className="min-h-14 min-w-[6.5rem] rounded-2xl bg-sun/50 text-base font-bold text-ink disabled:opacity-40"
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={goNext}
              className="min-h-14 flex-1 rounded-2xl bg-orange text-lg font-bold text-white shadow-md active:scale-[0.98]"
            >
              {onServings
                ? "Next: Ingredients →"
                : onIngredients
                  ? "Start cooking →"
                  : isLastStep
                    ? "I'm Done! 🎉"
                    : "Next Step →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
