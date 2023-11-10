"use client";
import Image from "next/image";
import React from "react";

const ModuleItem = () => {
  return (
    <div className="px-4 py-3 bg-white-600 rounded-lg flex justify-between items-center cursor-pointer">
      <div className="flex-1">
        <p className="text-base font-normal mb-2">Module: What’s in a Block?</p>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <Image
              src="/icons/clockfilled.svg"
              alt="clock-icon"
              width={15}
              height={15}
            />
            <span className="text-xs -mb-[3px]">10 Min</span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/icons/quiz.svg"
              alt="clock-icon"
              width={15}
              height={15}
            />
            <span className="text-xs -mb-[3px]">Quiz</span>
          </div>
        </div>
      </div>
      <div className=" min-w-[100px] flex justify-end">
        <Image src="/icons/bar.svg" alt="clock-icon" width={24} height={24} />
        {/* <Image src="/icons/check.svg" alt="clock-icon" width={24} height={24} /> */}
      </div>
    </div>
  );
};

export default ModuleItem;
