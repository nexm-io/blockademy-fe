import React from "react";
import SortIcon from "@/public/icons/sortIcon.svg";
import Image from "next/image";
import SortContent from "@/public/icons/sortContent.svg";
import Button from "@/components/Common/Button";
const ArticlePage = function () {
  return (
    <div className="h-[1500px] ">
      <div className="w-full bg-gray-200 ">
        <div className="bg-gray-200 mt-[100px] flex gap-7 items-center w-full h-[64px] px-[140px] justify-between">
          <span className="text-gray-100 text-base mr-7">Layout</span>
          <div className="flex gap-4 items-center ">
            <span>
              <Image alt="sort" src={SortIcon} />
            </span>
            <span>
              <Image
                alt="sort"
                className="stroke-green-100 fill-green-100"
                src={SortContent}
              />
            </span>
          </div>
          <div className="flex gap-5">
            <Button className="bg-black-300 rounded-md text-white-100 text-sm h-[29px] font-medium py-1 px-3">
              Apply filters
            </Button>
            <Button className="rounded-md text-black-300 text-sm h-[29px] py-1 px-3">
              Clear filters
            </Button>
          </div>
        <Button className="rounded-md text-black-300 text-sm h-[29px] py-1 px-3">
          Clear filters
        </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
