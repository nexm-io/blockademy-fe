"use client";

import TopBody from "@/views/Home/TopBody";
import JourneyAcademy from "@/views/Home/JourneyAcademy";
import SpecialContent from "@/views/Home/SpecialContent";
import Topics from "@/views/Home/Topics";
import TopCourses from "@/views/Home/TopCourses";
import GuidedCourses from "@/views/Home/GuidedCourses";
import MasterConcepts from "@/views/Home/MasterConcepts";

import BackToTop from "@/components/BackToTop";
import Divider from "@/components/Divider";

const MainPage = () => {
  return (
    <>
      <TopBody />
      <Topics />
      <TopCourses />
      <MasterConcepts />
      <Divider />
      <GuidedCourses />
      <JourneyAcademy />
      <SpecialContent />
      <BackToTop />
    </>
  );
};

export default MainPage;
