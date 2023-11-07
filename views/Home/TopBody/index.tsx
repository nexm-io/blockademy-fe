"use client";
import React, { useEffect } from "react";
import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { getFeaturedArticle } from "@/redux/features/articles/action";
import StartImg from "@/public/images/home/start-img.png";
import Image from "next/image";

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
    <section className="flex flex-col lg:flex-row items-center gap-5 justify-between w-full mt-28 lg:mt-36">
      <div className="flex flex-col gap-5 w-full">
        <h1 className="text-3xl sm:text-[40px] font-bold sm:leading-[52px]">
          The best way to learn math and <br className="hidden md:block" />{" "}
          computer science
        </h1>
        <p className="text-gray-100 text-base">
          {`Guided interactive problem solving that's effective and fun.`}
          {" "}
          <br className="hidden sm:block" />
          {`Master concepts in 15 minutes a day.`}
        </p>

        <div className="mt-3">
          <Button className="lg:!px-6" onClick={() => push("/courses")}>
            <span className="font-bold">Get start</span>
          </Button>
        </div>
      </div>
      <div className="w-full lg:w-3/6 flex justify-center">
        <Image src={StartImg} width={532} height={327} alt="start-img" />
      </div>
    </section>
  );
};

export default TopBody;
