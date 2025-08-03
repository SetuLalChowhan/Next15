"use client";
import AuthLayout from "@/components/layouts/AuthLayout";
import Link from "next/link";
import { useState } from "react";
import "@/app/globals.css";

interface Props {
  children: React.ReactNode;
}
export default function AuthSectionLayout({ children }: Props) {
  const [value, setValue] = useState("");

  return (
    <AuthLayout>
      <div className=" flex flex-col gap-4">
        <div className=" flex items-center gap-5">
          <Link className="block" href={`/login`}>
            Login
          </Link>
          <Link className=" block" href={"/register"}>
            Register
          </Link>
        </div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className=" border-gray-900 border w-[100px] px-2  ml-4 rounded-xl outline-none text-black text-sm"
        />

        {children}
      </div>
    </AuthLayout>
  );
}
