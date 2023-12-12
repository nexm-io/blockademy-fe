"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/icons/logo.svg";
import Link from "next/link";
import Socials from "../Socials";
import { usePathname } from "next/navigation";

const LINKS = [
  {
    label: "Terms",
    href: "/terms",
    target: "_self",
    isContact: false,
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
    target: "_self",
    isContact: false,
  },
  {
    label: "Help & Support",
    href: "/help-support",
    target: "_self",
    isContact: false,
  },
  {
    label: "Contact Us",
    href: "mailto:contact@blockademy.ai",
    target: "_blank",
    isContact: true,
  },
];

const Footer = () => {
  return (
    <footer className="py-[28px] grid gap-6 mt-6">
      <div className="container flex flex-col gap-4 lg:flex-row justify-between items-center">
        <Link href="/">
          <Image
            alt="logo"
            width={164}
            height={49}
            src={logo}
            className=""
          ></Image>
        </Link>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[60px]">
          {LINKS.map((z, i) =>
            z.isContact ? (
              <a
                href={z.href}
                key={i}
                className="text-[#616161] text-xl font-normal text-center"
              >
                {z.label}
              </a>
            ) : (
              <Link
                href={z.href}
                target={z.target}
                key={i}
                className="text-[#616161] text-xl font-normal text-center"
              >
                {z.label}
              </Link>
            )
          )}
        </div>
      </div>
      <div className="container">
        <div className="border-t border-[#EDEDED] pt-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-[#616161] text-base">
            Copyright © 2023. All rights reserved.
          </p>
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
