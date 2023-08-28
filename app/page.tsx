"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { selectExample } from "@/redux/features/example/reducer";
import { update } from "@/redux/features/example/action";
import TopBody from "@/views/Home/TopBody";
import ListCard from "@/views/Home/ListCard";
import JourneyAcademy from "@/views/Home/JourneyAcademy";
import SpecialContent from "@/views/Home/SpecialContent";
import TopicList from "@/views/Home/TopicList";
import NotToKnow from "@/views/Home/NotToKnow";
import TutorialStart from "@/views/Home/TutorialStart";
import Glossary from "@/views/Home/Glossary";

export default function Home() {
  const exampleRx = useAppSelector(selectExample);

  const dispatch = useAppDispatch();

  return (
    <>
      <TopBody />
      <ListCard
        cardTitle="Latest Releases"
        cardLabel="Latest releases"
        mTop="lg:mt-[160px] md:mt-[100px] mt-[60px]"
      />
      <JourneyAcademy />
      <SpecialContent />
      <ListCard cardTitle="Trending" cardLabel="Trending" mTop="mt-[60px]" />
      <TopicList />
      <NotToKnow />
      <ListCard
        cardTitle="Backend"
        cardLabel="Backend"
        mTop="mt-[60px] md:mt-[100px]"
      />
      <ListCard
        cardTitle="Frontend"
        cardLabel="Frontend"
        mTop="mt-[60px] md:mt-[100px]"
      />
      <TutorialStart />
      <Glossary />
    </>
  );
}
