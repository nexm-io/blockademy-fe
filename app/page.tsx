"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { selectExample } from "@/redux/features/example/reducer";
import { update } from "@/redux/features/example/action";
import TopBody from "@/components/TopBody";
import LatestCard from "@/components/LatestCard";
import JourneyAcademy from "@/components/JourneyAcademy";

export default function Home() {
  const exampleRx = useAppSelector(selectExample);

  const dispatch = useAppDispatch();

  return (
    <main className="max-w-[1440px]  ">
      <TopBody />
      <LatestCard />
      <JourneyAcademy />
    </main>
  );
}
