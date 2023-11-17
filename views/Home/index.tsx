"use client";

import TopBanner from "./TopBanner";
import MainSection from "./MainSection";
import TopCourses from "./TopCourses";
import MasterSection from "./MasterSection";
import CertSection from "./CertSection";
import ArticlesSection from "./ArticlesSection";
import NoSignal from "@/components/NoSignal";
import BackToTop from "@/components/BackToTop";

const HomeView = () => {
  return (
    <>
      <MainSection />
      <TopCourses />
      <MasterSection />
      <CertSection />
      <ArticlesSection />
      <NoSignal />
      <BackToTop />
    </>
  );
};

export default HomeView;
