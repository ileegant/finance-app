import { BanknoteArrowDown, BanknoteArrowUp } from "lucide-react";

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
  amount: number;
  cents: number;
  change: string;
}

export default function StatCard({
  variant = "income",
  amount,
  cents,
  change,
}: StatCardProps) {
  const config = VARIANTS[variant];
  const Icon = config.icon;

  return (
    <div className="flex flex-col flex-1 gap-2 p-4 rounded-2xl bg-slate-100/50 border border-slate-200/60 shadow-sm">
      <div className="flex gap-2 ">
        <Icon />
        <p>{config.label}</p>
      </div>
      <h5 className="text-4xl font-bold">
        ₴{amount}
        <span className="text-xl">
          .<span className="text-neutral-400">{cents}</span>
        </span>
      </h5>
      <p className="text-xs text-neutral-500">
        <span className="text-green-600">{change}%</span> compared to last month
      </p>
    </div>
  );
}
