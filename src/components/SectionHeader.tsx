"use client";

export function SectionHeader({
  label,
  children,
}: {
  label: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-center mb-2">
      <p className="text-xs text-zinc-400 uppercase tracking-widest">{label}</p>
      {children && <div className="flex gap-2">{children}</div>}
    </div>
  );
}

export function SectionAction({
  onClick,
  active,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-xs ${active ? "text-zinc-800 font-bold" : "text-zinc-500 hover:text-zinc-700"}`}
    >
      {children}
    </button>
  );
}
