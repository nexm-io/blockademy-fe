import GiftHeader from "@/components/GiftHeader";
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
