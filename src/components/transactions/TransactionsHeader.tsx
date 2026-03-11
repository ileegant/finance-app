import { ArrowBigLeft } from "lucide-react";

export default function TransactionsHeader() {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-2xl bg-white/80 border border-white/40 shadow-sm">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <ArrowBigLeft />
          <h5>All transactions</h5>
        </div>
        <button className="border border-slate-800 hover:text-slate-50 hover:bg-slate-600 text-xs px-2 rounded-xl cursor-pointer">
          Export Excel
        </button>
      </div>
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
    </div>
  );
}
