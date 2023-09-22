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
import TagItemSkeleton from "@/components/TagItemSkeleton";
import { useSearchParams } from "next/navigation";

interface TopicListProps {
  urlApi?: string;
}

const TopicList: React.FC<TopicListProps> = ({ urlApi }) => {
  const [choose, setChoose] = useState<string[] | undefined>(undefined);
  const [levelParam, setLevelParam] = useState<
    "beginner" | "intermediate" | "advance" | undefined
  >(undefined);
  const [tagParam, setTagParam] = useState<string[] | undefined>(undefined);
  const [tag, setTag] = useState<any>([])
  const [page] = useState<number>(1);
  const [limit] = useState<number>(7);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: RootState) => state.articles.data);
  const isLoading = useAppSelector(
    (state: RootState) => state.articles.isLoading
  );
  const dataTags = useAppSelector((state: RootState) => state.articles.tags);

  useEffect(() => {
  
    dispatch(getListTags({ limit }));
  }, [dispatch, page, limit]);

  const handleChipClick = (level: "beginner" | "intermediate" | "advance") => {
    const dispatchParams = {
      page,
      levelParam: level,
      tagParam: tag,
    };
    setLevelParam(level);
    dispatch(getArticleCourse(dispatchParams));
  };

  useEffect(() => {
    const dispatchParams = {
      page,
      tagParam:tag,
      levelParam: levelParam,
    };
    dispatch(getArticleCourse(dispatchParams));
  }, [tagParam, tag]);

  const handleTagClick = (tagTitle: string) => {
    console.log(tag);

    if (tag.includes(tagTitle)) {
      // If it exists, remove it
      setTag((prev) => prev.filter((tag) => tag !== tagTitle));
    } else {
      // If it doesn't exist, add it
      setTag((prev) => [...prev, tagTitle])
    }
    
    // const newTagParam = tagParam ? [...tagParam] : [];
    // if (newTagParam.includes(tagTitle)) {
    //   const index = newTagParam.indexOf(tagTitle);
    //   if (index > -1) {
    //     newTagParam.splice(index, 1);
    //   }
    // } else {
    //   newTagParam.push(tag);
    //   setTagParam(newTagParam);
    // }
    
  };
  
  return (
    <section className="my-[82px] full-bleed">
      <div className="bg-black-100 lg:h-[1100px] md:h-auto h-full">
        <div className="max-w-[1152px] mx-auto">
          {/* Topics */}
          <div className="flex gap-8 md:pt-[62px] pt-4 items-center pl-2">
            <h3 className="text-white-100 font-semibold leading-6 text-base md:text-lg ">
              Topics:
            </h3>
            <div className="flex md:flex-row flex-col md:gap-[15px] gap-2 md:flex-wrap overflow-hidden ">
              <div className="flex gap-2 md:gap-[15px] w-[275px] md:w-full flex-wrap h-8">
                {dataTags ? (
                  <TagItem
                    dataTags={dataTags}
                    choose={choose}
                    setChoose={setChoose}
                    handleTagClick={handleTagClick}
                  />
                ) : (
                  <>
                    <TagItemSkeleton className="w-[150px] h-6" />
                    <TagItemSkeleton className="w-[70px] h-6" />
                    <TagItemSkeleton className="w-[110px] h-6" />
                    <TagItemSkeleton className="w-[80px] h-6" />
                    <TagItemSkeleton className="w-[120px] h-6" />
                    <TagItemSkeleton className="w-[150px] h-6" />
                    <TagItemSkeleton className="w-[70px] h-6" />
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
            <div className="flex md:flex-row flex-col gap-4 bg-black-200 rounded-2xl crypto__h1  lg:mx-0 mx-3">
              {!isLoading && data ? (
                data
                  .slice(0, 1)
                  .map((item, index) => (
                    <CardItem data={item} key={index} status="menu" topic />
                  ))
              ) : (
                <>
                  <div className="md:w-[860px] h-[332px] rounded-2xl flex gap-4 items-center">
                    <SkeletionCard width="370px" height="332px" radius="16px" />
                    <div className="md:block hidden">
                      <SkeletionCard
                        width="380px"
                        height="120px"
                        radius="16px"
                      />
                      <div className="flex gap-4 my-4">
                        <SkeletionCard
                          width="180px"
                          height="40px"
                          radius="16px"
                        />
                        <SkeletionCard
                          width="80px"
                          height="40px"
                          radius="16px"
                        />
                      </div>
                      <SkeletionCard
                        width="110px"
                        height="32px"
                        radius="16px"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* h2 */}
            <div className="bg-black-200 rounded-2xl flex flex-col justify-between crypto__h2 lg:ml-0 md:ml-3 mx-3 md:mr-0">
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
                  <div className="md:w-[276px] md:h-[332px] gap-4 md:gap-0 rounded-2xl flex flex-col justify-between mt-4 mx-4">
                    <SkeletionCard width="246px" height="40px" radius="16px" />
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex gap-6">
                        <SkeletionCard
                          width="110px"
                          height="28px"
                          radius="16px"
                        />
                        <SkeletionCard
                          width="76px"
                          height="28px"
                          radius="16px"
                        />
                      </div>
                      <SkeletionCard width="96px" height="28px" radius="16px" />
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* h3 */}
            <div className="bg-black-200 rounded-2xl flex flex-col justify-between crypto__h3 lg:mr-0 md:mr-3 mx-3 md:ml-0">
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
                  <div className="md:w-[276px] md:h-[332px] gap-4 md:gap-0 rounded-2xl flex flex-col justify-between mt-4 mx-4">
                    <SkeletionCard width="246px" height="40px" radius="16px" />
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex gap-6">
                        <SkeletionCard
                          width="110px"
                          height="28px"
                          radius="16px"
                        />
                        <SkeletionCard
                          width="76px"
                          height="28px"
                          radius="16px"
                        />
                      </div>
                      <SkeletionCard width="96px" height="28px" radius="16px" />
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* h4 */}
            <div className="flex flex-col-reverse md:flex-row gap-4 bg-black-200 rounded-2xl crypto__h4 justify-end lg:mx-0 mx-3">
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
                  <div className="md:w-[860px] h-[332px] rounded-2xl flex md:flex-row-reverse gap-4 items-center">
                    <SkeletionCard width="340px" height="332px" radius="16px" />
                    <div className="md:block hidden">
                      <SkeletionCard
                        width="380px"
                        height="120px"
                        radius="16px"
                      />
                      <div className="flex gap-4 my-4 justify-end">
                        <SkeletionCard
                          width="180px"
                          height="40px"
                          radius="16px"
                        />
                        <SkeletionCard
                          width="80px"
                          height="40px"
                          radius="16px"
                        />
                      </div>
                      <SkeletionCard
                        width="110px"
                        height="32px"
                        radius="16px"
                        className="ml-auto"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* h5 */}
            <div className="bg-black-200 rounded-2xl flex justify-between crypto__h5 lg:ml-0 md:ml-3 md:mr-0 mx-3">
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
                  <div className="flex gap-4 items-center w-[552px] h-[99px]">
                    <SkeletionCard width="175px" height="99px" radius="16px" />
                    <SkeletionCard width="150px" height="56px" radius="16px" />
                  </div>
                </>
              )}
            </div>
            {/* h6 */}
            <div className="bg-black-200 rounded-2xl flex justify-between crypto__h6 lg:mr-0 md:mr-3 mx-3 md:ml-0">
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
                  <div className="flex gap-4 items-center w-[552px] h-[99px]">
                    <SkeletionCard width="175px" height="99px" radius="16px" />
                    <SkeletionCard width="150px" height="56px" radius="16px" />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="text-gray-500 flex items-center justify-center gap-4 w-full mt-[40px] pb-5 md:pb-6 hover:underline cursor-pointer">
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
