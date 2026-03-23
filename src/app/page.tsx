"use client";

import Image from "next/image";
import Header from "@/components/Header";
import DailyQuote from "@/components/DailyQuote";
import SubjectCard from "@/components/SubjectCard";
import Footer from "@/components/Footer";
import { subjects, totalTopics } from "@/data/topics";
import { useProgress } from "@/hooks/useProgress";

export default function Home() {
  const { completedCount, loaded } = useProgress();
  const pct = loaded ? (completedCount / totalTopics) * 100 : 0;

  return (
    <>
      <Header />

      <main className="flex-1 pt-16">
        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden py-12 px-4">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-pihu-mid/10 blur-3xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-pihu-yellow/10 blur-3xl" />
          </div>

          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6 relative z-10 animate-fade-in-up">
            {/* Pihu avatar */}
            <Image
              src="/images/pose_lightbulb.png"
              alt="Pihu with a lightbulb"
              width={180}
              height={180}
              className="drop-shadow-lg"
              priority
            />

            {/* Title */}
            <h1 className="font-kalam text-5xl sm:text-6xl font-bold text-pihu-deep leading-tight">
              Pihu&apos;s Notes
            </h1>

            {/* Subtitle */}
            <p className="font-patrick text-xl sm:text-2xl text-pihu-ink/80 max-w-md">
              Sammy&apos;s MBBS 3rd Year Study Kit
            </p>
            <p className="text-pihu-ink/50 text-sm">Made with love by Varun</p>

            {/* Speech bubble */}
            <div className="speech-bubble max-w-sm">
              <p className="font-patrick text-pihu-ink text-base">
                Hi Sammy! Ready to ace those exams? Let&apos;s go! 🩷
              </p>
            </div>
          </div>
        </section>

        {/* ── Dyson Airwrap Challenge Banner ── */}
        <section className="px-4 pb-6">
          <div className="max-w-2xl mx-auto relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1a1a2e] via-[#2d1b4e] to-[#4a1942] p-5 sm:p-6 shadow-xl border border-white/10 animate-fade-in-up">
            {/* Sparkle decorations */}
            <div className="absolute top-3 right-4 text-yellow-300 text-lg animate-pulse">✨</div>
            <div className="absolute bottom-3 left-6 text-pink-300 text-sm animate-pulse" style={{ animationDelay: '0.5s' }}>💫</div>
            <div className="absolute top-1/2 right-12 text-yellow-200 text-xs animate-pulse" style={{ animationDelay: '1s' }}>⭐</div>

            <div className="relative z-10 flex items-center gap-4">
              <div className="flex-shrink-0 text-4xl sm:text-5xl">🎁</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="text-white font-bold text-base sm:text-lg leading-tight">
                    Varun&apos;s Promise
                  </h3>
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-[9px] font-bold px-2 py-0.5 rounded-full text-black uppercase tracking-wider">
                    Challenge
                  </span>
                </div>
                <p className="text-white/80 text-sm sm:text-base leading-snug mb-2">
                  Score <span className="text-yellow-300 font-bold">75%+ (Distinction)</span> in your 3rd Prof exams and Varun will gift you a <span className="text-pink-300 font-bold">Dyson Airwrap</span> 💕
                </p>
                <p className="text-white/40 text-xs">
                  That&apos;s the deal, Sammy. No take-backs. Now study harder! 📚
                </p>
              </div>
            </div>

            {/* Glow effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/15 rounded-full blur-2xl" />
          </div>
        </section>

        {/* ── Daily Quote ── */}
        <section className="px-4 pb-8">
          <DailyQuote />
        </section>

        {/* ── Overall Progress ── */}
        <section className="px-4 pb-10">
          <div className="max-w-2xl mx-auto bg-white/70 rounded-2xl p-6 shadow-md border border-pihu-light animate-fade-in-up">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-kalam text-xl font-bold text-pihu-ink">
                Overall Progress
              </h2>
              <span className="font-kalam text-pihu-deep font-bold text-lg">
                {loaded ? completedCount : 0} / {totalTopics}
              </span>
            </div>
            <div className="w-full h-4 bg-pihu-light rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${pct}%`,
                  background: "linear-gradient(90deg, #F48FB1, #E91E8C)",
                }}
              />
            </div>
            <p className="text-sm text-pihu-ink/50 mt-2">
              {loaded ? completedCount : 0} of {totalTopics} topics completed
              {pct === 100 && " — You did it!! 🎉"}
            </p>
          </div>
        </section>

        {/* ── Subject Grid ── */}
        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-kalam text-2xl font-bold text-pihu-ink text-center mb-8">
              Your Subjects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-stagger">
              {subjects.map((subject) => (
                <SubjectCard key={subject.slug} subject={subject} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
