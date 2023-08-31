import Chip from "@/components/Common/Chip";
import DoubleRangeSlider from "@/components/DoubleRangeSlider";
import React from "react";

const TopicAcademy = () => {
  return (
    <div className="bg-white-100 h-[400px]">
      <h1 className="text-black-100 font-bold leading-[40px] text-3xl pt-[49px]">
        Topics at Academy
      </h1>
      <div className="flex gap-[90px]">
        <div className="mt-5 basis-1/2">
          <p className="text-black-100 text-base font-normal leading-6 mb-[11px]">
            Topic
          </p>
          <div className="flex md:flex-row flex-col md:gap-[15px] gap-2 md:flex-wrap">
            <div className="flex gap-2 md:gap-[15px]">
              <span className="text-black-100 font-medium text-base text-center bg-gray-500 rounded-full cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize">
                #all
              </span>
              <span className="text-gray-500 font-medium text-base text-center  rounded-full btn__outline-shadow cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize bg-gray-200">
                #blockchain
              </span>
            </div>
            <div className="flex gap-2 md:gap-[15px]">
              <span className="text-gray-500 font-medium text-base text-center  rounded-full btn__outline-shadow cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize bg-gray-200">
                #backend
              </span>
              <span className="text-gray-500 font-medium text-base text-center  rounded-full btn__outline-shadow cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize bg-gray-200">
                #frontend
              </span>
            </div>
            <div className="flex gap-2 md:gap-[15px]">
              <span className="text-gray-500 font-medium text-base text-center  rounded-full btn__outline-shadow cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize bg-gray-200">
                #monile
              </span>
              <span className="text-gray-500 font-medium text-base text-center  rounded-full btn__outline-shadow cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize bg-gray-200">
                #game
              </span>
              <span className="text-gray-500 font-medium text-base text-center  rounded-full btn__outline-shadow cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize bg-gray-200">
                #qc
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5 basis-1/2">
          <div>
            <p>Difficulty</p>
            <div className="flex gap-[15px] mt-[11px] mb-[30px]">
              <div className="flex md:flex-row flex-col gap-[15px]">
                <div className="text-black-100 font-medium text-base rounded-full cursor-pointer py-[2px] flex items-center justify-center capitalize w-fit h-[28px] relative">
                  <Chip label="Newbie" newbie size="small"></Chip>
                </div>
                <div className="text-gray-500 font-medium text-base rounded-full cursor-pointer py-[2px] flex items-center justify-center capitalize  h-[28px] relative w-fit">
                  <Chip
                    label="Intermediate"
                    intermediate
                    size="small"
                    outline
                  ></Chip>
                </div>
              </div>
              <div className="text-gray-500 font-medium text-base rounded-full cursor-pointer py-[2px] flex items-center justify-center capitalize  h-[28px] w-fit relative">
                <Chip label="Advanced" advanced size="small" outline></Chip>
              </div>
            </div>
          </div>
          <div>
            <p>Reading time</p>
            <DoubleRangeSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicAcademy;
