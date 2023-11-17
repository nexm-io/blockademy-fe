"use client";
import React from "react";

const CoursesLoading = ({ row = 6 }: { row?: number }) => {
  return (
    <>
      {Array(row)
        .fill(0)
        .map((_z, index) => (
          <div
            key={index}
            className="bg-gray-300/8000 border border-[#F5F5F5] rounded-lg overflow-hidden h-full"
          >
            <div className="bg-gray-400/20 h-[200px] skeleton rounded"></div>
            <div className="px-2 pb-2 pt-[20px]">
              <div className="skeleton bg-gray-400/20 h-[20px] w-[200px] rounded"></div>
              <div className="skeleton mt-2 bg-gray-400/20 h-[20px] w-[100px] rounded"></div>
              <div className="skeleton mt-1 bg-gray-400/20 h-[28px] w-full rounded"></div>
              <div className="skeleton mt-6 bg-gray-400/20 h-[44px] w-full"></div>
              <div className="flex justify-between items-center mt-[20px]">
                <div className="skeleton bg-gray-400/20 h-[36px] w-[130px] rounded"></div>
                <div className="skeleton bg-gray-400/20 h-[20px] w-[50px] rounded"></div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CoursesLoading;
