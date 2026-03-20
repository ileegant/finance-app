import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function TransactionsHeader() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/40 bg-white/80 p-4 shadow-sm">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Link to="/">
            <ChevronLeft />
          </Link>
          <h5>All transactions</h5>
        </div>
        <button className="rounded-xl border border-slate-400 px-2 text-xs text-slate-400">
          Export
        </button>
      </div>
    </div>
  );
}
