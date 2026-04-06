import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShieldCheck, Menu, X, Globe } from "lucide-react";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Verify", path: "/verify" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">

      {/* 🔷 TOP GOV STRIP */}
      <div className="bg-[#0b1e3c] text-white text-[11px] px-6 md:px-12 py-2 flex justify-between items-center tracking-wide">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="font-semibold">
            Official Certificate Verification Portal
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 opacity-80">
          <button className="flex items-center gap-1 hover:opacity-100">
            <Globe size={13} /> EN
          </button>
          <span className="hover:opacity-100 cursor-pointer">Accessibility</span>
          <span className="hover:opacity-100 cursor-pointer">Help</span>
        </div>
      </div>

      {/* 🏛️ HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-2.5 rounded-xl shadow-md">
              <ShieldCheck className="text-white" size={26} />
            </div>

            <div className="leading-tight">
              <h1 className="text-lg md:text-xl font-extrabold tracking-tight">
                Universal Benchmarking
              </h1>
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                Certification Authority
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-semibold transition ${
                  isActive(item.path)
                    ? "text-blue-700"
                    : "text-slate-600 hover:text-blue-700"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/verify"
              className="bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-bold hover:bg-blue-800 shadow"
            >
              Verify Certificate
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* 📱 Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden px-6 pb-6 space-y-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-slate-700"
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/verify"
              className="block bg-blue-700 text-white text-center py-2 rounded-md font-semibold"
            >
              Verify Certificate
            </Link>
          </div>
        )}
      </header>

      {/* 🧾 MAIN CONTENT */}
      <main>{children}</main>

      {/* 🏛️ FOOTER */}
      <footer className="bg-[#0b1e3c] text-slate-300 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">
              Universal Benchmarking
            </h3>
            <p className="text-sm leading-relaxed opacity-80">
              Official certification and compliance verification authority ensuring
              transparency and trust across global standards.
            </p>
          </div>

          {/* Standards */}
          <div>
            <h4 className="text-white font-semibold mb-4">Standards</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li>ISO 9001</li>
              <li>ISO 14001</li>
              <li>ISO 27001</li>
              <li>ISO 45001</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li>Certificate Registry</li>
              <li>Verification Portal</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-white font-semibold mb-4">Head Office</h4>
            <p className="text-sm opacity-80">
              International Certification Authority<br />
              United Kingdom Registry
            </p>
          </div>
        </div>

        <div className="text-center text-xs border-t border-white/10 py-6 opacity-70">
          © 2026 Universal Benchmarking Limited. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}