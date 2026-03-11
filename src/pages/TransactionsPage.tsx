import TransactionList from "../components/transactions/TransactionList";
import TransactionsHeader from "../components/transactions/TransactionsHeader";

export default function TransactionsPage() {
  return (
    <div className="flex flex-col gap-4 justify-center w-120">
      <TransactionsHeader />
      <div className="flex gap-2">
        <button className="text-sm px-4 border bg-slate-600 text-slate-50 border-slate-600 rounded-xl cursor-pointer">
          All
        </button>
        <button className="text-sm px-4 border border-slate-600 rounded-xl cursor-pointer">
          Income
        </button>
        <button className="text-sm px-4 border border-slate-600 rounded-xl cursor-pointer">
          Expenses
        </button>
      </div>
      <TransactionList />
    </div>
  );
}
