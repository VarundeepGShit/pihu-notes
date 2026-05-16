const SHEET_W = 1491;
const SHEET_H = 1055;

const poses = {
  "holding-hands": { x: 18, y: 15, w: 210, h: 500 },
  hugging: { x: 235, y: 10, w: 225, h: 505 },
  "side-by-side": { x: 468, y: 10, w: 275, h: 505 },
  selfie: { x: 748, y: 5, w: 285, h: 500 },
  sitting: { x: 1065, y: 20, w: 410, h: 475 },
  "heart-hands": { x: 18, y: 535, w: 255, h: 505 },
  walking: { x: 275, y: 535, w: 245, h: 510 },
  laughing: { x: 528, y: 525, w: 290, h: 520 },
  rose: { x: 825, y: 520, w: 280, h: 530 },
  waving: { x: 1128, y: 525, w: 350, h: 520 },
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
