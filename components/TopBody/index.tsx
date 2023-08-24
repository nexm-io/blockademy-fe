import React from "react";
import Button from "../Common/Button";
import Image from "next/image";
import img from "../../public/images/img.png";
import clockIcon from "../../public/clock.svg";

const TopBody = () => {
  return (
    <section className="flex gap-[46px] justify-between w-full mt-[86px] md:flex-row flex-col">
      <div className="flex lg:ml-[143px] ml-4 flex-col text-black-100">
        <h3 className="lg:text-[15px] text-[12px] font-bold uppercase mb-2">
          LEARN ALL ABOUT
        </h3>
        <h1 className="lg:text-[60px] text-[50px] font-bold leading-[72px]">
          Blockademy Flagship Training
        </h1>
        <span className="line w-[40px] h-[2px] rounded-[4px] bg-black-100 mt-[10px] mb-[30px]"></span>
        <p className="text-gray-100 lg:text-base text-sm font-normal leading-[23px] w-[85%]">
          Your one-stop guide to all things crypto. Whether you&apos;re a rookie
          trying to understand mining or a veteran looking to develop a trading
          strategy, we&apos;ve got you covered.
        </p>
        <Button
          label="Get start"
          className="bg-blue-100 text-white-100 h-[48px] py-[2px] px-[24px] mt-6 lg:mt-[47px] w-[110px]"
        ></Button>
      </div>
      <div className="lg:w-[747px] md:w-[450px] w-full h-full lg:h-[608px] flex-shrink-0 bg-gray-200 overflow-hidden">
        <div className="lg:my-[72px] m-4 lg:mx-[53px] text-black-100">
          <h3 className="text-[15px] font-bold uppercase mb-2">Featured</h3>
          <Image
            alt="banner"
            src={img}
            priority
            width={520}
            height={292}
          ></Image>
          <h2 className="text-lg font-bold leading-[28px] mt-[26px] mb-[16px]">
            How to Read the Most Popular Crypto Candlestick Patterns
          </h2>
          <div className="flex gap-6 text-gray-300 items-center mb-[15px]">
            <span className=" text-base font-normal leading-[23px]">
              Aug 15, 2023
            </span>
            <div className="flex gap-1 items-center">
              <Image alt="" src={clockIcon}></Image>
              <span>9m</span>
            </div>
          </div>
          <Button
            label="Beginner"
            className="w-[146px] py-[5px] px-1 bg-green-900 text-gray-100 flex flex-row-reverse gap-2 items-center"
          >
            <span className="active w-2 h-2 rounded-[4px] bg-green-100"></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopBody;
