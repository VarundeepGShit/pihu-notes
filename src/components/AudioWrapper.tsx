"use client";

import { AudioPlayerProvider } from "@/contexts/AudioPlayerContext";
import AudioPlayer from "@/components/AudioPlayer";
import type { ReactNode } from "react";

export default function AudioWrapper({ children }: { children: ReactNode }) {
  return (
    <AudioPlayerProvider>
      {children}
      <AudioPlayer />
    </AudioPlayerProvider>
  );
}
