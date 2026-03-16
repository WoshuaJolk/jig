"use client";

export function PageFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 space-y-2 text-center text-base">
      {children}
    </div>
  );
}

export function FooterLink({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-zinc-500 hover:text-zinc-700 underline"
    >
      {children}
    </button>
  );
}
