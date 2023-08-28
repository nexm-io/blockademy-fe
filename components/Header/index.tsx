import Image from "next/image";
import React from "react";
import logo from "@/public/icons/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white text-black w-full top-0 fixed z-[999] min-h-[74px]">
      {/* Top Header */}
      <div className="relative md:mx-[75px] mx-1 flex items-center justify-between py-4">
        <div className="md:w-full w-[40%]">
          <Link href="/">
            <Image alt="logo" src={logo}></Image>
          </Link>
        </div>
        <div className="flex gap-2 md:w-auto w-[40%]">
          <Link
            href="/login"
            className="border border-blue-100 md:text-sm text-[12px] flex items-center justify-center text-blue-100 rounded-[4px] w-[94px] h-[32px] btn__outline-shadow"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="bg-blue-100 text-white-100 md:text-sm text-[12px] flex items-center justify-center rounded-[4px] w-[94px] h-[32px] btn__contain-shadow"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
