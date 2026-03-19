"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { subjects } from "@/data/topics";
import { useProgress } from "@/hooks/useProgress";
import TopicCard from "@/components/TopicCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poseMap: Record<string, string> = {
  psm: "/images/pose_thinking.png",
  ophthalmology: "/images/pose_lightbulb.png",
  ent: "/images/pose_raising_hand.png",
  forensic_medicine: "/images/pose_shocked.png",
  clinical_postings: "/images/pose_main_happy.png",
};

function getPihuMessage(pct: number): string {
  if (pct === 0) return "Let\u2019s get started! Pick any topic \uD83D\uDCAA";
  if (pct < 50) return "Nice progress! Keep going Sammy!";
  if (pct < 100) return "More than halfway! You\u2019re crushing it! \uD83D\uDD25";
  return "ALL DONE! You\u2019re a LEGEND!! \uD83C\uDF89";
}

export default function SubjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const subject = subjects.find((s) => s.slug === slug);
  const { completedInSubject, loaded } = useProgress();

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-kalam text-2xl text-pihu-deep mb-4">
            Subject not found
          </p>
          <Link href="/" className="btn-pink">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const slugs = subject.topics.map((t) => t.slug);
  const done = loaded ? completedInSubject(slugs) : 0;
  const total = subject.topics.length;
  const pct = total > 0 ? (done / total) * 100 : 0;
  const pose = poseMap[subject.slug] || "/images/pihu_main.png";

  return (
    <>
      <Header />

      <main className="flex-1 pt-16 pb-12">
        {/* ── Back button ── */}
        <div className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-pihu-deep hover:text-pihu-ink transition-colors font-semibold text-sm"
          >
            <span className="text-lg">\u2190</span> Back to Home
          </Link>
        </div>

        {/* ── Subject Header ── */}
        <section className="max-w-4xl mx-auto px-4 pb-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up">
            {/* Pihu pose */}
            <Image
              src={pose}
              alt="Pihu"
              width={120}
              height={120}
              className="drop-shadow-md flex-shrink-0"
            />

            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                <span className="text-4xl">{subject.emoji}</span>
                <h1 className="font-kalam text-3xl sm:text-4xl font-bold text-pihu-ink leading-tight">
                  {subject.name}
                </h1>
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-pihu-ink/60">Progress</span>
                  <span className="font-kalam text-pihu-deep font-bold">
                    {done}/{total}
                  </span>
                </div>
                <div className="w-full h-3 bg-pihu-light rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${pct}%`,
                      background: `linear-gradient(90deg, ${subject.lightColor}, ${subject.color})`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pihu speech bubble */}
          <div className="mt-6 flex justify-center">
            <div className="speech-bubble max-w-sm">
              <p className="font-patrick text-pihu-ink text-base">
                {getPihuMessage(pct)}
              </p>
            </div>
          </div>
        </section>

        {/* ── Topics Grid ── */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-stagger">
            {subject.topics.map((topic, i) => (
              <TopicCard key={topic.slug} topic={topic} index={i} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
