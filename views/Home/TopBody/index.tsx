"use client";
import React, { useEffect } from "react";
import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { getFeaturedArticle } from "@/redux/features/articles/action";
import CardItemTop from "@/components/CardItemTop";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
import Image from "next/image";
import Chip from "@/components/Common/Chip";

interface TopBodyProps {
  urlApi?: string;
}

const TopBody: React.FC<TopBodyProps> = () => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  const data = useAppSelector((state: RootState) => state.articles.featured);

  useEffect(() => {
    dispatch(getFeaturedArticle({}));
  }, [dispatch]);
  return (
    <section className="flex md:gap-[46px] gap-6 justify-between w-full md:flex-row flex-col">
      <div className="lg:basis-[50%] basis-[40%] flex flex-col mt-[40px] text-black-100 mx-4 lg:mx-0 md:mt-[62px] lg:mt-[112px] ">
        <h3 className="text-[42px] leading-[56px] md:text-[56px] md:leading-[64px] font-bold">
          Unlock the Power <br /> of Blockchain
        </h3>
        <p className="text-[#616161] text-xl max-w-[477px] my-6 font-normal">
          Make blockchain learning become easy, engaging, and gamified.
        </p>

        <div className="" onClick={() => push("/courses")}>
          <Button rounded>Learn for Free</Button>
        </div>
      </div>
      <div className="lg:w-[748px] md:absolute static right-0 md:w-[450px] w-full  h-auto md:pb-10 lg:pb-0 flex-shrink-0 bg-gray-200 overflow-hidden">
        <div className="m-6 text-black-100">
          <h3 className="text-[12px] font-bold uppercase mb-2">Hot Course</h3>
          <Image
            src="/images/hutech-banner.jpg"
            alt="hutech banner"
            width={521 * 1.2}
            height={293 * 1.2}
            className="mt-1"
          />
          <h4 className="text-xl text-[#1E2329] font-normal mt-4">
            HUTECH Workshop on Blockchain and Smart Contracts
          </h4>
          <div className="mt-4 text-base font-normal text-[#616161] flex gap-[25px] items-center">
            <p>Available on Nov 23, 2023</p>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
              >
                <path
                  d="M7.99749 3.33366C9.05229 3.33366 10.0834 3.666 10.9605 4.28866C11.8376 4.91132 12.5212 5.79634 12.9248 6.83178C13.3285 7.86721 13.4341 9.00663 13.2284 10.1058C13.0226 11.2051 12.5146 12.2147 11.7687 13.0073C11.0228 13.7998 10.0726 14.3395 9.03796 14.5581C8.00343 14.7768 6.93102 14.6645 5.9565 14.2356C4.98196 13.8067 4.14901 13.0805 3.56297 12.1486C2.97694 11.2167 2.66414 10.1211 2.66414 9.00033C2.66576 7.49796 3.22818 6.05762 4.22803 4.99529C5.22787 3.93295 6.58348 3.33538 7.99749 3.33366ZM7.99749 1.91699C6.67896 1.91699 5.39 2.33242 4.29368 3.11075C3.19735 3.88908 2.34286 4.99534 1.83828 6.28965C1.3337 7.58394 1.20168 9.00819 1.45891 10.3822C1.71614 11.7562 2.35108 13.0183 3.28343 14.009C4.21578 14.9996 5.40367 15.6742 6.69689 15.9476C7.99009 16.2209 9.33056 16.0806 10.5487 15.5445C11.7669 15.0083 12.8081 14.1005 13.5406 12.9356C14.2732 11.7708 14.6642 10.4013 14.6642 9.00033C14.6642 8.07014 14.4918 7.14903 14.1567 6.28964C13.8217 5.43024 13.3306 4.64937 12.7116 3.99162C12.0925 3.33387 11.3576 2.81212 10.5487 2.45615C9.73989 2.10019 8.87296 1.91698 7.99749 1.91699Z"
                  fill="#616161"
                />
                <path
                  d="M10.3741 12.5219L7.33545 9.29335V4.75293H8.66878V8.70685L11.3168 11.5203L10.3741 12.5219Z"
                  fill="#616161"
                />
              </svg>
              <span>9m</span>
            </div>
          </div>
          <div className="mt-6">
            <div className="rounded-[30px] !bg-[#02C0A9]/20 text-xs leading-[20px] px-[18px] py-[5px] inline-flex items-center">
              <div className="!text-[#02C0A9] inline-flex items-center justify-center text-[20px] mr-2">
                •
              </div>
              <span>Beginner</span>
            </div>
          </div>
          {/* {data ? (
            data
              .slice(0, 1)
              .map((item, index) => <CardItemTop data={item} key={index} />)
          ) : (
            <div className="flex flex-col gap-3">
              <SkeletionCard
                width="521px"
                height="293px"
                radius="16px"
                mobileCardFull
              />
              <SkeletionCard
                width="521px"
                height="28px"
                radius="16px"
                mobileCardFull
              />
              <div className="flex gap-2">
                <SkeletionCard width="100px" height="28px" radius="16px" />
                <SkeletionCard width="80px" height="28px" radius="16px" />
              </div>
              <SkeletionCard width="146px" height="36px" radius="16px" />
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default TopBody;
