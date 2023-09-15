import Image from "next/image";
import React from "react";

import logoText from "@/public/icons/logotext.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex md:flex-row items-center justify-center flex-col gap-3 md:justify-between py-8 px-4 md:px-[73px]">
        <Link href="/">
          <Image
            alt="logo-footer"
            src={logoText}
            className="w-[150px] md:w-auto "
          ></Image>
        </Link>
        <span className="text-gray-700 font-normal text-base">
          Copyright © 2023. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
