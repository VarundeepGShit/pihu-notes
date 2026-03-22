"use client";

import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cases } from "@/data/cases";
import { useCaseProgress } from "@/hooks/useCaseProgress";

const poseMap: Record<string, string> = {
  presentation: "/images/pose_thinking.png",
  investigation: "/images/pose_confused_pencil.png",
  diagnosis: "/images/pose_lightbulb.png",
  treatment: "/images/pose_raising_hand.png",
  outcome: "/images/pose_main_happy.png",
};

export default function CasePlayerPage() {
  const params = useParams();
  const caseId = params.caseId as string;
  const clinicalCase = cases.find((c) => c.id === caseId);
  const { saveCase } = useCaseProgress();

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [choicesMade, setChoicesMade] = useState<
    Record<string, { choiceId: string; isCorrect: boolean }>
  >({});
  const [showFeedback, setShowFeedback] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentStepIndex, showFeedback]);

  if (!clinicalCase) {
    return (
      <>
        <Header />
        <main className="flex-1 pt-24 text-center">
          <p className="font-patrick text-xl text-pihu-ink/60">
            Case not found 😢
          </p>
          <Link href="/cases" className="btn-pink inline-block mt-4">
            Back to Cases
          </Link>
        </main>
      </>
    );
  }

  const steps = clinicalCase.steps;
  const visibleSteps = steps.slice(0, currentStepIndex + 1);
  const score = Object.values(choicesMade).filter((c) => c.isCorrect).length;

  const handleChoice = (stepId: string, choice: (typeof steps)[0]["choices"][0]) => {
    if (choicesMade[stepId]) return; // already answered

    setChoicesMade((prev) => ({
      ...prev,
      [stepId]: { choiceId: choice.id, isCorrect: choice.isCorrect },
    }));
    setShowFeedback(choice.id);

    // After 1.5s, advance to next step or complete
    setTimeout(() => {
      setShowFeedback(null);
      if (choice.nextStepId === null || currentStepIndex >= steps.length - 1) {
        setIsComplete(true);
        const finalScore = Object.values({
          ...choicesMade,
          [stepId]: { choiceId: choice.id, isCorrect: choice.isCorrect },
        }).filter((c) => c.isCorrect).length;
        saveCase(clinicalCase.id, finalScore, steps.length);
      } else {
        setCurrentStepIndex((prev) => prev + 1);
      }
    }, 2000);
  };

  const scorePct = (score / steps.length) * 100;
  const pihuReaction =
    scorePct >= 80
      ? { pose: "/images/pose_main_happy.png", msg: "AMAZING, Sammy! You nailed it! Doctor material! 🌟" }
      : scorePct >= 50
        ? { pose: "/images/pose_raising_hand.png", msg: "Not bad! A few more rounds and you'll ace this! 💪" }
        : { pose: "/images/pose_confused_pencil.png", msg: "It's okay, Sammy! Go review the notes and try again. I believe in you! 💕" };

  return (
    <>
      <Header />
      <main className="flex-1 pt-16 pb-12">
        {/* Top bar */}
        <div className="max-w-3xl mx-auto px-4 pt-6 pb-2 flex items-center justify-between">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-pihu-deep hover:text-pihu-ink transition-colors font-semibold text-sm"
          >
            <span className="text-lg">&larr;</span> All Cases
          </Link>
          <span className="text-sm font-patrick text-pihu-ink/50">
            Step {Math.min(currentStepIndex + 1, steps.length)}/{steps.length}
          </span>
        </div>

        {/* Case Title */}
        <div className="max-w-3xl mx-auto px-4 pb-4">
          <h1 className="font-kalam text-2xl font-bold text-pihu-ink">
            {clinicalCase.emoji} {clinicalCase.title}
          </h1>
          {/* Progress bar */}
          <div className="w-full h-2 bg-pihu-light rounded-full mt-3 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${((currentStepIndex + 1) / steps.length) * 100}%`,
                background: "linear-gradient(90deg, #F48FB1, #E91E8C)",
              }}
            />
          </div>
        </div>

        {/* Chat-style Steps */}
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          {visibleSteps.map((step, idx) => {
            const made = choicesMade[step.id];
            const pose = poseMap[step.type] || "/images/pose_thinking.png";

            return (
              <div key={step.id} className="animate-fade-in-up">
                {/* Pihu Narrative */}
                <div className="flex items-start gap-3 mb-3">
                  <Image
                    src={pose}
                    alt="Pihu"
                    width={48}
                    height={48}
                    className="flex-shrink-0 rounded-full border-2 border-pihu-mid"
                  />
                  <div className="flex-1">
                    <div className="speech-bubble">
                      <p className="font-patrick text-pihu-ink text-sm leading-relaxed">
                        {step.narrative}
                      </p>
                    </div>
                    <p className="font-patrick text-xs text-pihu-deep/60 mt-1 ml-1 italic">
                      {step.pihuComment}
                    </p>
                  </div>
                </div>

                {/* Choices */}
                <div className="ml-14 space-y-2">
                  {step.choices.map((choice) => {
                    const isChosen = made?.choiceId === choice.id;
                    const isAnswered = !!made;
                    const showCorrectness = isAnswered;

                    let btnClass =
                      "w-full text-left rounded-xl px-4 py-3 border-2 transition-all duration-200 font-patrick text-sm";

                    if (!isAnswered) {
                      btnClass +=
                        " border-pihu-light bg-white hover:border-pihu-mid hover:bg-pihu-light/50 cursor-pointer";
                    } else if (isChosen && choice.isCorrect) {
                      btnClass +=
                        " border-green-400 bg-green-50 text-green-800";
                    } else if (isChosen && !choice.isCorrect) {
                      btnClass += " border-red-400 bg-red-50 text-red-800";
                    } else if (showCorrectness && choice.isCorrect) {
                      btnClass +=
                        " border-green-300 bg-green-50/50 text-green-700 opacity-70";
                    } else {
                      btnClass +=
                        " border-gray-200 bg-gray-50 text-gray-400 opacity-50";
                    }

                    return (
                      <button
                        key={choice.id}
                        className={btnClass}
                        onClick={() => handleChoice(step.id, choice)}
                        disabled={isAnswered}
                      >
                        <span className="flex items-center gap-2">
                          {showCorrectness && choice.isCorrect && (
                            <span className="text-green-500">✓</span>
                          )}
                          {isChosen && !choice.isCorrect && (
                            <span className="text-red-500">✗</span>
                          )}
                          {choice.text}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Feedback bubble */}
                {made && (
                  <div className="ml-14 mt-3 animate-fade-in-up">
                    <div
                      className={`rounded-xl px-4 py-3 text-sm font-patrick ${
                        made.isCorrect
                          ? "bg-green-50 border border-green-200 text-green-800"
                          : "bg-red-50 border border-red-200 text-red-800"
                      }`}
                    >
                      {step.choices.find((c) => c.id === made.choiceId)
                        ?.pihuFeedback || ""}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Completion Card */}
          {isComplete && (
            <div className="animate-fade-in-up rounded-2xl border-2 border-pihu-mid bg-white p-6 text-center shadow-lg">
              <Image
                src={pihuReaction.pose}
                alt="Pihu"
                width={80}
                height={80}
                className="mx-auto mb-3"
              />
              <h2 className="font-kalam text-2xl font-bold text-pihu-ink mb-2">
                Case Complete!
              </h2>
              <div className="flex justify-center gap-1 mb-3">
                {steps.map((s) => (
                  <span
                    key={s.id}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      choicesMade[s.id]?.isCorrect
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {choicesMade[s.id]?.isCorrect ? "✓" : "✗"}
                  </span>
                ))}
              </div>
              <p className="font-kalam text-3xl font-bold text-pihu-deep mb-2">
                {score}/{steps.length}
              </p>
              <p className="font-patrick text-pihu-ink/70 mb-4">
                {pihuReaction.msg}
              </p>
              <div className="flex gap-3 justify-center">
                <Link href="/cases" className="btn-pink">
                  All Cases
                </Link>
                <button
                  onClick={() => {
                    setCurrentStepIndex(0);
                    setChoicesMade({});
                    setShowFeedback(null);
                    setIsComplete(false);
                  }}
                  className="rounded-full px-5 py-2 border-2 border-pihu-deep text-pihu-deep font-semibold hover:bg-pihu-light transition-all"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </main>
      <Footer />
    </>
  );
}
