import Image, { StaticImageData } from "next/image";
import React from "react";
import clockIcon from "@/public/icons/clock.svg";
import Button from "../Common/Button";

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
    <div className="w-[352px] lg:h-[370px] h-[340px] flex-shrink-0 shadow-lg rounded-2xl cursor-pointer">
      <div className="w-full h-[198px] relative">
        <div className="absolute flex gap-2 top-6 left-6 text-white-100 z-20">
          {nftTags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full px-3 py-1 bg-black-100 text-white-100 font-bold text-[11px] leading-3 hover:bg-white-100 hover:text-black-100 border hover:border-green-200 border-transparent"
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
      <div className="m-6">
        <h2 className="text-black-100 text-lg font-bold leading-7">{title}</h2>
        <div className="flex lg:mt-[68px] mt-9 justify-between mr-6 items-center">
          <Button
            label={buttonLabel}
            className="w-[90px] px-2 py-2 text-xs font-normal leading-3 bg-green-900 text-gray-100 flex flex-row-reverse gap-2 items-center"
          >
            <span className="active w-[6px] h-[6px] rounded-[4px] bg-green-100"></span>
          </Button>
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
