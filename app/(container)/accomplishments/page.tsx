import React from "react";
import Accomplishments from "@/views/Rewards/ListRewards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accomplishments",
};

const AccomplishmentsPage = () => {
  return <Accomplishments />;
};

export default AccomplishmentsPage;
