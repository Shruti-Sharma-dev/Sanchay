// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "sonner";
import UserProfile from "@/pages/UserProfile";
import  VendorDashboard  from "./pages/vendorDashboard";
import SupplierDashboard from "./pages/SupplierDashboard";
import AddItem from "./pages/AddItem";





export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
        <Route path="/supplier/add-item" element={<AddItem />} />

      </Routes>
    </BrowserRouter>
  );
}
