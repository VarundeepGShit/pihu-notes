"use client";

import { useProgress } from "@/hooks/useProgress";
import type { Topic } from "@/data/topics";

interface TopicCardProps {
  topic: Topic;
  index: number;
}

const cardColors = [
  "bg-pihu-pale",   // pale pink
  "bg-pihu-mint/30", // mint
  "bg-pihu-lavender/40", // lavender
];

export default function TopicCard({ topic, index }: TopicCardProps) {
  const { isComplete, toggle, loaded } = useProgress();
  const done = loaded && isComplete(topic.slug);
  const bgColor = cardColors[index % cardColors.length];

  return (
    <div
      className={`relative rounded-2xl shadow-md p-5 border transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${
        done
          ? "completed-glow border-green-300 bg-green-50/60"
          : `border-pihu-light/60 ${bgColor}`
      }`}
    >
      {/* Done checkmark overlay */}
      {done && (
        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-green-400 flex items-center justify-center text-white text-sm font-bold shadow-sm">
          \u2713
        </div>
      )}

      {/* Emoji + Name */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{topic.emoji}</span>
        <h4 className="font-kalam text-lg font-bold text-pihu-ink leading-snug">
          {topic.name}
        </h4>
      </div>

      {/* Actions row */}
      <div className="flex items-center gap-2 flex-wrap">
        {/* Toggle complete */}
        <button
          onClick={() => toggle(topic.slug)}
          className={`flex items-center gap-1.5 text-sm rounded-full px-3 py-1.5 font-semibold transition-all duration-200 ${
            done
              ? "bg-green-100 text-green-700 hover:bg-green-200"
              : "bg-pihu-light text-pihu-deep hover:bg-pihu-mid/30"
          }`}
        >
          <span className="text-base">{done ? "\u2705" : "\u2B1C"}</span>
          {done ? "Completed" : "Mark Done"}
        </button>

        {/* View PDF */}
        <a
          href={topic.pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pink text-sm flex items-center gap-1"
        >
          <span>📄</span> View
        </a>

        {/* Download */}
        <a
          href={topic.pdfPath}
          download
          className="flex items-center gap-1 text-sm rounded-full px-3 py-1.5 font-semibold bg-pihu-yellow/30 text-pihu-ink hover:bg-pihu-yellow/50 transition-all"
        >
          <span>⬇️</span> Download
        </a>
      </div>
    </div>
  );
}
