"use client";
import TopBody from "@/views/Home/TopBody";
import JourneyAcademy from "@/views/Home/JourneyAcademy";
import SpecialContent from "@/views/Home/SpecialContent";
import { useEffect, useState } from "react";
import Image from 'next/image';
import BackToTop from '@/public/icons/backToTop.svg'

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
      <TopBody />
      <JourneyAcademy />
      <SpecialContent />
      {showBackToTop && (
        <button className="fixed flex items-center justify-center bottom-[60px] right-[75px] animate-bounce w-[60px] h-[60px] rounded-lg bg-white-100 hover:brightness-90 shadow-3xl" onClick={scrollToTop}>
      
        <Image alt="btn" src={BackToTop} width={40} height={40}/>
      </button>
      )}
    </>
  );
};

export default MainPage;
