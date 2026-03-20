import { useParams } from "react-router-dom";
import { MOCK_TRANSACTIONS } from "../data/mockTransactions";
import TransactionCard from "../components/transactions/TransactionCard";

export default function TransactionDetailPage() {
  const { id } = useParams();
  const transaction = MOCK_TRANSACTIONS.find((t) => t.id === id);

  if (!transaction) {
    return <div>Transaction not found!</div>;
  }

  return (
    <div className="flex w-120 flex-col gap-4 pt-10">
      <TransactionCard {...transaction} />
    </div>
  );
}
