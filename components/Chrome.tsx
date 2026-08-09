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
      <ul className="mx-auto grid max-w-lg grid-cols-4 gap-1 px-2 py-2">
        {TABS.map((item) => {
          const active = tab === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setTab(item.id)}
                className={`relative flex min-h-14 w-full flex-col items-center justify-center rounded-2xl px-1 py-2 text-xs font-bold transition-all sm:min-h-16 ${
                  active
                    ? "bg-sun text-ink shadow-sm scale-[1.02]"
                    : "text-ink/70 hover:bg-sun/30"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <span className="text-2xl leading-none">{item.icon}</span>
                <span className="mt-1 leading-tight">{item.label}</span>
                {item.id === "cooking" && cookingActive ? (
                  <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-mint ring-2 ring-white" />
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
    <header className="z-30 border-b border-sun/40 bg-gradient-to-b from-sun/90 to-sun/50 px-4 pb-3 pt-3 backdrop-blur-sm">
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-xl shadow-sm"
            aria-hidden
          >
            🍪
          </span>
          <div className="min-w-0">
            <p className="truncate text-[11px] font-bold uppercase tracking-wide text-ink/60">
              Safe Snack Chef
            </p>
            <h1 className="font-display truncate text-2xl font-bold leading-tight text-ink">
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
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl shadow-sm active:scale-95"
          aria-label={searchOpen ? "Close search" : "Open search"}
          aria-expanded={searchOpen}
        >
          {searchOpen ? "✕" : "🔍"}
        </button>
      </div>
      {searchOpen ? (
        <div className="mx-auto mt-3 max-w-lg">
          <input
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search themes… drinks, breakfast…"
            className="min-h-12 w-full rounded-2xl border-2 border-white bg-white px-4 text-base font-semibold text-ink outline-none ring-mint focus:ring-4"
          />
        </div>
      ) : null}
    </header>
  );
}
