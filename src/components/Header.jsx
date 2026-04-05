import { useState } from "react";
import { Menu, X, ChevronRight, Search } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Council", href: "/about" },
    { name: "Certifications", href: "/certifications" },
    { name: "Public Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* 1. OFFICIAL GOVT TOP BAR */}
      <div className="bg-slate-50 border-b border-gray-100 py-1.5 px-6 md:px-10 flex justify-between items-center text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        <div className="flex gap-4">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-orange-400"></span> 
            Government of India Regd
          </span>
          <span className="hidden sm:inline-block">Autonomous Council</span>
        </div>
        <div className="flex gap-4 items-center">
          <button className="hover:text-blue-600">Skip to content</button>
          <button className="hover:text-blue-600">A+</button>
          <button className="hover:text-blue-600 font-bold underline">English</button>
        </div>
      </div>

      {/* 2. MAIN BRANDING AREA */}
      <div className="w-full px-6 md:px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          {/* LOGO */}
          <div className="flex items-center gap-4 border-r border-gray-200 pr-5">
            <img src="/logo.png" alt="QMC Emblem" className="h-12 w-auto object-contain" />
            <img src="/name.png" alt="QMC Emblem" className="h-12 w-auto object-contain" />
            {/* <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-slate-900 tracking-tight">QMC India</span>
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Quality Management Council</span>
            </div> */}
          </div>

          {/* TAGLINE (Government Style) */}
          <div className="hidden lg:block text-xs text-slate-500 max-w-[280px] leading-snug">
            <p className="font-semibold text-slate-700">Registered Autonomous Body</p>
            <p>ISO 9001:2015 & 27001:2013 Certified Organization</p>
          </div>
        </div>

        {/* 3. DESKTOP NAVIGATION */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="px-4 py-2 text-[14px] font-semibold text-slate-600 hover:text-blue-700 relative group transition-colors"
            >
              {link.name}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </nav>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition">
            <Search size={20} />
          </button>
          <a
            href="/verify"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-blue-800 transition-all shadow-sm active:scale-95"
          >
            Verify Certificate
            <ChevronRight size={16} />
          </a>
          
          {/* MOBILE TOGGLE */}
          <button
            className="xl:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 4. MOBILE DRAWER */}
      {open && (
        <div className="xl:hidden absolute top-[100%] left-0 w-full bg-white border-t border-gray-200 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="p-6 space-y-1">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="flex items-center justify-between w-full p-4 text-slate-700 font-bold border-b border-gray-50 hover:bg-blue-50 hover:text-blue-700 rounded-xl"
                onClick={() => setOpen(false)}
              >
                {link.name}
                <ChevronRight size={18} className="text-slate-300" />
              </a>
            ))}
            <div className="pt-4">
               <a
                href="/verify"
                className="block text-center bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg"
              >
                Certificate Verification
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}