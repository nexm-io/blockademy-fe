"use client";
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
import { useEffect, useState } from "react";
import { UpArrowAlt } from "@styled-icons/boxicons-solid";

const MainPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTrigger = 0.6;
      const hideTrigger = 0.98;
      const shouldShowBackToTop = scrollPosition / pageHeight >= scrollTrigger;
      setShowBackToTop(shouldShowBackToTop);
  
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <GiftHeader />
      <TopBody />
      <ListCard
        cardTitle="Latest Releases"
        cardLabel="Latest releases"
        mTop="lg:mt-[160px] md:mt-[80px] mt-[40px]"
        urlApi="created_at"
      />
      <JourneyAcademy />
      <SpecialContent />
      <ListCardTrending
        cardTitle="Trending"
        cardLabel="Trending"
        mTop="mt-[60px]"
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
      {showBackToTop && (
        <button
          className="fixed bottom-[60px] right-[60px] animate-bounce w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-300"
          onClick={scrollToTop}
        >
          <UpArrowAlt className="text-white-200 p-1" />
        </button>
      )}
    </>
  );
};

export default MainPage;
