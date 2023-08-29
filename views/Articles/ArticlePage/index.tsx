import React from "react";
import TopicAcademy from "../TopicAcademy";
import ArticleFilter from "../ArticleFilter";
import ArticleLists from "../ArticleLists";

const ArticlePage = () => {
  return (
    <section>
      <TopicAcademy />
      <ArticleFilter />
      <ArticleLists />
    </section>
  );
};

export default ArticlePage;
