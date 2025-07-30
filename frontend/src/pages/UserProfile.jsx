import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { BadgeCheck, Store, Truck, Loader2 } from "lucide-react";

export default function UserProfile() {
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    pincode: "",
    role: "", // No default role selected
    address: "",
    businessName: "",
    businessLicence: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRoleChange = (role) => {
    setProfile((prev) => ({ ...prev, role }));
  };

  const handleUpdate = () => {
    if (!profile.role) {
      toast.error("Please select a role.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      toast.success("Profile saved (mock)!");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-5 bg-white rounded-xl shadow-lg border">
      <h2 className="text-xl font-bold text-emerald-600 mb-3 text-center">
        Complete Your Profile
      </h2>

      {/* 🔘 Role Selection Cards */}
      <div className="flex justify-between gap-4 mb-6">
        <div
          onClick={() => handleRoleChange("vendor")}
          className={`flex flex-col items-center justify-center flex-1 p-4 rounded-lg cursor-pointer border transition
            ${
              profile.role === "vendor"
                ? "bg-purple-100 border-purple-500"
                : "bg-gray-100 border-gray-300 hover:bg-purple-50"
            }`}
        >
          <Store size={28} className="mb-2 text-purple-700" />
          <p className="text-sm font-semibold text-purple-700">Vendor</p>
        </div>

        <div
          onClick={() => handleRoleChange("supplier")}
          className={`flex flex-col items-center justify-center flex-1 p-4 rounded-lg cursor-pointer border transition
            ${
              profile.role === "supplier"
                ? "bg-indigo-100 border-indigo-500"
                : "bg-gray-100 border-gray-300 hover:bg-indigo-50"
            }`}
        >
          <Truck size={28} className="mb-2 text-indigo-700" />
          <p className="text-sm font-semibold text-indigo-700">Supplier</p>
        </div>
      </div>

      {/* 👇 Profile Form with placeholders only */}
      <div className="space-y-4">
        <Input
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <Input
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          placeholder="Phone Number (10 digits)"
        />
        <Input
          name="pincode"
          value={profile.pincode}
          onChange={handleChange}
          placeholder="Pincode"
        />
        <Input
          name="address"
          value={profile.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <Input
          name="businessName"
          value={profile.businessName}
          onChange={handleChange}
          placeholder="Business Name"
        />
        <Input
          name="businessLicence"
          value={profile.businessLicence}
          onChange={handleChange}
          placeholder="Business Licence"
        />

        <Button
          onClick={handleUpdate}
          className="w-full bg-orange-500 hover:bg-emerald-700"
          disabled={loading}
        >
          {loading && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
          Save Profile
        </Button>
      </div>
    </div>
  );
}
