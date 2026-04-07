import { ShieldCheck, ArrowRight, Award, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-100">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0z' fill='%23000'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT - Added Entrance Animation */}
          <div className="text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 mb-5">
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                Registered Autonomous Council • India
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4 uppercase tracking-tighter transition-all hover:translate-x-1 duration-500">
              National Excellence in <br />
              <span className="text-blue-700">Quality Management</span>
            </h1>

            <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-lg mb-8">
              Facilitating enterprise growth through
              <span className="font-bold text-slate-800"> ISO Certifications</span>,
              statutory compliance, and management system standardisation.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="group px-6 py-3 bg-slate-900 text-white rounded-md text-xs font-bold flex items-center gap-2 hover:bg-blue-700 transition-all active:scale-95 shadow-md hover:shadow-blue-200/50">
                Apply for Certification
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="px-6 py-3 border border-slate-200 text-slate-700 rounded-md text-xs font-bold hover:bg-slate-50 transition-all hover:border-slate-400">
                Get in Touch
              </Link>
            </div>

            {/* COMPACT STATS */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex gap-8">
              <div className="flex flex-col group cursor-default">
                <span className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">15+</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Years</span>
              </div>
              <div className="flex flex-col group cursor-default">
                <span className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">ISO 20700</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Standard</span>
              </div>
              <div className="flex flex-col group cursor-default">
                <span className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">100%</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Compliant</span>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL - Added Staggered Floating */}
          <div className="hidden lg:grid grid-cols-2 gap-3 relative">
            {/* Card 1 */}
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 flex flex-col items-center text-center animate-float hover:shadow-lg transition-all duration-500">
              <ShieldCheck size={20} className="text-blue-600 mb-2" />
              <h3 className="font-black text-slate-900 text-[11px] uppercase">ISO 9001:2015</h3>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Quality</p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 flex flex-col items-center text-center translate-y-4 animate-float-slow hover:shadow-lg transition-all duration-500">
              <Award size={20} className="text-blue-600 mb-2" />
              <h3 className="font-black text-slate-900 text-[11px] uppercase">ISO 27001</h3>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Security</p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 flex flex-col items-center text-center animate-float-slow hover:shadow-lg transition-all duration-500">
              <FileCheck size={20} className="text-blue-600 mb-2" />
              <h3 className="font-black text-slate-900 text-[11px] uppercase">Govt. Regd.</h3>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Compliance</p>
            </div>

            {/* Card 4 - Dark Seal */}
            <div className="bg-slate-900 p-6 rounded-lg flex flex-col items-center text-center text-white translate-y-4 shadow-xl shadow-slate-200 animate-float hover:scale-105 transition-transform duration-500">
              <img src="/logowht.png" alt="Seal" className="h-6 w-auto mb-2 opacity-90" />
              <h3 className="font-bold text-[10px] uppercase">Official Seal</h3>
              <p className="text-[8px] text-slate-400 font-bold uppercase">Council Authority</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};