import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import MainLayout from "../layouts/MainLayout";
import TransactionsPage from "../pages/TransactionsPage";

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
