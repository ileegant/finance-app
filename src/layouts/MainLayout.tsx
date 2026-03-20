import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen justify-center bg-slate-50">
      <Outlet />
    </div>
  );
}
