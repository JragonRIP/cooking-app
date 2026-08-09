"use client";

import { useEffect, useState } from "react";
import { formatTimer } from "@/lib/servings";

export function StepTimer({
  seconds,
  label,
  stepKey,
}: {
  seconds: number;
  label?: string;
  stepKey: string;
}) {
  const [remaining, setRemaining] = useState(seconds);
  const [running, setRunning] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setRemaining(seconds);
    setRunning(false);
    setSkipped(false);
    setDone(false);
  }, [seconds, stepKey]);

  useEffect(() => {
    if (!running || skipped || done) return;
    const id = window.setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          window.clearInterval(id);
          setRunning(false);
          setDone(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [running, skipped, done]);

  if (skipped) {
    return (
      <div className="mt-4 rounded-3xl border-2 border-dashed border-ink/20 bg-white/70 px-4 py-3 text-center">
        <p className="text-sm font-bold text-ink/60">Timer skipped — you can keep going!</p>
        <button
          type="button"
          onClick={() => {
            setSkipped(false);
            setRemaining(seconds);
            setDone(false);
            setRunning(false);
          }}
          className="mt-2 text-sm font-bold text-orange-deep underline"
        >
          Bring timer back
        </button>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-3xl bg-white p-4 shadow-md">
      <p className="text-sm font-bold uppercase tracking-wide text-ink/50">
        {label || "Step timer"}
      </p>
      <p className="mt-2 font-display text-5xl font-bold tabular-nums text-ink">
        {formatTimer(remaining)}
      </p>
      {done ? (
        <p className="mt-2 text-base font-bold text-leaf">Time&apos;s up! ✅</p>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        {!done ? (
          <button
            type="button"
            onClick={() => setRunning((v) => !v)}
            className="min-h-12 flex-1 rounded-2xl bg-mint px-4 text-base font-bold text-ink"
          >
            {running ? "Pause" : remaining < seconds ? "Resume" : "Start timer"}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setRemaining(seconds);
              setDone(false);
              setRunning(false);
            }}
            className="min-h-12 flex-1 rounded-2xl bg-sun/60 px-4 text-base font-bold text-ink"
          >
            Reset
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            setSkipped(true);
            setRunning(false);
          }}
          className="min-h-12 rounded-2xl border-2 border-ink/15 bg-cream px-4 text-base font-bold text-ink/70"
        >
          Skip timer
        </button>
      </div>
    </div>
  );
}
