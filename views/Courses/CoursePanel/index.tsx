import Image from "next/image";
import React from "react";
import check from "@/public/icons/check.svg";
import clock from "@/public/icons/clock.svg";
import play from "@/public/icons/play.svg";
import { CircleCheck } from "@styled-icons/fa-solid";
import { ListCourse } from "@/redux/features/courses/type";
import { secondsToMinutes } from "@/utils/convertToMinutes";
import Link from "next/link";
import slugifyText from "@/utils/slugifyText";

interface CoursePanelProps {
  status?: "watching" | "unwatching";
  course?: any
  campaign_id?: string;
  title?: string;
}

const CoursePanel: React.FC<CoursePanelProps> = ({ status = "unwatching" , course, campaign_id, title}) => {
  console.log(course);
  
  return (
    <div className="flex gap-4 items-center">
      <div className="w-[30px] h-[30px]">
        <CircleCheck className={`${course.is_completed === 1 ? "text-blue-100" : "text-white-300"}`} />
      </div>
      <div className="bg-gray-200 cursor-pointer flex md:items-center items-start justify-between rounded-lg flex-1 min-h-[64px] gap-5">
      <Link
      className="flex md:items-center items-start justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4 gap-5"
        href={`/courses/${campaign_id}/${course.id}/${slugifyText(title || "")}/`}
      >
        <div className="flex md:flex-row flex-col gap-3 md:gap-0 flex-1">
          <span className="basis-[70%] line-clamp-1">
            {course.title}
          </span>
          <div className=" flex items-center gap-[10px] basis-[20%] line-clamp-1">
            <Image alt="clock-icon" src={clock}></Image>
            {status === "unwatching" && (
              <span className="line-clamp-1">{secondsToMinutes(course.duration)} Mins</span>
            )}
            {status === "watching" && (
              <span className="line-clamp-1">{secondsToMinutes(course.duration)} Mins</span>
            )}
          </div>
        </div>
        <div className=" flex items-center gap-[10px] pr-4 text-blue-100 basis-[30%] justify-end">
        
            <>
              <Image alt="play-icon" src={play}></Image>
              <span className="line-clamp-1 hidden md:block">Learn Now</span>
            </>
     
          {/* {status === "unwatching" && (
            <span className="line-clamp-1 text-gray-500 font-normal text-base cursor-auto">
              Coming Soon
            </span>
          )} */}
        </div>
      </Link>
      </div>
    </div>
  );
};

export default CoursePanel;
