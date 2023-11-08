"use client";
import Image from "next/image";
import React from "react";
import IconUser from "@/public/icons/user.svg";
import IconVisor from "@/public/icons/visor.svg";
import IconDotList from "@/public/icons/dot-list.svg";

const CoursesLoading = ({ row = 8 }: { row?: number }) => {
  return Array(row)
    .fill(0)
    .map((_z, index) => (
      <div key={index} className="bg-gray-300/8000 rounded overflow-hidden">
        <div className="bg-gray-400 h-[202px] animate-pulse rounded"></div>
        <div className="px-2">
          <div className="flex items-center gap-2 mt-6">
            <div className="bg-gray-400 h-[15px] w-[93px] rounded animate-pulse"></div>
            <div className="bg-gray-400 h-[15px] w-4 rounded animate-pulse"></div>
          </div>
          <p className="bg-gray-400 h-4 w-1/2 rounded animate-pulse mt-[10px]"></p>
          <p className="bg-gray-400 h-[52px] mt-1 rounded animate-pulse"></p>
          <div className="mt-6 flex items-center justify-between bg-[#F0F0F0] py-[10px] px-[14px]">
            <div className="flex items-center gap-2">
              <Image src={IconUser} width={15} height={10} alt="user" />
              <p className="bg-gray-400 h-[15px] w-12 rounded animate-pulse"></p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={IconVisor} width={15} height={11} alt="visor" />
              <p className="bg-gray-400 h-[15px] w-12 rounded animate-pulse"></p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-[18px] px-2">
            <div className="flex items-center gap-2 rounded-[30px] px-2 py-[7px] bg-green-100/30 w-[80px]">
              <span className="w-[6px] h-[6px] bg-green-100 rounded-full inline-block"></span>
              <p className="bg-gray-400 h-[12px] w-full rounded animate-pulse"></p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={IconDotList} width={15} height={11} alt="dot" />
              <p className="bg-gray-400 h-[15px] w-16 rounded animate-pulse"></p>
            </div>
          </div>
        </div>
      </div>
    ));
};

export default CoursesLoading;
