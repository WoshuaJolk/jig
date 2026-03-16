"use client";

const AVATAR_COLORS = [
  "#6b7280",
  "#8b5cf6",
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#ec4899",
  "#14b8a6",
];

export function Avatar({
  name,
  index,
  add,
  size = "sm",
}: {
  name?: string;
  index?: number;
  add?: boolean;
  size?: "sm" | "md";
}) {
  const dim = size === "md" ? "w-6 h-6" : "w-4 h-4";
  const text = size === "md" ? "text-[10px]" : "text-[7px]";

  if (add) {
    return (
      <div
        className={`${dim} inline-flex items-center justify-center rounded-full ${text} font-bold flex-shrink-0 border border-dashed border-zinc-400 text-zinc-400`}
      >
        +
      </div>
    );
  }

  const color = AVATAR_COLORS[(index ?? 0) % AVATAR_COLORS.length];
  return (
    <div
      className={`${dim} inline-flex items-center justify-center rounded-full text-white ${text} font-bold flex-shrink-0`}
      style={{ backgroundColor: color }}
      title={name}
    >
      <div className="mt-0.5">{name?.[0]?.toUpperCase()}</div>
    </div>
  );
}
