"use client";
import BlogItem from "@/components/Blogs/BlogItem";
import React, { useEffect } from "react";
import BlogsLoading from "./BlogsLoading";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectBlogs } from "@/redux/features/blogs/reducer";
import { loadBlogs } from "@/redux/features/blogs/action";
import Link from "next/link";
import Button from "../Common/Button";

const Blogs = () => {
  const blogsRx = useAppSelector(selectBlogs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBlogs({ page: 1, limit: 3 }));
  }, []);

  return (
    <div className="mt-10 sm:mt-20 w-full">
      <h2 className="text-center text-3xl sm:text-[40px] font-bold sm:leading-[52px] mb-8 sm:mb-[52px]">
        Blockademy Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogsRx.blogsLoading ? (
          <BlogsLoading />
        ) : (
          <>
            {blogsRx.data.map((blog) => (
              <BlogItem blog={blog} key={blog.id} />
            ))}
          </>
        )}
      </div>
      <Link href="/articles" className="flex justify-center mt-14">
        <Button>View More</Button>
      </Link>
    </div>
  );
};

export default Blogs;
