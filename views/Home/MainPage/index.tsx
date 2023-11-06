"use client";
import TopBody from "@/views/Home/TopBody";
import JourneyAcademy from "@/views/Home/JourneyAcademy";
import SpecialContent from "@/views/Home/SpecialContent";
import Topics from "@/views/Home/Topics";
import TopCourses from "@/views/Home/TopCourses";
import BackToTop from "@/components/BackToTop";

const MainPage = () => {
  return (
    <>
      <TopBody />
      <Topics />
      <TopCourses />
      <JourneyAcademy />
      <SpecialContent />
      <BackToTop />
    </>
  );
};

export default MainPage;
