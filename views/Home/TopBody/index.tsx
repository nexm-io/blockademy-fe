import React from "react";
import Image from "next/image";
import img from "@/public/images/home/home-1.png";
import clockIcon from "@/public/icons/clock.svg";
import Button from "@/components/Common/Button";
import Link from "next/link";

const TopBody = () => {
  return (
    <section className="flex gap-[46px] justify-between w-full md:flex-row flex-col">
      <div className="lg:basis-[50%] basis-[40%] flex flex-col mt-[40px] text-black-100 mx-4 lg:mx-0 md:mt-[62px] lg:mt-[112px] ">
        <h3 className="lg:text-[15px] text-[12px] font-bold uppercase mb-2">
          LEARN ALL ABOUT
        </h3>
        <h1 className="lg:text-[60px] text-[50px] font-bold leading-[72px]">
          Blockademy Flagship Training
        </h1>
        <span className="line w-[40px] h-[2px] rounded-[4px] bg-black-100 mt-[10px] mb-[30px]"></span>
        <p className="text-gray-100 lg:text-base text-sm font-normal leading-[23px] w-[80%]">
          Your one-stop guide to all things crypto. Whether you&apos;re a rookie
          trying to understand mining or a veteran looking to develop a trading
          strategy, we&apos;ve got you covered.
        </p>

        <div className="mt-[47px]">
          <Button rounded>Join here</Button>
        </div>
      </div>
      <div className="lg:w-[748px] md:absolute static right-0 md:w-[450px] w-full  h-auto md:pb-10 lg:pb-0 lg:h-[608px] flex-shrink-0 bg-gray-200 overflow-hidden">
        <div className="lg:my-[72px] m-4 md:m-12 lg:mx-[53px] text-black-100">
          <h3 className="text-[15px] font-bold uppercase mb-2">Featured</h3>
          <Image
            alt="banner"
            src={img}
            priority
            width={520}
            height={292}
            className="cursor-pointer"
          ></Image>
          <Link
            href="#"
            className="text-lg font-bold leading-[28px] mt-[26px] mb-[16px] block"
          >
            How to Read the Most Popular Crypto Candlestick Patterns
          </Link>
          <div className="flex gap-6 text-gray-300 items-center mb-[15px]">
            <span className=" text-base font-normal leading-[23px]">
              Aug 15, 2023
            </span>
            <div className="flex gap-1 items-center">
              <Image alt="" src={clockIcon}></Image>
              <span>9m</span>
            </div>
          </div>
          {/* TODO: chip component */}
          {/* <Button
            label="Beginner"
            className="w-[146px] py-[5px] px-1 bg-green-900 text-gray-100 flex flex-row-reverse gap-2 items-center"
          >
            <span className="active w-2 h-2 rounded-[4px] bg-green-100"></span>
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default TopBody;
