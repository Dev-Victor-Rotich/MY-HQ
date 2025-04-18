import React from "react";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Admin = async () => {
  const result = await db.select().from(users);
  console.log(JSON.stringify(result, null, 2));
  return (
    <section>
      <div className="my-6 flex flex-col sm:flex-row sm:items-center sm:justify-between ">
        <div className="text-center">
          <div className="banner text-center font-raleway font-extrabold">
            Admin
            <div className="tagline font-semibold">
              "Streamline, Organize, and Take Charge.🔥"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Admin;
