"use client";

export function PageHeader({
  title,
  description,
  onBack,
  onTitleChange,
  actionLabel,
  onAction,
  venmo,
  onVenmoChange,
}: {
  title: string;
  description?: string;
  onBack?: () => void;
  onTitleChange?: (v: string) => void;
  actionLabel?: string;
  onAction?: () => void;
  venmo?: string;
  onVenmoChange?: (v: string) => void;
}) {
  return (
    <div className="pt-5 mb-4">
      <div className="relative text-center">
        {onBack && (
          <button
            onClick={onBack}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-zinc-700"
          >
            Back
          </button>
        )}
        {onTitleChange ? (
          <input
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="bg-transparent text-center text-xl font-bold outline-none py-1 mx-12 w-[calc(100%-6rem)] border-b border-dashed border-zinc-400"
            placeholder="Restaurant Name"
          />
        ) : (
          <h1 className="text-xl font-bold py-1 px-8">{title}</h1>
        )}
        {actionLabel && onAction && (
          <button
            onClick={onAction}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-zinc-700"
          >
            {actionLabel}
          </button>
        )}
      </div>
      {onVenmoChange ? (
        <div className="flex items-center justify-center mt-1">
          <input
            value={"@" + (venmo || "")}
            onChange={(e) => onVenmoChange(e.target.value.replace(/^@/, ""))}
            placeholder="@your venmo username"
            className="bg-transparent text-base text-zinc-400 outline-none text-center border-b border-dashed border-zinc-400 w-40"
          />
        </div>
      ) : description ? (
        <p className="text-xs text-zinc-400 uppercase tracking-widest text-center mt-1">
          {description}
        </p>
      ) : null}
    </div>
  );
}
