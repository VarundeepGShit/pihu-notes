"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "pihu-case-progress";

export interface CaseProgressEntry {
  completed: boolean;
  score: number;
  maxScore: number;
  completedAt?: string;
}

type CaseProgressMap = Record<string, CaseProgressEntry>;

export function useCaseProgress() {
  const [progress, setProgress] = useState<CaseProgressMap>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setProgress(JSON.parse(stored));
    } catch {}
    setLoaded(true);
  }, []);

  const saveCase = useCallback(
    (caseId: string, score: number, maxScore: number) => {
      setProgress((prev) => {
        const existing = prev[caseId];
        const next = {
          ...prev,
          [caseId]: {
            completed: true,
            score: existing ? Math.max(existing.score, score) : score,
            maxScore,
            completedAt: new Date().toISOString(),
          },
        };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {}
        return next;
      });
    },
    []
  );

  const getCaseProgress = useCallback(
    (caseId: string): CaseProgressEntry | null => progress[caseId] || null,
    [progress]
  );

  const completedCaseCount = Object.values(progress).filter(
    (p) => p.completed
  ).length;

  return { progress, saveCase, getCaseProgress, completedCaseCount, loaded };
}
