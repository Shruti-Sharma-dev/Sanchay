import { Plus, Home, BarChart3, ClipboardList, PackageX } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import {  Footer } from "@/components/Footer";


function SupplierDashboard() {
  const [items, setItems] = useState([]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="px-4 py-3">
        <div className="bg-emerald-100 p-4 rounded-xl shadow flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-emerald-700">Welcome, Supplier!</h2>
            <p className="text-sm text-gray-700">Start adding your items for vendors to explore.</p>
          </div>
          <Button variant="emerald" className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Item
          </Button>
        </div>
      </section>

      {/* Recently Added Items */}
      <div className="flex-grow bg-gray-100 m-3 p-4 rounded-xl shadow overflow-y-auto">
        <h3 className="text-md font-semibold text-emerald-700 mb-3">
          Recently Added Items
        </h3>

        {items.length > 0 ? (
          <div className="space-y-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-md shadow-sm text-sm text-gray-700"
              >
                {item.name}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500 mt-4">
            <PackageX className="w-8 h-8 mb-2" />
            <p className="italic">No items added yet. Click "Add Item" to get started.</p>
          </div>
        )}
      </div>

      {/* Bottom Navbar */}
      <Footer></Footer>
    </div>
  );
}

export default SupplierDashboard;
