"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import article from "@/public/images/home/home-4.png";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import user from "@/public/icons/usersuccess.svg";
import { ExclamationCircle } from "@styled-icons/heroicons-outline";
import {
  getAuthorPost,
  getAuthorProfile,
  getListAuthor,
} from "@/redux/features/authors/action";
import { usePathname } from "next/navigation";
import { getLastPathName } from "@/utils/getPathName";
import ReactPaginate from "react-paginate";
import { Exclamation } from "@/components/Icon";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
import { Clock } from "@styled-icons/fa-regular";
import { format, isBefore, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";

const AuthorDetail = () => {
  const [limitUser] = useState<number>(10);
  const [limitPost] = useState<number>(2);
  const [page, setPage] = useState<number>(1);
  const [itemOffset, setItemOffset] = useState(0);
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const authorProfile = useAppSelector((state) => state.author.dataProfile);
  const authorPost = useAppSelector((state) => state.author.dataPost);
  const isLoading = useAppSelector((state) => state.author.isLoading);
  const listAuthor = useAppSelector((state) => state.author.data);
  const pagination = useAppSelector((state) => state.author.pagination);
  const itemsPerPage = Number(pagination?.per_page) || 1;

  useEffect(() => {
    dispatch(getAuthorProfile(getLastPathName(pathname)));
    dispatch(getListAuthor({ limit: 10 }));
  }, [dispatch, pathname, limitUser, page]);
  useEffect(() => {
    dispatch(
      getAuthorPost({ slug: getLastPathName(pathname), page, limit: limitPost })
    );
  }, [dispatch, pathname, limitPost, page]);

  const handlePageClick = (event: any) => {
    const selectedPage = event.selected + 1;
    if (selectedPage < 1) {
      return;
    }
    const newOffset = (selectedPage - 1) * itemsPerPage;
    setItemOffset(newOffset);
    setPage(selectedPage);
  };
  return (
    <div className="mt-4 max-w-[1440px] pt-8">
      {isLoading ? (
        <>
          <SkeletionCard height="40px" width="350px" radius="999px" />
          <div className="flex justify-between">
            {/* Left */}
            <div className="flex flex-col gap-6 mt-6">
              {Array.from({ length: 4 }, (_, index) => (
                <div
                  className="flex bg-white w-[755px] h-[200px] shadow-3xl rounded-lg"
                  key={index}
                >
                  <SkeletionCard height="200px" width="280px" radius="8px" />
                  <>
                    <div className="flex flex-col justify-between gap-4  px-4">
                      <SkeletionCard
                        height="35px"
                        width="450px"
                        radius="8px"
                        className="mt-4 ml-4"
                      />
                      <div className="flex flex-col gap-2">
                        <SkeletionCard
                          height="20px"
                          width="450px"
                          radius="8px"
                          className="ml-4"
                        />
                        <SkeletionCard
                          height="20px"
                          width="350px"
                          radius="8px"
                          className="ml-4"
                        />
                      </div>
                      <SkeletionCard
                        height="30px"
                        width="110px"
                        radius="8px"
                        className="self-end ml-4 mb-4"
                      />
                    </div>
                  </>
                </div>
              ))}
            </div>
            {/* Right */}
            <div className="w-[325px]">
              <div className="flex items-center gap-6">
                <SkeletionCard height="90px" width="90px" radius="999px" />
                <div className="flex flex-col gap-4">
                  <SkeletionCard height="35px" width="150px" radius="999px" />
                  <SkeletionCard height="25px" width="100px" radius="999px" />
                </div>
              </div>
              <div className="flex flex-col gap-6 bg-gray-400 bg-opacity-10 p-6 rounded-lg mt-10">
                <SkeletionCard height="30px" width="150px" radius="999px" />
                <div className="flex items-center gap-4 other__authors--underline relative">
                  <SkeletionCard height="60px" width="60px" radius="999px" />
                  <SkeletionCard height="30px" width="100px" radius="999px" />
                </div>

                <div className="flex items-center gap-4 other__authors--underline relative">
                  <SkeletionCard height="60px" width="60px" radius="999px" />
                  <SkeletionCard height="30px" width="100px" radius="999px" />
                </div>

                <div className="flex items-center gap-4 other__authors--underline relative">
                  <SkeletionCard height="60px" width="60px" radius="999px" />
                  <SkeletionCard height="30px" width="100px" radius="999px" />
                </div>

                <div className="flex items-center gap-4 other__authors--underline relative">
                  <SkeletionCard height="60px" width="60px" radius="999px" />
                  <SkeletionCard height="30px" width="100px" radius="999px" />
                </div>

                <div className="flex items-center gap-4 other__authors--underline relative">
                  <SkeletionCard height="60px" width="60px" radius="999px" />
                  <SkeletionCard height="30px" width="100px" radius="999px" />
                </div>

                <SkeletionCard
                  height="30px"
                  width="150px"
                  radius="999px"
                  className="self-center mt-6 mb-2"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col-reverse md:flex-row gap-6 justify-between">
          {/* Left */}
          <div className="flex flex-col gap-6 basis-[765px]">
            <div className="flex gap-2 items-center ml-2 md:ml-0">
              <div className="w-6 h-2 rounded-lg bg-blue-100"></div>
              <h2 className="text-[32px] font-bold ">All posts by author</h2>
            </div>
            {authorPost?.map((item) => (
              <Link href={`/articles/${item?.slug}`} key={item.id}>
                <div className="flex flex-col md:flex-row gap-4 rounded-lg shadow-4xl cursor-pointer hover:shadow-3xl transition duration-200 ease-linear md:mx-0 mx-4">
                  <div className="h-[170px] md:basis-[300px] basis-[200px]">
                    <Image
                      alt="article-img"
                      width={300}
                      height={170}
                      src={
                        item.image
                          ? item.image.original_image
                          : item.image === ""
                          ? article
                          : article
                      }
                      className="rounded-md md:w-[300px] md:h-[170px] w-full h-[200px] object-fill"
                    ></Image>
                  </div>
                  <div className="flex flex-col gap-4 basis-[58%] p-3 justify-around">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-lg leading-6 line-clamp-1 cursor-pointer">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Clock className={`w-3 h-3 text-gray-300`} />
                        <span className="text-gray-300 text-sm">
                          {format(
                            new Date(item.created_at * 1000),
                            "dd/MM/yyyy",
                            {
                              locale: enUS,
                            }
                          )}
                        </span>
                      </div>
                      <p className="font-normal text-sm leading-6 line-clamp-2 text__spacing">
                        {item.title}
                      </p>
                    </div>

                   
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="w-[325px] h-full rounded-lg md:mt-12 mt-0 basis-[325px] mx-auto md:mx-0">
            {/* Author  */}
            <div className="flex gap-4 rounded-lg items-center">
              <div className="w-[98px] h-[98px] basis-[98px]">
                <Image
                  alt="avatar-author"
                  width={98}
                  height={98}
                  src={authorProfile?.profile_image || user}
                  className="rounded-full w-[98px] h-[98px] object-fill"
                ></Image>
              </div>
              <div className="flex gap-2 flex-col basis-[214px]">
                <h2 className="text-[28px] font-bold leading-9 text-black-100 line-clamp-2">
                  {authorProfile?.name}
                </h2>
                <div className="flex gap-4">
                  <p className="text-sm font-normal leading-5 text-gray-300">
                    Posts:{" "}
                    <span className="text-black-100 font-medium">
                      {authorProfile?.total_post}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Other authors */}
            <div className="flex flex-col mt-10 gap-6 p-6 rounded-lg bg-gray-400 bg-opacity-20">
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold leading-7">
                    Other authors
                  </h2>
                </div>
              </div>
              {listAuthor?.map((item) => (
                <>
                  <Link
                    href={`/authors/${item.slug}`}
                    className="flex gap-4 items-center relative other__authors--underline"
                  >
                    <div className="w-[60px] h-[60px] basis-[60px]">
                      <Image
                        alt="avatar"
                        src={
                          item.image ? item.image.original_image || user : user
                        }
                        width={60}
                        height={60}
                        className="w-full h-full object-cover rounded-full"
                      ></Image>
                    </div>
                    <div className="basis-[200px] flex justify-between">
                      <Link href={`/authors/${item.slug}`}>
                        <span className="text-black-100 text-sm leading-6 font-medium">
                          {item.first_name} {item.last_name}
                        </span>
                      </Link>
                      <span className="text-gray-300 text-sm leading-6 font-normal">
                        {item.total_post} posts
                      </span>
                    </div>
                  </Link>
                </>
              ))}

              <div className="text-center my-4">
                <Link
                  href="/authors"
                  className="hover:underline text-blue-100 font-bold"
                >
                  More &#62;
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isLoading && (
        <div className="mt-[60px]">
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
      )}
    </div>
  );
};

export default AuthorDetail;
