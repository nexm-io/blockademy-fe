"use client";
import { UserArticle } from "@/redux/features/articles/type";
import { formatDateSlash } from "@/utils/formatDate";
import Link from "next/link";
import React from "react";

export default function ArticlesSection({
  sections,
  id,
  author,
  date,
}: {
  sections: any;
  id?: any;
  date: string;
  author?: UserArticle;
}) {
  return (
    <div className="mt-6 md:px-0 ">
      <div
        className="article_content block gap-3 text-base"
        dangerouslySetInnerHTML={{ __html: sections }}
      />
      <div className="flex gap-2 text-base mt-6">
        <h2 className="font-semibold">
          <Link
            href={`/authors/${author?.slug}`}
            className="text-black-100 font-semibold "
          >
            {author?.first_name} {author?.last_name}
          </Link>
        </h2>
        <p className="text-gray-500"> - {formatDateSlash(date)}</p>
      </div>
    </div>
  );
}
