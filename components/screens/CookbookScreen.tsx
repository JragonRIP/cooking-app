"use client";

import { useState } from "react";
import {
  RecipePlaceholder,
  SafetyBadge,
  StarRating,
} from "@/components/ui";
import { useApp } from "@/lib/app-context";
import { getRecipeById } from "@/lib/recipes";
import { COOKBOOKS, type CookbookId } from "@/lib/types";

function NotesEditor({
  recipeId,
  initialNotes,
  initialRating,
  onClose,
}: {
  recipeId: string;
  initialNotes: string;
  initialRating: number;
  onClose: () => void;
}) {
  const { updateNotes } = useApp();
  const [notes, setNotes] = useState(initialNotes);
  const [rating, setRating] = useState(initialRating || 1);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/40 p-4 sm:items-center">
      <div className="w-full max-w-md rounded-3xl bg-white p-5 shadow-xl">
        <h2 className="font-display text-xl font-bold text-ink">Chef&apos;s Notes</h2>
        <p className="mt-1 text-sm text-ink/60">Edit anytime — what did you love?</p>
        <div className="mt-4">
          <StarRating value={rating} onChange={setRating} size="lg" />
        </div>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          placeholder="My secret tip…"
          className="mt-4 w-full rounded-2xl border-2 border-sun/50 bg-cream px-3 py-3 text-base text-ink outline-none focus:ring-4 focus:ring-mint/50"
        />
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="min-h-12 flex-1 rounded-2xl bg-sun/40 font-bold text-ink"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              updateNotes(recipeId, notes, rating);
              onClose();
            }}
            className="min-h-12 flex-1 rounded-2xl bg-orange font-bold text-white"
          >
            Save notes
          </button>
        </div>
      </div>
    </div>
  );
}

function CookbookGrid({ bookId }: { bookId: CookbookId }) {
  const { state, searchQuery, setOpenCookbook, startCooking } = useApp();
  const [editingId, setEditingId] = useState<string | null>(null);
  const book = COOKBOOKS.find((b) => b.id === bookId)!;
  const q = searchQuery.trim().toLowerCase();
  const entries = state.cookbooks[bookId].filter((e) => {
    const recipe = getRecipeById(e.recipeId);
    return recipe && (!q || recipe.title.toLowerCase().includes(q));
  });

  const editingEntry = editingId
    ? state.cookbooks[bookId].find((e) => e.recipeId === editingId) ||
      (state.reviews[editingId]
        ? {
            recipeId: editingId,
            notes: state.reviews[editingId].notes,
            rating: state.reviews[editingId].rating,
          }
        : null)
    : null;

  return (
    <div className="mx-auto w-full max-w-lg px-4 py-4">
      <button
        type="button"
        onClick={() => setOpenCookbook(null)}
        className="mb-3 min-h-11 rounded-xl px-2 text-base font-bold text-ink/70"
      >
        ← All cookbooks
      </button>
      <h2 className="font-display text-2xl font-bold text-ink">
        {book.emoji} {book.title}
      </h2>

      {entries.length === 0 ? (
        <p className="mt-8 text-center text-ink/70">
          No recipes in this book yet. Finish cooking to add one!
        </p>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-3">
          {entries.map((entry) => {
            const recipe = getRecipeById(entry.recipeId);
            if (!recipe) return null;
            return (
              <article
                key={entry.recipeId}
                className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-md"
              >
                <RecipePlaceholder recipe={recipe} className="aspect-[4/3]" />
                <div className="flex flex-1 flex-col gap-2 p-3">
                  <h3 className="font-display text-base font-bold leading-snug text-ink">
                    {recipe.title}
                  </h3>
                  <StarRating value={entry.rating} size="sm" />
                  <SafetyBadge safety={recipe.safety} />
                  <button
                    type="button"
                    onClick={() => setEditingId(entry.recipeId)}
                    className="min-h-10 rounded-xl bg-cream text-sm font-bold text-ink"
                  >
                    Chef&apos;s Notes
                  </button>
                  <button
                    type="button"
                    onClick={() => startCooking(recipe.id)}
                    className="min-h-11 rounded-xl bg-orange text-sm font-bold text-white"
                  >
                    Cook again
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {editingEntry ? (
        <NotesEditor
          recipeId={editingEntry.recipeId}
          initialNotes={editingEntry.notes}
          initialRating={editingEntry.rating}
          onClose={() => setEditingId(null)}
        />
      ) : null}
    </div>
  );
}

export function CookbookScreen() {
  const { openCookbook, setOpenCookbook, searchQuery, state } = useApp();

  if (openCookbook) {
    return <CookbookGrid bookId={openCookbook} />;
  }

  const q = searchQuery.trim().toLowerCase();
  const books = COOKBOOKS.filter((b) => !q || b.title.toLowerCase().includes(q));

  return (
    <div className="mx-auto grid w-full max-w-lg grid-cols-2 gap-4 px-4 py-4">
      {books.map((book) => {
        const count = state.cookbooks[book.id].length;
        return (
          <button
            key={book.id}
            type="button"
            onClick={() => setOpenCookbook(book.id)}
            className="group relative flex aspect-[3/4] flex-col overflow-hidden rounded-[28px] p-4 text-left shadow-lg active:scale-[0.98]"
            style={{
              backgroundColor: book.accent,
              backgroundImage: book.pattern,
            }}
          >
            <span className="text-5xl drop-shadow-sm">{book.emoji}</span>
            <span className="mt-auto font-display text-2xl font-bold text-white drop-shadow">
              {book.title}
            </span>
            <span className="mt-1 text-sm font-bold text-white/90">
              {count} {count === 1 ? "recipe" : "recipes"}
            </span>
            <span className="absolute right-3 top-3 rounded-full bg-white/70 px-2 py-0.5 text-[10px] font-bold uppercase text-ink/60">
              Cover soon
            </span>
          </button>
        );
      })}
    </div>
  );
}
