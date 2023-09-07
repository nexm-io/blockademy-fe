"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import clockIcon from "@/public/icons/clock.svg";
import Button from "../Common/Button";
import Chip from "../Common/Chip";
import { ArticleIntoData } from "@/redux/features/articles/type";
import { formatDate } from "@/utils/formatDate";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CardItemProps {
  timeDuration: string;
  onClick?: () => void;
  data: ArticleIntoData;
}
const CardItem: React.FC<CardItemProps> = ({ timeDuration, data }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleTags = showAll ? data.tags : data.tags.slice(0, 2);

  return (
    <Link href={`/courses/${data.slug}`}>
      <div className="w-[352px] lg:h-[370px] h-[340px] flex flex-col flex-shrink-0 shadow-lg rounded-2xl cursor-pointer hover:shadow-3xl transition-all duration-300 ease-linear">
        <div className="w-full h-[198px] relative">
          <div className="absolute flex gap-2 top-6 left-6 text-white-100 z-20">
            {visibleTags.length > 0 &&
              visibleTags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full px-3 py-1 bg-black-100 text-white-100 font-bold text-[11px] leading-3 "
                >
                  {tag.title}
                </span>
              ))}
            {data.tags.length > 0 && (
              <span className="rounded-full px-3 py-1 bg-black-100 text-white-100 font-bold text-[11px] leading-3 ">
                +{data.tags.length - 2 > 0 ? data.tags.length - 2 : ""}
              </span>
            )}
          </div>

          <Image
            alt="card-img"
            src={data.images.original_image}
            width={352}
            height={198}
            className="w-full h-full object-cover rounded-2xl relative"
          ></Image>
        </div>
        <div className="flex justify-between flex-col h-full flex-1">
          <h2 className=" m-6 text-black-100 text-lg font-bold leading-7 line-clamp-2">
            {data.title}
          </h2>
          <div className="flex justify-between mt-auto px-6 pb-6 items-center">
            {/* TODO: chip component */}
            <Chip label="Beginner" newbie size="small"></Chip>
            <span className="text-xs font-normal text-gray-300 leading-[23px]">
              {formatDate(data.created_at)}
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
    </Link>
  );
};

export default CardItem;
