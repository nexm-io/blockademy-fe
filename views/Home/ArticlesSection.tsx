"use client";
import React, { useEffect } from "react";
import BlogsLoading from "@/components/Blogs/BlogsLoading";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectBlogs } from "@/redux/features/blogs/reducer";
import { loadBlogs } from "@/redux/features/blogs/action";
import Link from "next/link";
import Button from "@/components/Common/Button";
import { BlogDetailType } from "@/redux/features/blogs/type";
import Image from "next/image";
import { format, parseISO } from "date-fns";

const BlogItem = ({ blog }: { blog: BlogDetailType }) => {
  return (
    <div className="h-full flex flex-col group cursor-pointer">
      <div className="rounded overflow-hidden relative">
        <Image
          src={blog.image.original_image}
          className="w-full h-[246px] rounded object-cover group-hover:scale-105 transition-all duration-300"
          width={353}
          height={246}
          alt={blog.title}
        />
      </div>

      <div className="mt-4 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[12px] leading-[20px] text-[#616161] font-light">
            {format(parseISO(blog.created_at), "LLL d, yyyy")}
          </p>
          <h3 className="mt-[3px] text-xl text-black-400 font-normal line-clamp-2">
            {blog.title}
          </h3>
        </div>
        <div>
          <p className="text-[#616161] text-base font-light mt-[9px] line-clamp-2 h-[48px]">
            {blog.meta_description}
          </p>
          <Link
            href="/articles"
            className="mt-[21px] inline-block text-base font-light text-blue-100"
          >
            {`See more >>`}
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogSkeleton = () => {
  return (
    <div className="h-full flex flex-col group">
      <div className="rounded overflow-hidden relative">
        <div className="bg-gray-400/20 h-[200px] skeleton rounded"></div>
      </div>

      <div className="mt-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="skeleton bg-gray-400/20 h-[20px] w-[50px] rounded"></div>
          <div className="skeleton mt-[3px] bg-gray-400/20 h-[28px] rounded"></div>
        </div>
        <div className="mt-4">
          <div className="skeleton bg-gray-400/20 h-[16px] rounded"></div>
          <div className="skeleton mt-2 bg-gray-400/20 h-[16px] rounded"></div>
          <div className="skeleton mt-[21px] bg-gray-400/20 h-[24px] w-[70px] rounded"></div>
        </div>
      </div>
    </div>
  );
};

const ArticlesSection = () => {
  const blogsRx = useAppSelector(selectBlogs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBlogs({ page: 1, limit: 3 }));
  }, []);

  return (
    <section className="py-[60px] container">
      <h3 className="text-black-400 text-[40px] leading-[48px] font-bold text-center">
        Lastest Articles
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[66px] mt-10">
        {blogsRx.blogsLoading ? (
          <>
            {Array(3)
              .fill(0)
              .map((z, i) => (
                <BlogSkeleton key={i} />
              ))}
          </>
        ) : (
          blogsRx.data.map((blog) => <BlogItem blog={blog} key={blog.id} />)
        )}
      </div>
    </section>
  );
};

export default ArticlesSection;
