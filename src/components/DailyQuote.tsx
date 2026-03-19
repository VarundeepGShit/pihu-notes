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
      border: "border-pihu-deep/30",
      bg: "from-pihu-light to-pihu-pale",
      icon: "\u{1FA77}", // pink heart
      label: "With Love",
    },
    motivation: {
      border: "border-pihu-yellow/50",
      bg: "from-amber-50 to-pihu-pale",
      icon: "\u{1F4AA}", // flexed bicep
      label: "Stay Strong",
    },
    pihu: {
      border: "border-pihu-mint/60",
      bg: "from-pihu-mint/40 to-pihu-pale",
      icon: "\u{1F31F}", // star
      label: "Pihu Says",
    },
  };

  const accent = accentMap[quote.type];

  return (
    <div
      className={`w-full max-w-2xl mx-auto rounded-2xl border ${accent.border} bg-gradient-to-br ${accent.bg} p-6 shadow-md animate-fade-in-up`}
    >
      <div className="flex items-start gap-3">
        <span className="text-3xl flex-shrink-0 mt-0.5">{accent.icon}</span>
        <div className="flex-1">
          <p className="text-pihu-ink/60 text-xs font-semibold uppercase tracking-wider mb-2">
            {accent.label}
          </p>
          <p className="font-patrick text-lg italic text-pihu-ink leading-relaxed">
            &ldquo;{quote.text}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
