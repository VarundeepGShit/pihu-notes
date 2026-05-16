"use client";

import Link from "next/link";
import { useProgress } from "@/hooks/useProgress";
import ProgressRing from "./ProgressRing";
import type { Subject } from "@/data/topics";

interface SubjectCardProps {
  subject: Subject;
}

export default function SubjectCard({ subject }: SubjectCardProps) {
  const { completedInSubject, loaded } = useProgress();
  const slugs = subject.topics.map((t) => t.slug);
  const done = loaded ? completedInSubject(slugs) : 0;
  const total = subject.topics.length;
  const progress = total > 0 ? done / total : 0;

  return (
    <Link href={`/subject/${subject.slug}`} className="block group">
      <div className="mirror-container">
        {/* Main card */}
        <div className="glass glass-hover rounded-2xl p-6 flex flex-col items-center text-center gap-4 relative overflow-hidden">
          {/* Subtle shimmer overlay */}
          <div className="absolute inset-0 shimmer rounded-2xl" />

          {/* Subject icon */}
          <div className="relative z-10">
            <span className="text-4xl block">{subject.emoji}</span>
            <div
              className="subject-dot mx-auto mt-2"
              style={{ color: subject.color }}
            />
          </div>

          {/* Subject name */}
          <div className="relative z-10">
            <h3 className="font-heading text-lg font-bold text-white leading-tight">
              {subject.shortName}
            </h3>
            <p className="text-sm text-white/40 mt-0.5">
              {total} topic{total !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Progress ring */}
          <div className="relative z-10">
            <ProgressRing
              size={52}
              progress={progress}
              strokeWidth={3}
              color={subject.color}
              bgColor="rgba(255,255,255,0.08)"
            />
          </div>

          {/* Status */}
          <p className="relative z-10 text-xs text-white/40 font-medium">
            {done}/{total} completed
          </p>
        </div>

        {/* Mirror reflection */}
        <div className="mirror-reflection rounded-b-2xl" aria-hidden="true">
          <div className="w-full h-full rounded-b-2xl glass" />
        </div>
      </div>
    </Link>
  );
}
