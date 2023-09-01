"use client";
import NoSignal from "@/components/NoSignal";
import { getListCourse } from "@/redux/features/courses/action";
import { useAppDispatch } from "@/redux/hook";
import CourseBanner from "@/views/Courses/CourseBanner";
import CourseFAQ from "@/views/Courses/CourseFAQ";
import CourseLists from "@/views/Courses/CourseLists";
import CourseRewards from "@/views/Courses/CourseRewards";
import CourseStatus from "@/views/Courses/CourseStatus";
import { Metadata } from "next";
import React, { useEffect } from "react";

export const metadata: Metadata = {
  title: "Course",
};

const CourseAll = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getListCourse());
  }, [dispatch]);
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
