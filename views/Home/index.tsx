"use client";

import TopBody from "@/views/Home/TopBody";
import JourneyAcademy from "@/views/Home/JourneyAcademy";
import SpecialContent from "@/views/Home/SpecialContent";
import Topics from "@/views/Home/Topics";
import MasterConcepts from "@/views/Home/MasterConcepts";
import TopCourses from "@/views/Home/TopCourses";

import Blogs from "@/components/Blogs";
import BackToTop from "@/components/BackToTop";

const HomeView = () => {
  return (
    <>
      <TopBody />
      <Topics />
      <TopCourses />
      <MasterConcepts />
      <JourneyAcademy />
      {/* <Divider /> */}
      {/* <GuidedCourses /> */}
      <SpecialContent />
      <Blogs />
      <BackToTop />
    </>
  );
};

export default HomeView;
