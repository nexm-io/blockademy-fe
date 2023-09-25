import Image from "next/image";
import Link from "next/link";
import React from "react";
import clockIcon from "@/public/icons/clock.svg";
import { ArticleIntoData } from "@/redux/features/articles/type";
import { formatDate } from "@/utils/formatDate";
import Chip from "../Common/Chip";
import defaultImg from "@/public/images/home/home-default.png";
import { PLACEHOLDER_BASE64 } from "@/utils/getLocalBase64";
interface CardItemTopProps {
  data: ArticleIntoData;
}

const CardItemTop: React.FC<CardItemTopProps> = ({ data }) => {
  return (
    <>
      <Link href={`/articles/${data.slug}`}>
        <Image
          alt="banner"
          src={
            data.image
              ? data.image.original_image || data.image.thumbnail
              : data.image === ""
              ? defaultImg
              : defaultImg
          }
          priority
          width={520}
          height={292}
          className="cursor-pointer"
          placeholder="blur"
          blurDataURL={PLACEHOLDER_BASE64}
        ></Image>
      </Link>
      <Link
        href={`/articles/${data.slug}`}
        className="text-lg font-bold leading-[28px] mt-[26px] mb-[16px] block"
      >
        {data.title}
      </Link>
      <div className="flex flex-col mt-auto gap-3 pb-6">
        <div className="flex gap-5 items-center text-gray-300">
          <span className="text-xs font-normal text-gray-300 leading-[23px]">
            {formatDate(data.created_at)}
          </span>
          <div className="flex gap-1">
            <Image alt="" src={clockIcon}></Image>
            <span className="text-xs font-normal leading-4">
              {data.read_time ?? "9"}m
            </span>
          </div>
        </div>
        <Chip label="beginner" data={data} size="small"></Chip>
      </div>
    </>
  );
};

export default CardItemTop;
