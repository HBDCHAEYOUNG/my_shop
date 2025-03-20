import { Outlet } from "react-router-dom";
import { Header } from "./header";

export function CommonLayout() {
  return (
    <div className="min-h-screen ">
      <Header />
      <Outlet />
    </div>
  );
}
