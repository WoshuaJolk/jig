import { getSplit } from "@/lib/store";
import { Metadata } from "next";
import SplitView from "./split-view";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const split = getSplit(id);
  const title = split ? `Split ${split.title}` : "Jig — Split Any Receipt";
  const description = split
    ? `See your share of the bill for ${split.title}`
    : "Upload a receipt, assign items to people, and share the split.";
  return {
    title: split ? `${title} — Jig` : title,
    description,
    openGraph: { title, description },
  };
}

export default function Page() {
  return <SplitView />;
}
