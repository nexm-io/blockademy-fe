import Button from "../Common/Button";
import account from "@/public/images/home/SVG.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const IsLoginForm = () => {
  const { push } = useRouter();
  return (
    <div className="flex flex-col gap-6 p-6 lg:p-0 border border-gray-300 md:border-transparent">
      <div className=" relative">
        <div className=" flex flex-col items-center">
          <Image
            width={45}
            height={45}
            alt="success"
            className="mb-4"
            src={account}
          />
          <h1 className="text-base max-w-[324px] text-center mb-2">
            Register an account
          </h1>
        </div>

        <div className="flex px-5 bg-white-200 justify-between items-center w-full rounded-md mb-7">
          <label
            className="inline-block pl-[0.15rem] text-center hover:cursor-pointer text-sm max-w-[300px]"
            htmlFor="flexSwitchCheckDefault"
          >
            Put your knowledge into practice by opening a Blockademy account
            today.
          </label>
        </div>

        <Button fullWidth type="submit" onClick={() => push("/register")}>
          Register now
        </Button>
      </div>
    </div>
  );
};

export default IsLoginForm;
