"use client";
import Button from "@/components/Common/Button";
import React, { useEffect, useState } from "react";
import { CheveronDown } from "@styled-icons/zondicons";
import { ListUl } from "@styled-icons/fa-solid";
import { AppsList } from "@styled-icons/fluentui-system-regular";
import { SortList, SortMenu } from "@/components/Icon";
import { ArrowUpS } from "@styled-icons/remix-line";
import { useAppDispatch } from "@/redux/hook";
import {
  getArticleCourse,
  getLatestArticle,
  getRecommendArticle,
  getTrendingArticle,
} from "@/redux/features/articles/action";
import { useRouter, useSearchParams } from "next/navigation";
type ArticleFilterProps = {
  show?: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  status?: "list" | "menu";
  setStatus?: React.Dispatch<React.SetStateAction<"list" | "menu">>;
  time?: number[];
  setTime?: React.Dispatch<React.SetStateAction<number[]>>;
  choose?: string[] | undefined;
  setChoose?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  levelParam?: "beginner" | "intermediate" | "advance";
  setLevelParam?: React.Dispatch<
    React.SetStateAction<"beginner" | "intermediate" | "advance" | undefined>
  >;
  tagParam?: string[] | undefined;
  setTagParam?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  page?: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit?: number;
  sliderOneValue: number;
  setSliderOneValue?: React.Dispatch<React.SetStateAction<number>>;
  sliderTwoValue: number;
  setSliderTwoValue?: React.Dispatch<React.SetStateAction<number>>;
};

const ArticleFilter: React.FC<ArticleFilterProps> = ({
  show,
  setShow,
  status,
  setStatus,
  time,
  setTime,
  levelParam,
  setLevelParam,
  page = 1,
  setPage,
  limit = 20,
  choose,
  setChoose,
  sliderOneValue,
  setSliderOneValue = () => {},
  sliderTwoValue,
  setSliderTwoValue = () => {},
}) => {
  const pathname = useSearchParams();
  const getTag = pathname.get("tag");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleSortListClick = () => {
    setStatus?.("list");
  };
  const handleSortMenuClick = () => {
    setStatus?.("menu");
  };
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const handleClickTotal = () => {
    const dispatchParams = {
      limit: 15,
      page,
      levelParam: levelParam,
      tagParam: choose || [],
      time: time || [],
    };
    setPage(1)
    if (type === "Trending") {
      // replace("/articles", { scroll: false });
      dispatch(getTrendingArticle(dispatchParams));
    } else if (type === "Recommend") {
      dispatch(getRecommendArticle(dispatchParams));
    } else {
      dispatch(getArticleCourse(dispatchParams));
    }
  };

  const handleClearFilters = () => {
    setChoose && setChoose([]);
    setLevelParam && setLevelParam(undefined);
    setTime && setTime([0, 100]);
    setSliderOneValue(0);
    setSliderTwoValue(100);
    setPage(1);
    const dispatchParams = {
      page,
      // time: time || [],
      limit: 15,
    };

    dispatch(getLatestArticle(dispatchParams));
    if (getTag) {
      router.replace("/articles");
    }
  };

  useEffect(() => {
    if (getTag) {
      const newChoose = choose ? [...choose, getTag] : [getTag];
      if (setChoose) {
        setChoose(newChoose);
      }
    }
  }, []);

  return (
    <div className="w-full bg-gray-200 mt-8 md:mt-0">
      <div className="bg-gray-200 flex gap-7 items-center w-full md:h-[64px] justify-between full-bleed__articleFilter flex-wrap h-auto py-4 md:pt-4 px-4 md:px-0">
        <div className="flex items-center md:gap-[55px] gap-0">
          <span className="text-gray-100 text-base mr-7">Layout</span>

          <div className="flex md:gap-5 gap-3 items-center">
            <div className="cursor-pointer" onClick={handleSortListClick}>
              <SortList
                fill={`${
                  status === "list"
                    ? "#14151A"
                    : status === "menu"
                    ? "#AEB4BC"
                    : ""
                }`}
              />
            </div>
            <div
              className="cursor-pointer flex items-center"
              onClick={handleSortMenuClick}
            >
              <ListUl
                size={18}
                className={`${
                  status === "menu"
                    ? "text-[#14151A]"
                    : status === "list"
                    ? "text-[#AEB4BC]"
                    : ""
                }`}
              />
            </div>
            <Button
              size="small"
              className={`${
                levelParam ||
                (choose && choose.length > 0) ||
                (time && time[0] !== 0) ||
                (time && time[1] !== 1000)
                  ? "!bg-black-100 !text-white-100"
                  : "!bg-transparent !text-black-100"
              } !px-3`}
              onClick={handleClickTotal}
            >
              Apply filters
            </Button>

            <Button
              size="small"
              className="border-none bg-transparent hover:!bg-transparent hover:!text-opacity-20 !text-black-100"
              onClick={handleClearFilters}
            >
              Clear filters
            </Button>
          </div>
        </div>
        <div>
          <Button
            size="small"
            outlined
            className="bg-white-100 !text-black-100 hover:bg-black-100 hover:!text-white-100"
          >
            <div
              className="flex gap-3 items-center"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <>
                  <CheveronDown size={15} className="rotate-180" />
                  <span>Hide filters</span>
                </>
              ) : (
                <>
                  <ArrowUpS size={15} className="rotate-180" />
                  <span>Show filters</span>
                </>
              )}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleFilter;
