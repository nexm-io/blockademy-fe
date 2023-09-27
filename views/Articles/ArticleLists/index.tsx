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
  getRecommendArticle,
  getTrendingArticle,
} from "@/redux/features/articles/action";
import { RootState } from "@/redux/store";
import { ArticleIntoData } from "@/redux/features/articles/type";
import CardItemSkeleton from "@/components/CardItemSkeleton";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

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
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dispatch = useAppDispatch();
  const dataTrending = useAppSelector(
    (state: RootState) => state.articles.dataTrending
  );
  const dataRecommend = useAppSelector(
    (state: RootState) => state.articles.dataRecommend
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
    selectedOption === "Recently published" ? dataStatus || data : dataStatus;

  const pathname = useSearchParams();
  const getTag = pathname.get("tag");

  useEffect(() => {
    let fetchAction, params;
    
    switch (type) {
      case "Trending":
        fetchAction = getTrendingArticle;
        params =
          selectedOption === "Recently published" ? "created_at" : "total_hit";

        break;
      case "Recommend":
        fetchAction = getRecommendArticle;
        params =
          selectedOption === "Recently published" ? "created_at" : "total_hit";
        break;
      default:
        fetchAction = getLatestArticle;
        params = selectedOption === "Mostly viewed" ? "total_hit" : undefined;
    }

    if (getTag) {
      dispatch(fetchAction({ limit, page, params, tags: getTag }));
    } else {
      dispatch(fetchAction({ limit, page, params }));
    }
  }, [dispatch, page, selectedOption, limit, type, getTag]);

  return dataStatus?.length === 0 ||
    dataTrending?.length === 0 ||
    dataRecommend?.length === 0 ? (
    <div className="flex items-center justify-center my-[60px]">
      <p className="text-gray-300 text-xl font-medium">No articles found</p>
    </div>
  ) : (
    <section>
      <div className="flex justify-between mt-[39px] mb-6 px-4">
        <h2 className="text-black-100 font-bold text-[23px] leading-8 ">
          Articles {`(${dataStatus && dataStatus.length})`}
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
            ? "lg:grid-cols-3 grid-cols-1 gap-4 md:grid-cols-2"
            : status === "menu"
            ? "grid-cols-1 md:gap-6 lg:gap-8"
            : ""
        } grid lg:gap-10 md:gap-y-8 lg:gap-y-auto pl-4 `}
      >
        {type === "Trending" && dataTrending ? (
          dataTrending.map((item, index) => (
            <CardItem
              key={index}
              data={item}
              status={status}
              setStatus={setStatus}
              topic={false}
            />
          ))
        ) : type === "Recommend" && dataRecommend ? (
          dataRecommend.map((item, index) => (
            <CardItem
              key={index}
              data={item}
              status={status}
              setStatus={setStatus}
              topic={false}
            />
          ))
        ) : currentData ? (
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
              <CardItemSkeleton key={index} />
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
