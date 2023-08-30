import Image from "next/image";
import React from "react";
import crypto1 from "@/public/images/home/home-4.png";
import crypto2 from "@/public/images/home/home-5.png";
import crypto3 from "@/public/images/home/home-6.png";
import crypto4 from "@/public/images/home/home-7.png";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineArrowRight } from "react-icons/hi";
import PageContainer from "@/components/PageContainer";

const TopicList = () => {
  return (
    <section className="my-[82px] full-bleed">
      <div className="bg-black-100 md:h-[1146px] h-full">
        <div className="max-w-[1152px] mx-auto">
          {/* Topics */}
          <div className="flex gap-8 md:pt-[62px] pt-4 items-center pl-2">
            <h3 className="text-white-100 font-semibold leading-6 text-base md:text-lg ">
              Topics:
            </h3>
            <div className="flex md:flex-row flex-col md:gap-[15px] gap-2 md:flex-wrap">
              <div className="flex gap-2 md:gap-[15px]">
                <span className="text-black-100 font-medium text-base text-center bg-gray-500 rounded-full cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize">
                  #all
                </span>
                <span className="text-gray-500 font-medium text-base text-center  rounded-full btn__outline-shadow cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize border border-gray-600">
                  #blockchain
                </span>
              </div>
              <div className="flex gap-2 md:gap-[15px]">
                <span className="text-gray-500 font-medium text-base text-center  rounded-full btn__outline-shadow cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize border border-gray-600">
                  #backend
                </span>
                <span className="text-gray-500 font-medium text-base text-center  rounded-full btn__outline-shadow cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize border border-gray-600">
                  #frontend
                </span>
              </div>
              <div className="flex gap-2 md:gap-[15px]">
                <span className="text-gray-500 font-medium text-base text-center  rounded-full btn__outline-shadow cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize border border-gray-600">
                  #monile
                </span>
                <span className="text-gray-500 font-medium text-base text-center  rounded-full btn__outline-shadow cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize border border-gray-600">
                  #game
                </span>
                <span className="text-gray-500 font-medium text-base text-center  rounded-full btn__outline-shadow cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize border border-gray-600">
                  #qc
                </span>
              </div>
            </div>
          </div>
          {/* Difficulty */}
          <div className="flex gap-4 pt-[28px] items-start md:items-center pl-2">
            <h3 className="text-white-100 font-semibold leading-6 text-base md:text-lg">
              Difficulty:
            </h3>
            <div className="flex gap-[15px]">
              <div className="flex md:flex-row flex-col gap-[15px]">
                <div className="text-black-100 font-medium text-base bg-[#0F4945] rounded-full cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize w-fit h-[28px] relative">
                  <span className="status-difficulty active green text-[12px] font-normal leading-[12px] text-white-100">
                    Newbie
                  </span>
                </div>
                <div className="text-gray-500 font-medium text-base rounded-full cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize  h-[28px] relative w-fit border border-[#1A3142]">
                  <span className="status-difficulty active blue text-[12px] font-normal leading-[12px] text-white-100">
                    Intermediate
                  </span>
                </div>
              </div>
              <div className="text-gray-500 font-medium text-base rounded-full cursor-pointer py-[2px] flex items-center justify-center px-[21px] capitalize  h-[28px] w-fit relative border border-[#43171B]">
                <span className="status-difficulty active red text-[12px] font-normal leading-[12px] text-white-100 ">
                  Advanced
                </span>
              </div>
            </div>
          </div>
          {/* Topic Item */}
          <div className="mt-[50px] crypto__list">
            {/* h1 */}
            <div className="flex md:flex-row flex-col gap-4 bg-black-200 rounded-2xl crypto__h1 md:mx-0 mx-3">
              <Image
                alt="crypto-item-1"
                src={crypto1}
                className="md:w-full w-full md:h-full h-[200px]"
              ></Image>
              <div className="flex flex-col items-start justify-center md:pl-0 pl-4">
                <h2 className="md:text-[30px]  text-[24px] font-bold leading-[40px] text-white-100 w-[80%] mb-2">
                  What Is Cryptocurrency Mining And How Does It Work?
                </h2>
                <div className="flex gap-[36px] mb-[20px] ">
                  <span className="text-blue-400 font-normal text-base md:text-[20px]">
                    Apr 13, 2023
                  </span>
                  <div className="flex gap-1 items-center">
                    <AiOutlineClockCircle className="text-blue-400 text-base md:text-[20px]" />
                    <span className="text-blue-400 font-normal text-base md:text-[20px]">
                      11m
                    </span>
                  </div>
                </div>
                <div className="relative pl-[21px] md:mb-0 mb-[20px]">
                  <span className="status-difficulty active green text-[12px] font-normal leading-[12px] text-white-100">
                    Newbie
                  </span>
                </div>
              </div>
            </div>
            {/* h2 */}
            <div className="bg-black-200 rounded-2xl flex flex-col justify-between crypto__h2 md:mx-0 mx-3">
              <h3 className="text-lg font-bold text-white-100 p-4">
                What is NFT?
              </h3>
              <div className="flex flex-col pb-[20px]">
                <div className="flex gap-[36px] pl-[16px]">
                  <span className="text-blue-400 font-normal text-base">
                    Apr 13, 2023
                  </span>
                  <div className="flex gap-1 items-center">
                    <AiOutlineClockCircle className="text-blue-400 text-[20px]" />
                    <span className="text-blue-400 font-normal text-base">
                      11m
                    </span>
                  </div>
                </div>
                <div className="relative pl-[30px] ">
                  <span className="status-difficulty md:before:left-[8%] before:left-[4%] active green text-[12px] font-normal leading-[12px] text-white-100">
                    Newbie
                  </span>
                </div>
              </div>
            </div>
            {/* h3 */}
            <div className="bg-black-200 rounded-2xl flex flex-col justify-between crypto__h3 md:mx-0 mx-3">
              <h3 className="text-lg font-bold text-white-100 p-4">
                What are Crypto Whales and how to spot them?
              </h3>
              <div className="flex flex-col pb-[20px]">
                <div className="flex gap-[36px] pl-[16px]">
                  <span className="text-blue-400 font-normal text-base">
                    Apr 13, 2023
                  </span>
                  <div className="flex gap-1 items-center">
                    <AiOutlineClockCircle className="text-blue-400 text-[20px]" />
                    <span className="text-blue-400 font-normal text-base">
                      6m
                    </span>
                  </div>
                </div>
                <div className="relative pl-[30px] ">
                  <span className="status-difficulty md:before:left-[8%] before:left-[4%] active green text-[12px] font-normal leading-[12px] text-white-100">
                    Newbie
                  </span>
                </div>
              </div>
            </div>
            {/* h4 */}
            <div className="flex flex-col-reverse md:flex-row gap-4 bg-black-200 rounded-2xl crypto__h4 justify-end md:mx-0 mx-3">
              <div className="flex flex-col md:items-end items-start md:pl-0 pl-4 justify-center">
                <h2 className="md:text-[30px] text-[24px] font-bold leading-[40px] text-white-100 mb-1">
                  What Is Cryptocurrency?
                </h2>
                <div className="flex gap-[36px] mb-6">
                  <span className="text-blue-400 font-normal text-base md:text-[20px]">
                    Apr 3, 2023
                  </span>
                  <div className="flex gap-1 items-center">
                    <AiOutlineClockCircle className="text-blue-400 text-base md:text-[20px]" />
                    <span className="text-blue-400 font-normal text-base md:text-[20px]">
                      10m
                    </span>
                  </div>
                </div>
                <div className="relative pl-[21px] mb-[20px] md:mb-0">
                  <span className="status-difficulty active green text-[12px] font-normal leading-[12px] text-white-100">
                    Newbie
                  </span>
                </div>
              </div>

              <Image
                alt="crypto-item-2"
                src={crypto2}
                className="lg:w-[370px] lg:h-[330px] md:w-auto h-[200px] md:h-auto"
              ></Image>
            </div>
            {/* h5 */}
            <div className="bg-black-200 rounded-2xl flex justify-between crypto__h5 md:mx-0 mx-3">
              <Image alt="crypto-item-3" src={crypto3}></Image>
              <h3 className="text-lg font-bold text-white-100 p-4">
                How to stay safe in peer-to-peer transactions
              </h3>
            </div>
            {/* h6 */}
            <div className="bg-black-200 rounded-2xl flex justify-between crypto__h6 md:mx-0 mx-3">
              <Image alt="crypto-item-3" src={crypto4}></Image>
              <h3 className="text-lg font-bold text-white-100 p-4">
                How to stay safe in peer-to-peer transactions
              </h3>
            </div>
          </div>
          <div className="text-gray-500 flex items-center justify-center gap-4 w-full mt-[40px] pb-5 md:pb-0 hover:underline cursor-pointer">
            <span>See more content on this topic</span>
            <HiOutlineArrowRight className="text-blue-400 text-[20px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicList;
