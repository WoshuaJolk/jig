"use client";

import { BodyBg } from "./body-bg";
import { Statue } from "./statue";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-dvh overflow-y-auto overscroll-none">
      {/* Main content — opaque, covers the fixed footer while scrolling */}
      <div className="relative z-10 min-h-dvh bg-[#faf9f6] flex flex-col">
        <BodyBg />
        <main className="relative flex-1 flex flex-col">{children}</main>
      </div>

      {/* Transparent spacer — scrolling past this reveals the footer */}
      <div className="h-[310px] pointer-events-none" />

      {/* Fixed footer — revealed by scrolling */}
      <footer className="fixed inset-x-0 bottom-0 z-0 h-[310px] border-t border-black/6 overflow-hidden bg-[#f7f7f6] flex flex-col">
        <div className="relative z-10 flex-1 w-full">
          <Statue className="h-full w-full" />
        </div>
        <div className="font-semibold mb-4 text-center text-[12px] text-black/35">
          <a
            href="https://aico.nyc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black/50 transition-colors"
          >
            Brought to you by the AI Company of New York.
          </a>
        </div>
      </footer>
    </div>
  );
}
