"use client";

import { PaperTexture } from "@paper-design/shaders-react";

export function PaperBg() {
  return (
    <div className="absolute inset-0 -z-10">
      <PaperTexture
        colorBack="#faf9f6"
        colorFront="#e0dbd4"
        contrast={0.3}
        roughness={0.4}
        fiber={0.3}
        fiberSize={0.2}
        crumples={0.3}
        crumpleSize={0.35}
        folds={0.65}
        foldCount={5}
        drops={0.2}
        fade={0}
        seed={5.8}
        scale={0.6}
        fit="cover"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
