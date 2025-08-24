import { z } from "zod";

export const mobileNumberSchema = z
  .string()
  .refine((v) => v.length === 11, {
    message: "شماره موبایل باید ۱۱ رقم باشد",
  })
  .refine((v) => v.startsWith("09"), {
    message: "شماره موبایل نامعتبر است",
  });
