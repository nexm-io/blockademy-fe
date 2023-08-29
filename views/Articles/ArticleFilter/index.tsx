"use client"

import Button from "@/components/Common/Button";
import React from "react";
import arrowtop from "@/public/icons/arrowtop.svg";
import Image from "next/image";
import { CheveronDown } from "@styled-icons/zondicons";

const ArticleFilter = () => {
  return (
    <div className="w-full bg-gray-200 ">
      <div className="bg-gray-200 flex gap-7 items-center w-full h-[64px] justify-between full-bleed__articleFilter">
        <div className="flex items-center">
          <span className="text-gray-100 text-base mr-7">Layout</span>
          <div className="flex gap-5">
            <Button
              size="small"
              className="!bg-black-100 hover:!bg-black-500 !px-3"
            >
              Apply filters
            </Button>

            <Button
              size="small"
              outlined
              className="border-none hover:!bg-transparent !text-black-100"
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
