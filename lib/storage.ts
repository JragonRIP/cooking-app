import { EMPTY_STATE, type AppPersistState } from "./types";

const STORAGE_KEY = "safe-snack-chef-v1";

export function loadState(): AppPersistState {
  if (typeof window === "undefined") return EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_STATE;
    const parsed = JSON.parse(raw) as Partial<AppPersistState>;
    return {
      ...EMPTY_STATE,
      ...parsed,
      cookbooks: {
        ...EMPTY_STATE.cookbooks,
        ...parsed.cookbooks,
      },
      reviews: {
        ...EMPTY_STATE.reviews,
        ...parsed.reviews,
      },
      savedIds: Array.isArray(parsed.savedIds) ? parsed.savedIds : [],
      cooking: parsed.cooking
        ? {
            ...parsed.cooking,
            servings: parsed.cooking.servings ?? 1,
            stepIndex: parsed.cooking.stepIndex ?? -2,
          }
        : null,
    };
  } catch {
    return EMPTY_STATE;
  }
}

export function saveState(state: AppPersistState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
