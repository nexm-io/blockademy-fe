import GiftHeader from "@/components/GiftHeader";
import ArticleLists from "@/views/Articles/ArticleLists";
import TopicArticle from "@/views/Articles/TopicArticle";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article",
};

const Article = () => {
  return (
    <>
      <GiftHeader />
      <TopicArticle />
      <ArticleLists />
    </>
  );
};

export default Article;
