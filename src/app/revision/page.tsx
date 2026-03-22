"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { subjects } from "@/data/topics";
import {
  revisionTopics,
  REVISION_PDF_PATH,
  totalRevisionPages,
} from "@/data/revision";

export default function RevisionPage() {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  const [viewerPage, setViewerPage] = useState<number | null>(null);

  const filteredTopics = activeSubject
    ? revisionTopics.filter((t) => t.subjectSlug === activeSubject)
    : revisionTopics;

  return (
    <>
      <Header />

      <main className="flex-1 pt-16 pb-12">
        {/* ── Back button ── */}
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-pihu-deep hover:text-pihu-ink transition-colors font-semibold text-sm"
          >
            <span className="text-lg">&larr;</span> Back to Home
          </Link>
        </div>

        {/* ── Hero ── */}
        <section className="max-w-4xl mx-auto px-4 pb-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up">
            <Image
              src="/images/pose_lightbulb.png"
              alt="Pihu with lightbulb"
              width={120}
              height={120}
              className="drop-shadow-md flex-shrink-0"
            />
            <div className="flex-1 text-center sm:text-left">
              <h1 className="font-kalam text-3xl sm:text-4xl font-bold text-pihu-ink leading-tight mb-2">
                Revision One-Pagers
              </h1>
              <p className="font-patrick text-lg text-pihu-ink/70">
                42 topics compressed into 1 page each. Perfect for last-minute
                revision!
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={REVISION_PDF_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pink text-sm flex items-center gap-1.5"
                >
                  <span>📄</span> Open Full PDF ({totalRevisionPages} pages)
                </a>
                <a
                  href={REVISION_PDF_PATH}
                  download
                  className="flex items-center gap-1.5 text-sm rounded-full px-4 py-2 font-semibold bg-pihu-yellow/30 text-pihu-ink hover:bg-pihu-yellow/50 transition-all"
                >
                  <span>⬇️</span> Download PDF
                </a>
              </div>
            </div>
          </div>

          {/* Speech bubble */}
          <div className="mt-6 flex justify-center">
            <div className="speech-bubble max-w-md">
              <p className="font-patrick text-pihu-ink text-base">
                Each page has key facts, comparison table, memory tricks, and
                rapid-fire MCQ one-liners. Swipe through before your exam!
              </p>
            </div>
          </div>
        </section>

        {/* ── PDF Viewer (when a topic is selected) ── */}
        {viewerPage !== null && (
          <section className="max-w-5xl mx-auto px-4 pb-8 animate-fade-in-up">
            <div className="relative bg-white rounded-2xl shadow-lg border border-pihu-light overflow-hidden">
              {/* Viewer header */}
              <div className="flex items-center justify-between px-4 py-3 bg-pihu-light/50 border-b border-pihu-light">
                <div className="flex items-center gap-3">
                  <span className="font-kalam text-sm text-pihu-deep font-bold">
                    Page {viewerPage} of {totalRevisionPages}
                  </span>
                  <div className="flex gap-1">
                    <button
                      onClick={() =>
                        setViewerPage(Math.max(1, viewerPage - 1))
                      }
                      disabled={viewerPage <= 1}
                      className="w-8 h-8 rounded-full bg-pihu-mid/20 hover:bg-pihu-mid/40 disabled:opacity-30 flex items-center justify-center text-pihu-deep font-bold transition-colors"
                    >
                      &larr;
                    </button>
                    <button
                      onClick={() =>
                        setViewerPage(
                          Math.min(totalRevisionPages, viewerPage + 1)
                        )
                      }
                      disabled={viewerPage >= totalRevisionPages}
                      className="w-8 h-8 rounded-full bg-pihu-mid/20 hover:bg-pihu-mid/40 disabled:opacity-30 flex items-center justify-center text-pihu-deep font-bold transition-colors"
                    >
                      &rarr;
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setViewerPage(null)}
                  className="text-sm text-pihu-deep hover:text-pihu-ink font-semibold transition-colors"
                >
                  Close &times;
                </button>
              </div>
              {/* PDF iframe */}
              <iframe
                key={viewerPage}
                src={`${REVISION_PDF_PATH}#page=${viewerPage}`}
                className="w-full border-0"
                style={{ height: "75vh" }}
                title="Revision One-Pager"
              />
            </div>
          </section>
        )}

        {/* ── Subject Filter Pills ── */}
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
              All ({revisionTopics.length})
            </button>
            {subjects.map((s) => {
              const count = revisionTopics.filter(
                (t) => t.subjectSlug === s.slug
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

        {/* ── Topic Cards Grid ── */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-stagger">
            {filteredTopics.map((topic) => (
              <button
                key={`${topic.subjectSlug}-${topic.name}`}
                onClick={() => setViewerPage(topic.pageNumber)}
                className={`text-left rounded-xl p-4 border transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${
                  viewerPage === topic.pageNumber
                    ? "border-pihu-deep shadow-lg bg-white"
                    : "border-pihu-light/60 bg-white/60 hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{topic.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-kalam text-base font-bold text-pihu-ink leading-snug truncate">
                      {topic.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                        style={{ backgroundColor: topic.subjectColor }}
                      >
                        {topic.subjectName}
                      </span>
                      <span className="text-xs text-pihu-ink/40">
                        Page {topic.pageNumber}
                      </span>
                    </div>
                  </div>
                  <span className="text-pihu-deep text-lg flex-shrink-0">
                    &rsaquo;
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
