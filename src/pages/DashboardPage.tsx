import StatCard from "../components/dashboard/StatCard";
import TotalBalance from "../components/dashboard/TotalBalance";
import TransactionList from "../components/transactions/TransactionList";
import { MOCK_TRANSACTIONS } from "../data/mockTransactions";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 pt-10 w-120">
      <TotalBalance change="+5,4" />

      <div className="flex gap-4">
        <StatCard change="+12" />
        <StatCard variant="expenses" change="-14" />
      </div>

      <TransactionList limit={5} showTitle transactions={MOCK_TRANSACTIONS} />
    </div>
  );
}
