import NoSignal from "@/components/NoSignal";
import CourseBanner from "@/views/Courses/CourseBanner";
import CourseFAQ from "@/views/Courses/CourseFAQ";
import CourseLists from "@/views/Courses/CourseLists";
import CourseRewards from "@/views/Courses/CourseRewards";
import CourseStatus from "@/views/Courses/CourseStatus";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Course",
};

const CourseAll = () => {
  return (
    <div className="mt-[74px]">
      <CourseBanner />
      <CourseStatus />
      <CourseLists />
      <CourseRewards />
      <CourseFAQ />
      <NoSignal />
    </div>
  );
};

export default CourseAll;
