import GiftHeader from "@/components/GiftHeader";
import NoSignal from "@/components/NoSignal";
import AuthorDetail from "@/views/Authors/AuthorDetail";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Author Details",
};
const AuthorDetailPage = () => {
  return (
    <>
      <GiftHeader />
      <AuthorDetail />
      <NoSignal />
    </>
  );
};

export default AuthorDetailPage;
