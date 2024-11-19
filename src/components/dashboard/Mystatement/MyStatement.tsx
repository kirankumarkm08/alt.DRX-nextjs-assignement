"use client";
import React from "react";
import { useState } from "react";
import VirtualBankWallet from "./VirtualBankWallet";
import VirtualSQFTWallet from "./VirtualSQFTWallet";

const MyStatement = () => {
  const [selectedWallet, setSelectedWallet] = useState("VirtualBankWallet");

  const handleWalletSelection = (wallet: string) => {
    setSelectedWallet(wallet);
  };

  return (
    <div className="w-full ">
      <h1 className="text-[30px] font-bold capitalize">My statement</h1>
      <div className="flex  w-full justify-end">
        <div className="flex gap-5 px-3 ">
          <div
            className={`text-parenttheme-secondary font-semibold cursor-pointer  ${
              selectedWallet === "VirtualBankWallet" ? "underline " : ""
            }`}
            onClick={() => handleWalletSelection("VirtualBankWallet")}
          >
            Virtual Bank Wallet
          </div>
          <div
            className={`text-parenttheme-secondary font-semibold cursor-pointer  ${
              selectedWallet === "VirtualSQFTWallet" ? "underline " : ""
            }`}
            onClick={() => handleWalletSelection("VirtualSQFTWallet")}
          >
            Virtual SQFT Wallet
          </div>
        </div>
      </div>{" "}
      {selectedWallet == "VirtualBankWallet" && <VirtualBankWallet />}
      {selectedWallet == "VirtualSQFTWallet" && <VirtualSQFTWallet />}
    </div>
  );
};

export default MyStatement;
