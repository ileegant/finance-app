export interface Transaction {
  id: string;
  title: string;
  category: string;
  amount: number;
  date: string;
  type: "income" | "expense";
}

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    title: "Apple Services",
    category: "Entertainment",
    amount: 45.0,
    date: "2026-03-10T14:30:00Z",
    type: "expense",
  },
  {
    id: "2",
    title: "Freelance Payment",
    category: "Work",
    amount: 12500.0,
    date: "2026-03-10T10:00:00Z",
    type: "income",
  },
  {
    id: "3",
    title: "Silpo Market",
    category: "Groceries",
    amount: 840.5,
    date: "2026-03-09T18:15:00Z",
    type: "expense",
  },
  {
    id: "4",
    title: "Rent Payment",
    category: "Home",
    amount: 15000.0,
    date: "2026-03-01T09:00:00Z",
    type: "expense",
  },
  {
    id: "5",
    title: "Refund: Amazon",
    category: "Shopping",
    amount: 120.0,
    date: "2026-02-28T12:45:00Z",
    type: "income",
  },
];
