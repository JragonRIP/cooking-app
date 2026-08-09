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
    <div className="mt-3 rounded-2xl bg-white p-3 shadow-md short:mt-2 short:p-2.5 sm:mt-4 sm:rounded-3xl sm:p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-ink/50 sm:text-sm">
        {label || "Step timer"}
      </p>
      <p className="mt-1 font-display text-4xl font-bold tabular-nums text-ink short:text-3xl sm:mt-2 sm:text-5xl">
        {formatTimer(remaining)}
      </p>
      {done ? (
        <p className="mt-1 text-sm font-bold text-leaf sm:mt-2 sm:text-base">Time&apos;s up! ✅</p>
      ) : null}
      <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
        {!done ? (
          <button
            type="button"
            onClick={() => setRunning((v) => !v)}
            className="min-h-10 flex-1 rounded-xl bg-mint px-3 text-sm font-bold text-ink short:min-h-9 sm:min-h-12 sm:rounded-2xl sm:px-4 sm:text-base"
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
            className="min-h-10 flex-1 rounded-xl bg-sun/60 px-3 text-sm font-bold text-ink short:min-h-9 sm:min-h-12 sm:rounded-2xl sm:px-4 sm:text-base"
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
          className="min-h-10 rounded-xl border-2 border-ink/15 bg-cream px-3 text-sm font-bold text-ink/70 short:min-h-9 sm:min-h-12 sm:rounded-2xl sm:px-4 sm:text-base"
        >
          Skip timer
        </button>
      </div>
    </div>
  );
}
