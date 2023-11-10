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
      <div key={index} className="bg-gray-300/8000 rounded overflow-hidden mb-10">
        <div className="bg-gray-400/20 h-[202px] skeleton rounded"></div>
        <div className="px-2">
          <div className="flex items-center gap-2 mt-6">
            <div className="bg-gray-400/20 h-[15px] w-[93px] rounded skeleton"></div>
            <div className="bg-gray-400/20 h-[12px] w-4 rounded skeleton"></div>
          </div>
          <p className="bg-gray-400/20 h-[72px] rounded-b skeleton mt-[10px]"></p>
          <div className="mt-6 flex items-center justify-between bg-white-800 py-[11px] px-[14px] h-[35px]">
            <div className="flex items-center gap-2">
              <Image src={IconUser} width={15} height={10} alt="user" />
              <p className="bg-gray-400/20 h-3 w-2 rounded skeleton"></p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={IconVisor} width={15} height={11} alt="visor" />
              <p className="bg-gray-400/20 h-3 w-3 rounded skeleton"></p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-[18px] px-2">
            <div className="flex items-center gap-2 rounded-[30px] px-2 py-[7px] bg-gray-400/10 w-[80px]">
              <span className="w-[6px] h-[6px] bg-gray-100/20 rounded-full inline-block"></span>
              <p className="bg-gray-400/20 h-3 w-full rounded skeleton"></p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={IconDotList} width={15} height={11} alt="dot" />
              <p className="bg-gray-400/20 h-3 w-14 rounded skeleton"></p>
            </div>
          </div>
        </div>
      </div>
    ));
};

export default CoursesLoading;
