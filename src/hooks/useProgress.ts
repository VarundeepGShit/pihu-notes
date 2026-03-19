"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "pihu-progress";

type ProgressMap = Record<string, boolean>;

export function useProgress() {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setProgress(JSON.parse(stored));
    } catch {}
    setLoaded(true);
  }, []);

  const toggle = useCallback(
    (slug: string) => {
      setProgress((prev) => {
        const next = { ...prev, [slug]: !prev[slug] };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {}
        return next;
      });
    },
    []
  );

  const isComplete = useCallback(
    (slug: string) => !!progress[slug],
    [progress]
  );

  const completedCount = Object.values(progress).filter(Boolean).length;

  const completedInSubject = useCallback(
    (topicSlugs: string[]) =>
      topicSlugs.filter((s) => !!progress[s]).length,
    [progress]
  );

  return { progress, toggle, isComplete, completedCount, completedInSubject, loaded };
}
