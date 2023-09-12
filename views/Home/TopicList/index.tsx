"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import {
  getArticleCourse,
  getListTags,
} from "@/redux/features/articles/action";
import CardItem from "@/components/CardItem";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
import Chip from "../../../components/Common/Chip";
import TagItem from "@/components/TagItem";
import Link from "next/link";

interface TopicListProps {
  urlApi?: string;
}

const TopicList: React.FC<TopicListProps> = ({ urlApi }) => {
  const [choose, setChoose] = useState<string[] | undefined>(undefined);
  const [levelParam, setLevelParam] = useState<
    "beginner" | "intermediate" | "advance" | undefined
  >(undefined);
  const [tagParam, setTagParam] = useState<string[] | undefined>(undefined);
  const [page] = useState<number>(1);
  const [limit] = useState<number>(7);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: RootState) => state.articles.data);
  const isLoading = useAppSelector(
    (state: RootState) => state.articles.isLoading
  );
  const dataTags = useAppSelector((state: RootState) => state.articles.tags);
  useEffect(() => {
    dispatch(getArticleCourse({ page }));
    dispatch(getListTags({ limit }));
  }, [dispatch, page, limit]);

  const handleChipClick = (level: "beginner" | "intermediate" | "advance") => {
    const dispatchParams = {
      page,
      levelParam: level,
      tagParam: tagParam || [],
    };
    setLevelParam(level);
    dispatch(getArticleCourse(dispatchParams));
  };

  const handleTagClick = (tagTitle: string) => {
    const newTagParam = tagParam ? [...tagParam] : [];
    if (newTagParam.includes(tagTitle)) {
      const index = newTagParam.indexOf(tagTitle);
      if (index > -1) {
        newTagParam.splice(index, 1);
      }
    } else {
      newTagParam.push(tagTitle);
    }
    setTagParam(newTagParam);
    const dispatchParams = {
      page,
      tagParam: tagParam ? [...tagParam] : [],
      levelParam: levelParam,
    };
    dispatch(getArticleCourse(dispatchParams));
  };

  return (
    <section className="my-[82px] full-bleed">
      <div className="bg-black-100 md:h-[1100px] h-full">
        <div className="max-w-[1152px] mx-auto">
          {/* Topics */}
          <div className="flex gap-8 md:pt-[62px] pt-4 items-center pl-2">
            <h3 className="text-white-100 font-semibold leading-6 text-base md:text-lg ">
              Topics:
            </h3>
            <div className="flex md:flex-row flex-col md:gap-[15px] gap-2 md:flex-wrap">
              <div className="flex gap-2 md:gap-[15px]">
                {dataTags ? (
                  <TagItem
                    dataTags={dataTags}
                    choose={choose}
                    setChoose={setChoose}
                    handleTagClick={handleTagClick}
                  />
                ) : (
                  <>
                    <SkeletionCard
                      height="32px"
                      width="150px"
                      radius="999px"
                    ></SkeletionCard>
                    <SkeletionCard
                      height="32px"
                      width="90px"
                      radius="999px"
                    ></SkeletionCard>
                    <SkeletionCard
                      height="32px"
                      width="110px"
                      radius="999px"
                    ></SkeletionCard>
                    <SkeletionCard
                      height="32px"
                      width="130px"
                      radius="999px"
                    ></SkeletionCard>
                    <SkeletionCard
                      height="32px"
                      width="110px"
                      radius="999px"
                    ></SkeletionCard>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* Difficulty */}
          <div className="flex gap-[18px] pt-[28px] items-start md:items-center pl-2">
            <h3 className="text-white-100 font-semibold leading-6 text-base md:text-lg">
              Difficulty:
            </h3>
            <div className="flex gap-[15px]">
              <div className="flex md:flex-row flex-col gap-[15px]">
                <div
                  className="text-black-100 font-medium text-base  rounded-full cursor-pointer py-[2px] flex items-center justify-center capitalize w-fit h-[28px] relative border border-[#02C0A9] border-opacity-40"
                  onClick={() => handleChipClick("beginner")}
                >
                  <Chip
                    label="beginner"
                    levelParam={levelParam}
                    newbie
                    size="small"
                    className="text-white-100"
                  ></Chip>
                </div>
                <div
                  className="text-gray-500 font-medium text-base rounded-full cursor-pointer py-[2px] flex items-center justify-center capitalize  h-[28px] relative w-fit border border-[#37B7FF] border-opacity-40"
                  onClick={() => handleChipClick("intermediate")}
                >
                  <Chip
                    label="intermediate"
                    levelParam={levelParam}
                    size="small"
                    intermediate
                    className="text-white-100"
                  ></Chip>
                </div>
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
                  className="text-white-100"
                ></Chip>
              </div>
            </div>
          </div>
          {/* Topic Item */}
          <div className="mt-[50px] crypto__list">
            {/* h1 */}
            <div className="flex md:flex-row flex-col gap-4 bg-black-200 rounded-2xl crypto__h1 md:mx-0 mx-3">
              {!isLoading && data ? (
                data
                  .slice(0, 1)
                  .map((item, index) => (
                    <CardItem data={item} key={index} status="menu" topic />
                  ))
              ) : (
                <>
                  <SkeletionCard width="860px" height="332px" radius="16px" />
                </>
              )}
            </div>
            {/* h2 */}
            <div className="bg-black-200 rounded-2xl flex flex-col justify-between crypto__h2 md:mx-0 mx-3">
              {!isLoading && data ? (
                data
                  .slice(1, 2)
                  .map((item, index) => (
                    <CardItem
                      data={item}
                      key={index}
                      status="menu"
                      image={false}
                      topic
                      topicShort
                    />
                  ))
              ) : (
                <>
                  <SkeletionCard width="276px" height="332px" radius="16px" />
                </>
              )}
            </div>
            {/* h3 */}
            <div className="bg-black-200 rounded-2xl flex flex-col justify-between crypto__h3 md:mx-0 mx-3">
              {!isLoading && data ? (
                data
                  .slice(2, 3)
                  .map((item, index) => (
                    <CardItem
                      data={item}
                      key={index}
                      status="menu"
                      image={false}
                      topic
                      topicShort
                    />
                  ))
              ) : (
                <>
                  <SkeletionCard width="276px" height="332px" radius="16px" />
                </>
              )}
            </div>
            {/* h4 */}
            <div className="flex flex-col-reverse md:flex-row gap-4 bg-black-200 rounded-2xl crypto__h4 justify-end md:mx-0 mx-3">
              {!isLoading && data ? (
                data
                  .slice(3, 4)
                  .map((item, index) => (
                    <CardItem
                      data={item}
                      key={index}
                      status="menu"
                      topic
                      topicReverse
                    />
                  ))
              ) : (
                <>
                  <SkeletionCard width="860px" height="332px" radius="16px" />
                </>
              )}
            </div>
            {/* h5 */}
            <div className="bg-black-200 rounded-2xl flex justify-between crypto__h5 md:mx-0 mx-3">
              {!isLoading && data ? (
                data
                  .slice(4, 5)
                  .map((item, index) => (
                    <CardItem
                      data={item}
                      key={index}
                      status="menu"
                      topicBalance
                    />
                  ))
              ) : (
                <>
                  <SkeletionCard width="552px" height="99px" radius="16px" />
                </>
              )}
            </div>
            {/* h6 */}
            <div className="bg-black-200 rounded-2xl flex justify-between crypto__h6 md:mx-0 mx-3">
              {!isLoading && data ? (
                data
                  .slice(5, 6)
                  .map((item, index) => (
                    <CardItem
                      data={item}
                      key={index}
                      status="menu"
                      topicBalance
                    />
                  ))
              ) : (
                <>
                  <SkeletionCard width="552px" height="99px" radius="16px" />
                </>
              )}
            </div>
          </div>
          <div className="text-gray-500 flex items-center justify-center gap-4 w-full mt-[40px] pb-5 md:pb-0 hover:underline cursor-pointer">
            <Link href="/articles" className="flex gap-4">
              <span>See more content on this topic</span>
              <HiOutlineArrowRight className="text-blue-400 text-[20px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicList;
