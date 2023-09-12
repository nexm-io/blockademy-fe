"use client";
import Chip from "@/components/Common/Chip";
import DoubleRangeSlider from "@/components/DoubleRangeSlider";
import TagItem from "@/components/TagItem";
import { getListTags } from "@/redux/features/articles/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";

type TopicAcademyProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  time?: number;
  setTime?: React.Dispatch<React.SetStateAction<number[]>>;
};

const TopicAcademy: React.FC<TopicAcademyProps> = ({
  show,
  setShow,
  time,
  setTime,
}) => {
  const [choose, setChoose] = useState<string[] | undefined>(undefined);
  const [limit] = useState<number>(20);
  const dispatch = useAppDispatch();
  const dataTags = useAppSelector((state: RootState) => state.articles.tags);

  useEffect(() => {
    dispatch(getListTags({ limit }));
  }, [dispatch, limit]);
  return (
    <div className="bg-white-100 h-auto pl-4 md:pl-0 pb-2 md:pb-10">
      <h1 className="text-black-100 font-bold leading-[40px] text-3xl pt-[49px]">
        Topics at Academy
      </h1>
      {show && (
        <div className="flex md:gap-[90px] md:flex-row flex-col gap-8">
          <div className="mt-5 basis-[550px] ">
            <p className="text-black-100 text-base font-normal leading-6 mb-[11px]">
              Topic
            </p>
            <div className="flex md:flex-row flex-col md:gap-[15px] gap-4 md:flex-wrap">
              <div className="flex gap-2 md:gap-[15px] flex-wrap">
                <TagItem
                  dataTags={dataTags}
                  choose={choose}
                  setChoose={setChoose}
                  academy
                />
              </div>
            </div>
          </div>
          <div className="md:mt-5 mt-0 basis-1/2">
            <div>
              <p>Difficulty</p>
              <div className="flex gap-[15px] mt-[11px] mb-[30px]">
                <div className="flex md:flex-row flex-col gap-[15px]">
                  <div className="text-black-100 font-medium text-base rounded-full cursor-pointer py-[2px] flex items-center justify-center capitalize w-fit h-[28px] relative">
                    <Chip label="beginner" outline newbie size="small"></Chip>
                  </div>
                  <div className="text-gray-500 font-medium text-base rounded-full cursor-pointer py-[2px] flex items-center justify-center capitalize  h-[28px] relative w-fit">
                    <Chip
                      label="intermediate"
                      intermediate
                      size="small"
                      outline
                    ></Chip>
                  </div>
                </div>
                <div className="text-gray-500 font-medium text-base rounded-full cursor-pointer py-[2px] flex items-center justify-center capitalize  h-[28px] w-fit relative">
                  <Chip label="advance" advanced size="small" outline></Chip>
                </div>
              </div>
            </div>
            <div>
              <p>Reading time</p>
              <DoubleRangeSlider />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicAcademy;
