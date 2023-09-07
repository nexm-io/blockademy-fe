"use client";
import React, { useState } from "react";
import TopicAcademy from "../TopicAcademy";
import ArticleFilter from "../ArticleFilter";
import ArticleLists from "../ArticleLists";

const ArticlePage = () => {
  const [show, setShow] = useState(true);
  return (
    <section>
      <TopicAcademy show={show} setShow={setShow} />
      <ArticleFilter show={show} setShow={setShow} />
      <ArticleLists />
    </section>
  );
};

export default ArticlePage;
