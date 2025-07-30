import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send, ShieldCheck,Loader } from "lucide-react";

export function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);

  const handleSendOtp = () => {
    if (!phone.match(/^\d{10}$/)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    setOtpSent(true);
    toast.success("OTP sent successfully!");
    // 🔴 TODO: API call to send OTP
  };

  const handleLogin = () => {
    if (otp.trim().length !== 6) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }
    toast.success("Login successful!");
    // 🔴 TODO: API call to verify OTP
  };

  return (
    <div className="min-h-screen  w-full flex items-center justify-center bg-gray-200 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-emerald-500 mb-6">
          Login to Sanchay
        </h2>

        {/* Phone Input */}
        <div className="mb-5">
          <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
          <Input
            type="tel"
            placeholder="Enter 10-digit number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Send OTP */}
        {!otpSent && (
          <Button
            onClick={handleSendOtp}
            className="w-full bg-emerald-500 hover:bg-emerald-700"
          >
            <Send className="w-4 h-4 mr-2" />
            Send OTP
          </Button>
        )}

        {/* OTP Input + Login Button */}
        {otpSent && (
          <>
            <div className="mt-5">
              <label className="block text-sm text-gray-700 mb-1">OTP</label>
              <Input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <Button
              onClick={handleLogin}
              disabled={loading}
              className="w-full mt-5 bg-emerald-500 hover:bg-emerald-700"
            >
              {loading ? (
                <>
                  <Loader className="w-4 h-4 mr-2 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  Verify & Login
                </>
              )}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
