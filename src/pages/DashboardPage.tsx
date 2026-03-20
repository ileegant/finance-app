import StatCard from "../components/dashboard/StatCard";
import TotalBalance from "../components/dashboard/TotalBalance";
import TransactionList from "../components/transactions/TransactionList";
import { MOCK_TRANSACTIONS } from "../data/mockTransactions";

export default function DashboardPage() {
  return (
    <div className="flex w-120 flex-col gap-4 pt-10">
      <TotalBalance />

      <div className="flex gap-4">
        <StatCard />
        <StatCard variant="expenses" />
      </div>

      <TransactionList limit={5} showTitle transactions={MOCK_TRANSACTIONS} />
    </div>
  );
}
