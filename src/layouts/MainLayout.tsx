import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex justify-center bg-slate-50 min-h-screen">
      <Outlet />
    </div>
  );
}
