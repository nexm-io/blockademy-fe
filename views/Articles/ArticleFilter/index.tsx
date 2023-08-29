import Button from "@/components/Common/Button";
import React from "react";
import arrowtop from "@/public/icons/arrowtop.svg";
import Image from "next/image";
const ArticleFilter = () => {
  return (
    <div className="w-full bg-gray-200 ">
      <div className="bg-gray-200 flex gap-7 items-center w-full h-[64px] justify-between full-bleed__articleFilter">
        <div className="flex items-center">
          <span className="text-gray-100 text-base mr-7">Layout</span>
          <div className="flex gap-5">
            <Button className="bg-black-100 rounded-md text-white-100 text-sm h-[29px] font-medium py-1 px-3">
              Apply filters
            </Button>

            <Button className="rounded-md text-black-100 text-sm h-[29px] py-1 px-3">
              Clear filters
            </Button>
          </div>
        </div>
        <div>
          <Button className="rounded-md bg-white-100 text-black-100 text-sm h-[29px] py-1 px-3 flex gap-3">
            <Image alt="logoTop" src={arrowtop}></Image>
            Hide filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleFilter;
