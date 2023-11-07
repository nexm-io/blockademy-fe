"use client";

import { BlogDetailType } from "@/redux/features/blogs/type";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ blog }: { blog: BlogDetailType }) => {
  return (
    <Link href="#" className="flex flex-col justify-between group">
      <div className="flex flex-col gap-4">
        <div className="rounded overflow-hidden relative">
          <Image
            src={blog.image.big_image}
            className="w-full h-[246px] object-cover group-hover:scale-105 transition-all duration-300"
            width="0"
            height="0"
            alt={blog.title}
          />
          <div className="absolute top-7 left-8 flex items-center gap-2">
            {blog.tags.map((tag, index) => {
              if (index < 2)
                return (
                  <span
                    className="text-[11px] font-bold bg-black-500 rounded-full px-3 py-[6px] text-white-100 cursor-default"
                    key={tag.slug}
                  >
                    {tag.title}
                  </span>
                );
            })}
            <span className="text-[11px] font-bold bg-black-500 rounded-full px-3 py-[6px] text-white-100 cursor-default">
              + {blog.tags.length - 2}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs text-gray-300">
            {format(parseISO(blog.created_at), "LLL d, yyyy")}
          </p>
          <h4 className="text-lg font-bold line-clamp-2 min-h-[56px]">
            {blog.title}
          </h4>
        </div>
        <p className="text-xs text-black-100 line-clamp-2 min-h-[32px]">
          {blog.meta_description}
        </p>
      </div>
    </Link>
  );
};

export default BlogItem;
