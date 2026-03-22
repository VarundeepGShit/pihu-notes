"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useProgress } from "@/hooks/useProgress";
import { totalTopics } from "@/data/topics";

export default function Header() {
  const { completedCount, loaded } = useProgress();
  const pct = loaded ? (completedCount / totalTopics) * 100 : 0;
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-pink border-b border-pihu-mid/30">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left: avatar + title */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/images/pihu_main.png"
            alt="Pihu"
            width={40}
            height={40}
            className="rounded-full border-2 border-pihu-mid group-hover:scale-110 transition-transform"
          />
          <span className="font-kalam text-xl font-bold text-pihu-deep">
            Pihu&apos;s Notes
          </span>
        </Link>

        {/* Center: nav tabs */}
        <nav className="flex items-center gap-0.5 sm:gap-1">
          {[
            { href: "/", emoji: "📚", label: "Notes" },
            { href: "/revision", emoji: "⚡", label: "Revision" },
            { href: "/listen", emoji: "🎧", label: "Listen" },
            { href: "/cases", emoji: "🏥", label: "Cases" },
            { href: "/viva", emoji: "🎤", label: "Viva" },
          ].map((tab) => {
            const isActive =
              tab.href === "/"
                ? pathname === "/"
                : pathname.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`rounded-full px-2 sm:px-3 py-1.5 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-pihu-deep text-white shadow-sm"
                    : "text-pihu-deep hover:bg-pihu-light"
                }`}
              >
                {tab.emoji}
                <span className="hidden sm:inline"> {tab.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right: progress indicator */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-pihu-ink/70 hidden sm:inline">
            {loaded ? completedCount : 0}/{totalTopics} done
          </span>
          <div className="w-24 h-2.5 bg-pihu-light rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${pct}%`,
                background: "linear-gradient(90deg, #F48FB1, #E91E8C)",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
