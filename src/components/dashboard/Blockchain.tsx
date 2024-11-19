import React from "react";
import BlockchainImage from "/public/blockchain.png";
import Image from "next/image";
import ledger from "/public/Blockchaincard/ledger.png";
import security from "/public/Blockchaincard/security.png";
import transparency from "/public/Blockchaincard/transparency.png";
import HowtoAccess from "./HowtoAccess";

const Blockchain = () => {
  const card = [
    {
      image: ledger,
      title: "Your Decentralized Ledger",
      text: "View your investment data stored on a secure decentralized ledger for Virtual Alt.SQFT balance.",
    },
    {
      image: security,
      title: "Enhanced Security",
      text: "Every file is protected at multiple levels, forming an unbreakable investment status.",
    },
    {
      image: transparency,
      title: "Simple Accessibility",
      text: "Access your blockchain information from your dashboard",
    },
  ];

  const blockchain = [];
  return (
    <div className="px-10 ">
      <div className="flex justify-between">
        <div className="w-1/2">
          <h2 className="text-[30px] text-parenttheme-primary uppercase font-bold">
            TRANSPARENCY <br /> YOU CAN TRUST
          </h2>
          <h3 className="text-parenttheme-secondary text-[20px] font-bold">
            Invest Smarter with Blockchain Security
          </h3>
          <p className="text-parenttheme-primary font-light">
            <span className="font-bold">
              Alt DRX leverages the power of blockchain
            </span>{" "}
            to provide unparalleled transparency by storing your AL.SQFT
            holdings on using Web3 Technology.
          </p>
        </div>
        <Image className="w-1/2" src={BlockchainImage} alt="blockchain" />
      </div>
      <div className="flex gap-5 mt-10 px-10">
        {card.map((i) => (
          <div className="w-1/3 flex flex-col gap-3">
            <Image src={i.image} alt="" />
            <h2 className="capitilize text-[28px] font-bold  text-parenttheme-secondary">
              {i.title}
            </h2>
            <h3 className="font-semibold">{i.text}</h3>
          </div>
        ))}
      </div>
      <HowtoAccess />
    </div>
  );
};

export default Blockchain;
