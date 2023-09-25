"use client";
import React, { useEffect } from "react";
import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { getFeaturedArticle } from "@/redux/features/articles/action";
import CardItemTop from "@/components/CardItemTop";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";

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

        <div
          className="lg:mt-[47px] md:mt-[30px] mt-4"
          onClick={() => push("/courses")}
        >
          <Button rounded>Join here</Button>
        </div>
      </div>
      <div className="lg:w-[748px] md:absolute static right-0 md:w-[450px] w-full  h-auto md:pb-10 lg:pb-0 lg:h-[608px] flex-shrink-0 bg-gray-200 overflow-hidden">
        <div className="lg:my-[72px] m-4 md:m-12 lg:mx-[53px] text-black-100">
          <h3 className="text-[15px] font-bold uppercase mb-2">Featured</h3>
          {data ? (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default TopBody;
