"use client";
import React, { useState } from "react";
import TopicAcademy from "../TopicAcademy";
import ArticleFilter from "../ArticleFilter";
import ArticleLists from "../ArticleLists";

const ArticlePage = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState<"list" | "menu">("list");

  return (
    <section>
      <TopicAcademy show={show} setShow={setShow} />
      <ArticleFilter
        show={show}
        setShow={setShow}
        status={status}
        setStatus={setStatus}
      />
      <ArticleLists status={status} setStatus={setStatus} />
    </section>
  );
};

export default ArticlePage;
