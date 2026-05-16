const SHEET_W = 1491;
const SHEET_H = 1055;

const poses = {
  "holding-hands": { x: 18, y: 15, w: 210, h: 500 },
  hugging: { x: 235, y: 10, w: 225, h: 505 },
  "side-by-side": { x: 468, y: 10, w: 275, h: 505 },
  selfie: { x: 748, y: 5, w: 285, h: 500 },
  sitting: { x: 1130, y: 40, w: 350, h: 450 },
  "heart-hands": { x: 18, y: 535, w: 255, h: 505 },
  walking: { x: 275, y: 535, w: 245, h: 510 },
  laughing: { x: 528, y: 525, w: 290, h: 520 },
  rose: { x: 840, y: 530, w: 260, h: 510 },
  waving: { x: 1150, y: 525, w: 335, h: 520 },
} as const;

export type StickerPose = keyof typeof poses;

interface StickerProps {
  pose: StickerPose;
  size?: number;
  className?: string;
}

export default function Sticker({ pose, size = 160, className = "" }: StickerProps) {
  const p = poses[pose];
  const scale = size / p.h;
  const displayW = Math.round(p.w * scale);

  return (
    <div
      className={`inline-block flex-shrink-0 ${className}`}
      style={{
        width: displayW,
        height: size,
        overflow: "hidden",
        filter: "drop-shadow(0 4px 16px rgba(0, 0, 0, 0.4))",
      }}
    >
      <div
        style={{
          width: SHEET_W * scale,
          height: SHEET_H * scale,
          backgroundImage: "url(/images/stickers.png?v=2)",
          backgroundSize: `${SHEET_W * scale}px ${SHEET_H * scale}px`,
          backgroundPosition: `-${p.x * scale}px -${p.y * scale}px`,
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
