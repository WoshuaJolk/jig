import { Metadata } from "next";
import { headers } from "next/headers";
import SplitView from "./split-view";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const fallback = {
    title: "Jig — Split Any Receipt",
    description: "Upload a receipt, assign items to people, and share the split.",
  };

  try {
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    const protocol = headersList.get("x-forwarded-proto") || "http";
    const res = await fetch(`${protocol}://${host}/api/splits/${id}`, {
      next: { revalidate: 0 },
    });

    if (!res.ok) return { ...fallback, openGraph: fallback };

    const split = await res.json();
    const title = `Split ${split.title}`;
    const description = `See your share of the bill for ${split.title}`;
    return {
      title: `${title} — Jig`,
      description,
      openGraph: { title, description },
    };
  } catch {
    return { ...fallback, openGraph: fallback };
  }
}

export default function Page() {
  return <SplitView />;
}
