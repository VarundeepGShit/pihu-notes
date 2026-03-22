"use client";

import { useAudio } from "@/contexts/AudioPlayerContext";

function formatTime(seconds: number): string {
  if (!seconds || !isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function AudioPlayer() {
  const {
    currentEpisode,
    isPlaying,
    currentTime,
    duration,
    togglePlayPause,
    skipForward,
    skipBack,
    seekTo,
    close,
  } = useAudio();

  if (!currentEpisode) return null;

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    seekTo(ratio * duration);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-3 pb-3 sm:px-4 sm:pb-4">
      <div
        className="max-w-3xl mx-auto rounded-2xl shadow-2xl border border-white/20 px-4 py-3 sm:px-5 sm:py-3"
        style={{
          background: "linear-gradient(135deg, #F48FB1 0%, #E91E8C 100%)",
        }}
      >
        {/* Mobile layout */}
        <div className="flex flex-col gap-2">
          {/* Top row: info + close */}
          <div className="flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">{currentEpisode.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="font-kalam text-sm font-bold text-white truncate leading-tight">
                {currentEpisode.title}
              </p>
              <p className="text-[11px] text-white/70 font-semibold truncate">
                {currentEpisode.subjectName}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                onClick={skipBack}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all text-xs font-bold"
                aria-label="Skip back 15 seconds"
              >
                -15
              </button>
              <button
                onClick={togglePlayPause}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pihu-deep hover:scale-105 transition-transform shadow-md"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="3" y="2" width="4" height="12" rx="1" />
                    <rect x="9" y="2" width="4" height="12" rx="1" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M4 2.5v11l10-5.5L4 2.5z" />
                  </svg>
                )}
              </button>
              <button
                onClick={skipForward}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all text-xs font-bold"
                aria-label="Skip forward 15 seconds"
              >
                +15
              </button>
              <button
                onClick={close}
                className="w-7 h-7 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all ml-1"
                aria-label="Close player"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="2" y1="2" x2="12" y2="12" />
                  <line x1="12" y1="2" x2="2" y2="12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Progress bar row */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-white/70 font-semibold w-8 text-right tabular-nums">
              {formatTime(currentTime)}
            </span>
            <div
              className="flex-1 h-2 bg-white/30 rounded-full cursor-pointer group"
              onClick={handleProgressClick}
            >
              <div
                className="h-full bg-white rounded-full relative transition-all duration-150"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <span className="text-[10px] text-white/70 font-semibold w-8 tabular-nums">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
