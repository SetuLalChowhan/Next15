import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col gap-2">
      <Link className=" bg-blue-400 px-2 py-2 rounded-xl text-white" href="/complex-dashboard/chart-2">Click Here</Link>
      <p> Chart Area 1</p>
    </div>
  );
};

export default page;
