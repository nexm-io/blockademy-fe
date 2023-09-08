"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import arrow from "@/public/icons/arrowbottom.svg";
import CardItem from "@/components/CardItem";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";
import Dropdown from "@/components/Common/Dropdown";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getArticleCourse } from "@/redux/features/articles/action";
import { RootState } from "@/redux/store";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";

const options = [
  "Recently published",
  "Mostly viewed",
  "Recently published",
  "Recently updated",
];

const ArticleLists = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: RootState) => state.articles.data);
  const pagination = useAppSelector(
    (state: RootState) => state.articles.pagination
  );
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = Number(pagination?.per_page) || 1;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const handlePageClick = (event: any) => {
    const selectedPage = event.selected + 1;
    if (selectedPage < 1) {
      return;
    }
    const newOffset = (selectedPage - 1) * itemsPerPage;
    setItemOffset(newOffset);
    setPage(selectedPage);
  };
  const { push } = useRouter();

  useEffect(() => {
    dispatch(getArticleCourse({ page }));
  }, [dispatch, page]);

  return (
    <section>
      <div className="flex justify-between mt-[39px] mb-6 px-4">
        <h2 className="text-black-100 font-bold text-[23px] leading-8 ">
          Articles
        </h2>
        <div>
          <Dropdown options={options}>
            <Image alt="arrow-bottom" src={arrow}></Image>
          </Dropdown>
        </div>
      </div>
      <div className="grid md:grid-cols-3 md:gap-10 grid-cols-1 pl-4 gap-4">
        {data ? (
          data.map((item, index) => (
            <CardItem key={index} data={item} timeDuration="3mins" />
          ))
        ) : (
          <>
            <SkeletionCard width="352px" height="370px" radius="16px" />
            <SkeletionCard width="352px" height="370px" radius="16px" />
            <SkeletionCard width="352px" height="370px" radius="16px" />
            <SkeletionCard width="352px" height="370px" radius="16px" />
            <SkeletionCard width="352px" height="370px" radius="16px" />
            <SkeletionCard width="352px" height="370px" radius="16px" />
            <SkeletionCard width="352px" height="370px" radius="16px" />
            <SkeletionCard width="352px" height="370px" radius="16px" />
            <SkeletionCard width="352px" height="370px" radius="16px" />
            <SkeletionCard width="352px" height="370px" radius="16px" />
          </>
        )}
      </div>
      <div className="my-[60px]">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pagination?.total_pages || 1}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagination flex items-center justify-center md:gap-6 gap-4"
        />
      </div>
    </section>
  );
};

export default ArticleLists;
