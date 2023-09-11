"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import crypto1 from "@/public/images/home/home-4.png";
import crypto2 from "@/public/images/home/home-5.png";
import crypto3 from "@/public/images/home/home-6.png";
import crypto4 from "@/public/images/home/home-7.png";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import {
  getArticleCourse,
  getLatestArticle,
  getListTags,
} from "@/redux/features/articles/action";
import CardItem from "@/components/CardItem";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
import Chip from "../../../components/Common/Chip";
import TagItem from "@/components/TagItem";

interface TopicListProps {
  urlApi?: string;
}

const TopicList: React.FC<TopicListProps> = ({ urlApi }) => {
  const [choose, setChoose] = useState<string | undefined>(undefined);
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
                <div className="text-black-100 font-medium text-base  rounded-full cursor-pointer py-[2px] flex items-center justify-center capitalize w-fit h-[28px] relative">
                  <Chip
                    label="beginner"
                    newbie
                    size="small"
                    className="text-white-100"
                  ></Chip>
                </div>
                <div className="text-gray-500 font-medium text-base rounded-full cursor-pointer py-[2px] flex items-center justify-center capitalize  h-[28px] relative w-fit">
                  <Chip
                    label="intermediate"
                    size="small"
                    intermediate
                    outline
                    className="text-white-100"
                  ></Chip>
                </div>
              </div>
              <div className="text-gray-500 font-medium text-base rounded-full cursor-pointer py-[2px] flex items-center justify-center capitalize  h-[28px] w-fit relative border border-[#43171B]">
                <Chip
                  label="advanced"
                  advanced
                  size="small"
                  outline
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
                  .slice(3, 4)
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
                  .slice(10, 11)
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
                  .slice(7, 8)
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
                  .slice(8, 9)
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
            <span>See more content on this topic</span>
            <HiOutlineArrowRight className="text-blue-400 text-[20px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicList;
