import { Redis } from "@upstash/redis";
import { Split } from "./types";

const redis = new Redis({
  url: process.env.JIG_KV_REST_API_URL!,
  token: process.env.JIG_KV_REST_API_TOKEN!,
});

const PREFIX = "split:";
const TTL = 60 * 60 * 24 * 30; // 30 days

export async function getSplit(id: string): Promise<Split | null> {
  return redis.get<Split>(PREFIX + id);
}

export async function saveSplit(split: Split): Promise<void> {
  await redis.set(PREFIX + split.id, split, { ex: TTL });
}

export async function deleteSplit(id: string): Promise<void> {
  await redis.del(PREFIX + id);
}
