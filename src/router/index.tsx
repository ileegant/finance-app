import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import MainLayout from "../layouts/MainLayout";
import TransactionsPage from "../pages/TransactionsPage";
import TransactionDetailPage from "../pages/TransactionDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "transactions",
        element: <TransactionsPage />,
      },
      {
        path: "transactions/:id",
        element: <TransactionDetailPage />,
      },
    ],
  },
]);
