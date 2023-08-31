"use client";

import Button from "@/components/Common/Button";
import React from "react";
import Image from "next/image";
import { CheveronDown } from "@styled-icons/zondicons";
import { SortList, SortMenu } from "@/components/Icon";
const ArticleFilter = () => {
  return (
    <div className="w-full bg-gray-200 ">
      <div className="bg-gray-200 flex gap-7 items-center w-full h-[64px] justify-between full-bleed__articleFilter">
        <div className="flex items-center gap-[55px]">
          <span className="text-gray-100 text-base mr-7">Layout</span>

          <div className="flex gap-5 items-center">
            <div className="cursor-pointer">
              <SortList fill="#14151A" />
            </div>
            <div className="cursor-pointer">
              <SortMenu fill="#AEB4BC" />
            </div>
            <Button
              size="small"
              className="!bg-black-100 hover:!bg-black-500 !px-3"
            >
              Apply filters
            </Button>

            <Button
              size="small"
              className="border-none bg-transparent hover:!bg-transparent hover:!text-opacity-20 !text-black-100"
            >
              Clear filters
            </Button>
          </div>
        </div>
        <div>
          <Button
            size="small"
            outlined
            className="bg-white-100 !text-black-100 hover:bg-black-100 hover:!text-white-100"
          >
            <div className="flex gap-3 items-center">
              <CheveronDown size={15} className="rotate-180" />
              <span>Hide filters</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleFilter;
