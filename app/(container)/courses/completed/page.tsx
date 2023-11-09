import CourseItem from "@/components/CourseItem";
import Courses from "@/components/Courses";
import NoSignal from "@/components/NoSignal";
import PageContainer from "@/components/PageContainer";
import CourseBanner from "@/views/Courses/Banner";
import CourseStatus from "@/views/Courses/CourseStatus";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Course",
};
const CompletedCourse = () => {
  return (
    <div className="mt-[74px]">
      <CourseBanner />
      <PageContainer>
        <CourseStatus />
        {/* <Courses /> */}
      </PageContainer>
    </div>
  );
};

export default CompletedCourse;
