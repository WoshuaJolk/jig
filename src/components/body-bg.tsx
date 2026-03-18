"use client";

import { PaperTexture } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

export function BodyBg() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {mounted && <PaperTexture
        colorBack="#faf9f6"
        colorFront="#e0dbd4"
        contrast={0.6}
        roughness={0.3}
        fiber={0.3}
        fiberSize={0.2}
        crumples={0.3}
        crumpleSize={0.35}
        folds={0.8}
        foldCount={8}
        drops={0}
        fade={0}
        seed={5.8}
        scale={0.6}
        fit="cover"
        style={{ width: "100%", height: "100%" }}
      />}
    </div>
  );
}
