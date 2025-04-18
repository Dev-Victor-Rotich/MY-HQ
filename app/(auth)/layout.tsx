import React, { ReactNode } from "react";
import Image from "next/image";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-2">
            <Image
              src="/icons/Logo.svg"
              alt="logo"
              className="logo"
              width={37}
              height={37}
            />
            <h1 className="role">Cloud_City</h1>
          </div>
          <div>{children}</div>
        </div>
      </section>
      <section className="auth-illustration">
        <Image
          src="/images/auth.jpg"
          alt="authpng"
          className="size-full object-cover"
          width={1000}
          height={1000}
        />
      </section>
    </main>
  );
};
export default Layout;
