import ArticlePage from "@/views/Articles/ArticlePage";
import React from "react";
import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "Articles",
};

const Article = () => {
  return (
    <PageContainer>
      <ArticlePage />
    </PageContainer>
  );
};

export default Article;
