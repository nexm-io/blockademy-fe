"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import vectorIcon from "@/public/icons/arrowright.svg";
import CardItem from "@/components/CardItem";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { getLatestArticle } from "@/redux/features/articles/action";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
import Link from "next/link";

interface ListCardProps {
  cardTitle: string;
  cardLabel: string;
  mTop?: string;
  urlApi?: string;
}

const ListCard: React.FC<ListCardProps> = ({
  cardTitle,
  cardLabel,
  mTop,
  urlApi,
}) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: RootState) => state.articles.data);

  useEffect(() => {
    dispatch(getLatestArticle({ params: urlApi }));
  }, [dispatch, urlApi]);

  return (
    <section className={`${mTop}`}>
      <div className="flex justify-between lg:mb-[40px] mb-4 items-center mx-4 lg:mx-0">
        <h4 className="text-black-100 font-normal leading-[28px] md:text-xl text-base">
          {cardTitle}
        </h4>
        <div className="bg-gray-200 h-6 px-5 gap-[6px] inline-flex justify-center items-center flex-shrink-0 rounded-[30px] cursor-pointer">
          <Link href="/articles">
            <span className="text-black-100 text-xs font-normal uppercase">
              see all {cardLabel}
            </span>
          </Link>
          <Image alt="vector" src={vectorIcon}></Image>
        </div>
      </div>
      <div className="flex lg:gap-[47px] gap-8 ml-4 lg:ml-0 md:flex-row flex-col md:flex-wrap">
        {data ? (
          data
            .slice(0, 6)
            .map((item, index) => <CardItem data={item} key={index} />)
        ) : (
          <>
            {Array.from({ length: 6 }, (_, index) => (
              <SkeletionCard
                width="352px"
                height="370px"
                radius="16px"
                key={index}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default ListCard;
