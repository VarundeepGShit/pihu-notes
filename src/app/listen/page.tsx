"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { subjects } from "@/data/topics";
import { episodes } from "@/data/audio";
import { useAudio } from "@/contexts/AudioPlayerContext";

export default function ListenPage() {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  const { currentEpisode, isPlaying, play, pause, isHeard } = useAudio();

  const filteredEpisodes = activeSubject
    ? episodes.filter((e) => e.subjectSlug === activeSubject)
    : episodes;

  return (
    <>
      <Header />

      <main className="flex-1 pt-16 pb-32">
        {/* Back button */}
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
              src="/images/pose_sleeping.png"
              alt="Pihu sleeping"
              width={120}
              height={120}
              className="drop-shadow-md flex-shrink-0"
            />
            <div className="flex-1 text-center sm:text-left">
              <h1 className="font-kalam text-3xl sm:text-4xl font-bold text-pihu-ink leading-tight mb-2">
                Pihu Storytime 🎧
              </h1>
              <p className="font-patrick text-lg text-pihu-ink/70">
                Funny stories to learn all 42 topics. Put on your headphones,
                Sammy!
              </p>
            </div>
          </div>

          {/* Speech bubble */}
          <div className="mt-6 flex justify-center">
            <div className="speech-bubble max-w-md">
              <p className="font-patrick text-pihu-ink text-base">
                Each story is 3-4 minutes. Just listen and absorb — Pihu makes
                it stick!
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
              All ({episodes.length})
            </button>
            {subjects.map((s) => {
              const count = episodes.filter(
                (e) => e.subjectSlug === s.slug
              ).length;
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

        {/* Episode Cards Grid */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-stagger">
            {filteredEpisodes.map((episode) => {
              const isCurrent = currentEpisode?.slug === episode.slug;
              const isCurrentPlaying = isCurrent && isPlaying;
              const heard = isHeard(episode.slug);

              return (
                <button
                  key={`${episode.subjectSlug}-${episode.slug}`}
                  onClick={() => {
                    if (isCurrentPlaying) {
                      pause();
                    } else {
                      play(episode);
                    }
                  }}
                  className={`text-left rounded-xl p-4 border transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${
                    isCurrent
                      ? "border-pihu-deep shadow-lg bg-white"
                      : "border-pihu-light/60 bg-white/60 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0 mt-0.5">
                      {episode.emoji}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-kalam text-base font-bold text-pihu-ink leading-snug truncate">
                          {episode.title}
                        </h4>
                        {heard && (
                          <span
                            className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center"
                            title="Heard"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              stroke="#16a34a"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M2 6l3 3 5-5" />
                            </svg>
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                          style={{ backgroundColor: episode.subjectColor }}
                        >
                          {episode.subjectName}
                        </span>
                      </div>
                      <p className="text-xs text-pihu-ink/50 mt-1.5 line-clamp-2 font-patrick">
                        {episode.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      <span
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                          isCurrentPlaying
                            ? "bg-pihu-deep text-white shadow-md"
                            : "bg-pihu-light text-pihu-deep hover:bg-pihu-mid/40"
                        }`}
                      >
                        {isCurrentPlaying ? (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="currentColor"
                          >
                            <rect x="2" y="1" width="4" height="12" rx="1" />
                            <rect x="8" y="1" width="4" height="12" rx="1" />
                          </svg>
                        ) : (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="currentColor"
                          >
                            <path d="M3 1.5v11l9-5.5L3 1.5z" />
                          </svg>
                        )}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
