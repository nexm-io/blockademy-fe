"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = Yup.object({
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must have a lowercase letter, a number and one special character"
    ),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password")],
    "The password confirmation does not match"
  ),
});

interface FormRegisterProps {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
}

const FormPanel: React.FC<FormRegisterProps> = ({ setFormState }) => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  type FormData = Yup.InferType<typeof schema>;

  const onSubmit = async (e: FormData) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
        console.log("onSubmit called:", e);
        setFormState("fromReceive");
        reset();
      }, 3000);
    });
  };
  return (
    <form
      className="space-y-[25px] mt-4 relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col lg:flex-row gap-[80px] justify-center">
        <div className="min-w-[384px]">
          <h1 className="text-[30px] leading-10 font-bold mb-10">
            Set Infomation
          </h1>
          <div className="flex flex-col items-center w-full mx-auto mt-4 mb-6 rounded-md ">
            <span className="text-sm text-black-400 self-start leading-5">
              Password
            </span>
            <div className="relative flex items-center bg-white-100 border rounded w-full justify-center">
              <Input
                id="password"
                name="password"
                type="password"
                className="bg-white-200 h-12 rounded-lg"
                register={register}
              />
            </div>
            {errors?.password && (
              <div className="text-red-500 text-sm mt-1 w-full max-w-[384px]">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="flex flex-col items-center w-full mx-auto mt-4 mb-6 rounded-md ">
            <span className="text-sm text-black-400 self-start leading-5">
              Confirm Password
            </span>
            <div className="relative flex items-center bg-white-100 border rounded w-full justify-center">
              <Input
                name="confirm_password"
                id="confirm_password"
                type="password"
                className="bg-white-200 h-12 rounded-lg"
                register={register}
              />
            </div>
            {errors?.confirm_password && (
              <div className="text-red-500 text-sm mt-1 w-full max-w-[384px]">
                {errors.confirm_password.message}
              </div>
            )}
          </div>
          <Button
            fullWidth
            type="submit"
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            Next
          </Button>
        </div>
        <div className="w-[424px]"></div>
      </div>
    </form>
  );
};

export default FormPanel;
