import { getStatsPeriod } from "../utils/getStatsPeriod";
import useTransactionStats from "./useTransactionStats";

export default function useCalculatedStats() {
  const { current, last } = getStatsPeriod();

  const currentStats = useTransactionStats({
    startDate: current.start,
    endDate: current.end,
  });

  const lastStats = useTransactionStats({
    startDate: last.start,
    endDate: last.end,
  });

  console.log(lastStats);

  const getPercentage = (currentVal: number, lastVal: number) => {
    if (lastVal === 0) return currentVal > 0 ? 100 : 0;
    return ((currentVal - lastVal) / lastVal) * 100;
  };

  return {
    current: currentStats,
    incomeChange: getPercentage(currentStats.income, lastStats.income).toFixed(
      0,
    ),
    expenseChange: getPercentage(
      currentStats.expense,
      lastStats.expense,
    ).toFixed(0),
    balanceChange: getPercentage(
      currentStats.balance,
      lastStats.balance,
    ).toFixed(0),
  };
}
