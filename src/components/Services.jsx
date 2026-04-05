import { FileBadge, Briefcase, FileSearch, ArrowUpRight } from "lucide-react";

export const Services = () => {
  const services = [
    {
      id: "CERT-01",
      title: "Accredited Certification",
      desc: "Official assessment and issuance of ISO 9001:2015, ISO 27001:2013, and global quality benchmarks.",
      icon: <FileBadge size={28} />,
      link: "/certification",
      tag: "Global Standard"
    },
    {
      id: "REG-02",
      title: "Statutory Registration",
      desc: "End-to-end facilitation of business registration, MCA compliance, and legal council documentation.",
      icon: <Briefcase size={28} />,
      link: "/registration",
      tag: "Govt Compliance"
    },
    {
      id: "CONS-03",
      title: "Management Consulting",
      desc: "Strategic implementation of ISO 20700:2017 guidelines and organizational process optimization.",
      icon: <FileSearch size={28} />,
      link: "/consulting",
      tag: "Consultancy"
    }
  ];

  return (
    <section className="bg-slate-50 py-24 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
              Official Mandates
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Operational & Regulatory <br />
              <span className="text-blue-600">Council Services</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-xs md:text-right border-l-2 md:border-l-0 md:border-r-2 border-blue-600 px-4">
            Ensuring uniformity in quality management across all registered Indian enterprises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/5 flex flex-col h-full"
            >
              {/* Service Metadata */}
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-slate-50 text-slate-900 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded">
                  {s.id}
                </span>
              </div>

              {/* Text Content */}
              <div className="mb-8 flex-grow">
                <span className="text-[11px] font-bold text-blue-600 uppercase mb-2 block">{s.tag}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Action */}
              <a 
                href={s.link} 
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors pt-6 border-t border-slate-50"
              >
                View Service Details
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Quick Help Footer */}
        <div className="mt-16 p-6 bg-slate-900 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-xl shadow-slate-200">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <span className="text-blue-400 font-bold text-lg">?</span>
            </div>
            <div>
              <h4 className="font-bold text-sm">Need help with Certification?</h4>
              <p className="text-xs text-slate-400">Speak with our compliance officers for a free initial consultation.</p>
            </div>
          </div>
          <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-all uppercase tracking-widest">
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  );
};