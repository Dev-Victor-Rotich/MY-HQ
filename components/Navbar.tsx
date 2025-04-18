"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  const pathName = usePathname();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Daily Tips", path: "/DailyTips" },
    { name: "Investments", path: "/Investments" },
    { name: "Projects", path: "/Projects" },
    { name: "Admin", path: "/Admin" },
  ];

  return (
    <nav className="bg-gray-800 font-rockwell font-extrabold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/icons/Logo.svg"
                  alt="logo"
                  className="logo"
                  width={32}
                  height={32}
                  priority
                />
                <span className="role">Cloud_City</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className=" ml-4 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "text-base font-medium capitalize",
                    pathName === link.path
                      ? " text-secondary-dark hover:text-secondary-dark font-bold hover:bg-white rounded-lg p-2"
                      : "text-white hover:bg-secondary-dark font-bold  rounded-lg p-2",
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden flex  items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white
          hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md-hidden">
          <div className="px-2 pb-2 pt-2 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-base font-medium capitalize",
                  pathName === link.path
                    ? " text-secondary-dark hover:text-secondary-dark font-bold hover:bg-white rounded-lg p-2"
                    : " block text-white",
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
