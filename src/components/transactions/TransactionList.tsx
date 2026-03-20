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
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/40 bg-white/80 p-4 shadow-sm">
      {showTitle && (
        <div className="flex justify-between">
          <h5>Transactions</h5>
          <Link
            to="/transactions"
            className="cursor-pointer text-xs hover:underline"
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
