import Courses from "@/components/Courses";
import NoSignal from "@/components/NoSignal";
import PageContainer from "@/components/PageContainer";
import { selectNewCourses } from "@/redux/features/new-courses/reducer";
import { useAppSelector } from "@/redux/hook";
import CourseBanner from "@/views/Courses/CourseBanner";
import CourseStatus from "@/views/Courses/CourseStatus";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Courses",
};

const CourseAll = () => {
  // const coursesRx = useAppSelector(selectNewCourses);
  return (
    <div className="mt-[74px]">
      <CourseBanner />
      <PageContainer>
        <CourseStatus />
        {/* <Courses courses={coursesRx} /> */}
        <NoSignal />
      </PageContainer>
    </div>
  );
};

export default CourseAll;
