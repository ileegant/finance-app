import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function TransactionsHeader() {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-2xl bg-white/80 border border-white/40 shadow-sm">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Link to="/">
            <ChevronLeft />
          </Link>
          <h5>All transactions</h5>
        </div>
        <button className="text-slate-400 border border-slate-400 text-xs px-2 rounded-xl">
          Export
        </button>
      </div>
    </div>
  );
}
