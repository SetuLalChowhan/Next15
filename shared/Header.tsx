"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
  ];
  return (
    <header className=" w-full text-white py-3 bg-gray-900 px-10 flex items-center justify-between ">
      <div>
        <strong>Setu Bro</strong>
      </div>

      <nav className=" flex items-center gap-4">
        {links.map((link, index) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              key={index}
              href={link.href}
              className={isActive ? " font-bold" : " font-normal"}
            >
              {link.title}
            </Link>
          );
        })}

        <Link href={`/articles/breaking-news-123?lang=en`} >Read in English</Link>
        <Link href={`/articles/breaking-news-123?lang=fs`} >Read in English</Link>
        
      </nav>
    </header>
  );
};

export default Header;
