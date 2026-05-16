const SHEET_W = 1491;
const SHEET_H = 1055;

const poses = {
  "holding-hands": { x: 0, y: 0, w: 230, h: 510 },
  hugging: { x: 225, y: 0, w: 250, h: 520 },
  "side-by-side": { x: 470, y: 0, w: 280, h: 520 },
  selfie: { x: 740, y: 0, w: 300, h: 510 },
  sitting: { x: 1050, y: 10, w: 430, h: 500 },
  "heart-hands": { x: 0, y: 520, w: 270, h: 520 },
  walking: { x: 265, y: 520, w: 260, h: 530 },
  laughing: { x: 520, y: 515, w: 300, h: 530 },
  rose: { x: 815, y: 510, w: 310, h: 540 },
  waving: { x: 1115, y: 515, w: 376, h: 530 },
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
        borderRadius: size * 0.12,
        filter: "drop-shadow(0 4px 20px rgba(233, 30, 140, 0.3))",
      }}
    >
      <div
        style={{
          width: SHEET_W * scale,
          height: SHEET_H * scale,
          backgroundImage: "url(/images/stickers.png)",
          backgroundSize: `${SHEET_W * scale}px ${SHEET_H * scale}px`,
          backgroundPosition: `-${p.x * scale}px -${p.y * scale}px`,
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
