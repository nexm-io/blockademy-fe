"use client";
import React, { useState } from "react";
import FormForgot from "@/views/ForgotPassword/FormForgot";
import FormSendMail from "@/views/ForgotPassword/FormSendMail";

const ForgotPassword = () => {
  const [formState, setFormState] = useState("forgot-password");

  return (
    <div className="max-w-[1200px] px-6 md:w-[405px] w-[350px] my-[140px] mx-auto border border-black-100 rounded-3xl">
      {formState === "forgot-password" && (
        <FormForgot setFormState={setFormState} />
      )}
      {formState === "formsendmail" && (
        <FormSendMail setFormState={setFormState} />
      )}
    </div>
  );
};

export default ForgotPassword;
