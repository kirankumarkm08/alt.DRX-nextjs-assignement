"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const nav = [
    {
      name: "About us  +",
      url: "/about",
    },
    {
      name: "private property",
      url: "/private-property",
    },
    {
      name: "Invest +",
      url: "Invest",
    },
    {
      name: "FAQs",
      url: "/FAQs",
    },
  ];
  const router = useRouter();

  const HandleSignUp = () => {
    router.push("/kycverification");
  };

  const [visible, isVisible] = useState(false);

  const MobileMenu = () => {
    isVisible((prev) => !prev);
  };

  return (
    <div className="w-full sm:px-3 md:px-5 lg:px-8  py-5  flex items-center justify-between  border-b-2  fixed  bg-white z-50 ">
      <div className="flex items-center justify-between w-full ">
        <Link href={"/"}>
          {" "}
          <Image
            src={"https://altdrx.com/images/common/alt-dim-logo.svg"}
            alt="logo"
            width={200}
            height={200}
          />
        </Link>

        <div className="lg:flex items-center gap-2 md:gap-10 text-parenttheme-primary text-[14px] uppercase hidden">
          {nav.map((navs) => (
            <Link href={navs.url}>{navs.name}</Link>
          ))}
          <Button
            className="rounded-full uppercase font-bold"
            onClick={HandleSignUp}
          >
            sign up | sign in
          </Button>
        </div>
      </div>

      {/* modile screen */}
      <div className=" lg:hidden ">
        <Image
          src={"https://altdrx.com/images/icons/menu-icon.svg"}
          alt="mobilenav"
          className=""
          width={50}
          height={50}
          onClick={MobileMenu}
        />
        <div
          className={`absolute left-0 flex flex-col justify-center w-full h-screen bg-white ${
            visible ? "-translate-y-0 " : "-translate-y-[140vh]"
          }`}
        >
          {visible && (
            <div
              className={`  text-parenttheme-primary font-bold text-[14px] uppercase gap-8 
         flex flex-col z-50 items-center  `}
            >
              {nav.map((navs, index) => (
                <Link key={index} href={navs.url} className="">
                  {navs.name}
                </Link>
              ))}
              <Button
                className="rounded-full uppercase font-bold"
                onClick={HandleSignUp}
              >
                sign up | sign in
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
