"use client";

interface ProgressRingProps {
  size?: number;
  progress: number; // 0 to 1
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  className?: string;
}

export default function ProgressRing({
  size = 64,
  progress,
  strokeWidth = 5,
  color = "#E91E8C",
  bgColor = "#FCE4EC",
  className = "",
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;
  const pct = Math.round(progress * 100);

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={bgColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={
            {
              "--circumference": circumference,
              transition: "stroke-dashoffset 1s ease-out",
            } as React.CSSProperties
          }
        />
      </svg>
      <span
        className="absolute font-kalam font-bold text-pihu-ink"
        style={{ fontSize: size * 0.22 }}
      >
        {pct}%
      </span>
    </div>
  );
}
