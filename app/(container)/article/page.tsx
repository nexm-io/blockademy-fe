import GiftHeader from "@/components/GiftHeader";
import ArticleLists from "@/views/Articles/ArticleLists";
import ArticlePage from "@/views/Articles/ArticlePage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article",
};

const Article = () => {
  return (
    <>
      <GiftHeader />
      <ArticlePage />
    </>
  );
};

export default Article;
