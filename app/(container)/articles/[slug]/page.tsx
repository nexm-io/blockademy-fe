<<<<<<< HEAD
"use client";
import Button from "@/components/Common/Button";
import article1 from "@/public/images/home/article1.png";
import article2 from "@/public/images/home/article2.png";
import article3 from "@/public/images/home/article3.png";
import { useAppSelector } from "@/redux/hook";
import ArticlesSection from "@/views/Articles/ArticleSection";
import ArticleSummary from "@/views/Articles/ArticleSummary";
import ArticleHeading from "@/views/Articles/ArticleHeading";
import ArticleShare from "@/views/Articles/ArticleShare";
import ArticlesLine from "@/views/Articles/ArticlesLine";
import ArticleTag from "@/views/Articles/ArticlesTag";
import GiftHeader from "@/components/GiftHeader";
import Link from "next/link";
import IsLoginForm from "@/components/isLoginForm";
import ArticleRelate from "@/views/Articles/ArticleRelate";
import { useState } from "react";

=======
import clockIcon from "@/public/icons/clock.svg";
import BreadCumb from "@/components/BreadCumb";
import Button from "@/components/Common/Button";
import banner from "@/public/images/home/article.png";
import Image from "next/image";
>>>>>>> 5db4962c71e8e71111d8e740915b6cd9e7789efd
export default function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
<<<<<<< HEAD
  const isLogin = useAppSelector((state) => state.auth.isAuthenticated);
  const posts = [
    {
      img: article1,
      heading: "How To Create TA Indicators on TradingView",
    },
    {
      img: article2,
      heading: "How To Create TA Indicators on TradingView",
    },
    {
      img: article3,
      heading: "How To Create TA Indicators on TradingView",
    },
  ];

  const array = [
    { title: 1, content: "What Is an ETF" },
    { title: 2, content: "What Is a Bitcoin ETF? " },
    { title: 3, content: "What Is a Bitcoin Spot ETF?  " },
    { title: 4, content: "Benefits and Drawbacks of Bitcoin Spot ETFs " },
    { title: 5, content: "What is a Bitcoin Futures ETF? " },
    { title: 6, content: "Benefits and Drawbacks of Bitcoin Futures ETFs " },
    { title: 7, content: "Key Differences Between Bitcoin Spot ETFs and…" },
    { title: 8, content: "What Bitcoin ETFs Are Available to Investors? " },
    { title: 9, content: "Who Should Consider Investing in Bitcoin ETFs? " },
    { title: 10, content: "Closing Thoughts " },
    { title: 11, content: "Further Reading" },
  ];

  const sections = [
    {
      title: "Section 1",
      content: "Content of section 1...",
    },
    {
      title: "Section 2",
      content: "Content of section 2...",
    },
    {
      title: "Section 3",
      content: "Content of section 3...",
    },
  ];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const handleTitleClick = (index: number) => {
    setCurrentSectionIndex(index);
  };

  return (
    <>
      <GiftHeader />
      <div className=" flex flex-col md:gap-[85px] xl:gap-[170px] mb-14 px-8 xl:px-0 md:flex-row">
        <div className="pb-[75px] md:w-[75%] w-full">
          <ArticleTag />
          <ArticleHeading />
          <ArticleSummary />
          <ArticlesSection id={currentSectionIndex} sections={sections} />
        </div>
        <div className="w-full md:w-[25%] ">
          <div className="sticky top-[30px] flex flex-col gap-[75px]">
            <ArticleShare />
            <ArticlesLine onTitleClick={handleTitleClick} data={array} />
            <ArticleRelate data={posts} />
            {isLogin && <IsLoginForm />}
          </div>
        </div>
      </div>
      <div className=" full-bleed__footerArticle flex justify-center items-center bg-blue-100  text-white-100 h-[80px]">
        <Link href="/article">
          <span className="cursor-pointer">Explore all of our content</span>
        </Link>
        <span className="ml-5 font-bold cursor-pointer">&rarr;</span>
      </div>
    </>
=======
  return (
    <div className=" flex">
      <div className=" py-[74px] w-[75%]">
        <div className="flex gap-2 my-12">
          <span className="text-white-100 font-medium text-[11px] font-bold leading-3 text-center  rounded-full btn__outline-shadow cursor-pointer py-1.5 flex items-center justify-center px-3 capitalize bg-black-500">
            Trading
          </span>
          <span className="text-white-100 font-medium text-[11px] font-bold leading-3 text-center  rounded-full btn__outline-shadow cursor-pointer py-1.5 flex items-center justify-center px-3 capitalize bg-black-500">
            Bitcoin
          </span>
          <span className="text-white-100 font-medium text-[11px] font-bold leading-3 text-center  rounded-full btn__outline-shadow cursor-pointer py-1.5 flex items-center justify-center px-3 capitalize bg-black-500">
            Personal Finance
          </span>
        </div>
        <div>
          <Image alt="banner" src={banner} />
          <div className="py-6">
            <BreadCumb />
          </div>
          <h1 className="text-[45px] font-bold text-black-100 mb-[27px]">
            Bitcoin Spot ETF vs. Bitcoin Futures ETF: Whats the Difference?
          </h1>
        </div>
        <div className="flex lg:mt-7 w-[36%] justify-between mr-6 items-center mb-14">
          {/* TODO: chip component */}
          {/* <Button
            label={"Người mới"}
            className="w-[90px] px-2 py-2 text-xs font-normal leading-3 bg-green-900 text-gray-100 flex flex-row-reverse gap-2 items-center"
          >
            <span className="active w-[6px] h-[6px] rounded-[4px] bg-green-100"></span>
          </Button> */}
          <span className="text-xs font-normal text-gray-300 leading-[23px]">
            Published Jun 21, 2023
          </span>
          <div className="flex gap-1 items-center text-gray-300">
            <Image alt="" src={clockIcon}></Image>
            <span className="text-xs font-normal leading-4">7m</span>
          </div>
        </div>
        <div className="px-12">
          <h2>TR,TD</h2>
        </div>
      </div>
      <div className="w-[25%] bg-red-500"></div>
    </div>
>>>>>>> 5db4962c71e8e71111d8e740915b6cd9e7789efd
  );
}
