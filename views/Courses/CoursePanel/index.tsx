import Image from "next/image";
import React from "react";
import check from "@/public/icons/check.svg";
import clock from "@/public/icons/clock.svg";
import play from "@/public/icons/play.svg";
import { CircleCheck } from "@styled-icons/fa-solid";

interface CoursePanelProps {
  status?: "watching" | "unwatching";
}

const CoursePanel: React.FC<CoursePanelProps> = ({ status = "unwatching" }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-[30px] h-[30px]">
        <CircleCheck className={`${"text-white-300"}`} />
      </div>
      <div className="bg-gray-200 cursor-pointer flex md:items-center items-start justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4 gap-5">
        <div className="flex md:flex-row flex-col gap-3 md:gap-0 flex-1">
          <span className="basis-[70%] line-clamp-1">
            1. Blockchain Deep Dive
          </span>
          <div className=" flex items-center gap-[10px] basis-[20%] line-clamp-1">
            <Image alt="clock-icon" src={clock}></Image>
            {status === "unwatching" && (
              <span className="line-clamp-1">0 Min</span>
            )}
            {status === "watching" && (
              <span className="line-clamp-1">77 Min</span>
            )}
          </div>
        </div>
        <div className=" flex items-center gap-[10px] pr-4 text-blue-100 basis-[30%] justify-end">
          {status === "watching" && (
            <>
              <Image alt="play-icon" src={play}></Image>
              <span className="line-clamp-1 hidden md:block">Learn Now</span>
            </>
          )}
          {status === "unwatching" && (
            <span className="line-clamp-1 text-gray-500 font-normal text-base cursor-auto">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursePanel;
