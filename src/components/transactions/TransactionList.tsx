import { Link } from "react-router-dom";
import TransactionItem from "./TransactionItem";

import { type Transaction } from "../../data/mockTransactions";

interface TransactionListProps {
  limit?: number;
  showTitle?: boolean;
  transactions: Transaction[];
}

export default function TransactionList({
  limit = Infinity,
  showTitle = false,
  transactions,
}: TransactionListProps) {
  console.log(transactions);
  return (
    <div className="flex flex-col gap-4 p-4 rounded-2xl bg-white/80 border border-white/40 shadow-sm">
      {showTitle && (
        <div className="flex justify-between">
          <h5>Transactions</h5>
          <Link
            to="/transactions"
            className="text-xs hover:underline cursor-pointer"
          >
            See All
          </Link>
        </div>
      )}
      <ul className="divide-y divide-slate-200">
        {transactions.slice(0, limit).map((t) => (
          <TransactionItem key={t.id} transaction={t} />
        ))}
      </ul>
    </div>
  );
}
