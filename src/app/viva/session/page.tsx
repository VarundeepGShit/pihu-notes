"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { vivaQuestions, type VivaQuestion } from "@/data/viva";
import { useVivaProgress } from "@/hooks/useVivaProgress";

interface VivaAnswer {
  questionId: string;
  userAnswer: string;
  score: number;
  maxScore: number;
  feedback: string;
  matchedKeyPoints: string[];
  missedKeyPoints: string[];
}

function shuffleAndPick(arr: VivaQuestion[], n: number): VivaQuestion[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

// Fallback keyword evaluator
function evaluateWithKeywords(
  userAnswer: string,
  expectedKeyPoints: string[]
): { score: number; matched: string[]; missed: string[] } {
  const lower = userAnswer.toLowerCase();
  const matched: string[] = [];
  const missed: string[] = [];

  for (const point of expectedKeyPoints) {
    const keywords = point.toLowerCase().split(/\s+/).filter((w) => w.length > 3);
    const found = keywords.some((kw) => lower.includes(kw));
    if (found) {
      matched.push(point);
    } else {
      missed.push(point);
    }
  }

  const score = expectedKeyPoints.length > 0
    ? Math.round((matched.length / expectedKeyPoints.length) * 10)
    : 5;

  return { score, matched, missed };
}

function VivaSessionContent() {
  const searchParams = useSearchParams();
  const subjectSlug = searchParams.get("subject");
  const difficulty = searchParams.get("difficulty") || "mixed";

  const { addSession } = useVivaProgress();

  const [questions, setQuestions] = useState<VivaQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<VivaAnswer[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState<VivaAnswer | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (initialized) return;
    let filtered = vivaQuestions.filter((q) => {
      if (subjectSlug && q.subjectSlug !== subjectSlug) return false;
      if (difficulty !== "mixed" && q.difficulty !== difficulty) return false;
      return true;
    });
    if (filtered.length === 0) filtered = vivaQuestions;
    setQuestions(shuffleAndPick(filtered, 5));
    setInitialized(true);
  }, [subjectSlug, difficulty, initialized]);

  const submitAnswer = useCallback(async () => {
    if (!userInput.trim() || isEvaluating) return;
    const q = questions[currentIndex];
    setIsEvaluating(true);

    let result: VivaAnswer;

    try {
      const res = await fetch("/api/viva-evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: q.question,
          expectedKeyPoints: q.expectedKeyPoints,
          modelAnswer: q.modelAnswer,
          userAnswer: userInput,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        result = {
          questionId: q.id,
          userAnswer: userInput,
          score: data.score,
          maxScore: q.marks,
          feedback: data.feedback,
          matchedKeyPoints: data.matchedKeyPoints,
          missedKeyPoints: data.missedKeyPoints,
        };
      } else {
        throw new Error("API failed");
      }
    } catch {
      // Fallback to keyword matching
      const kw = evaluateWithKeywords(userInput, q.expectedKeyPoints);
      result = {
        questionId: q.id,
        userAnswer: userInput,
        score: kw.score,
        maxScore: q.marks,
        feedback:
          kw.score >= 7
            ? "Good answer! You covered most key points."
            : kw.score >= 4
              ? "Decent attempt. Review the missed points."
              : "Needs improvement. Check the model answer below.",
        matchedKeyPoints: kw.matched,
        missedKeyPoints: kw.missed,
      };
    }

    setCurrentFeedback(result);
    setAnswers((prev) => [...prev, result]);
    setIsEvaluating(false);
  }, [userInput, isEvaluating, questions, currentIndex]);

  const nextQuestion = useCallback(() => {
    setCurrentFeedback(null);
    setUserInput("");
    setShowHint(false);
    setShowModel(false);

    if (currentIndex + 1 >= questions.length) {
      setSessionComplete(true);
      // Save session
      const allAnswers = [...answers];
      const totalScore = allAnswers.reduce((a, ans) => a + ans.score, 0);
      const totalMax = allAnswers.reduce((a, ans) => a + ans.maxScore, 0);
      addSession({
        sessionId: Date.now().toString(),
        subjectSlug: subjectSlug || "mixed",
        topicSlug: null,
        difficulty,
        score: totalScore,
        maxScore: totalMax,
        questionsCount: allAnswers.length,
        completedAt: new Date().toISOString(),
      });
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, questions.length, answers, addSession, subjectSlug, difficulty]);

  if (questions.length === 0) {
    return (
      <main className="flex-1 pt-24 text-center">
        <p className="font-patrick text-xl text-pihu-ink/60">Loading questions...</p>
      </main>
    );
  }

  if (sessionComplete) {
    const totalScore = answers.reduce((a, ans) => a + ans.score, 0);
    const totalMax = answers.reduce((a, ans) => a + ans.maxScore, 0);
    const pct = Math.round((totalScore / totalMax) * 100);
    const reaction =
      pct >= 70
        ? { pose: "/images/pose_main_happy.png", msg: "Excellent viva, Sammy! You'd impress any examiner! 🌟" }
        : pct >= 40
          ? { pose: "/images/pose_raising_hand.png", msg: "Good effort! A bit more revision and you'll be unstoppable! 💪" }
          : { pose: "/images/pose_confused_pencil.png", msg: "Don't worry, Sammy. Every great doctor had tough vivas. Let's try again! 💕" };

    return (
      <>
        <Header />
        <main className="flex-1 pt-16 pb-12">
          <div className="max-w-2xl mx-auto px-4 pt-8">
            <div className="bg-white rounded-2xl border-2 border-pihu-mid p-8 text-center shadow-lg animate-fade-in-up">
              <Image
                src={reaction.pose}
                alt="Pihu"
                width={90}
                height={90}
                className="mx-auto mb-4"
              />
              <h2 className="font-kalam text-3xl font-bold text-pihu-ink mb-2">
                Viva Complete!
              </h2>
              <p className="font-kalam text-4xl font-bold text-pihu-deep mb-2">
                {totalScore}/{totalMax}
              </p>
              <p className="font-patrick text-lg text-pihu-ink/60 mb-1">
                ({pct}%)
              </p>
              <p className="font-patrick text-pihu-ink/70 mb-6">
                {reaction.msg}
              </p>

              {/* Per-question breakdown */}
              <div className="space-y-3 mb-6 text-left">
                {answers.map((ans, i) => {
                  const q = questions[i];
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-pihu-pale rounded-xl p-3"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                          ans.score >= 7
                            ? "bg-green-100 text-green-700"
                            : ans.score >= 4
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {ans.score}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-patrick text-sm text-pihu-ink truncate">
                          {q?.question}
                        </p>
                        <p className="font-patrick text-xs text-pihu-ink/50">
                          {ans.feedback}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-3 justify-center">
                <Link href="/viva" className="btn-pink">
                  New Viva
                </Link>
                <Link
                  href="/"
                  className="rounded-full px-5 py-2 border-2 border-pihu-deep text-pihu-deep font-semibold hover:bg-pihu-light transition-all"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <>
      <Header />
      <main className="flex-1 pt-16 pb-12">
        {/* Top bar */}
        <div className="max-w-3xl mx-auto px-4 pt-6 pb-2 flex items-center justify-between">
          <Link
            href="/viva"
            className="inline-flex items-center gap-2 text-pihu-deep hover:text-pihu-ink transition-colors font-semibold text-sm"
          >
            <span className="text-lg">&larr;</span> End Viva
          </Link>
          <span className="text-sm font-patrick text-pihu-ink/50">
            Question {currentIndex + 1}/{questions.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="max-w-3xl mx-auto px-4 pb-4">
          <div className="w-full h-2 bg-pihu-light rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
                background: "linear-gradient(90deg, #F48FB1, #E91E8C)",
              }}
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 space-y-4">
          {/* Pihu asks the question */}
          <div className="flex items-start gap-3 animate-fade-in-up">
            <Image
              src="/images/pose_raising_hand.png"
              alt="Pihu examiner"
              width={48}
              height={48}
              className="flex-shrink-0 rounded-full border-2 border-pihu-mid"
            />
            <div className="flex-1">
              <div className="speech-bubble">
                <p className="font-patrick text-pihu-ink text-base leading-relaxed">
                  {currentQ.question}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-1.5 ml-1">
                <span
                  className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    currentQ.difficulty === "easy"
                      ? "bg-green-100 text-green-700"
                      : currentQ.difficulty === "medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {currentQ.difficulty}
                </span>
              </div>
            </div>
          </div>

          {/* Hint button */}
          {!currentFeedback && (
            <div className="ml-14">
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-xs font-patrick text-pihu-deep/60 hover:text-pihu-deep transition-colors"
              >
                {showHint ? "Hide hint" : "💡 Need a hint?"}
              </button>
              {showHint && (
                <div className="mt-2 bg-pihu-yellow/30 rounded-xl px-4 py-2 border border-pihu-yellow/50 animate-fade-in-up">
                  <p className="font-patrick text-sm text-pihu-ink/80 italic">
                    {currentQ.pihuHint}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Answer input */}
          {!currentFeedback && (
            <div className="ml-14 space-y-3 animate-fade-in-up">
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your answer here, Sammy..."
                rows={4}
                className="w-full rounded-xl border-2 border-pihu-light focus:border-pihu-deep outline-none px-4 py-3 font-patrick text-sm text-pihu-ink resize-none transition-colors"
              />
              <button
                onClick={submitAnswer}
                disabled={!userInput.trim() || isEvaluating}
                className="btn-pink disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isEvaluating ? "Evaluating..." : "Submit Answer"}
              </button>
            </div>
          )}

          {/* Feedback */}
          {currentFeedback && (
            <div className="ml-14 space-y-3 animate-fade-in-up">
              {/* Score badge */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-kalam font-bold text-xl ${
                    currentFeedback.score >= 7
                      ? "bg-green-100 text-green-700"
                      : currentFeedback.score >= 4
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {currentFeedback.score}/10
                </div>
                <p className="font-patrick text-pihu-ink flex-1">
                  {currentFeedback.feedback}
                </p>
              </div>

              {/* Key points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentFeedback.matchedKeyPoints.length > 0 && (
                  <div className="bg-green-50 rounded-xl p-3 border border-green-200">
                    <p className="font-kalam text-xs font-bold text-green-700 mb-1">
                      ✅ You covered:
                    </p>
                    <ul className="space-y-0.5">
                      {currentFeedback.matchedKeyPoints.map((p, i) => (
                        <li
                          key={i}
                          className="font-patrick text-xs text-green-800"
                        >
                          • {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {currentFeedback.missedKeyPoints.length > 0 && (
                  <div className="bg-red-50 rounded-xl p-3 border border-red-200">
                    <p className="font-kalam text-xs font-bold text-red-700 mb-1">
                      ❌ You missed:
                    </p>
                    <ul className="space-y-0.5">
                      {currentFeedback.missedKeyPoints.map((p, i) => (
                        <li
                          key={i}
                          className="font-patrick text-xs text-red-800"
                        >
                          • {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Model answer */}
              <button
                onClick={() => setShowModel(!showModel)}
                className="text-xs font-patrick text-pihu-deep/60 hover:text-pihu-deep transition-colors"
              >
                {showModel ? "Hide model answer" : "📖 Show model answer"}
              </button>
              {showModel && (
                <div className="bg-pihu-lavender/40 rounded-xl p-4 border border-pihu-lavender animate-fade-in-up">
                  <p className="font-patrick text-sm text-pihu-ink leading-relaxed">
                    {currentQ.modelAnswer}
                  </p>
                </div>
              )}

              {/* Next button */}
              <button onClick={nextQuestion} className="btn-pink">
                {currentIndex + 1 >= questions.length
                  ? "See Results"
                  : "Next Question →"}
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function VivaSessionPage() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 pt-24 text-center">
          <p className="font-patrick text-xl text-pihu-ink/60">Loading...</p>
        </div>
      }
    >
      <VivaSessionContent />
    </Suspense>
  );
}
