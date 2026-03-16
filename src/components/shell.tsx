"use client";

import { Statue } from "./statue";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Main content — sits above the fixed footer */}
      <div className="relative z-10 min-h-screen">
        <header className="text-center pt-4 pb-1">
          <p className="text-xs uppercase tracking-widest text-zinc-400">
            Split receipts with jig.so
          </p>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
      </div>

      {/* Transparent spacer — scrolling past this reveals the footer */}
      <div className="relative z-10 h-[42vh] min-h-[300px] pointer-events-none" />

      {/* Fixed footer — revealed by scrolling */}
      <footer className="fixed inset-x-0 bottom-0 z-0 h-[42vh] min-h-[300px] border-t border-black/6 overflow-hidden bg-[#f7f7f6] flex flex-col">
        <div className="relative z-10 flex-1 w-full">
          <Statue className="h-full w-full" />
        </div>
        <div className="font-semibold mb-2 sm:mb-10 text-center text-[12px] text-black/35">
          <a
            href="https://aico.nyc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black/50 transition-colors"
          >
            A lil tool by aico.nyc
          </a>
        </div>
      </footer>
    </div>
  );
}
