"use client";
import FormOtp from "@/views/Register/FormOtp";
import FormPanel from "@/views/Register/FormPanel";
import FormRegister from "@/views/Register/FormRegister";
import React, { useState } from "react";
import FormVerifyEmail from "./FormVerifyEmail";
import FormReceiveUpdate from "./FormReceiveUpdate";

const Register = () => {
  const [formState, setFormState] = useState("register");
  const [mail, setMail] = useState({
    email: " ",
    password: "",
  });

  const handleMailChange = (key: string, value: string) => {
    setMail((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div
      className={`max-w-[1200px] px-6  my-[140px] relative mx-auto  bg-transparent rounded-3xl`}
    >
      <div className="flex flex-col items-center relative justify-center">
        {formState === "register" && (
          <FormRegister setFormState={setFormState} />
        )}

        {formState === "verifyemail" && (
          <FormVerifyEmail
            onMailChange={handleMailChange}
            setFormState={setFormState}
          />
        )}

        {/* {formState === "otp" && (
          <FormOtp email={mail.email} setFormState={setFormState} />
        )} */}
        {formState === "formRegister" && (
          <FormPanel
            email={mail.email}
            onMailChange={handleMailChange}
            setFormState={setFormState}
          />
        )}
        {formState === "fromReceive" && <FormReceiveUpdate detail={mail} />}
      </div>
    </div>
  );
};

export default Register;
