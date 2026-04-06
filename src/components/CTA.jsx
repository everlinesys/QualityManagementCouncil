import { MessageSquare, FileText, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20">
          
          {/* Background Decorative Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, backgroundSize: '24px 24px' }}>
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-5 items-center">
            
            {/* LEFT CONTENT (60%) */}
            <div className="lg:col-span-3 p-10 md:p-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-[10px] font-bold uppercase tracking-widest mb-6">
                <Clock size={14} />
                Council Support: Active
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Begin Your Path to <br />
                <span className="text-blue-400">Institutional Excellence</span>
              </h2>
              
              <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
                Connect with our certified compliance officers to streamline your 
                organization's quality management and regulatory status.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                  Schedule Consultation
                  <MessageSquare size={18} />
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all">
                  Access Portal
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* RIGHT SIDEBAR (40%) - Quick Resource Access */}
            <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm p-10 md:p-16 h-full flex flex-col justify-center border-l border-white/5">
              <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                <FileText size={20} className="text-blue-400" />
                Quick Resources
              </h4>
              
              <ul className="space-y-4">
                {[
                  { label: "Application Procedures", href: "/services" },
                  { label: "Fee Structure 2026", href: "/services" },
                  { label: "Compliance Checklists", href: "/services" },
                  { label: "Council Bye-Laws", href: "/services" }
                ].map((item, i) => (
                  <li key={i}>
                    <a href={item.href} className="group flex items-center justify-between text-slate-400 hover:text-white transition-colors py-2 border-b border-white/5">
                      <span className="text-sm font-medium">{item.label}</span>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-[11px] text-slate-500 italic">
                *Typical response time for new enquiries is within 24 business hours.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};