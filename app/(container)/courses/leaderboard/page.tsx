"use client";
import { useRouter } from "next/navigation";
export default function Leaderboard() {
  const router = useRouter();
  return router.back();
}
