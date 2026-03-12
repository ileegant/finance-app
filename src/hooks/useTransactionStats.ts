import { MOCK_TRANSACTIONS } from "../data/mockTransactions";

export default function useTransactionStats() {
  const data = MOCK_TRANSACTIONS;
  const stats = data.reduce(
    (acc, t) => {
      if (t.type === "income") {
        acc.income += t.amount;
      } else if (t.type === "expense") {
        acc.expense += t.amount;
      }
      return acc;
    },
    { income: 0, expense: 0 }
  );

  const balance = stats.income - stats.expense;

  return { balance, income: stats.income, expense: stats.expense };
}
