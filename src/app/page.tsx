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
