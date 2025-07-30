import { Search, Home, BarChart3, ClipboardList } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Header } from "@/components/Header";
import { PackageCheck, LineChart } from "lucide-react";
import { PackageX } from "lucide-react";
import { Footer } from "@/components/Footer";

function VendorDashboard() {
    const [orders, setOrders] = useState([]);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Top Header */}
            <Header />

            {/* Welcome Text */}
            <div className="px-4 py-4 mt-10">
                <h1 className="text-xl font-semibold text-indigo-500"><span className="text-black">Welcome, </span>Vendor!</h1>
                <p className="text-sm text-gray-600">Start exploring products near you.</p>
            </div>

            {/* Search Card */}
            <div className="px-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-xl shadow-sm flex items-center">
                    <Search className="text-gray-400 mr-2" />
                    <Input
                        type="text"
                        placeholder="Search suppliers or products..."
                        className="border-none focus:ring-0 focus:outline-none bg-transparent text-sm"
                    />
                </div>
            </div>

            {/* Main content area */}
            {/* Recent Orders Card */}
           <div className="flex-grow bg-gray-100 m-3 p-4 rounded-xl shadow overflow-y-auto">
  <h3 className="text-md font-semibold text-emerald-700 mb-3">
    Recently Placed Orders
  </h3>

  {orders.length > 0 ? (
    <div className="space-y-2">
      {orders.map((order, index) => (
        <div
          key={index}
          className="bg-white p-3 rounded-md shadow-sm text-sm text-gray-700"
        >
          {order.title}
        </div>
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center text-center text-gray-500 py-10">
      <PackageX className="w-12 h-12 text-orange-400 mb-3" />
      <p className="text-sm font-medium mb-1">Oops! No orders yet.</p>
      <p className="text-xs text-gray-400">Start placing orders to see them here.</p>
    </div>
  )}
</div>






          {/* Bottom Navbar */}
      <Footer></Footer>

        </div >
    );
}

export default VendorDashboard;
