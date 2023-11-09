import NoSignal from "@/components/NoSignal";
import PageContainer from "@/components/PageContainer";
import CoursesView from "@/views/Courses";
import CourseBanner from "@/views/Courses/Banner";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Courses",
};

const CourseAll = () => {
  return (
    <div className="mt-[74px]">
      <CourseBanner />
      <PageContainer>
        <CoursesView />
        <NoSignal />
      </PageContainer>
    </div>
  );
};

export default CourseAll;
