"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { selectExample } from "@/redux/features/example/reducer";
import { update } from "@/redux/features/example/action";
import TopBody from "@/views/Home/TopBody";
import LatestCard from "@/views/Home/LatestCard";
import JourneyAcademy from "@/views/Home/JourneyAcademy";

export default function Home() {
  const exampleRx = useAppSelector(selectExample);

  const dispatch = useAppDispatch();

  return (
    <main>
      <TopBody />
      <LatestCard />
      <JourneyAcademy />
    </main>
  );
}
