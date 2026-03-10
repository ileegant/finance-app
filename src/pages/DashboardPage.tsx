import StatCard from "../components/dashboard/StatCard";
import TotalBalance from "../components/dashboard/TotalBalance";
import TransactionList from "../components/dashboard/TransactionList";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 justify-center w-120">
      <TotalBalance amount={13134} cents={31} change="+5,4" />

      <div className="flex gap-4">
        <StatCard amount={3131} cents={22} change="+12" />
        <StatCard variant="expenses" amount={1247} cents={14} change="-14" />
      </div>

      <TransactionList />
    </div>
  );
}
