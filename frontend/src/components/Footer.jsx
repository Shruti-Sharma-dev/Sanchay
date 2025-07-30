import { Home, ClipboardList, BarChart3 } from "lucide-react";

export function Footer() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t px-8 py-3 flex justify-between items-center text-emerald-600 shadow-md rounded-t-xl z-50">
      <div className="flex flex-col items-center">
        <Home className="w-5 h-5" />
        <span className="text-xs">Home</span>
      </div>
      <div className="flex flex-col items-center">
        <ClipboardList className="w-5 h-5" />
        <span className="text-xs">Orders</span>
      </div>
      <div className="flex flex-col items-center">
        <BarChart3 className="w-5 h-5" />
        <span className="text-xs">Analytics</span>
      </div>
    </nav>
  );
}
