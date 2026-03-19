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
      <div className="bg-white/80 rounded-2xl shadow-md p-6 border border-pihu-light hover:scale-[1.02] hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center gap-3">
        {/* Subject Emoji */}
        <span className="text-5xl">{subject.emoji}</span>

        {/* Subject Name */}
        <h3 className="font-kalam text-xl font-bold text-pihu-ink leading-tight">
          {subject.shortName}
        </h3>
        <p className="text-sm text-pihu-ink/60">
          {total} topic{total !== 1 ? "s" : ""}
        </p>

        {/* Progress Ring */}
        <ProgressRing
          size={56}
          progress={progress}
          strokeWidth={4}
          color={subject.color}
          bgColor={subject.lightColor}
        />

        {/* Status text */}
        <p className="text-xs text-pihu-ink/50">
          {done}/{total} completed
        </p>
      </div>
    </Link>
  );
}
