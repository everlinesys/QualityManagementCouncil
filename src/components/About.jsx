import { Landmark, Target, ShieldCheck, Users } from "lucide-react";

export const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: VISUAL TRUST CARD */}
          <div className="relative">
            {/* The Image Wrapper with a "Seal" overlay */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="Council Boardroom"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Glassmorphism Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600 text-white rounded-xl">
                    <Landmark size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Autonomous Legal Entity</h4>
                    <p className="text-xs text-slate-600 leading-snug">
                      Registered under the Ministry of Corporate Affairs, Govt. of India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-50 rounded-full -z-10 opacity-60"></div>
          </div>

          {/* RIGHT COLUMN: CONTENT */}
          <div>
            <div className="mb-8">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
                Institutional Profile
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Governance for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
                  Global Standards
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                The Quality Management Council (QMC) operates as an autonomous body 
                dedicated to the national standardisation of management systems. 
                We bridge the gap between regulatory requirements and operational excellence.
              </p>
            </div>

            {/* MISSION / VISION GRID */}
            <div className="space-y-6">
              <div className="group flex gap-5 p-5 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Our Mandate</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    To implement ISO frameworks that enable Indian MSMEs and Corporations 
                    to compete in international markets with certified quality assurance.
                  </p>
                </div>
              </div>

              <div className="group flex gap-5 p-5 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Public Engagement</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Fostering a culture of "Quality First" through continuous monitoring, 
                    auditing, and public certification verification services.
                  </p>
                </div>
              </div>
            </div>

            {/* STATS STRIP */}
            <div className="mt-10 flex items-center gap-8 py-6 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-green-600" size={20} />
                <span className="text-sm font-bold text-slate-800">ISO 20700 Compliant</span>
              </div>
              <div className="w-px h-4 bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <Landmark className="text-blue-600" size={20} />
                <span className="text-sm font-bold text-slate-800">Govt. Registered</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};