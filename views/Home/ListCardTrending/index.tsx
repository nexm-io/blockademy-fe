"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import vectorIcon from "@/public/icons/arrowright.svg";
import CardItem from "@/components/CardItem";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { getTrendingArticle } from "@/redux/features/articles/action";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";

interface ListCardProps {
  cardTitle: string;
  cardLabel: string;
  mTop?: string;
  urlApi?: string;
}

const ListCardTrending: React.FC<ListCardProps> = ({
  cardTitle,
  cardLabel,
  mTop,
  urlApi,
}) => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(
    (state: RootState) => state.articles.dataTrending
  );

  useEffect(() => {
    dispatch(getTrendingArticle({ params: urlApi }));
  }, [dispatch, urlApi]);

  return (
    <section className={`${mTop}`}>
      <div className="flex justify-between lg:mb-[40px] mb-4 items-center mx-4 lg:mx-0">
        <h4 className="text-black-100 font-normal leading-[28px] md:text-xl text-base">
          {cardTitle}
        </h4>
        <div className="bg-gray-200 h-6 px-5 gap-[6px] inline-flex justify-center items-center flex-shrink-0 rounded-[30px] cursor-pointer">
          <span className="text-black-100 text-xs font-normal uppercase">
            see all {cardLabel}
          </span>
          <Image alt="vector" src={vectorIcon}></Image>
        </div>
      </div>
      <div className="flex lg:gap-[47px] gap-8 ml-4 lg:ml-0 md:flex-row flex-col md:flex-wrap">
        {data ? (
          data
            .slice(0, 3)
            .map((item, index) => <CardItem data={item} key={index} />)
        ) : (
          <>
            <SkeletionCard width="352px" height="370px" radius="16px" />
            <SkeletionCard width="352px" height="370px" radius="16px" />
            <SkeletionCard width="352px" height="370px" radius="16px" />
          </>
        )}
      </div>
    </section>
  );
};

export default ListCardTrending;
