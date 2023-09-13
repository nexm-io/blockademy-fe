"use client";
import Chip from "@/components/Common/Chip";
import DoubleRangeSlider from "@/components/DoubleRangeSlider";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
import TagItem from "@/components/TagItem";
import {
  getArticleCourse,
  getListTags,
} from "@/redux/features/articles/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";

type TopicAcademyProps = {
  show?: boolean;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
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

const TopicAcademy: React.FC<TopicAcademyProps> = ({
  show,
  setShow,
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
  const dataTags = useAppSelector((state: RootState) => state.articles.tags);

  useEffect(() => {
    dispatch(getListTags({ limit }));
  }, [dispatch, limit]);

  const handleChipClick = (level: "beginner" | "intermediate" | "advance") => {
    if (setLevelParam) {
      if (levelParam === level) {
        setLevelParam(undefined);
      } else {
        setLevelParam(level);
      }
    }
  };

  return (
    <div className="bg-white-100 h-auto pl-4 md:pl-0 pb-2 md:pb-10">
      <h1 className="text-black-100 font-bold leading-[40px] text-3xl pt-[49px]">
        Topics at Academy
      </h1>
      {show && (
        <div className="flex md:gap-[90px] md:flex-row flex-col gap-8">
          <div className="mt-5 md:basis-[550px] basis-[100px]">
            <p className="text-black-100 text-base font-normal leading-6 mb-[11px]">
              Topic
            </p>
            <div className="flex md:flex-row flex-col md:gap-[15px] gap-4 md:flex-wrap">
              <div className="flex gap-2 md:gap-[15px] flex-wrap">
                {dataTags ? (
                  <TagItem
                    dataTags={dataTags}
                    choose={choose}
                    setChoose={setChoose}
                    academy
                  />
                ) : (
                  <>
                    <SkeletionCard width="100px" height="24px" radius="999px" />
                    <SkeletionCard width="70px" height="24px" radius="999px" />
                    <SkeletionCard width="110px" height="24px" radius="999px" />
                    <SkeletionCard width="120px" height="24px" radius="999px" />
                    <SkeletionCard width="90px" height="24px" radius="999px" />
                    <SkeletionCard width="70px" height="24px" radius="999px" />
                    <SkeletionCard width="100px" height="24px" radius="999px" />
                    <SkeletionCard width="70px" height="24px" radius="999px" />
                    <SkeletionCard width="110px" height="24px" radius="999px" />
                    <SkeletionCard width="120px" height="24px" radius="999px" />
                    <SkeletionCard width="90px" height="24px" radius="999px" />
                    <SkeletionCard width="70px" height="24px" radius="999px" />
                    <SkeletionCard width="100px" height="24px" radius="999px" />
                    <SkeletionCard width="70px" height="24px" radius="999px" />
                    <SkeletionCard width="110px" height="24px" radius="999px" />
                    <SkeletionCard width="120px" height="24px" radius="999px" />
                    <SkeletionCard width="90px" height="24px" radius="999px" />
                    <SkeletionCard width="70px" height="24px" radius="999px" />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="md:mt-5 mt-0 basis-1/2">
            <div>
              <p>Difficulty</p>
              <div className="flex gap-[15px] mt-[11px] mb-[30px]">
                <div
                  className="text-black-100 font-medium text-base rounded-full cursor-pointer py-[2px] flex items-center justify-center capitalize w-fit h-[28px] relative border border-[#02C0A9] border-opacity-40"
                  onClick={() => handleChipClick("beginner")}
                >
                  <Chip
                    label="beginner"
                    newbie
                    levelParam={levelParam}
                    size="small"
                  ></Chip>
                </div>
                <div
                  className="text-gray-500 font-medium text-base rounded-full cursor-pointer py-[2px] flex items-center justify-center capitalize  h-[28px] relative w-fit border border-[#37B7FF] border-opacity-40"
                  onClick={() => handleChipClick("intermediate")}
                >
                  <Chip
                    label="intermediate"
                    levelParam={levelParam}
                    intermediate
                    size="small"
                  ></Chip>
                </div>
                <div
                  className="text-gray-500 font-medium text-base rounded-full cursor-pointer py-[2px] flex items-center justify-center capitalize  h-[28px] w-fit relative border border-[#FF1D1D] border-opacity-40"
                  onClick={() => handleChipClick("advance")}
                >
                  <Chip
                    label="advance"
                    levelParam={levelParam}
                    advanced
                    size="small"
                  ></Chip>
                </div>
              </div>
            </div>
            <div>
              <p>Reading time</p>
              <DoubleRangeSlider time={time} setTime={setTime} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicAcademy;
