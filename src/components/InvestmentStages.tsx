import React from "react";
import card1 from "/public/InvestWithAltDrx/InvestmentStages/building.svg";
import card2 from "/public/InvestWithAltDrx/InvestmentStages/po.png";
import card3 from "/public/InvestWithAltDrx/InvestmentStages/fso.png";
import card4 from "/public/InvestWithAltDrx/InvestmentStages/tradex.png";
import Image from "next/image";

const InvestmentStages = () => {
  const card = [
    {
      image: card1,
      label: "GET STARTED",
      text: {
        list: [
          "Sign up",
          "Complete your KYC",
          "Choose the best investment deal",
          "Start investments with Alt DRX!",
        ],
      },
    },
    {
      image: card2,
      label: "",
      text: "Get early bird investment deals. Sell your ALT.SQFT later, for a profit",
    },
    {
      image: card3,
      label: "",
      text: "First opportunity to start investing in Real Estate 1 SQ.FT (ALT.SQFT) at a time with as little as ₹10,000",
    },
    {
      image: card4,
      label: "",
      text: "Person to Person trading in ALT.SQFT, creating a vibrant Real Estate marketplace",
    },
  ];

  return (
    <div className="flex  flex-col  items-center  justify-center w-full min-h-screen ">
      <h1 className="text-[40px] font-bold flex items-center">
        INVESTMENT STAGES
      </h1>
      <div className=" flex  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-20 w-full 2xl:w-10/12 mx-auto pb-10 md:pb-0 overflow-auto px-10">
        {card.map((items, index) => (
          <div
            key={index}
            className="w-[350px] h-[350px] bg-background-secondary flex flex-col justify-center items-center p-5 rounded-lg border border-black"
          >
            <Image src={items.image} alt="" className="w-[80px]" />
            <h2 className="text-[15px] text-white">{items.label}</h2>
            <h3 className="text-[15px] text-white text-center">
              <div className="items-start justify-start flex w-[150px]">
                {typeof items.text === "object" && items.text.list ? (
                  <ol>
                    {items.text.list.map((i, idx) => (
                      <li key={idx} className="  ">
                        {i}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p>{items.text}</p>
                )}
              </div>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentStages;
