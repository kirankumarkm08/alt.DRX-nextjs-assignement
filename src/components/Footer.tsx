import React from "react";
import Image from "next/image";
import FooterLogo from "/public/footerlogo.svg";
import { SocialLinks } from "@/constants";
import { NavLinks } from "@/constants";
import Link from "next/link";
import EmailCard from "./EmailCard";

const Footer = () => {
  return (
    <div className="min-h-[349px] bg-background-primary flex justify-center py-10 relative ">
      <div className="  md:flex justify-between w-full  gap-10 py-3 px-10 ">
        <div className="text-[14px] text-white font-light flex flex-col gap-3">
          <Image src={FooterLogo} alt="" className="w-40" />
          <address>
            #778/A, Chinnaswamy Chambers,
            <br /> 12th Cross, Double Road, Indiranagar 2nd Stage,
            <br /> Bengaluru 560038, Karnataka, India.
          </address>
          <span>+91 99864 34404</span>

          <span>reachus@altdrx.com</span>
          <div className="flex gap-3 items-center">
            {SocialLinks.map((link) => (
              <Link href={link.link}>
                <Image src={link.logo} alt={link.name} className="w-[20px]" />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {NavLinks.map((link) => (
            <Link href={link.link} className=" ">
              <p
                className="text-white hover:underline  
               hover:text-parenttheme-secondary capitalize"
              >
                {link.name}
              </p>
            </Link>
          ))}
        </div>
        <div className="">
          <EmailCard />
        </div>
      </div>
    </div>
  );
};

export default Footer;
