import Image, { StaticImageData } from "next/image";
import React from "react";
import clockIcon from "@/public/icons/clock.svg";
import Button from "../Common/Button";
import Chip from "../Common/Chip";

interface CardItemProps {
  imgSrc: StaticImageData;
  nftTags: string[];
  title: string;
  buttonLabel: string;
  date: string;
  timeDuration: string;
}
const CardItem: React.FC<CardItemProps> = ({
  imgSrc,
  nftTags,
  title,
  buttonLabel,
  date,
  timeDuration,
}) => {
  return (
    <div className="w-[352px] lg:h-[370px] h-[340px] flex flex-col flex-shrink-0 shadow-lg rounded-2xl cursor-pointer">
      <div className="w-full h-[198px] relative">
        <div className="absolute flex gap-2 top-6 left-6 text-white-100 z-20">
          {nftTags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full px-3 py-1 bg-black-100 text-white-100 font-bold text-[11px] leading-3 "
            >
              {tag}
            </span>
          ))}
        </div>

        <Image
          alt="card-img"
          src={imgSrc}
          className="w-full h-full object-cover rounded-2xl relative"
        ></Image>
      </div>
      <div className="flex justify-between flex-col h-full flex-1">
        <h2 className=" m-6 text-black-100 text-lg font-bold leading-7 line-clamp-2">
          {title}
        </h2>
        <div className="flex justify-between mt-auto px-6 pb-6 items-center">
          {/* TODO: chip component */}
          <Chip label="Intermediate" intermediate size="small"></Chip>
          <span className="text-xs font-normal text-gray-300 leading-[23px]">
            {date}
          </span>
          <div className="flex gap-1 items-center text-gray-300">
            <Image alt="" src={clockIcon}></Image>
            <span className="text-xs font-normal leading-4">
              {timeDuration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
