import CourseItem from "@/components/CourseItem";
import NoSignal from "@/components/NoSignal";
import CourseBanner from "@/views/Courses/CourseBanner";
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
      <CourseStatus />
      <CourseItem />
      <NoSignal />
    </div>
  );
};

export default CompletedCourse;
