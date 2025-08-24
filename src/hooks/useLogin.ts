"use client";
import { useRef, useState } from "react";
import { mobileNumberSchema } from "@/lib/validation";
import { useUser } from "@/hooks/useUser";
import { redirect } from "next/navigation";

export const useLogin = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [numberValidationError, setNumberValidationError] =
    useState<string>("");
  const { loading, error, fetchUserData } = useUser();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const number = inputRef.current?.value ?? "";

    // Validation Mobile Number
    const result = mobileNumberSchema.safeParse(number);
    if (!result.success) {
      const numberError = result.error.issues[0]?.message ?? "خطا در ورودی";
      return setNumberValidationError(numberError);
    }

    setNumberValidationError("");
    await fetchUserData();
    redirect("/dashboard");
  };

  return {
    inputRef,
    numberValidationError,
    loading,
    error,
    handleLogin,
  };
};
