"use client";
import Image from "next/image";
import React, { useState } from "react";
import Chip from "../Common/Chip";
import { ArticleIntoData } from "@/redux/features/articles/type";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";
import { Clock } from "@styled-icons/fa-regular";
import defaultImg from "@/public/images/home/home-default.png";
import { PLACEHOLDER_BASE64 } from "@/utils/getLocalBase64";

interface CardItemProps {
  onClick?: () => void;
  data: ArticleIntoData;
  status?: "list" | "menu";
  setStatus?: React.Dispatch<React.SetStateAction<"list" | "menu">>;
  image?: boolean;
  topic?: boolean;
  topicShort?: boolean;
  topicReverse?: boolean;
  topicBalance?: boolean;
}
const CardItem: React.FC<CardItemProps> = ({
  data,
  status = "list",
  image = true,
  setStatus,
  topic,
  topicShort = false,
  topicReverse = false,
  topicBalance = false,
}) => {
  const [showAll, setShowAll] = useState(false);
  const visibleTags = showAll ? data.tags : data.tags.slice(0, 2);

  return (
    <Link href={`/articles/${data.slug}`}>
      <div
        className={`${
          status === "list"
            ? "flex-col w-[352px] shadow-lg hover:shadow-3xl md:mx-auto lg:mx-0 lg:h-[370px] h-[340px] md:h-[368px]"
            : status === "menu"
            ? "w-[352px] md:w-full md:flex-row flex-col gap-4 md:gap-0"
            : ""
        } ${topicBalance ? "h-[100px] !flex-row" : "h-auto"} ${
          topicReverse ? "md:!flex-row-reverse !flex-col" : "flex-row"
        } flex flex-shrink-0 rounded-2xl cursor-pointer transition-all duration-300 ease-linear`}
      >
        <div
          className={`${
            status === "list" ? "w-full " : status === "menu" ? "w-auto" : ""
          } ${topic ? "md:h-[330px] h-auto" : ""} relative`}
        >
          {topic || topicBalance ? (
            ""
          ) : (
            <div
              className={`${
                status === "list"
                  ? "top-6 left-6"
                  : status === "menu"
                  ? "top-2 left-2 flex-wrap"
                  : ""
              } absolute flex gap-2  text-white-100 z-20`}
            >
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
          )}

          {image && (
            <Image
              alt="card-img"
              src={
                data.image
                  ? data.image.original_image || data.image.thumbnail
                  : data.image === ""
                  ? defaultImg
                  : defaultImg
              }
              className={`${
                topicBalance ? "w-[352px] md:h-full !h-[100px]" : "w-full"
              } ${
                topic ? "md:h-full h-[250px]" : ""
              } h-[210px] object-cover md:min-w-[352px] rounded-2xl`}
              width={352}
              height={198}
              placeholder="blur"
              blurDataURL={PLACEHOLDER_BASE64}
            ></Image>
          )}
        </div>
        <div
          className={`${
            status === "list" ? "" : status === "menu" ? "basis-full " : ""
          } ${!image ? "" : "h-full"} ${
            topicReverse ? "pr-3 md:items-end items-start" : "items-start"
          } ${topicShort ? "h-[300px]" : ""} ${
            topicBalance ? "h-auto" : "h-[198px]"
          } ${topic ? "my-auto" : ""} flex justify-between flex-col  flex-1`}
        >
          <h2
            className={`${
              topicShort
                ? "text-lg text-white-100"
                : topic
                ? "text-[30px] text-white-100"
                : "text-lg text-black-100 leading-7"
            } ${topic || topicShort ? "ml-6" : " mt-2 ml-2 mb-4 "} ${
              topicReverse ? "md:text-right text-left basis-[40px]" : ""
            } ${!image ? "line-clamp-none " : "line-clamp-1 "}
            ${
              status === "list"
                ? "h-[56px] basis-[56px] md:m-6"
                : status === "menu"
                ? "ml-6"
                : ""
            }
            ${topic ? "mb-2" : ""} ${
              topicBalance ? "text-white-100 line-clamp-2  max-w-[180px]" : ""
            } font-bold 
         `}
          >
            {data.title}
          </h2>
          {status === "menu" && !topic && !topicBalance && (
            <p
              className={`opacity-0 md:w-auto md:h-auto w-0 h-0 md:opacity-100 ml-6 text-black-100 font-normal leading-7 line-clamp-3 ${
                status === "menu" ? "basis-[80px]" : ""
              }`}
            >
              {data.meta_description}
            </p>
          )}
          {topicBalance ? (
            ""
          ) : (
            <div
              className={` ${topicShort ? "gap-0" : "gap-4"} ${
                status === "list"
                  ? "justify-between pb-6 mb-0 w-full"
                  : status === "menu"
                  ? "mt-8 basis-[35px]"
                  : ""
              } ${
                topicShort || topic ? "flex-col-reverse" : "items-center mb-6"
              } ${
                topicReverse
                  ? "px-0 ml-6 md:ml-0 items-start md:items-end"
                  : "md:px-6 px-2 md:ml-0 "
              } flex 
         `}
            >
              {/* TODO: chip component */}
              {data.level ? (
                <Chip label="beginner" data={data} size="small" topic={topic} />
              ) : (
                ""
              )}
              <div className="flex gap-4 items-center w-full justify-around">
                <span
                  className={`${
                    topicShort
                      ? "text-base text-blue-400"
                      : topic
                      ? "text-blue-400 text-xl"
                      : "text-gray-300 text-xs"
                  } font-normal leading-[23px]`}
                >
                  {formatDate(data.created_at)}
                </span>
                <div className="flex gap-1 items-center text-gray-300">
                  <Clock
                    className={`${
                      topic ? "text-blue-400" : "text-gray-300"
                    } w-4 h-4 `}
                  />
                  <span
                    className={`${
                      topicShort
                        ? "text-base text-blue-400"
                        : topic
                        ? "text-blue-400 text-xl"
                        : "text-gray-300 text-xs"
                    } font-normal `}
                  >
                    {data.read_time ?? "9"}m
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
