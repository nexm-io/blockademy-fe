import React from "react";
import Button from "../Common/Button";

export default function SkeletonCourse() {
  return (
    <div className="mt-12 animate-pulse">
      <div role="status">
        <div className="h-[65px] bg-gray-200  dark:bg-gray-700 w-[320px] mb-4"></div>
        <div className="mt-9 flex gap-[53px] md:flex-row flex-col">
          <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
          >
            <div className="flex items-center justify-center min-w-[330px] h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div className="md:mt-[80px] md:mb-[160px] mb-16 mt-10">
          <h3 className="text-black-100 text-[22px] font-bold mb-4 mx-4 md:mx-0"></h3>
          <div
            role="status"
            className="p-4 space-y-4 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
          <div className={`flex gap-4 items-center mt-4 px-4 md:px-0`}>
            <div className="w-[25px] h-[25px] flex flex-col md:flex-row items-center justify-center "></div>
            <div
              className={`bg-gray-200 flex md:items-center items-start justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4 gap-5`}
            >
              <div className="flex md:flex-row flex-col gap-3 md:gap-0 flex-1">
                <span
                  className={`basis-[70%] line-clamp-1 text-[20px] leading-7 text-[#094298]`}
                >
                  Certificate
                </span>
              </div>
              <div className="prose flex items-center gap-[10px] pr-4 text-blue-100 basis-[30%] justify-end">
                <Button type="button" className={`line-clamp-1 md:block`}>
                  Claim reward
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
