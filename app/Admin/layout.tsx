"use client";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (session) redirect("/Admin");

  return (
    <SessionProvider session={session}>
      <main className="root-container">
        <div>
          <Navbar />
          <div>{children}</div>
        </div>
      </main>
    </SessionProvider>
  );
};
export default Layout;
