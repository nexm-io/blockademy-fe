"use client";

import Button from "@/components/Common/Button";
import CourseItem from "@/components/Home/CourseItem";
import CourseLoading from "@/components/Home/CourseLoading";
import React, { useState } from "react";

const FILTER_OPTIONS = {
  newest: "newest",
  oldest: "oldest",
  overallRating: "overall-rating",
};

const filterButtons = [
  { filter: FILTER_OPTIONS.newest, label: "Newest" },
  { filter: FILTER_OPTIONS.oldest, label: "Oldest" },
  { filter: FILTER_OPTIONS.overallRating, label: "Overall rating" },
];

const TopCourses = () => {
  const [courseFilter, setCourseFilter] = useState(filterButtons[0].filter);

  return (
    <section className="mt-8 sm:mt-24 w-full">
      <div className="flex items-center flex-wrap gap-4 md:gap-0 justify-between mb-8">
        <h2 className="text-center text-3xl sm:text-[40px] font-bold sm:leading-[52px]">
          Top Courses
        </h2>
        <div className="flex items-center flex-wrap gap-3">
          {filterButtons.map((button) => (
            <Button
              key={button.filter}
              className="lg:px-6 !py-2"
              kind={courseFilter === button.filter ? "primary" : "secondary"}
              onClick={() => setCourseFilter(button.filter)}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        <CourseItem />
        {/* <CourseLoading /> */}
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
      <div className="flex justify-center mt-14">
        <Button>Load more</Button>
      </div>
    </section>
  );
};

export default TopCourses;
