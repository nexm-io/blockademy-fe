"use client";
import FormOtp from "@/views/Register/FormOtp";
import FormPanel from "@/views/Register/FormPanel";
import FormRegister from "@/views/Register/FormRegister";
import Image from "next/image";
import logoBanner from "@/public/images/home/logo-footer.png"
import React, { useState } from "react";

const Register = () => {
  const [formState, setFormState] = useState("register");

  return (
    <div className="max-w-[1200px] px-6 w-[500px] my-[140px] relative mx-auto border border-blue-300 bg-transparent rounded-3xl">
      <div className="flex flex-col items-center relative">
        <h2 className="mt-[40px] text-[#0D1C68] text-[18px] font-medium leading-6">
          Sign up to your Academy account
        </h2>
        {formState === "register" && (
          <FormRegister setFormState={setFormState} />
        )}

        {formState === "otp" && <FormOtp setFormState={setFormState} />}
        {formState === "formRegister" && <FormPanel />}
      </div>
    </div>
  );
};

export default Register;
