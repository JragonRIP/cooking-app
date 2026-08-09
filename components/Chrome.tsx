"use client";

import { useApp } from "@/lib/app-context";
import type { TabId } from "@/lib/types";

const TABS: { id: TabId; label: string; icon: string }[] = [
  { id: "discover", label: "Discover", icon: "🔍" },
  { id: "saved", label: "Saved", icon: "⭐" },
  { id: "cooking", label: "Cooking", icon: "👨‍🍳" },
  { id: "cookbook", label: "Cookbook", icon: "📚" },
];

export function BottomNav() {
  const { tab, setTab, state } = useApp();
  const cookingActive = Boolean(state.cooking);

  return (
    <nav
      className="safe-bottom z-40 w-full border-t-2 border-sun/60 bg-white/95 backdrop-blur-md"
      aria-label="Main"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-4 gap-0.5 px-1 py-1 short:py-0.5 sm:gap-1 sm:px-2 sm:py-2">
        {TABS.map((item) => {
          const active = tab === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setTab(item.id)}
                className={`relative flex min-h-12 w-full flex-col items-center justify-center rounded-xl px-0.5 py-1.5 text-[10px] font-bold transition-all short:min-h-11 short:py-1 sm:min-h-16 sm:rounded-2xl sm:px-1 sm:py-2 sm:text-xs ${
                  active
                    ? "bg-sun text-ink shadow-sm scale-[1.02]"
                    : "text-ink/70 hover:bg-sun/30"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <span className="text-xl leading-none short:text-lg sm:text-2xl">
                  {item.icon}
                </span>
                <span className="mt-0.5 leading-tight short:text-[9px] sm:mt-1">
                  {item.label}
                </span>
                {item.id === "cooking" && cookingActive ? (
                  <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-mint ring-2 ring-white sm:right-2 sm:top-2 sm:h-2.5 sm:w-2.5" />
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function TopBar({ title }: { title: string }) {
  const { searchOpen, setSearchOpen, searchQuery, setSearchQuery } = useApp();

  return (
    <header className="safe-top z-30 border-b border-sun/40 bg-gradient-to-b from-sun/90 to-sun/50 px-3 pb-2 pt-2 backdrop-blur-sm short:pb-1.5 short:pt-1.5 sm:px-4 sm:pb-3 sm:pt-3">
      <div className="mx-auto flex max-w-lg items-center gap-2 sm:gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm short:h-7 short:w-7 short:rounded-lg sm:h-10 sm:w-10 sm:rounded-2xl sm:text-xl"
            aria-hidden
          >
            🍪
          </span>
          <div className="min-w-0">
            <p className="truncate text-[10px] font-bold uppercase tracking-wide text-ink/60 short:text-[9px] sm:text-[11px]">
              Safe Snack Chef
            </p>
            <h1 className="font-display truncate text-lg font-bold leading-tight text-ink short:text-base sm:text-2xl">
              {title}
            </h1>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setSearchOpen(!searchOpen);
            if (searchOpen) setSearchQuery("");
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm active:scale-95 short:h-9 short:w-9 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl"
          aria-label={searchOpen ? "Close search" : "Open search"}
          aria-expanded={searchOpen}
        >
          {searchOpen ? "✕" : "🔍"}
        </button>
      </div>
      {searchOpen ? (
        <div className="mx-auto mt-2 max-w-lg sm:mt-3">
          <input
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search… drinks, breakfast"
            className="min-h-10 w-full rounded-xl border-2 border-white bg-white px-3 text-sm font-semibold text-ink outline-none ring-mint focus:ring-4 short:min-h-9 sm:min-h-12 sm:rounded-2xl sm:px-4 sm:text-base"
          />
        </div>
      ) : null}
    </header>
  );
}
