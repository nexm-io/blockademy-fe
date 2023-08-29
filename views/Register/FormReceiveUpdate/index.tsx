import Button from "@/components/Common/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import account from "@/public/icons/usersuccess.svg";
import Image from "next/image";
export default function FormReceiveUpdate() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (e: any) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
        console.log("onSubmit called:", e);
        reset();
        router.push("/");
      }, 3000);
    });
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
          {...register('checked')}
        />
      </div>

      {isSubmitting ? (
        <div className="flex justify-center">
          <Button
            label="Next"
            type="button"
            disabled={true}
            className=" bg-gray-300 text-white-100 font-semibold flex items-center justify-start py-3 px-6 w-full rounded-[4px] leading-6 h-12 float-right"
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
        </div>
      ) : (
        <div className="flex justify-center">
          <Button
            label="Next"
            type="submit"
            className="flex items-center justify-start py-3 px-6 w-full rounded-[4px] text-white-100 bg-blue-100 rounded min-h-[24px] min-w-[80px] border-[1px] border-blue-100 hover:bg-white-100 hover:text-blue-100"
          />
        </div>
      )}
    </form>
  );
}
