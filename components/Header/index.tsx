import Image from "next/image";
import React from "react";
import logo from "@/public/icons/logo.svg";
import Link from "next/link";
import Button from "../Common/Button";

const Header = () => {
  return (
    <header className="bg-white-100 text-black w-full top-0 fixed z-[999] min-h-[74px]">
      {/* Top Header */}
      <div className="relative md:mx-[75px] mx-1 flex items-center justify-between py-4">
        <div className="md:w-full w-[40%]">
          <Link href="/">
            <Image alt="logo" src={logo}></Image>
          </Link>
        </div>
        <div className="flex gap-2 md:w-auto w-[40%] prose">
          <Link href="/login">
            <Button size="small" outlined className="w-[94px]">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button size="small" className="w-[94px]">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
