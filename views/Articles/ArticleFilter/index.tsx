"use client";

import Button from "@/components/Common/Button";
import React from "react";
import Image from "next/image";
import { CheveronDown } from "@styled-icons/zondicons";
import { SortList, SortMenu } from "@/components/Icon";
import { ArrowUpS } from "@styled-icons/remix-line";

type ArticleFilterProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const ArticleFilter: React.FC<ArticleFilterProps> = ({ show, setShow }) => {
  return (
    <div className="w-full bg-gray-200 mt-8 md:mt-0">
      <div className="bg-gray-200 flex gap-7 items-center w-full md:h-[64px] justify-between full-bleed__articleFilter flex-wrap h-auto py-4 md:pt-4 px-4 md:px-0">
        <div className="flex items-center md:gap-[55px] gap-0 ">
          <span className="text-gray-100 text-base mr-7">Layout</span>

          <div className="flex md:gap-5 gap-3 items-center">
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
            <div
              className="flex gap-3 items-center"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <CheveronDown size={15} className="rotate-180" />
              ) : (
                <ArrowUpS size={15} className="rotate-180" />
              )}
              <span>Hide filters</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleFilter;
