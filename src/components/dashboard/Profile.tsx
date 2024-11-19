"use client";
import React, { useState } from "react";
import Image from "next/image";
import myProfile from "/public/Dashboard/myprofile.svg";
import myInvest from "/public/Dashboard/myinvest.svg";
import myOrder from "/public/Dashboard/myorder.svg";
import myDocument from "/public/Dashboard/documents.svg";
import myBlockchainLedger from "/public/Dashboard/myblockchain.svg";
import myIncome from "/public/Dashboard/myincome.svg";
import myStatement from "/public/Dashboard/myStatement.svg";
import MyAccount from "@/components/dashboard/MyAccount";
import MyOrder from "@/components/dashboard/MyOrder";
import MyDocuments from "@/components/dashboard/MyDocuments";
import MyStatement from "@/components/dashboard/Mystatement/MyStatement";
import MyIncome from "@/components/dashboard/MyIncome";
import Myinvestment from "@/components/dashboard/Myinvestment";
import Blockchain from "@/components/dashboard/Blockchain";
// active icons
import myprofileActive from "/public/Dashboard/IsActiveDashBoard/myprofile-active.svg";
import myInvestActive from "/public/Dashboard/IsActiveDashBoard/myinvest-active.svg";
import myOrderActive from "/public/Dashboard/IsActiveDashBoard/myorder-active.svg";
import myDocumentActive from "/public/Dashboard/IsActiveDashBoard/documents-active.svg";
import myStatementActive from "/public/Dashboard/IsActiveDashBoard/getinvest-active.svg";
import myIncomeActive from "/public/Dashboard/IsActiveDashBoard/myincome-active.svg";
import myBlockchainActive from "/public/Dashboard/IsActiveDashBoard/myblockchain-active.svg";

const Profile = () => {
  const [active, setActive] = useState("My Account"); // Set default active component

  const HandleActive = (componentName: any) => {
    setActive(componentName);
  };

  const dashboard = [
    {
      name: "My Account",
      logo: myProfile,
      activeLogo: myBlockchainActive,
      component: <MyAccount />,
    },
    {
      name: "My Investments",
      logo: myInvest,
      activeLogo: myInvestActive,
      component: <Myinvestment />,
    },
    {
      name: "My Order",
      logo: myOrder,
      activeLogo: myOrderActive,
      component: <MyOrder />,
    },
    {
      name: "My Documents",
      logo: myDocument,
      activeLogo: myDocumentActive,
      component: <MyDocuments />,
    },
    {
      name: "My Statement",
      logo: myStatement,
      activeLogo: myStatementActive,
      component: <MyStatement />,
    },
    {
      name: "My Income",
      logo: myIncome,
      activeLogo: myIncomeActive,
      component: <MyIncome />,
    },
    {
      name: "My Blockchain Ledger",
      logo: myBlockchainLedger,
      activeLogo: myBlockchainActive,
      component: <Blockchain />,
    },
  ];

  const currentComponent = dashboard.find(
    (item) => item.name === active
  )?.component;

  return (
    <div className="flex">
      <div className="bg-background-gray h-fit px-5 py-2 rounded-lg shadow-md">
        <div className="bg-background-secondary p-2 w-14 h-14 rounded-lg flex justify-center items-center font-bold text-white">
          KI
        </div>
        <h1 className="font-semibold py-2">Kirankumarkm</h1>
        <p className="leading-tight font-light text-black/40 text-[13px]">
          kirankumarkm1505@gmail.com
          <br />
          7338552718
        </p>
        <div className="flex my-5">
          <p className="text-parenttheme-secondary font-semibold">
            ALT user ID:{" "}
          </p>
          <span className="text-black/40">000008986</span>
        </div>
        <div className="flex flex-col gap-y-10 mt-2">
          {dashboard.map((item) => (
            <div
              key={item.name}
              onClick={() => HandleActive(item.name)}
              className={`flex gap-4 cursor-pointer ${
                active === item.name ? "text-black" : "text-black/40"
              }`}
            >
              <Image
                src={active === item.name ? item.activeLogo : item.logo}
                alt={item.name}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">{currentComponent}</div>
    </div>
  );
};

export default Profile;
