"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProgress } from "@/hooks/useProgress";
import { totalTopics } from "@/data/topics";

export default function Header() {
  const { completedCount, loaded } = useProgress();
  const pct = loaded ? (completedCount / totalTopics) * 100 : 0;
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: "📚", label: "Notes" },
    { href: "/revision", icon: "⚡", label: "Revision" },
    { href: "/listen", icon: "🎧", label: "Listen" },
    { href: "/cases", icon: "🏥", label: "Cases" },
    { href: "/viva", icon: "🎤", label: "Viva" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl gradient-pink flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-sw-pink/20">
            SW
          </div>
          <span className="font-heading text-lg font-bold text-white tracking-tight">
            Sammy Wise
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white bg-white/10 shadow-inner"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="mr-1.5">{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full gradient-pink" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Progress */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/50 hidden sm:inline font-medium">
            {loaded ? completedCount : 0}/{totalTopics}
          </span>
          <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700 ease-out gradient-pink progress-glow"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
