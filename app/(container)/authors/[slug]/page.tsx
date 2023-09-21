"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import article from "@/public/images/home/home-4.png";
import article2 from "@/public/images/home/home-1.png";
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

const AuthorDetail = () => {
  const [limit] = useState<number>(5);
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const authorProfile = useAppSelector((state) => state.author.dataProfile);
  const authorPost = useAppSelector((state) => state.author.dataPost);
  const isLoading = useAppSelector((state) => state.author.isLoading);
  const listAuthor = useAppSelector((state) => state.author.data);

  const pathname = usePathname();
  useEffect(() => {
    dispatch(getAuthorProfile(getLastPathName(pathname)));
    dispatch(getListAuthor({ page, limit }));
  }, [dispatch, pathname, limit, page]);
  useEffect(() => {
    dispatch(getAuthorPost(getLastPathName(pathname)));
  }, [dispatch, pathname]);

  return (
    <div className="mt-[74px] max-w-[1440px]  py-8">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex gap-6 justify-between">
          {/* Left */}
          <div className="flex flex-col gap-6 basis-[755px]">
            <div className="flex gap-2 items-center">
              <div className="w-6 h-2 rounded-lg bg-blue-100"></div>
              <h2 className="text-[32px] font-bold leading-7 mb-2">
                All post of author
              </h2>
            </div>
            {authorPost?.map((item) => (
              <div key={item.id}>
                <div className="flex gap-4 rounded-lg shadow-4xl cursor-pointer hover:shadow-3xl transition duration-200 ease-linear">
                  <div className="h-[200px] basis-[280px]">
                    <Image
                      alt="article-img"
                      width={280}
                      height={200}
                      src={item.image.original_image || article}
                      className="rounded-md w-full h-full object-fill"
                    ></Image>
                  </div>
                  <div className="flex flex-col gap-4 basis-[58%] justify-around">
                    <h3 className="font-semibold text-lg leading-6 line-clamp-2 cursor-pointer">
                      {item.title}
                    </h3>
                    <p className="font-normal text-sm leading-6 line-clamp-3 text__spacing">
                      {item.title}
                    </p>
                    <div className="self-end">
                      <ExclamationCircle size={20} className="text-blue-100" />{" "}
                      <span className="text-blue-100 text-sm font-normal">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Right */}
          <div className="w-[325px] h-full rounded-lg mt-8 basis-[325px]">
            {/* Author  */}
            <div className="flex gap-4 rounded-lg items-center">
              <div className="w-[98px] h-[98px] ">
                <Image
                  alt="avatar-author"
                  width={98}
                  height={98}
                  src={authorProfile?.profile_image || user}
                  className="rounded-full w-full h-full object-contain"
                ></Image>
              </div>
              <div className="flex gap-2 flex-col ">
                <h2 className="text-[28px] font-bold leading-9 text-black-100">
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
                    <div className="w-[60px] h-[60px]">
                      <Image
                        alt="avatar"
                        src={item.image.original_image || user}
                        width={60}
                        height={60}
                        className="w-full h-full object-cover rounded-full"
                      ></Image>
                    </div>
                    <Link href={`/authors/${item.slug}`}>
                      <span className="text-black-100 text-sm leading-6 font-medium">
                        {item.first_name} {item.last_name}
                      </span>
                    </Link>
                  </Link>
                </>
              ))}

              <div className="text-center my-4">
                <Link
                  href="/authors"
                  className="hover:underline text-blue-100 font-bold"
                >
                  View more &#62;
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthorDetail;
