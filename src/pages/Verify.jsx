import React, { useState } from "react";
import { Search, ShieldCheck, Globe, FileCheck, Loader2, ExternalLink, Link } from "lucide-react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

export default function Verify() {
  const [loading, setLoading] = useState(false);
  const [certNumber, setCertNumber] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    setLoading(true);
    // Logic to hit your proxy/legacy API goes here
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-w-[100vw] min-h-screen bg-slate-50 font-sans">
      <Header />
      {/* 🏛️ INSTITUTIONAL HEADER */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl border-l-4 border-blue-800 pl-6">
              <span className="text-blue-800 font-bold text-[10px] uppercase tracking-widest mb-2 block">
                Official Registrar Portal
              </span>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
                Certificate <span className="text-blue-800">Validation System</span>
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed">
                Verification services are powered by <span className="font-bold text-slate-900">Universal Benchmarking Limited (UBML)</span>.
                All certificates issued under our framework are logged in the central global registry for
                authenticity and international compliance.
              </p>
            </div>

            {/* UBML Branding Link */}
            {/* <a
              href="https://ubmarking.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-300 transition-all group"
            >
              <div className="bg-white p-2 rounded shadow-sm">
                <Globe size={24} className="text-blue-800" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Accredited Registrar</p>
                <p className="text-xs font-bold text-slate-800 group-hover:text-blue-800 flex items-center gap-1">
                  ubmarking.com <ExternalLink size={12} />
                </p>
              </div>
            </a> */}
          </div>
        </div>
      </section>

      {/* 🛡️ VERIFICATION INTERFACE */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT: THE FORM */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Search size={18} className="text-blue-800" />
                Credential Search
              </h3>

              <form onSubmit={handleVerify} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-2 ml-1">
                    Certificate Number / UID
                  </label>
                  <input
                    type="text"
                    required
                    disabled={true}
                    placeholder="e.g. UBML-9001-2024-XXXX"
                    value={certNumber}
                    onChange={(e) => setCertNumber(e.target.value)}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-blue-800 outline-none text-sm font-medium tracking-wide"
                  />
                </div>

                <a
                  href="https://ubmarking.com/"
                  target="_blank"
                  rel="noopener noreferrer"   
                  className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold text-xs uppercase tracking-[0.2em] hover:bg-blue-800 transition-all shadow-md flex items-center justify-center gap-3"
                > verfiy
                </a>
              </form>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <p className="text-[11px] text-blue-800 leading-relaxed italic">
                  Note: If your certificate was issued prior to 2024, please ensure you include the full
                  pre-fix as shown on the printed document.
                </p>
              </div>
            </div>

            {/* RIGHT: TRUST INDICATORS */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 border border-slate-200 rounded-lg">
                  <ShieldCheck className="text-green-600 mb-4" size={24} />
                  <h4 className="font-bold text-sm text-slate-900 mb-2">Tamper Proof</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Our digital registry uses encrypted UIDs to prevent fraudulent certification reproduction.
                  </p>
                </div>
                <div className="bg-white p-6 border border-slate-200 rounded-lg">
                  <FileCheck className="text-blue-600 mb-4" size={24} />
                  <h4 className="font-bold text-sm text-slate-900 mb-2">Real-time Status</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Instantly verify if a certificate is Active, Expired, or Withdrawn by the council.
                  </p>
                </div>
              </div>

              <div className="p-8 bg-slate-900 rounded-xl text-white">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Verification Standards</h4>
                <ul className="space-y-3">
                  {['ISO 9001:2015 Quality Management', 'ISO 14001:2015 Environmental', 'ISO 45001:2018 Health & Safety'].map((std, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium border-b border-slate-800 pb-2 last:border-0">
                      <div className="h-1.5 w-1.5 bg-blue-500 rounded-full" />
                      {std}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}