import React from "react";
import { Metadata } from "next";
import ResetContainer from "@/views/ResetPassword/ResetContainer";

export const metadata: Metadata = {
  title: "Reset Password",
};

const ResetPassword = () => {
  return <ResetContainer />;
};

export default ResetPassword;
