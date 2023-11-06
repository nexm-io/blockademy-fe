"use client";
import TopBody from "@/views/Home/TopBody";
import JourneyAcademy from "@/views/Home/JourneyAcademy";
import SpecialContent from "@/views/Home/SpecialContent";
import BackToTop from "@/components/BackToTop";

// TODO: remove component connection
// import ListCard from "@/views/Home/ListCard";
// import TopicList from "@/views/Home/TopicList";
// import NotToKnow from "@/views/Home/NotToKnow";
// import TutorialStart from "@/views/Home/TutorialStart";
// import GiftHeader from "@/components/GiftHeader";
// import NoSignal from "@/components/NoSignal";
// import type { Metadata } from "next";
// import ListCardTrending from "@/views/Home/ListCardTrending";
// import ListCardRecommend from "@/views/Home/ListCardRecommend";

const MainPage = () => {
  return (
    <>
      <TopBody />
      <JourneyAcademy />
      <SpecialContent />
      <BackToTop />
    </>
  );
};

export default MainPage;
