import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import account from "@/public/icons/usersuccess.svg";
import Image from "next/image";
import { loginAuth } from "@/redux/features/auth/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectAuth } from "@/redux/features/auth/reducer";

type IFormValues = {
  email: string;
  password: string;
};

export default function FormReceiveUpdate({ detail }: { detail: IFormValues }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { urlRef } = useAppSelector(selectAuth);
  
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IFormValues>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<typeof detail> = async (e) => {
    try {
      const res = await dispatch(loginAuth(detail)).unwrap();
      res.success && router.push(urlRef);
    } catch (e) {
      console.error(e);
    } finally {
      reset();
    }
  };

  return (
    <form
      className="space-y-[25px] min-w-[384px] mt-4 relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="px-8 flex flex-col items-center">
        <Image alt="success" src={account} />
        <h1 className="text-[30px] max-w-[324px] text-center leading-10 font-bold ">
          Account Successfully Created
        </h1>
      </div>

      <div className="flex px-5 py-4 bg-white-200 justify-between items-center w-full mx-auto mt-4 mb-6 rounded-md ">
        <label
          className="inline-block pl-[0.15rem] hover:cursor-pointer text-sm leading-[22px] max-w-[300px]"
          htmlFor="flexSwitchCheckDefault"
        >
          I agree to receive marketing updates from Blockademy.
        </label>
        <input
          className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-blue-100 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          // {...register("checked")}
        />
      </div>

      <Button
        fullWidth
        type="submit"
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        Start Journey
      </Button>
    </form>
  );
}
