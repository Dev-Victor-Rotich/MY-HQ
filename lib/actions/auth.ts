"use server";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { hash } from "bcryptjs";
import { signIn } from "@/auth";
//import { headers } from "next/headers";
//import ratelimit from "@/lib/ratelimit";

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password">,
): Promise<{ success: boolean; error?: string }> => {
  const { email, password } = params;

  {
    /*const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return { success: false, error: "Rate limit exceeded. Try again later." };
  }*/
  }

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: "Sign-in error" };
    }

    return { success: true };
  } catch (error) {
    console.log(error, "sign-in error");
    return { success: false, error: "Sign-in error" };
  }
};

export const signUp = async (
  params: AuthCredentials,
): Promise<{ success: boolean; error?: string }> => {
  const { fullName, email, workId, password, workCard } = params;

  {
    /* const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return { success: false, error: "Rate limit exceeded. Try again later." };
  }*/
  }

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return { success: false, error: "Admin already exists" };
  }

  const hashedPassword = await hash(password, 10);

  try {
    await db.insert(users).values({
      fullName,
      email,
      workId,
      password: hashedPassword,
      workCard,
    });

    await signInWithCredentials({ email, password });

    return { success: true };
  } catch (error) {
    console.log(error, "sign-up failed");
    return { success: false, error: "Sign-up error" };
  }
};
