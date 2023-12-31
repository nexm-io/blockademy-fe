"use client";
import React, { useState } from "react";
import Button from "@/components/Common/Button";
import Link from "next/link";
import InfoGraphic from "../InfoGraphic";
interface FormRegisterProps {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
}

const FormRegister: React.FC<FormRegisterProps> = ({ setFormState }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = () => {
    setIsSubmitting(true);
    setFormState("formRegister");
  };

  return (
    <div className="w-full mt-4">
      <div className="flex flex-col lg:flex-row gap-[80px] justify-center items-center">
        <div className="">
          <div className="">
            <h1 className="text-[30px] leading-10 font-bold mb-10">
              Welcome to Blockademy!
            </h1>
            <Button
              fullWidth
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
              onClick={handleSignup}
            >
              Sign Up
            </Button>
          </div>

          <div className="flex w-full items-center justify-center my-[15px]">
            <hr className="border w-full border-white-300/80 "></hr>
            <hr className="border w-full border-white-300/80 "></hr>
          </div>

          <div className=" space-y-4 text-sm mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?  
              <Link href="/login">
                <span className="text-blue-100 hover:underline cursor-pointer">
                  Log In
                </span>
              </Link>
            </p>
          </div>
        </div>
        <InfoGraphic />
      </div>
    </div>
  );
};

export default FormRegister;
