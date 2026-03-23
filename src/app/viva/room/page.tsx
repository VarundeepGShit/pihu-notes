"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useConversation } from "@elevenlabs/react";
import Image from "next/image";
import Link from "next/link";

type AgentState = "idle" | "connecting" | "listening" | "speaking";

export default function VivaRoomPage() {
  const [agentState, setAgentState] = useState<AgentState>("idle");
  const [elapsed, setElapsed] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const conversation = useConversation({
    onStatusChange: ({ status }) => {
      console.log("Status changed:", status);
      if (status === "connected") {
        setAgentState("listening");
        setError(null);
        if (!timerRef.current) {
          timerRef.current = setInterval(() => {
            setElapsed((prev) => prev + 1);
          }, 1000);
        }
      } else if (status === "disconnected") {
        setAgentState("idle");
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
      } else if (status === "connecting") {
        setAgentState("connecting");
      }
    },
    onModeChange: ({ mode }) => {
      console.log("Mode changed:", mode);
      if (mode === "speaking") {
        setAgentState("speaking");
      } else if (mode === "listening") {
        setAgentState("listening");
      }
    },
    onError: (err: unknown) => {
      console.error("Conversation error:", err);
      const msg =
        err instanceof Error
          ? err.message
          : typeof err === "string"
            ? err
            : JSON.stringify(err);
      setError(`Voice error: ${msg}`);
    },
    onMessage: (msg) => {
      console.log("Message:", msg);
    },
  });

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const startViva = useCallback(async () => {
    setAgentState("connecting");
    setElapsed(0);
    setError(null);

    try {
      // Request mic permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setError("Microphone access is required for the viva. Please allow it.");
      setAgentState("idle");
      return;
    }

    try {
      const res = await fetch("/api/signed-url");
      if (!res.ok) {
        const body = await res.text();
        throw new Error(`Signed URL failed (${res.status}): ${body}`);
      }
      const { signedUrl } = await res.json();
      console.log("Got signed URL, starting session...");
      const sessionId = await conversation.startSession({ signedUrl });
      console.log("Session started:", sessionId);
    } catch (err: unknown) {
      console.error("Start error:", err);
      const msg = err instanceof Error ? err.message : String(err);
      setError(`Connection failed: ${msg}`);
      setAgentState("idle");
    }
  }, [conversation]);

  const endViva = useCallback(async () => {
    await conversation.endSession();
    setAgentState("idle");
  }, [conversation]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const statusText =
    agentState === "speaking"
      ? "Pihu is asking..."
      : agentState === "listening"
        ? "Your turn — speak now"
        : agentState === "connecting"
          ? "Connecting..."
          : "Ready to start";

  const statusColor =
    agentState === "speaking"
      ? "text-pink-400"
      : agentState === "listening"
        ? "text-green-400"
        : "text-gray-400";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 z-10">
        <Link
          href="/viva"
          className="text-white/60 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2"
        >
          <span className="text-lg">←</span> Exit Viva
        </Link>
        <div className="flex items-center gap-4">
          {agentState !== "idle" && (
            <span className="text-white/40 font-mono text-sm">
              {formatTime(elapsed)}
            </span>
          )}
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                agentState === "idle"
                  ? "bg-gray-500"
                  : agentState === "connecting"
                    ? "bg-yellow-400 animate-pulse"
                    : "bg-green-400 animate-pulse"
              }`}
            />
            <span className="text-white/50 text-xs">
              {agentState === "idle" ? "Offline" : "Live"}
            </span>
          </div>
        </div>
      </div>

      {/* Main viva room */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 relative">
        {/* Desk / examiner area */}
        <div className="relative mb-8">
          {/* Glow effect behind examiner */}
          <div
            className={`absolute inset-0 rounded-full blur-3xl transition-all duration-1000 ${
              agentState === "speaking"
                ? "bg-pink-500/30 scale-110"
                : agentState === "listening"
                  ? "bg-green-500/20 scale-100"
                  : "bg-white/5 scale-90"
            }`}
          />

          {/* Examiner avatar */}
          <div className="relative">
            <div
              className={`w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 transition-all duration-500 shadow-2xl ${
                agentState === "speaking"
                  ? "border-pink-400 shadow-pink-500/30"
                  : agentState === "listening"
                    ? "border-green-400 shadow-green-500/30"
                    : "border-white/20"
              }`}
            >
              <Image
                src="/images/pose_raising_hand.png"
                alt="Pihu - Viva Examiner"
                width={224}
                height={224}
                className="w-full h-full object-cover bg-gradient-to-b from-pihu-light to-pihu-pale"
                priority
              />
            </div>

            {/* Pulsing ring when speaking */}
            {agentState === "speaking" && (
              <>
                <div className="absolute inset-0 rounded-full border-2 border-pink-400/50 animate-ping" />
                <div
                  className="absolute inset-0 rounded-full border-2 border-pink-400/30 animate-ping"
                  style={{ animationDelay: "0.5s" }}
                />
              </>
            )}

            {/* Sound wave when listening */}
            {agentState === "listening" && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-1 bg-green-400 rounded-full"
                    style={{
                      animation: `sound-wave 0.8s ease-in-out infinite`,
                      animationDelay: `${i * 0.15}s`,
                      height: "4px",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Examiner name plate */}
        <div className="text-center mb-6">
          <h2 className="text-white font-bold text-xl sm:text-2xl mb-1">
            Dr. Pihu
          </h2>
          <p className="text-white/40 text-sm">MBBS Viva Examiner</p>
        </div>

        {/* Status indicator */}
        <div className="mb-8 text-center">
          <p
            className={`text-lg font-semibold ${statusColor} transition-colors`}
          >
            {statusText}
          </p>
          {agentState === "listening" && (
            <p className="text-white/30 text-xs mt-1 animate-pulse">
              🎙️ Microphone active
            </p>
          )}
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-6 bg-red-500/20 border border-red-500/40 rounded-xl px-6 py-3 max-w-md text-center">
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}

        {/* Control buttons */}
        <div className="flex gap-4">
          {agentState === "idle" && (
            <button
              onClick={startViva}
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-bold text-lg shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
                Start Viva
              </span>
              <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          )}

          {agentState === "connecting" && (
            <button
              disabled
              className="px-8 py-4 bg-gray-600 text-white rounded-full font-bold text-lg cursor-not-allowed opacity-60"
            >
              <span className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Connecting...
              </span>
            </button>
          )}

          {(agentState === "listening" || agentState === "speaking") && (
            <button
              onClick={endViva}
              className="px-8 py-4 bg-red-500/80 hover:bg-red-500 text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-red-500/20"
            >
              <span className="flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 3l-6 6m0 0V4m0 5h5M3 21l6-6m0 0v5m0-5H4"
                  />
                </svg>
                End Viva
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Bottom: student "camera" area */}
      <div className="px-4 sm:px-8 pb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pihu-deep to-pihu-mid flex items-center justify-center text-white font-bold text-sm shadow-lg">
            S
          </div>
          <div>
            <p className="text-white/80 text-sm font-semibold">Sammy</p>
            <p className="text-white/30 text-xs">MBBS 3rd Year</p>
          </div>
        </div>

        {/* Mic indicator */}
        {agentState !== "idle" && (
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
              agentState === "listening"
                ? "bg-green-500/20 text-green-400"
                : "bg-white/10 text-white/40"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                agentState === "listening"
                  ? "bg-green-400 animate-pulse"
                  : "bg-white/30"
              }`}
            />
            {agentState === "listening" ? "Mic Active" : "Mic Standby"}
          </div>
        )}
      </div>

      {/* CSS for sound wave animation */}
      <style jsx>{`
        @keyframes sound-wave {
          0%,
          100% {
            height: 4px;
          }
          50% {
            height: 20px;
          }
        }
      `}</style>
    </div>
  );
}
