"use client";

import Button from "@/components/Common/Button";
import CoursesItem from "@/components/Home/CoursesItem";
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
  const [courseFilter, setCourseFilter] = useState("newest");

  return (
    <section className="mt-24 w-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[40px] font-bold leading-[52px]">Top Courses</h2>
        <div className="flex items-center gap-3">
          {filterButtons.map((button) => (
            <Button
              key={button.filter}
              className="px-6 !py-2"
              kind={courseFilter === button.filter ? "primary" : "secondary"}
              onClick={() => setCourseFilter(button.filter)}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-7">
        <CoursesItem />
        <CoursesItem />
        <CoursesItem />
        <CoursesItem />
        <CoursesItem />
        <CoursesItem />
        <CoursesItem />
        <CoursesItem />
      </div>
      <div className="flex justify-center mt-14">
        <Button>Load more</Button>
      </div>
    </section>
  );
};

export default TopCourses;
