import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import MainLayout from "../layouts/MainLayout";
const TransactionsPage = () => (
  <div className="p-10">
    <h1>All Transactions</h1>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "transactions",
        element: <TransactionsPage />,
      },
    ],
  },
]);
