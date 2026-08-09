"use client";

import { BottomNav, TopBar } from "@/components/Chrome";
import {
  ConfettiBurst,
  SwitchRecipeModal,
  ToastBanner,
} from "@/components/Feedback";
import { CookbookScreen } from "@/components/screens/CookbookScreen";
import { CookingMode } from "@/components/screens/CookingMode";
import { CookingTabScreen } from "@/components/screens/CookingTabScreen";
import { DiscoverScreen } from "@/components/screens/DiscoverScreen";
import { SavedScreen } from "@/components/screens/SavedScreen";
import { AppProvider, useApp } from "@/lib/app-context";
import type { TabId } from "@/lib/types";

const TITLES: Record<TabId, string> = {
  discover: "Discover",
  saved: "Saved",
  cooking: "Currently Cooking",
  cookbook: "Cookbook",
};

function AppShell() {
  const { tab, openCookbook } = useApp();

  const title =
    tab === "cookbook" && openCookbook
      ? TITLES.cookbook
      : TITLES[tab];

  return (
    <div className="app-bg flex min-h-dvh flex-col">
      <TopBar title={title} />
      <main
        className={`mx-auto flex w-full max-w-lg min-h-0 flex-1 flex-col ${
          tab === "discover" ? "overflow-hidden" : "overflow-y-auto"
        }`}
      >
        {tab === "discover" ? <DiscoverScreen /> : null}
        {tab === "saved" ? <SavedScreen /> : null}
        {tab === "cooking" ? <CookingTabScreen /> : null}
        {tab === "cookbook" ? <CookbookScreen /> : null}
      </main>
      <BottomNav />
      <CookingMode />
      <ConfettiBurst />
      <ToastBanner />
      <SwitchRecipeModal />
    </div>
  );
}

export function SafeSnackChefApp() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}
