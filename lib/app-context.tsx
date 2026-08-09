"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getRecipeById } from "./recipes";
import { loadState, saveState } from "./storage";
import {
  EMPTY_STATE,
  type AppPersistState,
  type CookbookId,
  type CookingSession,
  type TabId,
} from "./types";

type Toast = { id: number; message: string } | null;

interface AppContextValue {
  state: AppPersistState;
  tab: TabId;
  setTab: (tab: TabId) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  toast: Toast;
  showToast: (message: string) => void;
  confetti: boolean;
  burstConfetti: () => void;
  isSaved: (recipeId: string) => boolean;
  toggleSave: (recipeId: string) => void;
  startCooking: (recipeId: string) => { ok: true } | { ok: false; reason: "switch" };
  confirmSwitchCooking: () => void;
  updateCooking: (patch: Partial<CookingSession>) => void;
  stopCooking: () => void;
  exitCookingMode: () => void;
  cookingModeOpen: boolean;
  setCookingModeOpen: (open: boolean) => void;
  completeCookingReview: (opts: {
    recipeId: string;
    rating: number;
    notes: string;
    cookbookId: CookbookId | null;
  }) => void;
  updateNotes: (recipeId: string, notes: string, rating?: number) => void;
  openCookbook: CookbookId | null;
  setOpenCookbook: (id: CookbookId | null) => void;
  switchPrompt: string | null;
  dismissSwitchPrompt: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [state, setState] = useState<AppPersistState>(EMPTY_STATE);
  const [tab, setTab] = useState<TabId>("discover");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState<Toast>(null);
  const [confetti, setConfetti] = useState(false);
  const [cookingModeOpen, setCookingModeOpen] = useState(false);
  const [openCookbook, setOpenCookbook] = useState<CookbookId | null>(null);
  const [switchPrompt, setSwitchPrompt] = useState<string | null>(null);
  const [pendingSwitchId, setPendingSwitchId] = useState<string | null>(null);

  useEffect(() => {
    setState(loadState());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveState(state);
  }, [state, hydrated]);

  const showToast = useCallback((message: string) => {
    const id = Date.now();
    setToast({ id, message });
    window.setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 2200);
  }, []);

  const burstConfetti = useCallback(() => {
    setConfetti(true);
    window.setTimeout(() => setConfetti(false), 1800);
  }, []);

  const isSaved = useCallback(
    (recipeId: string) => state.savedIds.includes(recipeId),
    [state.savedIds],
  );

  const toggleSave = useCallback(
    (recipeId: string) => {
      setState((prev) => {
        const exists = prev.savedIds.includes(recipeId);
        const savedIds = exists
          ? prev.savedIds.filter((id) => id !== recipeId)
          : [...prev.savedIds, recipeId];
        return { ...prev, savedIds };
      });
      const willSave = !state.savedIds.includes(recipeId);
      if (willSave) {
        burstConfetti();
        showToast("Saved! ⭐");
      } else {
        showToast("Removed from Saved");
      }
    },
    [burstConfetti, showToast, state.savedIds],
  );

  const beginSession = useCallback((recipeId: string) => {
    setState((prev) => ({
      ...prev,
      cooking: {
        recipeId,
        stepIndex: -2,
        checkedIngredients: [],
        startedAt: Date.now(),
        servings: 1,
      },
    }));
    setCookingModeOpen(true);
    setTab("cooking");
  }, []);

  const startCooking = useCallback(
    (recipeId: string) => {
      if (state.cooking && state.cooking.recipeId !== recipeId) {
        setPendingSwitchId(recipeId);
        const current = getRecipeById(state.cooking.recipeId);
        setSwitchPrompt(
          current
            ? `You're already making ${current.title}. Switch recipes?`
            : "You're already cooking something. Switch recipes?",
        );
        return { ok: false as const, reason: "switch" as const };
      }
      if (state.cooking?.recipeId === recipeId) {
        setCookingModeOpen(true);
        setTab("cooking");
        return { ok: true as const };
      }
      beginSession(recipeId);
      return { ok: true as const };
    },
    [beginSession, state.cooking],
  );

  const confirmSwitchCooking = useCallback(() => {
    if (!pendingSwitchId) return;
    beginSession(pendingSwitchId);
    setSwitchPrompt(null);
    setPendingSwitchId(null);
  }, [beginSession, pendingSwitchId]);

  const dismissSwitchPrompt = useCallback(() => {
    setSwitchPrompt(null);
    setPendingSwitchId(null);
  }, []);

  const updateCooking = useCallback((patch: Partial<CookingSession>) => {
    setState((prev) => {
      if (!prev.cooking) return prev;
      return { ...prev, cooking: { ...prev.cooking, ...patch } };
    });
  }, []);

  const stopCooking = useCallback(() => {
    setState((prev) => ({ ...prev, cooking: null }));
    setCookingModeOpen(false);
    showToast("Cooking stopped");
  }, [showToast]);

  const exitCookingMode = useCallback(() => {
    setCookingModeOpen(false);
    setTab("cooking");
  }, []);

  const completeCookingReview = useCallback(
    (opts: {
      recipeId: string;
      rating: number;
      notes: string;
      cookbookId: CookbookId | null;
    }) => {
      setState((prev) => {
        const reviews = {
          ...prev.reviews,
          [opts.recipeId]: {
            rating: opts.rating,
            notes: opts.notes,
            updatedAt: Date.now(),
          },
        };
        let savedIds = prev.savedIds.includes(opts.recipeId)
          ? prev.savedIds
          : [...prev.savedIds, opts.recipeId];
        const cookbooks = { ...prev.cookbooks };
        if (opts.cookbookId) {
          const list = cookbooks[opts.cookbookId].filter(
            (e) => e.recipeId !== opts.recipeId,
          );
          cookbooks[opts.cookbookId] = [
            ...list,
            {
              recipeId: opts.recipeId,
              rating: opts.rating,
              notes: opts.notes,
              addedAt: Date.now(),
            },
          ];
        }
        return {
          ...prev,
          reviews,
          savedIds,
          cookbooks,
          cooking: null,
        };
      });
      setCookingModeOpen(false);
      if (opts.cookbookId) {
        setTab("cookbook");
        setOpenCookbook(opts.cookbookId);
        showToast("Added to cookbook! 📚");
      } else {
        setTab("saved");
        showToast("Kept in Saved ⭐");
      }
    },
    [showToast],
  );

  const updateNotes = useCallback(
    (recipeId: string, notes: string, rating?: number) => {
      setState((prev) => {
        const existing = prev.reviews[recipeId];
        const nextRating = rating ?? existing?.rating ?? 0;
        const reviews = {
          ...prev.reviews,
          [recipeId]: {
            rating: nextRating,
            notes,
            updatedAt: Date.now(),
          },
        };
        const cookbooks = { ...prev.cookbooks };
        (Object.keys(cookbooks) as CookbookId[]).forEach((bookId) => {
          cookbooks[bookId] = cookbooks[bookId].map((entry) =>
            entry.recipeId === recipeId
              ? {
                  ...entry,
                  notes,
                  rating: nextRating || entry.rating,
                }
              : entry,
          );
        });
        return { ...prev, reviews, cookbooks };
      });
      showToast("Chef's Notes saved!");
    },
    [showToast],
  );

  const value = useMemo<AppContextValue>(
    () => ({
      state,
      tab,
      setTab: (next) => {
        setTab(next);
        setSearchQuery("");
        setSearchOpen(false);
        if (next !== "cookbook") setOpenCookbook(null);
      },
      searchOpen,
      setSearchOpen,
      searchQuery,
      setSearchQuery,
      toast,
      showToast,
      confetti,
      burstConfetti,
      isSaved,
      toggleSave,
      startCooking,
      confirmSwitchCooking,
      updateCooking,
      stopCooking,
      exitCookingMode,
      cookingModeOpen,
      setCookingModeOpen,
      completeCookingReview,
      updateNotes,
      openCookbook,
      setOpenCookbook,
      switchPrompt,
      dismissSwitchPrompt,
    }),
    [
      state,
      tab,
      searchOpen,
      searchQuery,
      toast,
      showToast,
      confetti,
      burstConfetti,
      isSaved,
      toggleSave,
      startCooking,
      confirmSwitchCooking,
      updateCooking,
      stopCooking,
      exitCookingMode,
      cookingModeOpen,
      completeCookingReview,
      updateNotes,
      openCookbook,
      switchPrompt,
      dismissSwitchPrompt,
    ],
  );

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
