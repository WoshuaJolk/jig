"use client";

import { BodyBg } from "./body-bg";
import { useCallback, useState } from "react";
// TODO: 3D statue footer disabled — causes major CLS (0.477) during Lighthouse.
// The 310px spacer + fixed footer with async WebGL/STL loading likely triggers
// layout shifts as the canvas initializes. Investigate whether the spacer div
// or the Statue's async rendering (dynamic imports + STL load) is the culprit.
// import { Statue } from "./statue";

export function Shell({ children }: { children: React.ReactNode }) {
  const [bgReady, setBgReady] = useState(false);
  const onBgReady = useCallback(() => setBgReady(true), []);

  return (
    <div className="shell-scroll-container h-dvh overflow-y-auto overscroll-none">
      {/* Main content — opaque, covers the fixed footer while scrolling */}
      <div className="relative z-10 flex min-h-dvh flex-col bg-white">
        <BodyBg onReady={onBgReady} />
        <main
          className="relative flex flex-1 flex-col"
          aria-busy={!bgReady}
          aria-hidden={!bgReady}
        >
          {bgReady ? children : null}
        </main>
      </div>
    </div>
  );
}
