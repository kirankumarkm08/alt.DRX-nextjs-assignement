"use client";
import React from "react";
import { BiDownArrow } from "react-icons/bi";
import { useState } from "react";

const MyDocuments = () => {
  const [downAll, isDownAll] = useState(false);
  const Handledropdown = () => isDownAll((prev) => !prev);

  const all = ["all", "po", "fso"];
  return (
    <div className="w-full flex flex-col gap-5 ">
      <div className="flex bg-background-gray px-10">
        <h1 className="font-bold text-[30px] capitalize w-full rounded px-4 py-2">
          My documents
        </h1>
        <div
          className="flex items-center gap-10 border-l-2  px-2 relative cursor-pointer"
          onClick={Handledropdown}
        >
          {" "}
          ALL <BiDownArrow />
          <div className=" absolute mt-44 w-full ">
            {downAll && (
              <div className=" flex flex-col gap-2 bg-background-gray rounded border px-3 py-2 ">
                {all.map((i) => (
                  <div className="uppercase  hover:text-parenttheme-secondary font-light ">
                    {i}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-background-gray px-10 h-[400px] flex justify-center items-center text-parenttheme-primary text-[25px] font-bold ">
        We are looking forward to filling this space up once you have started
        investing!
      </div>
    </div>
  );
};

export default MyDocuments;
