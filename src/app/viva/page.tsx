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

        {/* Voice Viva Card — the star feature */}
        <section className="max-w-2xl mx-auto px-4 pb-6">
          <Link
            href="/viva/room"
            className="block group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-6 shadow-xl border border-white/10 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/30 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-bold text-lg">
                    Voice Viva with Pihu
                  </h3>
                  <span className="bg-pink-500/20 text-pink-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-pink-500/30 uppercase tracking-wide">
                    NEW
                  </span>
                </div>
                <p className="text-white/60 text-sm">
                  Talk to Pihu in real-time! She&apos;ll ask questions, listen to your answers, and give instant feedback — just like a real viva.
                </p>
              </div>
              <svg className="w-6 h-6 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
          </Link>
        </section>

        {/* Divider */}
        <div className="max-w-2xl mx-auto px-4 pb-4 flex items-center gap-3">
          <div className="flex-1 h-px bg-pihu-light" />
          <span className="text-pihu-ink/30 text-xs font-patrick">or try text-based viva</span>
          <div className="flex-1 h-px bg-pihu-light" />
        </div>

        {/* Text Viva Setup Section */}
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
