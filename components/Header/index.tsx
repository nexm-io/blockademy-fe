"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/public/icons/logo.svg";
import Link from "next/link";
import Button from "../Common/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logoutAuth } from "@/redux/features/auth/action";
import { toast } from "react-toastify";
import { hideEmail } from "@/utils/hideEmail";
import { getAccountDetail } from "@/redux/features/account/action";
import userDefault from "@/public/images/home/home-iconuser.png";
import cn from "@/services/cn";

const Header = () => {
  const [isShowMenu, setShowMenu] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const data = useSelector((state: RootState) => state.auth.user);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const userIconRef = useRef<HTMLDivElement | null>(null);
  const userId = useAppSelector((state) => state.auth.user?.id || 0);
  const token = useAppSelector((state) => state.auth.token);

  const userAccount = useAppSelector((state) => state.account.data);
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
  useEffect(() => {
    dispatch(getAccountDetail({ userId: userId }));
  }, [dispatch, userId]);
  const handleUserIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };
  const handleLogout = async () => {
    try {
      const res = await dispatch(logoutAuth()).unwrap();
      toast.success("Logout Successfully");
    } catch (error) {
      toast.error("Logout Failed");
      localStorage.clear();
    }
  };
  return (
    <header className="bg-white-100 text-black top-0 left-0 right-0 fixed z-[997] min-h-[74px]">
      {/* Top Header */}
      <div className={cn(`container relative flex items-center justify-between py-4`, {
        active: isShowMenu,
      })}>
        <div className="md:w-full w-[40%] flex items-center">
          <div className="lg:mr-[82px] md:mr-8 mr-[82px] md:w-[20%] lg:w-auto">
            <Link href="/">
              <Image alt="logo" src={logo} width={187} height={35}></Image>
            </Link>
          </div>
          <div className="md:flex gap-[50px] text-base font-normal text-black-100 hidden">
            <Link href="/articles" className="hover:text-blue-100">
              Articles
            </Link>
            <Link href="/courses" className="hover:text-blue-100">
              Courses
            </Link>
            <Link href="/learn-and-earn" className="hover:text-blue-100">
              Learn & Earn
            </Link>
          </div>
        </div>
        <div className="flex gap-2 md:w-auto w-[40%] prose md:justify-normal justify-end">
          {isAuthenticated && token ? (
            <div className="flex gap-2 items-center">
              <div
                className="w-[40px] h-[40px] relative not-prose cursor-pointer select-none"
                ref={userIconRef}
              >
                <Image
                  alt="avatar-user"
                  src={userAccount?.image || userDefault}
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] rounded-full select-none"
                  onClick={handleUserIconClick}
                ></Image>

                {isOpen && (
                  <ul
                    className="absolute w-max top-[50px] right-0 py-2 bg-white-100 border rounded-md shadow-md"
                    ref={dropdownRef}
                  >
                    <Link href="/my-account" className="font-bold mx-4">
                      {email}
                    </Link>
                    <ul className="capitalize flex flex-col gap-2 mt-3 ">
                      <li className=" px-4 ">
                        <Link
                          className="hover:text-blue-100 "
                          href="/my-rewards"
                        >
                          my rewards
                        </Link>
                      </li>
                      <li className="px-4">
                        <Button
                          size="small"
                          className="bg-red-600 hover:bg-red-800"
                          onClick={handleLogout}
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
              <Link className="hidden md:block" href="/register">
                <Button size="small" className="w-[94px]">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
        <div
          className="hambuger block md:hidden"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <span></span>
        </div>
        <div
          className={cn(
            "fixed top-[72px] bg-white-100 transition-all duration-[0.6s] ease-in-out left-0 right-0 bottom-0 translate-x-full",
            { "!translate-x-0": isShowMenu }
          )}
        >
          <div className="flex flex-col items-center justify-center gap-4 text-base font-normal text-black-100">
            <Link href="/articles" className="hover:text-blue-100">
              Articles
            </Link>
            <Link href="/courses" className="hover:text-blue-100">
              Courses
            </Link>
            <Link href="/learn-and-earn" className="hover:text-blue-100">
              Learn & Earn
            </Link>
          </div>
          {isAuthenticated && token ?
            <></>
            : (
              <div className="flex justify-center mt-4">
                <Link href="/register">
                  <Button size="small" className="w-[94px]">
                    Register
                  </Button>
                </Link>
              </div>
            )}
        </div>
      </div>
    </header>
  );
};

export default Header;
