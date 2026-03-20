import { z } from "zod";
import { CATEGORY_MAP } from "../constants/categories";

export const CATEGORY_KEYS = Object.keys(CATEGORY_MAP) as [string, ...string[]];

export const transactionSchema = z.object({
  id: z.number().optional(),
  title: z.string().trim().min(3, "Title is too short."),
  category: z.enum(CATEGORY_KEYS, "Choose category"),
  amount: z.coerce.number().positive("Number should be positive."),
  date: z.coerce.date(),
  type: z.enum(["income", "expense"]),
});

export type TransactionForm = z.input<typeof transactionSchema>;

export type Transaction = z.infer<typeof transactionSchema>;
