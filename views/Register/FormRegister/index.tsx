"use client";
import React, { useState } from "react";
import Button from "@/components/Common/Button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "@/components/Common/Input";
import human from "@/public/icons/human.svg";
import googleIcon from "@/public/icons/google.svg";
import registerbg from "@/public/icons/registerbg.svg";
import apple from "@/public/icons/apple.svg";
import Link from "next/link";
import InfoGraphic from "../InfoGraphic";
interface FormRegisterProps {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
}

const FormRegister: React.FC<FormRegisterProps> = ({ setFormState }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setFormState("verifyemail");
    }, 3000);
  };

  return (
    <div className="w-full mt-4">
      <div className="flex flex-col lg:flex-row gap-[80px] justify-center items-center">
        <div className="">
          <div>
            <h1 className="text-[30px] leading-10 font-bold mb-10">
              Welcome to Blockademy!
            </h1>
            {isSubmitting ? (
              <>
                <Button
                  label="Sign Up With Email"
                  type="button"
                  disabled={true}
                  className=" bg-gray-300 text-white-100 flex items-center justify-start py-3 px-6 w-[336px] rounded-[4px] text-white-100 rounded min-h-[24px] min-w-[80px] "
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 text-white animate-spin ml-3"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
              </>
            ) : (
              <div className="prose h-12">
                <Button
                type="submit"
                onClick={handleSignup}
                className="flex h-12 items-center justify-start py-3 h-12 px-6 w-[336px] rounded-[4px] text-white-100 bg-blue-100 rounded min-h-[24px] min-w-[80px] btn__contain-shadow"
             >
                <Image alt="human" src={human} className="" />
                <span className="flex-1">Sign Up With Email</span>
              </Button>
              </div>
            )}
          </div>

          <div className="flex w-full items-center justify-center my-[15px]">
            <hr className="border w-full border-white-300/80 "></hr>
            <hr className="border w-full border-white-300/80 "></hr>
          </div>

          <div className=" space-y-4 text-sm mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?  
              <Link href="/login">
                <span className="text-blue-100 hover:underline cursor-pointer">Log In</span>
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
