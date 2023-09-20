"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img from "@/public/icons/usersuccess.svg";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getListAuthor } from "@/redux/features/authors/action";
import ReactPaginate from "react-paginate";

const AuthorList = () => {
  const dispatch = useAppDispatch();
  const listAuthor = useAppSelector((state) => state.author.data);
  const is_loading = useAppSelector((state) => state.author.isLoading);
  const pagination = useAppSelector((state) => state.author.pagination);
  const itemsPerPage = Number(pagination?.per_page) || 1;
  const [itemOffset, setItemOffset] = useState(0);
  const [limit] = useState<number>(5);
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
    dispatch(getListAuthor({page, limit}));
  }, [dispatch]);

  console.log(listAuthor);

  return (
    <div className="md:mt-[56px] mt-8 min-h-screen flex flex-col justify-between">
      {is_loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="w-full flex justify-between text-black-100 font-bold md:text-[37px] text-3xl mb-10 px-4 md:px-0 relative before:bg-blue-100 before:w-8 before:h-1 rounded-full before:content-[] before:absolute before:block">
            <span className="font-semibold">Author</span>
            
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
                          src={author.image || img}
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
                    <span className="text-blue-100 text-sm font-light cursor-pointer">
                      View detail
                    </span>
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
                className="pagination flex items-center justify-center md:gap-6 gap-4"
              />
            </div>
    </div>
  );
};

export default AuthorList;
