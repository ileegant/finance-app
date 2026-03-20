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
          className={`cursor-pointer rounded-xl border border-neutral-600 px-4 text-sm capitalize ${
            filterType === type ? "bg-neutral-600 text-slate-50" : ""
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
