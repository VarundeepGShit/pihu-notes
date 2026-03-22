"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { episodes, type Episode } from "@/data/audio";

const PROGRESS_KEY = "pihu-listening-progress";
const HEARD_THRESHOLD = 0.8;

interface ListeningProgress {
  [episodeSlug: string]: { heard: boolean; lastPosition: number };
}

interface AudioContextValue {
  currentEpisode: Episode | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  listeningProgress: ListeningProgress;
  play: (episode: Episode) => void;
  pause: () => void;
  resume: () => void;
  togglePlayPause: () => void;
  seekTo: (time: number) => void;
  skipForward: () => void;
  skipBack: () => void;
  playNext: () => void;
  playPrev: () => void;
  close: () => void;
  isHeard: (slug: string) => boolean;
}

const AudioPlayerContext = createContext<AudioContextValue | null>(null);

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [listeningProgress, setListeningProgress] = useState<ListeningProgress>({});

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(PROGRESS_KEY);
      if (stored) {
        setListeningProgress(JSON.parse(stored));
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = useCallback((progress: ListeningProgress) => {
    setListeningProgress(progress);
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Initialize audio element once
  useEffect(() => {
    if (typeof window === "undefined") return;
    const audio = new Audio();
    audioRef.current = audio;

    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
    });

    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    audio.addEventListener("durationchange", () => {
      if (audio.duration && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    });

    audio.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    audio.addEventListener("play", () => setIsPlaying(true));
    audio.addEventListener("pause", () => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Mark heard when >80% played
  useEffect(() => {
    if (!currentEpisode || duration === 0) return;
    const ratio = currentTime / duration;
    if (ratio >= HEARD_THRESHOLD && !listeningProgress[currentEpisode.slug]?.heard) {
      const updated = {
        ...listeningProgress,
        [currentEpisode.slug]: {
          ...listeningProgress[currentEpisode.slug],
          heard: true,
          lastPosition: currentTime,
        },
      };
      saveProgress(updated);
    }
  }, [currentTime, duration, currentEpisode, listeningProgress, saveProgress]);

  // Auto-advance to next episode in same subject when current ends
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      if (!currentEpisode) return;
      const subjectEpisodes = episodes.filter(
        (e) => e.subjectSlug === currentEpisode.subjectSlug
      );
      const currentIndex = subjectEpisodes.findIndex(
        (e) => e.slug === currentEpisode.slug
      );
      if (currentIndex >= 0 && currentIndex < subjectEpisodes.length - 1) {
        const next = subjectEpisodes[currentIndex + 1];
        playEpisode(next);
      }
    };

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentEpisode]);

  const playEpisode = useCallback((episode: Episode) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentEpisode?.slug === episode.slug && !isPlaying) {
      audio.play().catch(() => {});
      return;
    }

    audio.src = episode.audioPath;
    audio.load();
    setCurrentEpisode(episode);
    setCurrentTime(0);
    setDuration(0);
    audio.play().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentEpisode, isPlaying]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const resume = useCallback(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      resume();
    }
  }, [isPlaying, pause, resume]);

  const seekTo = useCallback((time: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = time;
    setCurrentTime(time);
  }, []);

  const skipForward = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(audio.currentTime + 15, audio.duration || 0);
  }, []);

  const skipBack = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(audio.currentTime - 15, 0);
  }, []);

  const playNext = useCallback(() => {
    if (!currentEpisode) return;
    const subjectEpisodes = episodes.filter(
      (e) => e.subjectSlug === currentEpisode.subjectSlug
    );
    const idx = subjectEpisodes.findIndex((e) => e.slug === currentEpisode.slug);
    if (idx >= 0 && idx < subjectEpisodes.length - 1) {
      playEpisode(subjectEpisodes[idx + 1]);
    }
  }, [currentEpisode, playEpisode]);

  const playPrev = useCallback(() => {
    if (!currentEpisode) return;
    const subjectEpisodes = episodes.filter(
      (e) => e.subjectSlug === currentEpisode.subjectSlug
    );
    const idx = subjectEpisodes.findIndex((e) => e.slug === currentEpisode.slug);
    if (idx > 0) {
      playEpisode(subjectEpisodes[idx - 1]);
    }
  }, [currentEpisode, playEpisode]);

  const close = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.src = "";
    }
    setCurrentEpisode(null);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, []);

  const isHeard = useCallback(
    (slug: string) => !!listeningProgress[slug]?.heard,
    [listeningProgress]
  );

  return (
    <AudioPlayerContext.Provider
      value={{
        currentEpisode,
        isPlaying,
        currentTime,
        duration,
        listeningProgress,
        play: playEpisode,
        pause,
        resume,
        togglePlayPause,
        seekTo,
        skipForward,
        skipBack,
        playNext,
        playPrev,
        close,
        isHeard,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioPlayerContext);
  if (!ctx) {
    throw new Error("useAudio must be used within an AudioPlayerProvider");
  }
  return ctx;
}
