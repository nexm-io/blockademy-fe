"use client";
import React, { useState } from "react";
import TopicAcademy from "../TopicAcademy";
import ArticleFilter from "../ArticleFilter";
import ArticleLists from "../ArticleLists";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

const ArticlePage = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState<"list" | "menu">("list");
  const [time, setTime] = useState<number[]>([]);
  const [choose, setChoose] = useState<string[] | undefined>(undefined);
  const [levelParam, setLevelParam] = useState<
    "beginner" | "intermediate" | "advance" | undefined
  >(undefined);
  const [tagParam, setTagParam] = useState<string[] | undefined>(undefined);
  const [page] = useState<number>(1);
  const [limit] = useState<number>(20);
  const data = useAppSelector((state: RootState) => state.articles.data);
  const [sliderOneValue, setSliderOneValue] = useState<number>(0);
  const [sliderTwoValue, setSliderTwoValue] = useState<number>(80);
  return (
    <section>
      <TopicAcademy
        show={show}
        setShow={setShow}
        status={status}
        setStatus={setStatus}
        levelParam={levelParam}
        setLevelParam={setLevelParam}
        tagParam={tagParam}
        setTagParam={setTagParam}
        page={page}
        limit={limit}
        choose={choose}
        setChoose={setChoose}
        time={time}
        setTime={setTime}
        sliderOneValue={sliderOneValue}
        setSliderOneValue={setSliderOneValue}
        sliderTwoValue={sliderTwoValue}
        setSliderTwoValue={setSliderTwoValue}
      />
      <ArticleFilter
        show={show}
        setShow={setShow}
        status={status}
        setStatus={setStatus}
        levelParam={levelParam}
        setLevelParam={setLevelParam}
        tagParam={tagParam}
        setTagParam={setTagParam}
        choose={choose}
        setChoose={setChoose}
        time={time}
        setTime={setTime}
        sliderOneValue={sliderOneValue}
        setSliderOneValue={setSliderOneValue}
        sliderTwoValue={sliderTwoValue}
        setSliderTwoValue={setSliderTwoValue}
      />
      <ArticleLists
        data={data}
        show={show}
        setShow={setShow}
        status={status}
        setStatus={setStatus}
        levelParam={levelParam}
        setLevelParam={setLevelParam}
        tagParam={tagParam}
        setTagParam={setTagParam}
      />
    </section>
  );
};

export default ArticlePage;
