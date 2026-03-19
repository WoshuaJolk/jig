"use client";

import { BodyBg } from "./body-bg";
// TODO: 3D statue footer disabled — causes major CLS (0.477) during Lighthouse.
// The 310px spacer + fixed footer with async WebGL/STL loading likely triggers
// layout shifts as the canvas initializes. Investigate whether the spacer div
// or the Statue's async rendering (dynamic imports + STL load) is the culprit.
// import { Statue } from "./statue";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell-scroll-container h-dvh overflow-y-auto overscroll-none">
      {/* Main content — opaque, covers the fixed footer while scrolling */}
      <div className="relative z-10 min-h-dvh bg-[#faf9f6] flex flex-col">
        <BodyBg />
        <main className="relative flex-1 flex flex-col">{children}</main>
      </div>
    </div>
  );
}
