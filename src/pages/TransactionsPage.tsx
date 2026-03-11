import TransactionList from "../components/transactions/TransactionList";
import TransactionsHeader from "../components/transactions/TransactionsHeader";

export default function TransactionsPage() {
  return (
    <div className="flex flex-col gap-4 justify-center w-120">

      <TransactionsHeader />
      <TransactionList />
    </div>
  );
}
