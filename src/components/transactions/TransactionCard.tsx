import { Link } from "react-router-dom";
import { CATEGORY_MAP } from "../../constants/categories";
import type { Transaction } from "../../data/mockTransactions";
import { formatAmountWithSeparators } from "../../utils/formatAmount";
import { formatDate } from "../../utils/formatDate";
import { ChevronLeft } from "lucide-react";

export default function TransactionCard({
  id,
  title,
  category,
  amount,
  date,
  type,
}: Transaction) {
  const config = CATEGORY_MAP[category];
  const Icon = config.icon;
  const categoryLabel = config.label;

  const [integerPart, decimalPart] = formatAmountWithSeparators(amount);

  const isIncome = type === "income";

  return (
    <div className="flex flex-col gap-6 p-4 rounded-2xl bg-white/80 border border-white/40 shadow-sm">
      <div className="flex gap-2">
        <Link to="/transactions">
          <ChevronLeft />
        </Link>
        <h3>Transaction</h3>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Icon className="w-8 h-8" />
          <div>
            <h6 className="text-xl font-bold">{title}</h6>
            <h6 className="text-neutral-500">{categoryLabel}</h6>
          </div>
        </div>
        <div className="text-right">
          <h5
            className={`text-4xl font-bold ${
              isIncome ? "text-green-600" : "text-red-600"
            }`}
          >
            {isIncome ? "+" : "-"}₴{integerPart}
            <span className="text-xl">
              .
              <span
                className={isIncome ? "text-green-400/60" : "text-red-400/60"}
              >
                {decimalPart}
              </span>
            </span>
          </h5>
          <h6 className="text-neutral-500 capitalize">{type}</h6>
        </div>
      </div>
      <div className="flex justify-between text-sm text-neutral-400">
        <div>{formatDate(new Date(date))}</div>
        <div>Transaction ID: {id}</div>
      </div>
    </div>
  );
}
