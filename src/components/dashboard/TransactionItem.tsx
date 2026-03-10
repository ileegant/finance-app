import type { Transaction } from "../../data/mockTransactions";
import { formatDate } from "../../utils/formatDate";
import { CATEGORY_MAP } from "../../constants/categories";

interface TransactionItemProps {
  transaction: Transaction;
}

export default function TransactionItem({ transaction }: TransactionItemProps) {
  const { id, title, category, amount, date, type } = transaction;
  const Icon = CATEGORY_MAP[category].icon;

  return (
    <>
      <li key={id} className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon className="w-6 h-6 " />
          <div>
            <h6>{title}</h6>
            <p className="text-[10px] text-slate-500">
              {formatDate(new Date(date))}
            </p>
          </div>
        </div>
        <p className={type === "income" ? "text-green-600" : "text-red-600"}>
          {type === "income" ? "+" : "-"}₴{amount.toFixed(2)}
        </p>
      </li>
      <hr className="h-px my-2 bg-gray-200 border-0" />
    </>
  );
}
