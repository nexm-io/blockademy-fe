"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/public/icons/logo.svg";
import Link from "next/link";
import Button from "../Common/Button";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/redux/hook";
import { logoutAuth } from "@/redux/features/auth/action";
import { toast } from "react-toastify";
import user from "@/public/images/home/home-iconuser.png";
import { hideEmail } from "@/utils/hideEmail";
import { UserCircle } from "@styled-icons/boxicons-solid";

const Header = () => {
  const dispatch = useAppDispatch();
  const data = useSelector((state: RootState) => state.auth.user);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const userIconRef = useRef<HTMLDivElement | null>(null);
  let email = "";
  if (data !== null) {
    email = hideEmail(data.email);
  }
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !userIconRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const handleUserIconClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Ngăn sự kiện lan truyền ra bên ngoài
    setIsOpen(!isOpen); // Mở hoặc đóng dropdown
  };
  // const handleLogout = async () => {
  //   try {
  //     const res = await dispatch(logoutAuth()).unwrap();
  //     console.log("handleLogout ~ res:", res);
  //     toast.success("Logout Successfully");
  //   } catch (error) {
  //     toast.error("Logout Failed");
  //   }
  // };
  return (
    <header className="bg-white-100 text-black w-full top-0 fixed z-[999] min-h-[74px]">
      {/* Top Header */}
      <div className="relative md:mx-[75px] mx-1 flex items-center justify-between py-4 md:px-0 px-4">
        <div className="md:w-full w-[40%] flex items-center">
          <div className="mr-[82px]">
            <Link href="/">
              <Image alt="logo" src={logo} className=""></Image>
            </Link>
          </div>
          <div className="md:flex gap-[50px] text-base font-normal text-black-100 hidden">
            <Link href="/articles" className="hover:text-blue-100">
              Articles
            </Link>
            <Link href="/courses" className="hover:text-blue-100">
              Courses
            </Link>
          </div>
        </div>
        <div className="flex gap-2 md:w-auto w-[40%] prose md:justify-normal justify-end">
          {isAuthenticated ? (
            <div className="flex gap-2 items-center">
              <div
                className="md:w-[30px] w-6 h-6 md:h-[30px] relative not-prose cursor-pointer select-none"
                ref={userIconRef}
              >
                <UserCircle
                  onClick={handleUserIconClick}
                  className={`${isOpen ? "fill-blue-100 " : ""}`}
                />
                {isOpen && (
                  <ul
                    className="absolute w-max top-[50px] right-0 py-2 bg-white-100 border rounded-md shadow-md"
                    ref={dropdownRef}
                  >
                    <li className="font-bold mx-4">{email}</li>
                    <ul className="capitalize flex flex-col gap-2 mt-3 ">
                      <li className=" px-4 ">
                        <Link className="hover:text-blue-100 " href="#">
                          my rewards
                        </Link>
                      </li>
                      <li className="px-4">
                        <Button
                          size="small"
                          className="bg-red-600 hover:bg-red-800"
                        >
                          Logout
                        </Button>
                      </li>
                    </ul>
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
