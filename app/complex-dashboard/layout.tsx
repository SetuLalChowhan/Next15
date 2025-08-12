import React from "react";

import "@/app/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complex Dashboard",
};

const layout = ({
  chart,
  notificationArea,
  userArea,
  login,
}: {
  chart: React.ReactNode;
  notificationArea: React.ReactNode;
  userArea: React.ReactNode;
  login: React.ReactNode;
}) => {
  const userLogin = true;

  if (!userLogin) {
    return <div>
        {login}
    </div>;
  }

  return (
    <div className=" flex flex-col">
      <div className=" flex items-center gap-10 w-full">
        <div className=" w-1/2 shadow-2xl h-[300px] flex justify-center items-center">
          {userArea}
        </div>
        <div className=" w-1/2 shadow-2xl h-[300px] flex justify-center items-center">
          {notificationArea}
        </div>
      </div>

      <div className=" w-full h-[500px] flex justify-center items-center shadow-2xl">
        {chart}
      </div>
    </div>
  );
};

export default layout;
