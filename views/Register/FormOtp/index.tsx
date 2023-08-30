"use client";
import Button from "@/components/Common/Button";
import * as Yup from "yup";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Input from "@/components/Common/Input";
import exclamation from "@/public/icons/exclamation.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendOtp, verifyEmail } from "@/redux/features/auth/action";
import { useAppDispatch } from "@/redux/hook";
import InfoGraphic from "../InfoGraphic";
interface FormRegisterProps {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
  email: string;
}

const FormOtp: React.FC<FormRegisterProps> = ({ setFormState, email }) => {
  const dispatch = useAppDispatch();
  const schema = Yup.object({
    otp: Yup.number()
      .typeError("Please Enter Number")
      .required("Please enter OTP"),
  });

  type FormData = Yup.InferType<typeof schema>;
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleOTPComplete = async (e: FormData) => {
    const detail = {
      email: email,
      code: e.otp,
    };
    try {
      const res = await dispatch(verifyEmail(detail)).unwrap();
      res.success && setFormState("formRegister");
    } catch (e) {
      console.error("Some thing wrong!", e);
    } finally {
      reset();
    }
  };

const resendEmail = async () => {
  await dispatch(sendOtp({email})).unwrap();
}

  return (
    <form
      className="space-y-[25px] w-full md:min-w-[384px] mt-4 relative"
      onSubmit={handleSubmit(handleOTPComplete)}
    >
      <div className="flex flex-col lg:flex-row gap-[80px] items-center justify-center">
        <div>
          <h1 className="text-[30px] leading-10 font-bold mb-10">
            Email Verification
          </h1>
          <span className="max-w-[424px] block text-sm leading-[22px] text-white-400">
            Please enter the 6-digit verification code that was sent to
            hopi.shirt@gmail.com. The code is valid for 30 minutes.
          </span>
          <div className="w-full pr-12">
            <div className="flex flex-col items-center w-full mx-auto mt-4 mb-6 rounded-md ">
              <span className="text-sm text-black-400 self-start leading-5">
                Email Verification Code
              </span>
              <div className="relative flex items-center bg-white-100 border rounded w-full justify-center">
                <div className="absolute h-12 items-center right-[11px] mx-2 flex items-center text-sm text-white-400  justify-center">
                  <span className="mr-1.5 mb-1 cursor-pointer">Code sent</span>
                  <Image alt="sent" src={exclamation} />
                </div>
                <Input
                  id="otp"
                  name="otp"
                  type="text"
                  className="bg-white-200 h-12 rounded-lg pr-[120px]"
                  register={register}
                />
              </div>
              {errors?.otp && (
                <div className="text-red-500 text-sm mt-1 w-full">
                  {errors.otp.message}
                </div>
              )}
            </div>
            <div className="w-full">
              <Button
                fullWidth
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
                className="w-full"
              >
                Send OTP
              </Button>
            </div>
          </div>

          <div className="w-full mt-[24px] text-blue-100">
            <p onClick={resendEmail} className="text-sm font-medium text-blue-100 cursor-pointer">
              {`Didn't receive the code?`}
            </p>
          </div>
        </div>
        <InfoGraphic/>
      </div>
    </form>
  );
};

export default FormOtp;
