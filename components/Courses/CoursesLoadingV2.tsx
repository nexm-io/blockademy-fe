"use client";
import React from "react";

const CoursesLoadingV2 = ({ row = 8 }: { row?: number }) => {
  return Array(row)
    .fill(0)
    .map((_z, index) => (
      <div key={index} className="bg-gray-300/8000 rounded overflow-hidden mb-10 border border-[#F5F5F5]">
        <div className="bg-gray-400/20 h-[202px] skeleton rounded"></div>
        <div className="px-[10px] py-[16px]">
          <div className="flex items-center bg-gray-400/20 h-[20px] rounded w-[60px]"></div>
          <p className="bg-gray-400/20 h-[56px] rounded-b skeleton mt-[10px]"></p>
          <div className="flex items-center justify-between w-full">
            <div className="mt-6 bg-gray-400/20 h-[28px] w-[117px] rounded-[30px]"></div>
            <div className="mt-[18px] bg-gray-400/20 h-[28px] rounded w-[110px]"></div>
          </div>
        </div>
      </div>
    ));
};

export default CoursesLoadingV2;
