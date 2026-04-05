import { ShieldCheck, CheckCircle2, Award } from "lucide-react";

export const QualityPolicy = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Subtle Background Badge */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <ShieldCheck size={400} strokeWidth={1} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Left Sidebar: Identifiers */}
          <div className="w-full md:w-1/3 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white text-[9px] font-bold uppercase tracking-widest rounded-sm">
              Ref: QMC/POL/2026
            </div>
            
            <h2 className="text-2xl font-black text-slate-900 leading-tight uppercase tracking-tight">
              Institutional <br />
              Quality Policy
            </h2>
            
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-md">
                <Award className="text-blue-600" size={18} />
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">ISO 9001:2015 Registered</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed italic">
                This declaration serves as the foundational directive for all council operations and accredited assessment bodies under our jurisdiction.
              </p>
            </div>
          </div>

          {/* Right Content: The Formal Policy */}
          <div className="w-full md:w-2/3 bg-slate-50/50 p-8 md:p-12 border-l-4 border-blue-600 relative">
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-[0.2em] mb-4 block">
              Official Declaration
            </span>

            <div className="relative">
              <p className="text-lg md:text-xl text-slate-800 font-semibold leading-relaxed tracking-tight mb-8">
                “The Quality Management Council is mandatorily committed to 
                <span className="text-blue-700"> enhancing national industrial standards</span> through 
                the delivery of high-integrity certification services that strictly 
                comply with statutory, regulatory, and global stakeholder requirements.”
              </p>
            </div>

            {/* Core Tenants - Lean List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 py-6 border-y border-slate-200/60 mb-8">
              {[
                "Strict Statutory Compliance",
                "Periodic Framework Audit",
                "Unbiased Assessment Protocol",
                "Continuous System Evolution"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            {/* Verification Footer */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-900 uppercase">Board of Governors</span>
                <span className="text-[9px] text-slate-500 uppercase tracking-tighter">Approved for Public Release</span>
              </div>
              
              <div className="flex gap-2">
                 <div className="h-10 w-10 border border-slate-200 rounded flex items-center justify-center grayscale opacity-60">
                   <img src="/logowht.png" alt="Seal" className="h-6 w-auto" />
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};