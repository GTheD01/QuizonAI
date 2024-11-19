import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex items-center h-screen flex-col">
      <h1 className="h-1/5 mt-5 text-8xl tracking-widest">QuizonAI</h1>
      <div className="text-center sm:px-24 px-24 max-w-[768px]">
        <Outlet />
      </div>
    </div>
  );
}
