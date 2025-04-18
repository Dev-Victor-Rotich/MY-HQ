"use client";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg">
      <Navbar />
      <div className="relative">
        <div className="absolute right-4 top-0 mt-2">
          <ThemeSwitcher />
        </div>
      </div>
      <section className="p-6">{children}</section>
    </main>
  );
};

export default Layout;
