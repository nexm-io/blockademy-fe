"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img from "@/public/icons/usersuccess.svg";
import detail from "@/public/icons/detail.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getListAuthor } from "@/redux/features/authors/action";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";

const AuthorList = () => {
  const dispatch = useAppDispatch();
  const listAuthor = useAppSelector((state) => state.author.data);
  const is_loading = useAppSelector((state) => state.author.isLoading);
  const pagination = useAppSelector((state) => state.author.pagination);
  const itemsPerPage = Number(pagination?.per_page) || 1;
  const [itemOffset, setItemOffset] = useState(0);
  const [limit] = useState<number>(12);
  const [page, setPage] = useState<number>(1);

  const handlePageClick = (event: any) => {
    const selectedPage = event.selected + 1;
    if (selectedPage < 1) {
      return;
    }
    const newOffset = (selectedPage - 1) * itemsPerPage;
    setItemOffset(newOffset);
    setPage(selectedPage);
  };

  useEffect(() => {
    dispatch(getListAuthor({ page, limit }));
  }, [dispatch, limit, page]);

  return (
    <div className="md:mt-10 mt-4 min-h-screen flex flex-col justify-between">
      {is_loading ? (
        <div className="mt-2 ">
          <SkeletionCard
            height="40px"
            width="180px"
            radius="999px"
            className="mb-10"
          />
          <div className="grid grid-cols-4 gap-5">
            {Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                className="w-[275px] h-[300px] shadow-lg flex justify-center border border-gray-200 rounded-lg"
              >
                <div
                  key={index}
                  className="flex flex-col items-center justify-between pt-8"
                >
                  <SkeletionCard height="100px" width="100px" radius="999px" />
                  <div className="flex flex-col items-center gap-2">
                    <SkeletionCard height="30px" width="150px" radius="999px" />
                    <SkeletionCard height="30px" width="120px" radius="999px" />
                  </div>
                  <SkeletionCard
                    height="30px"
                    width="110px"
                    radius="999px"
                    className="mb-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex gap-6 flex-col justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-6 h-2 rounded-lg bg-blue-100"></div>
            <h2 className="text-[32px] font-bold ">Authors</h2>
          </div>

          <div className="grid grid-cols-4 gap-5">
            {listAuthor && listAuthor.length > 0 ? (
              listAuthor.map((author, index) => (
                <>
                  <div
                    key={index}
                    className="flex flex-col items-center justify-between h-[300px] gap-3 pb-4 pt-8 bg-white-100 shadow-lg hover:shadow-3xl rounded-lg border border-gray-200 mb-4"
                  >
                    <div className="flex flex-col items-center justify-between gap-3">
                      <div className="w-[120px] h-[120px] rounded-full border border-[#D9D9D9]">
                        <Image
                          alt="author"
                          src={author.image.original_image || img}
                          width={120}
                          height={120}
                          className="flex rounded-full w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-[24px] font-semibold truncate max-w-[240px]">
                          {author.first_name + " " + author.last_name}
                        </p>
                        <div className="flex gap-4">
                          <span className="text-xs text-[#727A88] leading-[18px]">
                            Total posts:{" "}
                            <span className="text-black-300">
                              {author.total_post}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      className="flex gap-2"
                      href={`/authors/${author.slug}`}
                    >
                      <Image alt="detail" src={detail} width={16} height={16} />
                      <span className="text-blue-100 text-sm font-light cursor-pointer">
                        View Details
                      </span>
                    </Link>
                  </div>
                </>
              ))
            ) : (
              <div className="">Dont have any authors</div>
            )}
          </div>
        </div>
      )}
      <div className="">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pagination?.total_pages || 1}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagination flex items-center justify-center md:gap-6 gap-4 mt-[40px]"
        />
      </div>
    </div>
  );
};

export default AuthorList;
