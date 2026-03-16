import { TRANSACTION_TYPES } from "../../constants/transactions";

import type { TransactionType } from "../../types";

interface TransactionsFilterProps {
  filterType: TransactionType;
  onTypeClick: (value: TransactionType) => void;
}

export default function TransactionsFilter({
  filterType,
  onTypeClick,
}: TransactionsFilterProps) {
  return (
    <div className="flex gap-2">
      {TRANSACTION_TYPES.map((type) => (
        <button
          key={type}
          onClick={() => onTypeClick(type)}
          className={`text-sm px-4 border border-neutral-600 rounded-xl cursor-pointer capitalize ${
            filterType === type ? "bg-neutral-600 text-slate-50" : ""
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
