import React from "react";
import { RiH3 } from "react-icons/ri";

const MyOrder = () => {
  const orderTable = [
    "Investment",
    "Order Id",
    "Order Type",
    "Ordered Quantity",
    "Alloted Quantity",
    "Ordered Trade Value ",
    "Final Trade Value",
    "Order Date",
    "Status",
    "Action",
  ];

  const data = false;
  return (
    <div className="">
      <h2 className=" font-bold text-[30px] capitalize ">my Orders</h2>
      <div className="h-[300px] min-w-[600px] overflow-auto bg-black/5  shadow-lg rounded-md ">
        <div className="flex  gap-4 py-2 px-5 items-center">
          {orderTable.map((table) => (
            <table>
              <th>{table}</th>
            </table>
          ))}
        </div>
        <span className="flex w-full justify-center">
          {data ? (
            <h3>data</h3>
          ) : (
            <h3 className="text-red-500">no data available</h3>
          )}
        </span>
      </div>{" "}
      <div className="flex items-end w-full justify-end">
        <h3>Showing 1-0 of 0 entries</h3>
      </div>
      <h2 className="text-black/40">
        * For Orders which are not fully executed, the trade value shown above
        is indicative and may change based on the price prevaling on the date of
        order settlement
      </h2>
    </div>
  );
};
export default MyOrder;
