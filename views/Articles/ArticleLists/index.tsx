"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import arrow from "@/public/icons/arrowbottom.svg";
import CardItem from "@/components/CardItem";
import ReactPaginate from "react-paginate";
import Dropdown from "@/components/Common/Dropdown";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  getLatestArticle,
  getTrendingArticle,
} from "@/redux/features/articles/action";
import { RootState } from "@/redux/store";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
import { ArticleIntoData } from "@/redux/features/articles/type";

const options: ("Recently published" | "Mostly viewed")[] = [
  "Recently published",
  "Mostly viewed",
];

interface ArticleListsProps {
  status?: "list" | "menu";
  setStatus?: React.Dispatch<React.SetStateAction<"list" | "menu">>;
  choose?: string[] | undefined;
  setChoose?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  levelParam?: "beginner" | "intermediate" | "advance";
  setLevelParam?: React.Dispatch<
    React.SetStateAction<"beginner" | "intermediate" | "advance" | undefined>
  >;
  tagParam?: string[] | undefined;
  setTagParam?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  data?: ArticleIntoData[] | null;
}

const ArticleLists: React.FC<ArticleListsProps> = ({
  status,
  setStatus,
  data,
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dispatch = useAppDispatch();
  const dataTrending = useAppSelector(
    (state: RootState) => state.articles.dataTrending
  );
  const pagination = useAppSelector(
    (state: RootState) => state.articles.pagination
  );
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(15);
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
  const dataStatus = useAppSelector((state: RootState) => state.articles.data);

  const currentData =
    selectedOption === "Recently published" ? dataStatus || data : dataTrending;

  useEffect(() => {
    if (selectedOption === "Recently published") {
      dispatch(getLatestArticle({ limit, page }));
    } else if (selectedOption === "Mostly viewed") {
      dispatch(getTrendingArticle({ limit, page }));
    }
  }, [dispatch, page, selectedOption, limit]);

  return (
    <section>
      <div className="flex justify-between mt-[39px] mb-6 px-4">
        <h2 className="text-black-100 font-bold text-[23px] leading-8 ">
          Articles
        </h2>
        <div>
          <Dropdown
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          >
            <Image alt="arrow-bottom" src={arrow}></Image>
          </Dropdown>
        </div>
      </div>
      <div
        className={`${
          status === "list"
            ? "md:grid-cols-3 grid-cols-1 gap-4"
            : status === "menu"
            ? "grid-cols-1 md:gap-4 gap-8"
            : ""
        } grid md:gap-10 pl-4 `}
      >
        {currentData ? (
          currentData.map((item, index) => (
            <CardItem
              key={index}
              data={item}
              status={status}
              setStatus={setStatus}
              topic={false}
            />
          ))
        ) : (
          <>
            {Array.from({ length: 15 }, (_, index) => (
              <SkeletionCard
                key={index}
                width="352px"
                height="370px"
                radius="16px"
              />
            ))}
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
