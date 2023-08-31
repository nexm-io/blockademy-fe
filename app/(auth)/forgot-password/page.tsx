import React from "react";
import ForgotContainer from "@/views/ForgotPassword/ForgotContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
};

const ForgotPassword = () => {
  return <ForgotContainer />;
};

export default ForgotPassword;
