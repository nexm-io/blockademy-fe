"use client";
import React from "react";

const CourseDetailsLoading = () => {
  return (
    <div className="md:mt-[56px] mt-8 lg:px-0 px-3">
      <div className="bg-gray-400/20 skeleton h-[50px] mb-4"></div>
      <div className="skeleton bg-gray-400/20 h-12"></div>
      <div className="flex flex-wrap flex-col-reverse xl:flex-row gap-12 mt-10">
        <div className="bg-gray-400/20 skeleton h-[500px] xl:w-2/3"></div>
        <div className="bg-gray-400/20 skeleton h-[300px] flex-1 hidden md:block"></div>
      </div>
    </div>
  );
};

export default CourseDetailsLoading;
