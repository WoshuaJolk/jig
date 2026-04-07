"use client";

import Image from "next/image";

export function BodyBg({ onReady }: { onReady?: () => void }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Image
        src="/receipt.jpg"
        alt=""
        fill
        className="object-cover opacity-40"
        sizes="100vw"
        priority
        onLoadingComplete={onReady}
        onError={onReady}
      />
    </div>
  );
}
