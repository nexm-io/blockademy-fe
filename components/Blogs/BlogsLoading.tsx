"use client";
import React from "react";

const BlogsLoading = ({ row = 3 }: { row?: number }) => {
  return Array(row)
    .fill(0)
    .map((_z, index) => (
      <div key={index} className="bg-gray-300/8000 rounded overflow-hidden">
        <div className="bg-gray-400 h-[246px] animate-pulse rounded"></div>
        <div className="flex items-center gap-2 mt-4">
          <div className="bg-gray-400 h-[15px] w-[93px] rounded animate-pulse"></div>
        </div>
        <p className="bg-gray-400 h-[56px] mt-2 rounded animate-pulse"></p>
        <div className="mt-4 flex items-center justify-between bg-gray-400 h-8 rounded"></div>
      </div>
    ));
};

export default BlogsLoading;
