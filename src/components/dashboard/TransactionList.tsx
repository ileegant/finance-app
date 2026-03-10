import { MOCK_TRANSACTIONS } from "../../data/mockTransactions";
import TransactionItem from "./TransactionItem";

export default function TransactionList() {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-2xl bg-white/80 border border-white/40 shadow-sm">
      <div className="flex justify-between">
        <h5>Transactions</h5>
        <button className="text-xs hover:underline cursor-pointer">
          See All
        </button>
      </div>
      <ul>
        {MOCK_TRANSACTIONS.map((transaction) => (
          <TransactionItem transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
