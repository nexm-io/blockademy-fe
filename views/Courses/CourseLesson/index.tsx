"use client";
import check from "@/public/icons/check.svg";
import clock from "@/public/icons/clock.svg";
import play from "@/public/icons/play.svg";
import { ListCourse } from "@/redux/features/courses/type";
import { secondsToMinutes } from "@/utils/convertToMinutes";
import Image from "next/image";
const CourseLesson = ({ details }: { details: Array<ListCourse> }) => {
  return (
    <div className="flex flex-col gap-4 px-4 md:px-0">
      {/* Item Course */}
      {details.map((course) => (
        <>
          {/* <CoursePanel data={course} /> */}
          <div key={course.id} className={`flex gap-4 items-center `}>
            <div className="w-[40px] h-[40px]">
              <Image
                alt="check-icon"
                src={check}
                className={`w-full h-full object-cover flex-shrink-0 rounded-full ${
                  course.is_completed === 1 ? "bg-blue-100" : " "
                }`}
              ></Image>
            </div>
            <div
              className={`bg-gray-200 cursor-pointer flex md:items-center items-start justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4 gap-5`}
            >
              <div className="flex md:flex-row flex-col gap-3 md:gap-0 flex-1">
                <span className={`basis-[70%] line-clamp-1`}>
                  {course.title}
                </span>
                <div className=" flex items-center gap-[10px] basis-[20%] line-clamp-1">
                  <Image alt="clock-icon" src={clock}></Image>
                  <span className="line-clamp-1 text-base">
                    {secondsToMinutes(course.duration)} Min
                  </span>
                </div>
              </div>
              <div className=" flex items-center gap-[10px] pr-4 text-blue-100 basis-[30%] justify-end">
                <Image alt="play-icon" src={play}></Image>
                <span className="line-clamp-1 hidden md:block">Learn Now</span>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default CourseLesson;
