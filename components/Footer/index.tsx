import Image from "next/image";
import React from "react";
import logo from "@/public/icons/logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mt-24 lg:mt-36">
      <div className="flex items-center flex-wrap justify-center sm:justify-between gap-6 2xl:-mx-16 py-11">
        <Link href="/">
          <Image alt="logo" width={233} height={42} src={logo} className=""></Image>
        </Link>
        <span className="text-gray-700 font-normal text-base">
          Copyright © 2023. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
