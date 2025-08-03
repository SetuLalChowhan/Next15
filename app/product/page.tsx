import Link from "next/link";
import React from "react";
import "@/app/globals.css";



const page = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Page loaded");
    }, 2000);
  });
  return (
    <div className=" flex flex-col gap-2">
      <Link href={`/product/1`}>Product 1 </Link>
      <Link href={`/product/2`}>Product 2 </Link>
      <Link href={`/product/3`}>Product 3 </Link>
      <Link href={`/product/4`}>Product 4 </Link>
    </div>
  );
};

export default page;
