"use client";

import type { Recipe, SafetyLevel } from "@/lib/types";

export function SafetyBadge({ safety }: { safety: SafetyLevel }) {
  if (safety === "kid-solo") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-mint/30 px-2 py-0.5 text-[11px] font-bold text-leaf short:text-[10px] sm:px-3 sm:py-1 sm:text-sm">
        🟢 Kid Solo
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-orange/25 px-2 py-0.5 text-[11px] font-bold text-orange-deep short:text-[10px] sm:px-3 sm:py-1 sm:text-sm">
      🟧 Adult Helper
    </span>
  );
}

export function CookTimeBadge({ mins }: { mins: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 text-[11px] font-bold text-ink shadow-sm short:text-[10px] sm:px-3 sm:py-1 sm:text-sm">
      ⏱️ {mins} mins
    </span>
  );
}

export function StarRating({
  value,
  onChange,
  size = "md",
}: {
  value: number;
  onChange?: (n: number) => void;
  size?: "sm" | "md" | "lg";
}) {
  const text = size === "lg" ? "text-3xl" : size === "sm" ? "text-base" : "text-xl";
  return (
    <div className={`flex gap-1 ${text}`} role="img" aria-label={`${value} of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          disabled={!onChange}
          onClick={() => onChange?.(n)}
          className={`leading-none transition-transform ${
            onChange ? "cursor-pointer active:scale-95" : "cursor-default"
          } ${n <= value ? "opacity-100" : "opacity-30"}`}
          aria-label={`${n} stars`}
        >
          ⭐
        </button>
      ))}
    </div>
  );
}

export function RecipePlaceholder({
  recipe,
  className = "",
  large = false,
}: {
  recipe: Pick<
    Recipe,
    "emoji" | "placeholderColor" | "pattern" | "title" | "imageSrc"
  >;
  className?: string;
  large?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        backgroundColor: recipe.placeholderColor,
        backgroundImage: recipe.imageSrc ? undefined : recipe.pattern,
      }}
      role="img"
      aria-label={`${recipe.title} illustration`}
    >
      {recipe.imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={recipe.imageSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-contain p-2"
          draggable={false}
        />
      ) : (
        <span
          className={`drop-shadow-sm select-none ${large ? "text-7xl sm:text-8xl" : "text-5xl"}`}
        >
          {recipe.emoji}
        </span>
      )}
    </div>
  );
}
