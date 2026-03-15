import { Split } from "./types";

// In-memory store. Works in development (server stays alive) and for demo purposes.
// For production on Vercel, swap this with Vercel KV, Upstash Redis, or a database.
const globalStore = globalThis as unknown as { __splits?: Map<string, Split> };
if (!globalStore.__splits) {
  globalStore.__splits = new Map<string, Split>();
}

const splits = globalStore.__splits;

export function getSplit(id: string): Split | undefined {
  return splits.get(id);
}

export function saveSplit(split: Split): void {
  splits.set(split.id, split);
}

export function deleteSplit(id: string): void {
  splits.delete(id);
}
