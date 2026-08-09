"use client";

import { useApp } from "@/lib/app-context";

export function ConfettiBurst() {
  const { confetti } = useApp();
  if (!confetti) return null;

  const pieces = Array.from({ length: 28 }, (_, i) => i);
  const colors = ["#FFD93D", "#FF9F43", "#6BCB77", "#FF6B9D", "#5EC8E3", "#FF8A5B"];

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] overflow-hidden" aria-hidden>
      {pieces.map((i) => (
        <span
          key={i}
          className="confetti-piece absolute top-0"
          style={{
            left: `${(i * 17) % 100}%`,
            backgroundColor: colors[i % colors.length],
            animationDelay: `${(i % 8) * 0.05}s`,
            animationDuration: `${1.2 + (i % 5) * 0.15}s`,
            width: `${8 + (i % 4) * 2}px`,
            height: `${10 + (i % 3) * 3}px`,
            borderRadius: i % 2 === 0 ? "2px" : "50%",
          }}
        />
      ))}
    </div>
  );
}

export function ToastBanner() {
  const { toast } = useApp();
  if (!toast) return null;
  return (
    <div className="pointer-events-none fixed left-1/2 top-4 z-[90] w-[min(92%,360px)] -translate-x-1/2">
      <div className="toast-pop rounded-2xl bg-ink px-4 py-3 text-center text-base font-bold text-white shadow-lg">
        {toast.message}
      </div>
    </div>
  );
}

export function SwitchRecipeModal() {
  const { switchPrompt, dismissSwitchPrompt, confirmSwitchCooking } = useApp();
  if (!switchPrompt) return null;
  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/40 p-4 sm:items-center">
      <div className="w-full max-w-md rounded-3xl bg-white p-5 shadow-xl">
        <h2 className="font-display text-xl font-bold text-ink">Switch recipes?</h2>
        <p className="mt-2 text-base text-ink/80">{switchPrompt}</p>
        <div className="mt-5 flex flex-col gap-3">
          <button
            type="button"
            onClick={confirmSwitchCooking}
            className="min-h-14 rounded-2xl bg-orange text-lg font-bold text-white shadow-md active:scale-[0.98]"
          >
            Yes, switch
          </button>
          <button
            type="button"
            onClick={dismissSwitchPrompt}
            className="min-h-12 rounded-2xl bg-sun/40 text-base font-bold text-ink active:scale-[0.98]"
          >
            Keep cooking current
          </button>
        </div>
      </div>
    </div>
  );
}
