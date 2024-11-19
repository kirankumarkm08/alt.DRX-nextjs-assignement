import React from "react";
import { Button } from "../ui/button";
import Table from "./Table";

const Myinvestment = () => {
  const holding = [
    {
      name: "Total ALT.SQFT",
      hold: 0,
    },
    {
      name: "ALT.SQFT in Holding",
      hold: 0,
    },
    {
      name: "  Total Amount Invested",
      hold: "0",
    },
    {
      name: "Indicative Market Value",
      hold: 0,
    },
  ];

  const rigts = [
    {
      name: "Total Amount Invested",
      value: 0,
    },
    {
      name: "Indicative Market Value",
      value: 0,
    },
  ];

  const table = [
    "Investment Opportunity Name",
    "Investment Type",
    "Order Type",
    "Quantity Held",
    "Tradeable ALT.SQFT",
    "Cost Price",
    "Indicative Market Value",
    "Profit/Loss",
  ];
  const data = false;
  return (
    <div className="w-full flex flex-col gap-5">
      <h1 className="text-[30px] font-bold capitalize">My investment</h1>
      <div className="flex  gap-5">
        {" "}
        <div className="w-1/2 bg-background-gray px-2">
          <h2 className="font-light text-black/40 text-[30px] border-b-2 border-parenttheme-secondary">
            Total ALT.SQFT Holdings
          </h2>
          <div className=" grid grid-cols-2 p-2  gap-4">
            {holding.map((hold, index) => (
              <div className="">
                <p className="text-black/40 font-semibold ">{hold.name}</p>
                <p className="text-[25px] text-black/40">
                  {index >= 2 ? `₹${hold.hold}` : hold.hold}
                </p>
              </div>
            ))}
            <Button className="text-[10px] uppercase rounded-full  w-fit bg-parenttheme-primary ">
              {" "}
              get Statement
            </Button>
          </div>
        </div>{" "}
        <div className="w-1/2 bg-background-gray rounded-lg px-2 ">
          <h2 className="font-light text-black/40 text-[30px] border-b-2 border-parenttheme-secondary">
            Total Partnership Rights
          </h2>
          <div className=" grid grid-cols-2 p-2 gap-4">
            {rigts.map((r) => (
              <div className="">
                <p className="text-black/40 font-semibold">{r.name}</p>
                <p className="text-[25px] text-black/40">₹{r.value}</p>
              </div>
            ))}
            <Button className="text-[10px] uppercase rounded-full  w-fit bg-parenttheme-primary mt-10">
              {" "}
              get Statement
            </Button>
          </div>
        </div>
      </div>
      <div className="shadow-lg h-[200px]">
        <div className=" flex w-full  ">
          {table.map((i) => (
            <Table
              tableItems={i}
              className="flex w-full justify-between bg-background-gray text-[13px] items-center p-3"
            />
          ))}
        </div>
        <h3 className="flex justify-center text-red-600">
          {data ? data : " no data available"}
        </h3>
        <div className="flex items-end w-full justify-end mt-20">
          <h3>Showing 1-0 of 0 entries</h3>
        </div>
      </div>
    </div>
  );
};

export default Myinvestment;
