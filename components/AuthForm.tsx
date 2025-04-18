"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldValues,
  useForm,
  SubmitHandler,
  UseFormReturn,
  DefaultValues,
  Path,
} from "react-hook-form";
import { ZodType } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import ImageUpload from "@/components/ImageUpload";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  const router = useRouter();
  const isSignIn = type === "SIGN_IN";
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data);
    if (result?.success) {
      toast.success(
        isSignIn ? "Signed in successfully!" : "Signed up successfully!",
      );
      router.push("/Admin");
    } else {
      if (result.error) {
        toast.error(isSignIn ? " Error Signing in!" : " Error Signing up!");
        //router.push("/");
      }
    }
  };

  return (
    <div>
      <h1 className="description font-montagu">
        {isSignIn
          ? "Welcome Back to Cloud_City"
          : "Create your New Cloud_City account"}
      </h1>
      <p className="text-primary font-raleway my-2">
        {isSignIn
          ? "Access the vast collection of Admin Goodies,and make updates"
          : "Please complete all fields and upload a valid Work ID to gain access to Cloud_City Admin"}
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-8 w-full"
        >
          {Object.keys(defaultValues).map((key) => (
            <FormField
              key={key}
              control={form.control}
              name={key as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    {field.name === "workCard" ? (
                      <ImageUpload onFileChange={field.onChange} />
                    ) : (
                      <Input
                        required
                        type={
                          FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                        }
                        {...field}
                        className="form-input"
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit" className="form-btn">
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Form>

      <p className="text-center text-base font-raleway text-red-500 my-2">
        {isSignIn ? "New to Cloud_City Admin?  " : "Already have an account?  "}

        <Link
          href={isSignIn ? "/sign-up" : "/sign-in"}
          className="font-bold text-primary my-2"
        >
          {isSignIn ? " Create an account " : " Sign in "}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
