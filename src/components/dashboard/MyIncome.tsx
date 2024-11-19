import React from "react";

const MyIncome = () => {
  const table = [
    "PAYMENT DATE",
    "OPPORTUNITY NAME",
    "AMOUNT DISTRIBUTED TO YOUR WALLET",
  ];
  return (
    <div className="w-full rounded-lg  shadow-lg h-[300px] p-3">
      <h1 className="text-[30px] font-bold ">Periodic Distribution</h1>
      <div className="bg-background-gray p-3">
        <table className="flex">
          <tr className="flex justify-evenly w-full">
            {table.map((i) => (
              <th>{i}</th>
            ))}
          </tr>
        </table>
      </div>{" "}
      <h3 className="font-bold text-[15px] text-red-600 flex justify-center">
        No data available
      </h3>
      <div className="flex items-end w-full justify-end mt-36">
        <h3>Showing 1-0 of 0 entries</h3>
      </div>
    </div>
  );
};

export default MyIncome;
