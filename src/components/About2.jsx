import React from "react";
import { Landmark, Target, Users, ShieldCheck, Sparkles, Globe2, ChevronRight, Scale } from "lucide-react";

export const About2 = () => {
  return (
    <div className="bg-[#f8fafc] font-serif selection:bg-slate-200">
      
      {/* 🏛️ OFFICIAL TOP BAR */}
      <div className="bg-[#1e293b] py-2 border-b-4 border-[#94a3b8]">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-[11px] text-slate-300 uppercase tracking-widest font-sans font-bold">
          <span className="flex items-center gap-2">
            <Landmark size={14} className="text-blue-400" /> 
            Government of India Registered Autonomous Body
          </span>
          <span className="hidden md:block">ISO/IEC Standards Compliance Division</span>
        </div>
      </div>

      {/* 🏛️ INSTITUTIONAL HERO */}
      <section className="bg-white border-b border-slate-300 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-8 border-l-4 border-blue-800 pl-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-snug">
                Quality Management Council (QMC)
              </h1>
              <h2 className="text-lg md:text-xl text-blue-900 font-semibold mb-6 font-sans">
                National Authority for Standards & Institutional Governance
              </h2>
              <p className="text-slate-700 text-sm md:text-base max-w-3xl leading-relaxed">
                Dedicated to the promotion of internationally recognized management systems and organizational excellence 
                across public and private sectors. QMC operates as an autonomous regulatory framework driver 
                under the vision of national standardisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 📘 FORMAL DOSSIER SECTION */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          
          {/* Main Content (Left) */}
          <div className="md:col-span-8 bg-white border border-slate-200 shadow-sm p-8 md:p-10">
            <h3 className="text-sm font-sans font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 pb-4 mb-6">
              Executive Summary
            </h3>
            
            <div className="space-y-5 text-slate-800 text-[15px] leading-7">
              <p>
                Driven by the official mandate <span className="font-bold underline decoration-blue-800/30">“Nation Towards Standards”</span>, 
                the Council facilitates the adoption of structured systems that strengthen transparency, 
                accountability, and operational efficiency within the Indian administrative landscape.
              </p>

              <p>
                QMC provides a robust support framework for government departments, public sector undertakings (PSUs), 
                and banking institutions. Our primary focus remains the implementation of ISO-based quality frameworks 
                that ensure long-term sustainability and superior service delivery.
              </p>

              <div className="bg-slate-50 border-l-4 border-slate-400 p-5 my-8 font-sans italic text-slate-600">
                "The Council serves as a centralized platform for standard development, policy advisory, 
                and professional competence enhancement across all tiers of industry."
              </div>

              <p>
                Special emphasis is placed on the Small and Medium Enterprise (SME) sector, providing 
                specialized advisory services to improve global competitiveness and domestic productivity 
                through strictly monitored quality practices.
              </p>

              <p className="pt-4 border-t border-slate-100 font-sans font-bold text-slate-900 text-xs uppercase italic">
                — Issued by the Secretariat, Quality Management Council
              </p>
            </div>
          </div>

          {/* Institutional Sidebar (Right) */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-[#f1f5f9] border border-slate-200 p-6">
              <h4 className="font-sans font-bold text-xs uppercase text-slate-900 mb-4 flex items-center gap-2">
                <Target size={16} className="text-blue-800" /> Key Mandate
              </h4>
              <p className="text-xs text-slate-600 leading-5">
                Implementation of ISO 17021 and 17020 protocols for organizational efficiency and 
                compliance monitoring at a national level.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6">
              <h4 className="font-sans font-bold text-xs uppercase text-slate-900 mb-4 flex items-center gap-2">
                <Scale size={16} className="text-blue-800" /> Regulatory Focus
              </h4>
              <ul className="text-xs text-slate-600 space-y-3 font-sans">
                <li className="flex gap-2">
                  <ChevronRight size={14} className="text-blue-800 shrink-0" />
                  Governance Frameworks
                </li>
                <li className="flex gap-2">
                  <ChevronRight size={14} className="text-blue-800 shrink-0" />
                  Public Sector Training
                </li>
                <li className="flex gap-2">
                  <ChevronRight size={14} className="text-blue-800 shrink-0" />
                  SME Compliance Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 💡 PILLARS SECTION - TIGHTER GRID */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-0 border border-slate-200 shadow-sm">
            {[
              { icon: <Sparkles size={20}/>, title: "Standardization", desc: "Alignment of local systems with global ISO benchmarks." },
              { icon: <Globe2 size={20}/>, title: "Global Compliance", desc: "Ensuring Indian businesses meet international trade criteria." },
              { icon: <Users size={20}/>, title: "Skill Development", desc: "Empowering professionals via accredited training modules." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 border-r last:border-r-0 border-slate-200 hover:bg-slate-50 transition-colors">
                <div className="text-blue-900 mb-4">{item.icon}</div>
                <h3 className="font-bold text-sm uppercase font-sans mb-2 tracking-tight">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-5 font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏆 COMPLIANCE FOOTER STRIP */}
      <section className="bg-white border-t border-slate-300 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center md:justify-start gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
           <div className="flex items-center gap-2 text-[10px] font-bold font-sans uppercase">
              <ShieldCheck className="text-slate-800" size={18} /> Validated Frameworks
           </div>
           <div className="flex items-center gap-2 text-[10px] font-bold font-sans uppercase">
              <Landmark className="text-slate-800" size={18} /> Central Secretariat
           </div>
           <div className="flex items-center gap-2 text-[10px] font-bold font-sans uppercase">
              <Scale className="text-slate-800" size={18} /> Legal Compliance
           </div>
        </div>
      </section>
    </div>
  );
};