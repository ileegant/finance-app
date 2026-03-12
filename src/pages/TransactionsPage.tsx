import { useState } from "react";
import TransactionList from "../components/transactions/TransactionList";
import TransactionsHeader from "../components/transactions/TransactionsHeader";
import { MOCK_TRANSACTIONS } from "../data/mockTransactions";
import TransactionsFilter from "../components/transactions/TransactionsFilter";

import type { TransactionType } from "../types";

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
    <div className="flex flex-col gap-4 pt-10 w-120">
      <TransactionsHeader />
      <TransactionsFilter filterType={filterType} onTypeClick={handleFilter} />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}
