export type SafetyLevel = "kid-solo" | "adult-helper";

export type CookbookId = "breakfast" | "dinner" | "dessert" | "drinks";

export type TabId = "discover" | "saved" | "cooking" | "cookbook";

export interface Ingredient {
  id: string;
  name: string;
}

export interface Step {
  id: string;
  instruction: string;
  ingredientIds: string[];
  needsAdult?: boolean;
  adultReason?: string;
}

export interface Recipe {
  id: string;
  title: string;
  cookTimeMins: number;
  safety: SafetyLevel;
  description: string;
  emoji: string;
  placeholderColor: string;
  pattern: string;
  suggestedCookbook: CookbookId;
  /** Simple illustration in /public/recipes */
  imageSrc?: string;
  ingredients: Ingredient[];
  steps: Step[];
}

export interface CookbookEntry {
  recipeId: string;
  rating: number;
  notes: string;
  addedAt: number;
}

export interface RecipeReview {
  rating: number;
  notes: string;
  updatedAt: number;
}

/** stepIndex: -1 = ingredient checklist screen; 0+ = recipe steps */
export interface CookingSession {
  recipeId: string;
  stepIndex: number;
  checkedIngredients: string[];
  startedAt: number;
}

export interface AppPersistState {
  savedIds: string[];
  cookbooks: Record<CookbookId, CookbookEntry[]>;
  cooking: CookingSession | null;
  reviews: Record<string, RecipeReview>;
}

export const COOKBOOKS: {
  id: CookbookId;
  title: string;
  emoji: string;
  accent: string;
  pattern: string;
}[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    emoji: "🥞",
    accent: "#FFB84D",
    pattern:
      "repeating-linear-gradient(45deg, rgba(255,255,255,0.25) 0 12px, transparent 12px 24px)",
  },
  {
    id: "dinner",
    title: "Dinner",
    emoji: "🍝",
    accent: "#FF8A5B",
    pattern:
      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 0 8%, transparent 9%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.25) 0 10%, transparent 11%)",
  },
  {
    id: "dessert",
    title: "Dessert",
    emoji: "🧁",
    accent: "#FF6B9D",
    pattern:
      "repeating-linear-gradient(-30deg, rgba(255,255,255,0.2) 0 10px, transparent 10px 20px)",
  },
  {
    id: "drinks",
    title: "Drinks",
    emoji: "🥤",
    accent: "#5EC8E3",
    pattern:
      "repeating-radial-gradient(circle at 0 0, rgba(255,255,255,0.3) 0 6px, transparent 7px 18px)",
  },
];

export const EMPTY_STATE: AppPersistState = {
  savedIds: [],
  cookbooks: {
    breakfast: [],
    dinner: [],
    dessert: [],
    drinks: [],
  },
  cooking: null,
  reviews: {},
};
