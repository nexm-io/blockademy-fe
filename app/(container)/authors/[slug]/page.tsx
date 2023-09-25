import GiftHeader from "@/components/GiftHeader";
import NoSignal from "@/components/NoSignal";
import AuthorDetail from "@/views/Authors/AuthorDetail";
import React from "react";
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
