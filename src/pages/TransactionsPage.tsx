import { useState } from "react";
import TransactionList from "../components/transactions/TransactionList";
import TransactionsHeader from "../components/transactions/TransactionsHeader";
import { MOCK_TRANSACTIONS } from "../data/mockTransactions";
import TransactionsFilter from "../components/transactions/TransactionsFilter";

import type { TransactionType } from "../types";
import TransactionForm from "../components/transactions/TransactionForm";

export default function TransactionsPage() {
  const [filterType, setFilterType] = useState<TransactionType>("all");

  const filteredTransactions =
    filterType === "all"
      ? MOCK_TRANSACTIONS
      : MOCK_TRANSACTIONS.filter((t) => t.type === filterType);

  const handleFilter = (type: TransactionType) => {
    setFilterType(type);
  };

  return (
    <div className="flex w-120 flex-col gap-4 pt-10">
      <TransactionsHeader />
      <TransactionsFilter filterType={filterType} onTypeClick={handleFilter} />
      <TransactionForm />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}
