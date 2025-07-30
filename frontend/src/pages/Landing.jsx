import { Button } from "@/components/ui/button";
import { Globe, LogIn } from "lucide-react";
import { Search, Scale } from "lucide-react";


export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b shadow-sm">
        <h1 className="text-2xl font-bold text-emerald-500">Sanchay</h1>
        <div className="flex items-center gap-4">
          <Globe className="w-5 h-5 cursor-pointer" />
          <Button variant="outline">
            <LogIn className="w-4 h-4 mr-2"  />
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Sanchay: A platform to{" "}
          <span className="text-emerald-500">
            easily get sources from products
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Give feedback, ensure quality, and empower street vendors.
        </p>
      </section>

      {/* Cards Section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-6 px-6 mb-12">
  {/* Card 1: Search */}
  <div className="w-full max-w-sm p-6 border rounded-2xl shadow-sm hover:shadow-md transition text-center">
<Search className="text-gray-400 w-10 h-10 mx-auto mb-2" />
    <h3 className="text-xl font-semibold mb-2 text-emerald-600">
      Search for Products
    </h3>
    <p className="text-gray-600">
      Find reliable suppliers around you for your needs.
    </p>
  </div>

  {/* Card 2: Compare */}
  <div className="w-full max-w-sm p-6 border rounded-2xl shadow-sm hover:shadow-md transition text-center">
    <Scale className="text-gray-400 w-10 h-10 mx-auto mb-2" />
    <h3 className="text-xl font-semibold mb-2 text-emerald-600">
      Compare Prices & Feedback
    </h3>
    <p className="text-gray-600">
      Choose better by comparing prices and user feedback.
    </p>
  </div>
</section>


     

      {/* Footer */}
      <footer className="mt-auto text-center text-sm text-gray-500 py-4 border-t">


         {/* Introduction */}
      <section className="text-center px-6 mb-12">
        <h4 className="text-xl font-semibold mb-2">🌶️ Built for Indian Street Food Vendors</h4>
        <p className="text-gray-600">
          Available in <span className="font-medium">English</span> & <span className="font-medium">Hindi</span> to support every local entrepreneur.
        </p>
      </section>
        Made with ❤️ for Indian food vendors
      </footer>
    </div>
  );
}
