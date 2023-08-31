"use client";
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

export default function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
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
  );
}
