import type { CookbookId, Recipe } from "./types";

/** Theme words kids might type → cookbook categories */
const THEME_ALIASES: Record<string, CookbookId[]> = {
  drink: ["drinks"],
  drinks: ["drinks"],
  smoothie: ["drinks"],
  beverage: ["drinks"],
  beverages: ["drinks"],
  breakfast: ["breakfast"],
  morning: ["breakfast"],
  brunch: ["breakfast"],
  dinner: ["dinner"],
  lunch: ["dinner"],
  meal: ["dinner"],
  meals: ["dinner"],
  savory: ["dinner"],
  dessert: ["dessert"],
  desserts: ["dessert"],
  sweet: ["dessert"],
  sweets: ["dessert"],
  treat: ["dessert"],
  treats: ["dessert"],
  snack: ["breakfast", "dessert"],
  snacks: ["breakfast", "dessert"],
};

export function recipeMatchesQuery(recipe: Recipe, rawQuery: string): boolean {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return true;

  const themeBooks = THEME_ALIASES[q];
  if (themeBooks?.includes(recipe.suggestedCookbook)) return true;

  // Partial theme match: "drin" → drinks, "break" → breakfast
  const partialThemes = (Object.keys(THEME_ALIASES) as string[]).filter(
    (key) => key.startsWith(q) || q.startsWith(key),
  );
  for (const key of partialThemes) {
    if (THEME_ALIASES[key]?.includes(recipe.suggestedCookbook)) return true;
  }

  if (recipe.suggestedCookbook.includes(q)) return true;
  if (recipe.title.toLowerCase().includes(q)) return true;
  if (recipe.description.toLowerCase().includes(q)) return true;
  if (recipe.ingredients.some((ing) => ing.name.toLowerCase().includes(q))) {
    return true;
  }

  return false;
}
