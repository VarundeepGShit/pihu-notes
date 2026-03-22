"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { subjects } from "@/data/topics";
import { cases } from "@/data/cases";
import { useCaseProgress } from "@/hooks/useCaseProgress";

const difficultyColors = {
  easy: { bg: "bg-green-100", text: "text-green-700", label: "Easy" },
  medium: { bg: "bg-yellow-100", text: "text-yellow-700", label: "Medium" },
  hard: { bg: "bg-red-100", text: "text-red-700", label: "Hard" },
};

export default function CasesPage() {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  const { getCaseProgress, completedCaseCount, loaded } = useCaseProgress();

  const filteredCases = activeSubject
    ? cases.filter((c) => c.subjectSlug === activeSubject)
    : cases;

  return (
    <>
      <Header />
      <main className="flex-1 pt-16 pb-12">
        {/* Back */}
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
              src="/images/pose_thinking.png"
              alt="Pihu thinking"
              width={120}
              height={120}
              className="drop-shadow-md flex-shrink-0"
            />
            <div className="flex-1 text-center sm:text-left">
              <h1 className="font-kalam text-3xl sm:text-4xl font-bold text-pihu-ink leading-tight mb-2">
                Case Simulator 🏥
              </h1>
              <p className="font-patrick text-lg text-pihu-ink/70">
                Solve real patient cases step by step. Pick your diagnosis,
                order investigations, choose treatment!
              </p>
              {loaded && (
                <p className="font-patrick text-sm text-pihu-deep mt-1">
                  {completedCaseCount}/{cases.length} cases solved
                </p>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="speech-bubble max-w-md">
              <p className="font-patrick text-pihu-ink text-base">
                Think like a doctor, Sammy! Each case is a real patient walking
                into your OPD. No pressure, I&apos;ll guide you! 💕
              </p>
            </div>
          </div>
        </section>

        {/* Subject Filter Pills */}
        <section className="max-w-5xl mx-auto px-4 pb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveSubject(null)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                activeSubject === null
                  ? "bg-pihu-deep text-white shadow-md"
                  : "bg-pihu-light text-pihu-deep hover:bg-pihu-mid/30"
              }`}
            >
              All ({cases.length})
            </button>
            {subjects.map((s) => {
              const count = cases.filter(
                (c) => c.subjectSlug === s.slug
              ).length;
              if (count === 0) return null;
              return (
                <button
                  key={s.slug}
                  onClick={() =>
                    setActiveSubject(activeSubject === s.slug ? null : s.slug)
                  }
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                    activeSubject === s.slug
                      ? "text-white shadow-md"
                      : "bg-pihu-light hover:bg-pihu-mid/20"
                  }`}
                  style={
                    activeSubject === s.slug
                      ? { backgroundColor: s.color, color: "white" }
                      : { color: s.color }
                  }
                >
                  {s.emoji} {s.shortName} ({count})
                </button>
              );
            })}
          </div>
        </section>

        {/* Case Cards Grid */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-stagger">
            {filteredCases.map((c) => {
              const prog = getCaseProgress(c.id);
              const diff = difficultyColors[c.difficulty];
              const subject = subjects.find((s) => s.slug === c.subjectSlug);

              return (
                <Link
                  key={c.id}
                  href={`/cases/${c.id}`}
                  className={`block rounded-xl p-4 border transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${
                    prog?.completed
                      ? "border-green-300 bg-green-50/60"
                      : "border-pihu-light/60 bg-white/60 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0 mt-0.5">
                      {c.emoji}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-kalam text-base font-bold text-pihu-ink leading-snug">
                        {c.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <span
                          className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                          style={{
                            backgroundColor: subject?.color || "#E91E8C",
                          }}
                        >
                          {subject?.shortName}
                        </span>
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${diff.bg} ${diff.text}`}
                        >
                          {diff.label}
                        </span>
                        <span className="text-[10px] text-pihu-ink/40">
                          ~{c.estimatedMinutes} min
                        </span>
                      </div>
                      <p className="text-xs text-pihu-ink/50 mt-1.5 line-clamp-2 font-patrick">
                        {c.patientSummary}
                      </p>
                      {prog?.completed && (
                        <p className="text-xs text-green-600 font-semibold mt-1">
                          ✅ Score: {prog.score}/{prog.maxScore}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
