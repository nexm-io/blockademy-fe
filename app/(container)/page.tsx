import TopBody from "@/views/Home/TopBody";
import ListCard from "@/views/Home/ListCard";
import JourneyAcademy from "@/views/Home/JourneyAcademy";
import SpecialContent from "@/views/Home/SpecialContent";
import TopicList from "@/views/Home/TopicList";
import NotToKnow from "@/views/Home/NotToKnow";
import TutorialStart from "@/views/Home/TutorialStart";
import GiftHeader from "@/components/GiftHeader";
import NoSignal from "@/components/NoSignal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <>
      <GiftHeader />
      <TopBody />
      <ListCard
        cardTitle="Latest Releases"
        cardLabel="Latest releases"
        mTop="lg:mt-[160px] md:mt-[100px] mt-[60px]"
        urlApi="carousel-post"
      />
      <JourneyAcademy />
      <SpecialContent />
      <ListCard
        cardTitle="Trending"
        cardLabel="Trending"
        mTop="mt-[60px]"
        urlApi="carousel-post"
      />
      <TopicList />
      <NotToKnow />
      <ListCard
        cardTitle="Backend"
        cardLabel="Backend"
        urlApi="carousel-post"
        mTop="mt-[60px] md:mt-[100px]"
      />
      <ListCard
        cardTitle="Frontend"
        cardLabel="Frontend"
        urlApi="carousel-post"
        mTop="mt-[60px] md:mt-[100px]"
      />
      <TutorialStart />
      <NoSignal />
    </>
  );
}
