import { Eye, Target, Map, Shield } from "lucide-react";

export const VisionMission = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Institutional Header */}
        <div className="mb-16 border-l-4 border-slate-900 pl-6">
          <span className="text-[10px] font-bold text-blue-700 uppercase tracking-[0.3em] mb-2 block">
            The Council Charter
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter">
            Strategic Roadmap & <br /> Institutional Mandate
          </h2>
        </div>

        {/* Vision & Mission Split Panel */}
        <div className="flex flex-col md:flex-row bg-slate-50 border border-slate-200">
          
          {/* VISION SECTION */}
          <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-200 relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-slate-900 text-white rounded-sm">
                <Eye size={18} strokeWidth={2.5} />
              </div>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">
                Our Vision
              </h3>
            </div>
            
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-6">
              To function as the <span className="text-slate-900 font-bold border-b border-blue-200">National Sovereign Benchmark</span> for quality management, facilitating an ecosystem where every registered enterprise operates at peak global compliance.
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
              <div className="flex -space-x-2">
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
                 ))}
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Global Alignment 2026</span>
            </div>
          </div>

          {/* MISSION SECTION */}
          <div className="flex-1 p-8 md:p-12 bg-slate-900 text-white relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-600 text-white rounded-sm">
                <Target size={18} strokeWidth={2.5} />
              </div>
              <h3 className="text-sm font-black text-white uppercase tracking-widest">
                Our Mission
              </h3>
            </div>
            
            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-6">
              To empower the Indian industrial landscape through <span className="text-blue-400 font-bold">statutory certification frameworks</span>, ensuring unbiased audit protocols and promoting management innovation for sustainable institutional growth.
            </p>

            {/* List of Statutory Objectives (Adds "Council" Weight) */}
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {[
                "Framework Integrity",
                "Systemic Innovation",
                "Regulatory Advocacy",
                "Public Trust"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  <Shield size={10} className="text-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Metadata Footer */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
             <Map size={16} className="text-slate-300" />
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
               Document ID: QMC-STRAT-V1.0
             </span>
          </div>
          <p className="text-[10px] text-slate-400 font-medium">
            Authorized by the Governing Body for National Quality Advancement
          </p>
        </div>

      </div>
    </section>
  );
};