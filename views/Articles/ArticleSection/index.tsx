"use client";
import React from "react";

export default function ArticlesSection({ sections, id }: any) {
  return (
    <div className="mt-6 md:px-0 ">
       <div
            className="article_content flex flex-col gap-3 text-base"
            dangerouslySetInnerHTML={{ __html: sections }}
          />
    </div>
  );
}
