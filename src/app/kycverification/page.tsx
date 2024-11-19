import React from "react";
import Profile from "@/components/dashboard/Profile";

const page = () => {
  return (
    <div className="min-h-screen pt-32 bg-white flex flex-col md:flex-row gap-5 ">
      <Profile />
    </div>
  );
};

export default page;
