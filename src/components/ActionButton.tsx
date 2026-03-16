"use client";

const VARIANTS = {
  primary: "bg-zinc-800 text-white hover:bg-zinc-700",
  secondary: "bg-zinc-300 text-zinc-700 hover:bg-zinc-400",
  venmo: "bg-[#008CFF] text-white hover:bg-[#0074D4]",
} as const;

export function ActionButton({
  children,
  onClick,
  disabled,
  href,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  variant?: keyof typeof VARIANTS;
  className?: string;
}) {
  const base = `pt-4 pb-3 w-full font-bold text-base text-center uppercase tracking-widest transition-colors disabled:opacity-50 ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`block ${base}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}
