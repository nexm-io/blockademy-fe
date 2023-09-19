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
import ListCardTrending from "@/views/Home/ListCardTrending";
import ListCardRecommend from "@/views/Home/ListCardRecommend";

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
        mTop="lg:mt-[160px] md:mt-[80px] mt-[60px]"
        urlApi="created_at"
      />
      <JourneyAcademy />
      <SpecialContent />
      <ListCardTrending
        cardTitle="Trending"
        cardLabel="Trending"
        mTop="mt-[60px]"
        urlApi="total_hit"
      />
      <TopicList urlApi="created_at" />
      <NotToKnow />
      <ListCardRecommend
        cardTitle="Recommend"
        cardLabel="Recommend"
        mTop="mt-[60px]"
      />
      <TutorialStart />
      <NoSignal />
    </>
  );
}
