"use client";
import FormOtp from "@/views/Register/FormOtp";
import FormPanel from "@/views/Register/FormPanel";
import FormRegister from "@/views/Register/FormRegister";
import React, { useState } from "react";
import FormVerifyEmail from "./FormVerifyEmail";
import FormReceiveUpdate from "./FormReceiveUpdate";

const Register = () => {
  const [formState, setFormState] = useState("register");

  return (
    <div className={`max-w-[1200px] px-6  my-[140px] relative mx-auto  bg-transparent rounded-3xl`}>
      <div className="flex flex-col items-center relative">
        {formState === "register" && (
          <FormRegister setFormState={setFormState} />
        )}
        {formState === "verifyemail" && (
          <FormVerifyEmail setFormState={setFormState} />
        )}

        {formState === "otp" && <FormOtp setFormState={setFormState} />}
        {formState === "formRegister" && <FormPanel setFormState={setFormState}/>}
        {formState === "fromReceive" && <FormReceiveUpdate />}

      </div>
    </div>
  );
};

export default Register;
