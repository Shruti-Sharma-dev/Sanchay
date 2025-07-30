import { Globe, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  const handleLanguageToggle = () => {
    // Mock function: Add language toggle logic later
    console.log("Language toggled!");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <header className="w-full px-4 py-3 flex items-center justify-between bg-emerald-100 shadow-sm rounded-b-xl">


      {/* App Logo + Name */}
      <div className="flex items-center gap-2">
       
        <h1 className="text-xl font-bold text-emerald-700">Sanchay</h1>
      </div>



            {/* Globe Icon for Language */}
      <button onClick={handleLanguageToggle} className="text-emerald-600">
        <Globe className="w-6 h-6" />
      </button>

      {/* User Profile */}
      <button onClick={handleProfileClick} className="text-emerald-600">
        <UserCircle className="w-7 h-7" />
      </button>
    </header>
  );
}
