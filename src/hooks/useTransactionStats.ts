import { MOCK_TRANSACTIONS } from "../data/mockTransactions";

interface useTransactionStatsProps {
  startDate?: Date;
  endDate?: Date;
}

export default function useTransactionStats({
  startDate,
  endDate,
}: useTransactionStatsProps = {}) {
  const stats = MOCK_TRANSACTIONS.reduce(
    (acc, t) => {
      const transactionDate = new Date(t.date);

      const isAfterStart = startDate ? transactionDate >= startDate : true;
      const isBeforeEnd = endDate ? transactionDate <= endDate : true;

      if (isAfterStart && isBeforeEnd) {
        if (t.type === "income") {
          acc.income += t.amount;
        } else if (t.type === "expense") {
          acc.expense += t.amount;
        }
      }
      return acc;
    },
    { income: 0, expense: 0 }
  );

  const balance = stats.income - stats.expense;

  return { balance, income: stats.income, expense: stats.expense };
}
