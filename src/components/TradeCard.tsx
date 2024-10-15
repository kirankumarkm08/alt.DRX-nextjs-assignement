"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { BiDownArrow } from "react-icons/bi";
import { Button } from "./ui/button";

const TradeCard = () => {
  const [count, setCount] = useState(1);
  const [dropDown, setDropdown] = useState(false);

  const HandleDropDown = () => {
    setDropdown((prev) => !prev);
  };

  const Plus = () => {
    setCount(() => count + 1);
  };
  const CardValues = [
    {
      name: "A) Trade Value",
      Amount: "1.00",
    },
    {
      name: "b) Fees & Other Levies",
      Amount: "0",
    },
    {
      name: "c) Volatility Margin",
      Amount: "0.05",
    },
  ];

  const Munis = () => {
    setCount(() => count - 1);
  };
  return (
    <div className="lg:max-w-[434px] max-h-[606px] bg-background-primary rounded-md px-4 py-6 mt-10">
      <div className="text-white w-full flex flex-col gap-6 justify-center items-center">
        <h1 className="text-[25px] font-bold">TradeX (Beta)</h1>
        <h1 className="text-[20px] font-bold">Buy Now</h1>
        <div className="bg-background-secondary w-full  rounded-sm border-white border justify-between flex items-center px-2">
          set options
          <IoIosArrowDown />
        </div>
        <div className=" flex justify-between w-full px-10">
          <h1 className="font-bold">Quantity</h1>
          <div className=" flex  items-center  bg-background-secondary rounded-lg py-1 px-3 ">
            <FaMinus className=" font-bold" onClick={Munis} />
            <h1 className="bg-background-primary px-4 ">{count}</h1>
            <FaPlus className=" font-bold" onClick={Plus} />
          </div>
        </div>
        <div className="flex justify-between w-full px-5">
          <div className="">
            <input type="radio" /> <span> Daily market Price</span>
          </div>
          <h1>
            ₹ 6787.01/
            <span className="font-light text-[10px]">ALT.SQFT</span>
          </h1>
        </div>
        <div className="flex justify-between w-full px-5 ">
          <div className="">
            <input type="radio" className="" />{" "}
            <span className=""> Limit price </span>
          </div>
          <div className="bg-white px-1 py-2 rounded-md  text-black">
            <span>₹</span>
            <input
              type="text"
              value={6787}
              className="outline-none text-[15px]"
            />
            <span className="font-light text-[10px]">/ALT.SQFT</span>
          </div>
        </div>{" "}
        <div
          className=" border border-parenttheme-secondary rounded-md w-full px-10 flex flex-col  justify-between items-center text-[12px] cursor-pointer "
          onClick={HandleDropDown}
        >
          <div className="flex  justify-between w-full items-center">
            {" "}
            <h2>Purchase Consideration (Incl.Fees & Other Levies)</h2>
            <p className="font-bold">₹ 0</p>
            <BiDownArrow
              className={`${
                dropDown
                  ? "rotate-180 transition-transform duration-500"
                  : " duration-500"
              }`}
            />
          </div>

          {dropDown && (
            <div className=" flex flex-col gap-5 w-full my-6">
              {CardValues.map((items) => (
                <div className="flex justify-between items-center ">
                  {" "}
                  <div className="">{items.name}</div>
                  <div className="">{items.Amount}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className=" flex flex-col  items-start w-full">
          <h1 className="font-bold text-[14px]">
            Virtual Bank Wallet Balance: ₹ 0
          </h1>
          <h2 className="font-semibold text-[12px]">
            Since the DMP differs on a daily basis, a Volatility margin of 5% is
            included in your trade value. Refund shall be processed after your
            order's settlement.
          </h2>
        </div>
        <Button className="rounded-full">BUY NOW</Button>
      </div>
    </div>
  );
};

export default TradeCard;
