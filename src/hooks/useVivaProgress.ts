"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "pihu-viva-progress";

export interface VivaSessionSummary {
  sessionId: string;
  subjectSlug: string;
  topicSlug: string | null;
  difficulty: string;
  score: number;
  maxScore: number;
  questionsCount: number;
  completedAt: string;
}

interface VivaProgressData {
  sessions: VivaSessionSummary[];
}

export function useVivaProgress() {
  const [data, setData] = useState<VivaProgressData>({ sessions: [] });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setData(JSON.parse(stored));
    } catch {}
    setLoaded(true);
  }, []);

  const addSession = useCallback((summary: VivaSessionSummary) => {
    setData((prev) => {
      const next = {
        sessions: [summary, ...prev.sessions].slice(0, 50), // keep last 50
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const totalSessions = data.sessions.length;

  const totalQuestionsAnswered = data.sessions.reduce(
    (acc, s) => acc + s.questionsCount,
    0
  );

  const averageScore =
    totalSessions > 0
      ? Math.round(
          (data.sessions.reduce((acc, s) => acc + (s.score / s.maxScore) * 100, 0) /
            totalSessions)
        )
      : 0;

  const getSubjectStats = useCallback(
    (subjectSlug: string) => {
      const subjectSessions = data.sessions.filter(
        (s) => s.subjectSlug === subjectSlug
      );
      const total = subjectSessions.reduce((a, s) => a + s.maxScore, 0);
      const earned = subjectSessions.reduce((a, s) => a + s.score, 0);
      return { total, earned, count: subjectSessions.length };
    },
    [data.sessions]
  );

  return {
    sessions: data.sessions,
    addSession,
    totalSessions,
    totalQuestionsAnswered,
    averageScore,
    getSubjectStats,
    loaded,
  };
}
