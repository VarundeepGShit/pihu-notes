"use client";

import Header from "@/components/Header";
import DailyQuote from "@/components/DailyQuote";
import SubjectCard from "@/components/SubjectCard";
import Footer from "@/components/Footer";
import Sticker from "@/components/Sticker";
import { subjects, totalTopics } from "@/data/topics";
import { useProgress } from "@/hooks/useProgress";

export default function Home() {
  const { completedCount, loaded } = useProgress();
  const pct = loaded ? (completedCount / totalTopics) * 100 : 0;

  return (
    <>
      <Header />

      <main className="flex-1 pt-20 relative z-10">
        {/* ── Hero Section ── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            {/* Sticker */}
            <div className="flex justify-center mb-6">
              <Sticker pose="sitting" size={180} />
            </div>

            {/* Brand mark */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-5">
              <span className="w-2 h-2 rounded-full gradient-pink animate-pulse-glow" />
              <span className="text-xs text-white/60 font-medium tracking-wide uppercase">
                MBBS 3rd Year Study Companion
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3">
              <span className="text-white">Hey Sammy,</span>
              <br />
              <span className="gradient-text">Let&apos;s ace this.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/50 max-w-md mx-auto mb-8">
              42 topics. 5 subjects. One goal — Distinction.
            </p>

            {/* Stats row */}
            <div className="flex items-center justify-center gap-8 sm:gap-12">
              <div className="text-center">
                <p className="font-heading text-2xl font-bold text-white">{totalTopics}</p>
                <p className="text-xs text-white/40">Topics</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <p className="font-heading text-2xl font-bold gradient-text">{loaded ? completedCount : 0}</p>
                <p className="text-xs text-white/40">Completed</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <p className="font-heading text-2xl font-bold text-white">{subjects.length}</p>
                <p className="text-xs text-white/40">Subjects</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Progress Bar ── */}
        <section className="px-4 sm:px-6 pb-10">
          <div className="max-w-3xl mx-auto glass rounded-2xl p-6 animate-fade-in-up">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-heading text-base font-semibold text-white">
                Overall Progress
              </h2>
              <span className="text-sm font-medium text-white/60">
                {loaded ? Math.round(pct) : 0}%
              </span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out gradient-pink progress-glow"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="text-xs text-white/30 mt-2">
              {loaded ? completedCount : 0} of {totalTopics} topics completed
              {pct === 100 && " — You did it!! 🎉"}
            </p>
          </div>
        </section>

        {/* ── Dyson Challenge ── */}
        <section className="px-4 sm:px-6 pb-10">
          <div className="max-w-3xl mx-auto glass rounded-2xl p-5 sm:p-6 relative overflow-hidden animate-fade-in-up border-sw-pink/20">
            <div className="absolute top-0 right-0 w-40 h-40 bg-sw-pink/5 rounded-full blur-3xl" />
            <div className="relative z-10 flex items-center gap-4">
              <Sticker pose="rose" size={80} className="hidden sm:block" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-heading font-bold text-base">
                    Varun&apos;s Promise
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full gradient-pink text-white uppercase tracking-wider">
                    Challenge
                  </span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Score <span className="text-sw-rose font-semibold">75%+ (Distinction)</span> in 3rd Prof exams →
                  Varun gifts you a <span className="text-sw-blush font-semibold">Dyson Airwrap</span> 💕
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Daily Quote ── */}
        <section className="px-4 sm:px-6 pb-10">
          <DailyQuote />
        </section>

        {/* ── Subject Grid ── */}
        <section className="px-4 sm:px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                Your Subjects
              </h2>
              <p className="text-sm text-white/40">
                Tap a subject to start studying
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-stagger">
              {subjects.map((subject) => (
                <SubjectCard key={subject.slug} subject={subject} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-8 text-center border-t border-white/5">
        <div className="flex flex-col items-center gap-3">
          <Sticker pose="waving" size={90} />
          <p className="text-white/30 text-sm">
            Made with 🩷 by Varun for Sammy &nbsp;·&nbsp; Sammy Wise
          </p>
        </div>
      </footer>
    </>
  );
}
