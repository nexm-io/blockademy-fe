import cn from "@/services/cn";
import { debounce } from "@/utils/debounce";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import cup from "@/public/icons/cup.svg";
import Button from "../Common/Button";

const CircularProgress = ({ percent }: { percent: any }) => {
  return (
    <div className="flex justify-normal">
      <div
        className="flex items-center justify-center"
        style={{ position: "relative" }}
      >
        <div className="w-12 h-12">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-200 stroke-current"
              strokeWidth={10}
              cx={50}
              cy={50}
              r={40}
              fill="transparent"
            />
            <circle
              className="text-indigo-500 stroke-current"
              style={{
                strokeDasharray: "400, 400",
                transition: "stroke-dashoffset 0.35s",
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
              strokeWidth={10}
              strokeLinecap="round"
              cx={50}
              cy={50}
              r={40}
              fill="transparent"
              strokeDashoffset="calc(400 - (400 * 31) / 100)"
            />
          </svg>
        </div>

        <span className="absolute">
          <Image
            alt="logo"
            className="w-[15px] h-[15px]"
            src={cup}
            width={15}
            height={15}
          />
        </span>
      </div>
    </div>
  );
};

export default function CourseInfoFooter() {
  const [isSticky, setSticky] = useState(true);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setSticky(scrollPosition / pageHeight <= 0.95);
    }, 150);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(`bg-white-100 py-[22px]`, {
        "fixed bottom-0 left-0 right-0": isSticky,
      })}
      style={{ boxShadow: "0px -3px 20px 0px rgba(170, 170, 170, 0.25)" }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* APPLY COURSE */}
          {/* <div className="flex justify-end">
            <Button className="w-full md:w-auto md:min-w-[184px]">
              Apply course
            </Button>
          </div> */}

          <div className="inline-block lg:pr-[70px] lg:border-r border-black-100">
            <div className="flex items-center gap-[18px]">
              <CircularProgress percent={75} />
              <div className="text-sm leading-[21px]">
                <p className="font-medium">5% Completed. Keep going!</p>
                <p className="text-grey-800">594 builders ahead of you.</p>
              </div>
            </div>
          </div>

          {/* LET'S GO */}
          {/* <div className="flex justify-end">
            <Button className="w-full md:w-auto md:min-w-[184px]">
              Let’s go
            </Button>
          </div> */}

          {/* COMPLETE QUIZ */}
          {/* <div className="flex justify-end">
            <Button className="w-full md:w-auto md:min-w-[184px]">
              Complete Quiz
            </Button>
          </div> */}

          {/* PREVIOUS - NEXT */}
          <div className="flex items-center justify-between w-full flex-1 px-4 lg:px-0 lg:pl-[66px]">
            <Button className="w-auto md:min-w-[184px] bg-blue-600 group hover:bg-blue-600/50 group !px-3">
              <span className="text-blue-700 group-hover:text-blue-700/80 transition-all">
                Previous
              </span>
            </Button>
            <Button className="w-auto md:min-w-[184px]">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
