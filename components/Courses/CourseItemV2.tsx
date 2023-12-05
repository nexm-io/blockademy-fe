import Image from "next/image";
import React, { useMemo, useState } from "react";
import IconDotList from "@/public/icons/dot-list.svg";
import Link from "next/link";
import { CourseTypes } from "@/redux/features/new-courses/type";

const STATUS_DATA = {
  completed: { bgColor: "bg-[#02E755]/20", dotColor: "bg-[#02E755]", text: 'Completed' },
  progress: { bgColor: "bg-[#DDE8FF]", dotColor: "bg-[#1F37B3]", text: 'In Progress' },
};

const CourseItemV2 = ({ course }: { course: CourseTypes }) => {
  const [srcCourse, setSrcCourse] = useState(course.image.original);

  const courseStatus = useMemo(() => course.is_completed === 1 && course.is_completed_assignment === 1 ? 'completed' : 'progress', [course.is_completed, course.is_completed_assignment])

  return (
    <Link href={`/courses/${course.slug}`} className="group mb-10 border border-[#F5F5F5] rounded-lg md:max-w-[360px]">
      <div className="rounded overflow-hidden">
        <Image
          className="w-full h-[202px] object-cover transition-all duration-500 group-hover:scale-110"
          height={189}
          width={360}
          onError={() => setSrcCourse("/images/course/default-img.png")}
          src={srcCourse}
          alt={course.title}
        />
      </div>
      <div className="px-[10px] pb-[16px]">
        <p className="text-xs mt-[10px] font-light mb-[2px]">
          {course.category?.category_name || "--"}
        </p>
        <p className="text-lg font-bold line-clamp-2 min-h-[56px] mb-[16px]">
          {course.title}
        </p>
        <div className="flex items-center justify-between mt-[auto]">
          <div
            className={`flex items-center gap-2 rounded-[30px] px-[16px] py-[7px] ${STATUS_DATA[courseStatus].bgColor}`}
          >
            <span
              className={`w-[6px] h-[6px] rounded-full inline-block ${STATUS_DATA[courseStatus].dotColor}`}
            ></span>
            <p className="text-sm font-light -mb-[2px]">
              {STATUS_DATA[courseStatus].text}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={IconDotList} width={15} height={11} alt="dot" />
            <p className="text-sm leading-3 -mb-[2px] font-light">
              <span className="text-[#004DFB]">{course.total_lesson_completed}</span>/{course.total_Lecture} Lecture
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseItemV2;
