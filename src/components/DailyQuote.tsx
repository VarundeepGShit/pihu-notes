"use client";

import { useEffect, useState } from "react";
import { getDailyQuote, type Quote } from "@/data/quotes";

export default function DailyQuote() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    setQuote(getDailyQuote());
  }, []);

  if (!quote) return null;

  const accentMap = {
    love: {
      icon: "🩷",
      label: "With Love",
      glow: "rgba(233, 30, 140, 0.15)",
    },
    motivation: {
      icon: "���",
      label: "Stay Strong",
      glow: "rgba(255, 107, 157, 0.15)",
    },
    pihu: {
      icon: "🌟",
      label: "Sammy Wise Says",
      glow: "rgba(255, 182, 193, 0.15)",
    },
  };

  const accent = accentMap[quote.type];

  return (
    <div className="w-full max-w-3xl mx-auto glass rounded-2xl p-6 animate-fade-in-up relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl"
        style={{ background: accent.glow }}
      />
      <div className="relative z-10 flex items-start gap-4">
        <span className="text-2xl flex-shrink-0 mt-0.5">{accent.icon}</span>
        <div className="flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-2">
            {accent.label}
          </p>
          <p className="text-base italic text-white/70 leading-relaxed">
            &ldquo;{quote.text}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
