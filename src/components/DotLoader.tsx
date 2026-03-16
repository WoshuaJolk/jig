"use client";

import { useEffect, useState } from "react";

export function DotLoader() {
  const [dots, setDots] = useState(".");
  useEffect(() => {
    const id = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "." : d + "."));
    }, 400);
    return () => clearInterval(id);
  }, []);
  return <span className="inline-block w-8 text-left">{dots}</span>;
}
