import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { BadgeCheck, Loader2 } from "lucide-react";

export default function UserProfile() {
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    pincode: "",
    role: "vendor",
    address: "",
    businessName: "",
    businessLicence: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 🔴 Replace with actual API call to fetch user
    const mockData = {
      name: "Shruti Sharma",
      phone: "9876543210",
      pincode: "110001",
      role: "vendor",
      address: "Sector 14, Kurukshetra",
      businessName: "Shruti Foods",
      businessLicence: "ABC12345678",
      isVerified: true,
    };
    setProfile(mockData);
  }, []);

  const handleChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = () => {
    setLoading(true);
    // 🔴 Replace with actual API call
    setTimeout(() => {
      toast.success("Profile updated successfully!");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-4 rounded-xl shadow border bg-gray-50">
      <h2 className="text-xl font-semibold text-emerald-600 mb-4 text-center">Your Profile</h2>

      {profile.isVerified && (
        <p className="text-sm text-green-700 text-center flex items-center justify-center gap-1 mb-2">
          <BadgeCheck size={16} /> Verified User
        </p>
      )}

      <div className="space-y-3">
        <Input label="Name" name="name" value={profile.name} onChange={handleChange} />
        <Input label="Phone" name="phone" value={profile.phone} readOnly />
        <Input label="Pincode" name="pincode" value={profile.pincode} onChange={handleChange} />
        <Input label="Address" name="address" value={profile.address} onChange={handleChange} />
        <Input
          label="Business Name"
          name="businessName"
          value={profile.businessName}
          onChange={handleChange}
        />
        <Input
          label="Business Licence"
          name="businessLicence"
          value={profile.businessLicence}
          onChange={handleChange}
        />
        <select
          name="role"
          value={profile.role}
          onChange={handleChange}
          className="w-full p-2 rounded border"
        >
          <option value="vendor">Vendor</option>
          <option value="supplier">Supplier</option>
        </select>

        <Button
          onClick={handleUpdate}
          className="w-full bg-emerald-600 hover:bg-emerald-700 mt-2"
          disabled={loading}
        >
          {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : null}
          Save Changes
        </Button>
      </div>
    </div>
  );
}
