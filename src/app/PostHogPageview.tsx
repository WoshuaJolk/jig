"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";

export default function PostHogPageview() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    if (!pathname) return;

    const url = search ? `${pathname}?${search}` : pathname;

    posthog.capture("$pageview", {
      $current_url: url,
    });
  }, [pathname, search]);

  return null;
}
