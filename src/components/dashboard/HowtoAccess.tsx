import React, { useState } from "react";
import blockchain1 from "/public/Blockchaincard/blockchain1.png";
import blockchain2 from "/public/Blockchaincard/blockchain2.png";
import blockchain3 from "/public/Blockchaincard/blockchain3.png";
import Image from "next/image";
import { Button } from "../ui/button";

const HowtoAccess = () => {
  const card = [
    {
      slno: 1,
      title: `"Click "My Blockchain Ledger”`,
      desc: "This shall open new Etherscan Window.Type your Alt User ID on the key (string) field.",
    },
    {
      slno: 2,
      title: `Click ‘Query’ Button`,
      desc: "The page under link string field shall display a unique URL Link. Copy paste it in a new browser window.",
    },
    {
      slno: 3,
      title: `Access Your Ledger Stored on Blockchain”`,
      desc: "Use your PAN No to view the file.",
    },
  ];

  const blockchain = [blockchain1];
  const [current, setCurrent] = useState(0);
  return (
    <div className="bg-background-primary px-4 py-3  my-5">
      <h2 className="text-[30px] flex justify-center text-white font-bold">
        How to Access
      </h2>
      <div className="my-10 flex">
        <div className="">
          <div className="flex gap-5 flex-col ">
            {card.map((i) => (
              <div className="flex gap-10 ">
                <h1 className="bg-white w-14 h-14 rounded-full flex items-center justify-center font-bold">
                  {i.slno}
                </h1>
                <div className="w-1/2 text-white">
                  <h1 className="font-semibold">{i.title}</h1>
                  <h3 className="text-[15px] font-light">{i.desc}</h3>
                </div>
              </div>
            ))}
            <Button className="w-1/2 ml-20 px-10 py-7 hover:bg-background-secondary">
              View My Blockchain Ledger
            </Button>
          </div>
        </div>
        <div className="flex gap-5 transition-all ease-in-out duration-100 relative">
          {blockchain.map((image) => (
            <Image src={image} alt="" className="w-[200px] relative" />
          ))}
          <div className="absolute left-1/2 bottom-8">
            <div className="w-3 h-3  ring-1 bg-black  rounded-full "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowtoAccess;
