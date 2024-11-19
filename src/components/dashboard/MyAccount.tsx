import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Offer from "/public/Dashboard/altoffer.png";

const myAccount = () => {
  return (
    <div className="text-black bg-background-gray rounded-md py-4 px-2  ">
      <h1 className="font-semibold leading-tight text-[30px] py-2  ">
        My Account
      </h1>
      <div className="flex bg-background-gray">
        <div className="w-1/2 mr-2 ">
          <div className=" bg-black/5 p-4 rounded-md">
            <h2 className="text-parenttheme-secondary font-medium">
              Virtual SQFT Wallet ID:
            </h2>
            <span className="font-bold text-black/40">--</span>
            <h3 className="">Total ALT.SQFT</h3>
            <h1 className="text-[30px] text-black/40">0</h1>
            <Button className="bg-transparent text-parenttheme-secondary rounded-full border-parenttheme-secondary border">
              Buy Now
            </Button>
          </div>
          <div className=" bg-black/5 p-4 rounded-md mt-5 ">
            <div className="flex justify-between">
              <div className="">
                <h2>Alt POINTS</h2>
                <h1 className="text-[30px] text-black/40">0</h1>
              </div>
              <div className="">
                <Image src={Offer} alt="" />
              </div>
            </div>

            <h3 className="text-black/40 my-5 font-light">
              Alt Points are redeemable against any trading fees payable by you
            </h3>
          </div>
        </div>
        <div className="w-1/2 bg-black/5 p-4 rounded-md">
          <h2 className="text-parenttheme-secondary font-semibold">
            Virtual BANK Wallet ID:
          </h2>
          <p>--</p>
          <span className="mt-10">Closing Balance</span>
          <h3 className="text-black/40 text-[30px]">₹ 0</h3>
          <hr />
          <h1 className="mt-10"> HOLDING AMOUNT</h1>
          <h3 className="text-black/40 text-[30px]">₹ 0</h3>
          <p className="text-black/40 font-light mt-10">
            The Holding Amount shall be held up till the ALT.SQFT is allotted to
            you
          </p>
        </div>
        <div className="w-1/2 -mt-14 mx-5">
          <h1 className="text-[30px] font-medium">KYC & Bank Details</h1>
          <div className="w-[350px] h-[190px]  bg-black/5 rounded-lg -rotate-6 my-5 ">
            <div className="w-[350px] h-[220px] p-10 bg-gradient-to-r from-blue-200 to-cyan-400 rounded-lg rotate-6 my-5">
              <div className=" text-white">
                <h1>PAN</h1>
                <h3>Bank Name:</h3>
                <h3> Account No.</h3>
                <h3>IFSC:</h3>
                <h3>Account type : </h3>
              </div>
              <div className="flex uppercase  justify-end w-full">
                <Button className=" rounded-full bg-transparent text-white border border-white ">
                  Complete kyc
                </Button>
              </div>
            </div>
          </div>{" "}
          <div className="bg-black/5 my-10 px-5 py-4 flex flex-col gap-5 font-semibold">
            <h2>Address</h2>
            <h2> City</h2>
            <h2>state</h2>
            <h2>Country</h2>
          </div>
        </div>
      </div>
      <h1 className="font-bold">My Income</h1>
      <h2 className="mt-5">There are no rental returns yet</h2>
    </div>
  );
};

export default myAccount;
