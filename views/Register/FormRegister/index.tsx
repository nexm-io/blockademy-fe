"use client";
import React from "react";
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
interface FormRegisterProps {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
}

const schema = Yup.object({
  email: Yup.string()
    .required("Please enter your email address")
    .email("Incorrect email format")
    .trim()
    .min(8, "Length from 8 - 160 characters")
    .max(160, "Length from 8 - 160 characters"),
});

const FormRegister: React.FC<FormRegisterProps> = ({ setFormState }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (e: any) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
        console.log("onSubmit called:", e);
        setFormState("verifyemail");
      }, 3000);
    });
  };

  return (
    <div className="w-full mt-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <div className="">
          <div>
            <h1>Welcome to Binance!</h1>
            <Button className="flex items-center text-white-100 bg-blue-100 rounded min-h-[24px] min-w-[80px] text-dark-300">
              <Image alt="human" src={human} className="" />
              <span>Sign Up With Email or Phone</span>
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button className="flex items-center text-white-100 bg-white-300 rounded min-h-[24px] min-w-[80px] text-dark-300">
              <Image alt="human" src={googleIcon} className="" />
              <span>Continue with Google</span>
            </Button>
            <Button className="flex items-center text-white-100 bg-white-300 rounded min-h-[24px] min-w-[80px] text-dark-300">
              <Image alt="human" src={apple} className="" />
              <span>Continue with Apple</span>
            </Button>
          </div>
          <div>
            <p>Already have an account? </p>
            <p>Need an entity account? </p>

          </div>
        </div>
        <div>
          <Image alt="background" src={registerbg} className="" />
          <p>
            Sign up to get <strong className="text-blue-100">100 USDT</strong> trading fee rebate!
          </p>
          <p>
            Follow the registration steps to redeem your rewards and start your
            crypto journey with us! <span className="text-blue-100">FAQ</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
