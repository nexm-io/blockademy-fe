"use client";
import React, { useEffect, useState } from "react";
import Courses from "@/components/Courses";
import { loadCourses } from "@/redux/features/new-courses/action";
import { selectNewCourses } from "@/redux/features/new-courses/reducer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Button from "@/components/Common/Button";
import { TOPIC_LIST } from "@/utils/constants";

const CoursesView = () => {
  const [cateSelected, setCateSelected] = useState("all");
  const coursesRx = useAppSelector(selectNewCourses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      loadCourses({
        limit: 8,
        page: 1,
        sortBy: "created_at",
      })
    );
  }, []);

  return (
    <div className="mt-8 sm:mt-20">
      <div>
        <h2 className="text-center text-3xl sm:text-[40px] font-bold sm:leading-[52px]">
          All Blockademy Courses
        </h2>
        <div className="flex items-center justify-center flex-wrap gap-3 mt-10">
          <Button
            className="lg:px-6 !py-2 sm:w-auto w-[45%]"
            kind={cateSelected === "all" ? "primary" : "secondary"}
            onClick={() => setCateSelected("all")}
          >
            All
          </Button>
          {TOPIC_LIST.map((topic) => (
            <Button
              key={topic.id}
              className="lg:px-6 !py-2 sm:w-auto w-[45%]"
              kind={cateSelected === topic.id ? "primary" : "secondary"}
              onClick={() => setCateSelected(topic.id)}
            >
              {topic.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-6 md:mt-[60px]">
        <Courses courses={coursesRx} />
      </div>
    </div>
  );
};

export default CoursesView;
