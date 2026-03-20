import { BanknoteArrowDown, BanknoteArrowUp } from "lucide-react";
import { formatAmountWithSeparators } from "../../utils/formatAmount";
import useCalculatedStats from "../../hooks/useCalculateStats";

const VARIANTS = {
  income: {
    icon: BanknoteArrowDown,
    label: "Income",
  },
  expenses: {
    icon: BanknoteArrowUp,
    label: "Expenses",
  },
};

type StatCardVariant = keyof typeof VARIANTS;

interface StatCardProps {
  variant?: StatCardVariant;
}

export default function StatCard({ variant = "income" }: StatCardProps) {
  const config = VARIANTS[variant];
  const Icon = config.icon;

  const { current, incomeChange, expenseChange } = useCalculatedStats();

  const amount = variant === "income" ? current.income : current.expense;
  const change = variant === "income" ? incomeChange : expenseChange;

  const [integerPart, decimalPart] = formatAmountWithSeparators(amount);

  return (
    <div className="flex flex-1 flex-col gap-2 rounded-2xl border border-slate-200/60 bg-slate-100/50 p-4 shadow-sm">
      <div className="flex gap-2">
        <Icon />
        <p>{config.label}</p>
      </div>
      <h5 className="text-4xl font-bold">
        ₴{integerPart}
        <span className="text-xl">
          .<span className="text-neutral-400">{decimalPart}</span>
        </span>
      </h5>
      <p className="text-xs text-neutral-500">
        <span
          className={Number(change) < 0 ? "text-red-600" : "text-green-600"}
        >
          {Number(change) > 0 && "+"}
          {change}%
        </span>{" "}
        compared to last month
      </p>
    </div>
  );
}
