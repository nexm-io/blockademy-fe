"use client";
import React from "react";

const CoursesLoading = ({ row = 8 }: { row?: number }) => {
  return Array(row)
    .fill(0)
    .map((_z, index) => (
      <div key={index} className="bg-gray-300/8000 rounded overflow-hidden mb-10">
        <div className="bg-gray-400/20 h-[202px] skeleton rounded"></div>
        <div className="px-2 pb-2">
          <div className="flex items-center gap-2 mt-6 bg-gray-400/20 h-[15px] rounded"></div>
          <p className="bg-gray-400/20 h-[72px] rounded-b skeleton mt-[10px]"></p>
          <div className="mt-6 flex items-center justify-between bg-gray-400/20 h-[35px]"></div>
          <div className="mt-[18px] px-2 bg-gray-400/20 h-[26px] rounded"></div>
        </div>
      </div>
    ));
};

export default CoursesLoading;
