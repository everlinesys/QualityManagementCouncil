import { Landmark, ShieldCheck, TrendingUp, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const Excellence = () => {
  const phoneNumber = "918606999888";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi, I want to learn more about the Centre for Banking and Cooperative Excellence.`;

  return (
    <section className="bg-white py-24 border-y border-slate-200" id="excellence">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
              Specialized Initiative
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Centre for Banking & <br />
              <span className="text-blue-600">Cooperative Excellence</span>
            </h2>

            <p className="mt-6 text-slate-600 text-sm leading-relaxed max-w-2xl">
              The Centre for Banking and Cooperative Excellence is a specialized initiative of the
              Quality Management Council (QMC) established to promote structured management systems,
              governance standards, and institutional capacity development.
            </p>
          </div>

          <div className="hidden md:block text-slate-500 font-medium max-w-xs text-right border-r-2 border-blue-600 pr-6 pb-2">
            Strengthening financial institutions through governance and global standards.
          </div>
        </div>

        {/* Core Importance Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: <ShieldCheck size={26} />, title: "Strengthening Governance", desc: "ISO systems establish clear policies and accountability frameworks ensuring transparency and compliance." },
            { icon: <Landmark size={26} />, title: "Improving Service Quality", desc: "ISO 9001 enables institutions to deliver consistent, reliable, and customer-focused financial services." },
            { icon: <TrendingUp size={26} />, title: "Operational Efficiency", desc: "Structured management systems streamline operations and enhance institutional performance." }
          ].map((item, idx) => (
            <div key={idx} className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-600 transition-all hover:shadow-xl hover:shadow-blue-900/5">
              <div className="p-4 bg-white rounded-xl mb-6 w-fit group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Image & Detailed Lists Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-3xl -z-10 group-hover:bg-blue-100 transition-colors"></div>
            <img 
              src="/excellence.jpeg" 
              alt="Excellence in Banking" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-blue-600"></span> Activities of the Centre
              </h3>
              <ul className="grid sm:grid-cols-1 gap-4">
                {[
                  "Training programs and capacity development",
                  "ISO-based management system support",
                  "Advisory for governance improvement",
                  "Research and knowledge development",
                  "Institutional strengthening programs"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-blue-600"></span> Why It Matters
              </h3>
              <ul className="grid sm:grid-cols-1 gap-4 text-sm text-slate-600">
                {[
                  "Enhances trust and credibility",
                  "Supports risk management frameworks",
                  "Enables digital transformation",
                  "Strengthens financial inclusion"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-lg leading-none mt-1">·</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Vision + WhatsApp Link CTA */}
        <div className="mt-24 p-10 bg-slate-900 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
          
          <div className="max-w-xl relative z-10">
            <h4 className="text-xl font-bold mb-3 text-blue-400">
              Vision of the Centre
            </h4>
            <p className="text-base text-slate-300 leading-relaxed italic">
              "To promote excellence, transparency, and sustainable development in the banking
              and cooperative sectors through internationally recognized standards."
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 text-blue-400 hover:text-blue-300 text-lg font-bold transition-all relative z-10"
          >
            <span className="border-b-2 border-blue-400/30 group-hover:border-blue-300 pb-1">
              Connect with the Centre
            </span>
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};