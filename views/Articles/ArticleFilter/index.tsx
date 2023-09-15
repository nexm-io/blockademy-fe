"use client";
import Button from "@/components/Common/Button";
import React, { useState } from "react";
import { CheveronDown } from "@styled-icons/zondicons";
import { SortList, SortMenu } from "@/components/Icon";
import { ArrowUpS } from "@styled-icons/remix-line";
import { useAppDispatch } from "@/redux/hook";
import { getArticleCourse } from "@/redux/features/articles/action";

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
  limit?: number;
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
  tagParam,
  setTagParam,
  page = 1,
  limit = 20,
  choose,
  setChoose,
}) => {
  const dispatch = useAppDispatch();

  const handleSortListClick = () => {
    setStatus?.("list");
  };
  const handleSortMenuClick = () => {
    setStatus?.("menu");
  };

  const handleClickTotal = () => {
    const dispatchParams = {
      page,
      levelParam: levelParam,
      tagParam: choose || [],
      time: time || [],
    };
    dispatch(getArticleCourse(dispatchParams));
  };
  const handleClearFilters = () => {
    setChoose && setChoose([]);
    setLevelParam && setLevelParam(undefined);
  };
  return (
    <div className="w-full bg-gray-200 mt-8 md:mt-0">
      <div className="bg-gray-200 flex gap-7 items-center w-full md:h-[64px] justify-between full-bleed__articleFilter flex-wrap h-auto py-4 md:pt-4 px-4 md:px-0">
        <div className="flex items-center md:gap-[55px] gap-0 ">
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
            <div className="cursor-pointer" onClick={handleSortMenuClick}>
              <SortMenu
                fill={`${
                  status === "menu"
                    ? "#14151A"
                    : status === "list"
                    ? "#AEB4BC"
                    : ""
                }`}
              />
            </div>
            <Button
              size="small"
              className={`${
                levelParam || (choose && choose.length > 0)
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
                <CheveronDown size={15} className="rotate-180" />
              ) : (
                <ArrowUpS size={15} className="rotate-180" />
              )}
              <span>Hide filters</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleFilter;
