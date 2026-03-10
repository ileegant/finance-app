import { CircleDashed } from "lucide-react";
import type { Transaction } from "../../data/mockTransactions";
import { formatDate } from "../../utils/formatDate";

interface TransactionItemProps {
  transaction: Transaction;
}

export default function TransactionItem({ transaction }: TransactionItemProps) {
  const { id, title, category, amount, date, type } = transaction;

  return (
    <>
      <li key={id} className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <CircleDashed className="w-8 h-8" />
          <div>
            <h6>{title}</h6>
            <p className="text-xs">{category}</p>
            <p className="text-xs text-neutral-500">
              {formatDate(new Date(date))}
            </p>
          </div>
        </div>
        <p className={type === "income" ? "text-green-500" : "text-red-500"}>
          {type === "income" ? "+" : "-"}₴{amount.toFixed(2)}
        </p>
      </li>
      <hr className="h-px my-2 bg-gray-200 border-0" />
    </>
  );
}
