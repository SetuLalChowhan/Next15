"use client";
import React from "react";
import { useRouter, redirect } from "next/navigation"; // ✅ use next/navigation in App Router

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Ordered Product");
    router.push("/"); // ✅ works fine
    // redirect('/')
  };

  return (
    <div
      className=" flex flex-col gap-2 items-start
    "
    >
      <p>Order Product</p>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
};

export default Page;
