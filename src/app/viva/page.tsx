"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { subjects } from "@/data/topics";
import { vivaQuestions } from "@/data/viva";
import { useVivaProgress } from "@/hooks/useVivaProgress";

const difficulties = [
  { value: "easy", label: "Easy", color: "bg-green-100 text-green-700 border-green-300" },
  { value: "medium", label: "Medium", color: "bg-yellow-100 text-yellow-700 border-yellow-300" },
  { value: "hard", label: "Hard", color: "bg-red-100 text-red-700 border-red-300" },
  { value: "mixed", label: "Mixed", color: "bg-purple-100 text-purple-700 border-purple-300" },
];

export default function VivaPage() {
  const router = useRouter();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState("mixed");
  const { sessions, totalSessions, averageScore, loaded } = useVivaProgress();

  const availableQuestions = vivaQuestions.filter((q) => {
    if (selectedSubject && q.subjectSlug !== selectedSubject) return false;
    if (selectedDifficulty !== "mixed" && q.difficulty !== selectedDifficulty) return false;
    return true;
  });

  const startViva = () => {
    const params = new URLSearchParams();
    if (selectedSubject) params.set("subject", selectedSubject);
    params.set("difficulty", selectedDifficulty);
    router.push(`/viva/session?${params.toString()}`);
  };

  return (
    <>
      <Header />
      <main className="flex-1 pt-16 pb-12">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-pihu-deep hover:text-pihu-ink transition-colors font-semibold text-sm"
          >
            <span className="text-lg">&larr;</span> Back to Home
          </Link>
        </div>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 pb-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up">
            <Image
              src="/images/pose_raising_hand.png"
              alt="Pihu examiner"
              width={120}
              height={120}
              className="drop-shadow-md flex-shrink-0"
            />
            <div className="flex-1 text-center sm:text-left">
              <h1 className="font-kalam text-3xl sm:text-4xl font-bold text-pihu-ink leading-tight mb-2">
                Viva Practice 🎤
              </h1>
              <p className="font-patrick text-lg text-pihu-ink/70">
                Pihu plays examiner! Answer questions, get AI-powered feedback.
              </p>
              {loaded && totalSessions > 0 && (
                <p className="font-patrick text-sm text-pihu-deep mt-1">
                  {totalSessions} sessions completed &middot; Avg score:{" "}
                  {averageScore}%
                </p>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="speech-bubble max-w-md">
              <p className="font-patrick text-pihu-ink text-base">
                Okay Sammy, pretend I&apos;m your examiner. Pick a subject,
                difficulty, and let&apos;s go! I&apos;ll be tough but fair 😤💕
              </p>
            </div>
          </div>
        </section>

        {/* Setup Section */}
        <section className="max-w-2xl mx-auto px-4 pb-8">
          <div className="bg-white rounded-2xl border border-pihu-light p-6 shadow-sm space-y-6">
            {/* Subject Selection */}
            <div>
              <h3 className="font-kalam text-lg font-bold text-pihu-ink mb-3">
                Pick a Subject
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedSubject(null)}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                    selectedSubject === null
                      ? "bg-pihu-deep text-white shadow-md"
                      : "bg-pihu-light text-pihu-deep hover:bg-pihu-mid/30"
                  }`}
                >
                  All Subjects
                </button>
                {subjects.map((s) => {
                  const count = vivaQuestions.filter(
                    (q) => q.subjectSlug === s.slug
                  ).length;
                  return (
                    <button
                      key={s.slug}
                      onClick={() =>
                        setSelectedSubject(
                          selectedSubject === s.slug ? null : s.slug
                        )
                      }
                      className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                        selectedSubject === s.slug
                          ? "text-white shadow-md"
                          : "bg-pihu-light hover:bg-pihu-mid/20"
                      }`}
                      style={
                        selectedSubject === s.slug
                          ? { backgroundColor: s.color, color: "white" }
                          : { color: s.color }
                      }
                    >
                      {s.emoji} {s.shortName} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <h3 className="font-kalam text-lg font-bold text-pihu-ink mb-3">
                Difficulty
              </h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((d) => (
                  <button
                    key={d.value}
                    onClick={() => setSelectedDifficulty(d.value)}
                    className={`rounded-full px-4 py-1.5 text-sm font-bold border-2 transition-all ${
                      selectedDifficulty === d.value
                        ? d.color + " shadow-md"
                        : "border-gray-200 text-gray-400 hover:border-gray-300"
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Start Button */}
            <div className="text-center pt-2">
              <p className="font-patrick text-sm text-pihu-ink/50 mb-3">
                {availableQuestions.length} questions available &middot; 5
                questions per session
              </p>
              <button
                onClick={startViva}
                disabled={availableQuestions.length < 1}
                className="btn-pink text-lg px-8 py-3 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Start Viva 🎤
              </button>
            </div>
          </div>
        </section>

        {/* Past Sessions */}
        {loaded && sessions.length > 0 && (
          <section className="max-w-3xl mx-auto px-4">
            <h3 className="font-kalam text-xl font-bold text-pihu-ink mb-4">
              Past Sessions
            </h3>
            <div className="space-y-3">
              {sessions.slice(0, 10).map((s, i) => {
                const subject = subjects.find(
                  (sub) => sub.slug === s.subjectSlug
                );
                const pct = Math.round((s.score / s.maxScore) * 100);
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 border border-pihu-light/60"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-kalam font-bold text-lg ${
                        pct >= 70
                          ? "bg-green-100 text-green-700"
                          : pct >= 40
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {pct}%
                    </div>
                    <div className="flex-1">
                      <p className="font-kalam text-sm font-bold text-pihu-ink">
                        {subject?.emoji} {subject?.name || s.subjectSlug}
                      </p>
                      <p className="font-patrick text-xs text-pihu-ink/50">
                        {s.questionsCount} questions &middot;{" "}
                        {s.score}/{s.maxScore} points &middot;{" "}
                        {new Date(s.completedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
