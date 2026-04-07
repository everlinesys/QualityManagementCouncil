import { FileBadge, Briefcase, FileSearch, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Services = () => {
  const phoneNumber = "918606999888";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi, I would like to know more about your Council Services.`;

  const services = [
    {
      id: "CERT-01",
      title: "Accredited Certification",
      desc: "Official assessment and issuance of ISO standards and global quality benchmarks.",
      icon: <FileBadge size={28} />,
      link: "/services?tab=certification",
      tag: "Global Standard",
      image: "/excellence.jpeg",
      delay: "0s"
    },
    {
      id: "REG-02",
      title: "Statutory Registration",
      desc: "End-to-end facilitation of business registration and compliance services.",
      icon: <Briefcase size={28} />,
      link: "/services?tab=registration",
      tag: "Govt Compliance",
      image: "/govt.jpeg",
      delay: "0.1s"
    },
    {
      id: "CONS-03",
      title: "Management Consulting",
      desc: "Strategic implementation and advisory for quality and compliance frameworks.",
      icon: <FileSearch size={28} />,
      link: "/services?tab=consultancy",
      tag: "Consultancy",
      image: "/research.jpeg",
      delay: "0.2s"
    }
  ];

  return (
    <section className="bg-slate-50 py-24 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header - Animated */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 animate-fade-in-up">
          <div className="max-w-2xl">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
              Official Mandates
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Operational & Regulatory <br />
              <span className="text-blue-600">Council Services</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-xs md:text-right border-l-2 md:border-l-0 md:border-r-2 border-blue-600 px-4 leading-relaxed">
            Ensuring uniformity in quality management across all registered enterprises.
          </p>
        </div>

        {/* Cards - Staggered Movement */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div 
              key={i}
              style={{ animationDelay: s.delay }}
              className="group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 overflow-hidden flex flex-col h-full animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
            >
              {/* 🔥 Image Top with Zoom Movement */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                <div className="absolute top-4 right-4">
                   <span className="text-[10px] font-black text-white uppercase tracking-widest bg-blue-600/80 backdrop-blur-sm px-2 py-1 rounded">
                    {s.id}
                  </span>
                </div>
              </div>

              {/* Content Wrapper */}
              <div className="p-8 flex flex-col h-full relative">
                {/* Icon Float Movement */}
                <div className="absolute -top-8 left-8 p-4 bg-white text-slate-900 rounded-xl shadow-lg group-hover:bg-blue-600 group-hover:text-white group-hover:-translate-y-2 transition-all duration-300">
                  {s.icon}
                </div>

                <div className="mt-6 mb-8 flex-grow">
                  <span className="text-[11px] font-bold text-blue-600 uppercase mb-2 block tracking-wider">
                    {s.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Action Link Style */}
                <Link
                  to={s.link}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors pt-6 border-t border-slate-100"
                >
                  View Service Details
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - WhatsApp Link Style */}
        <div className="mt-16 p-10 bg-slate-900 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden shadow-xl shadow-slate-200">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
          
          <div className="relative z-10 text-center md:text-left">
            <h4 className="font-bold text-lg mb-1">Need help with our services?</h4>
            <p className="text-sm text-slate-400">
              Our experts are available on WhatsApp for immediate guidance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
            <Link 
              to="/services" 
              className="text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors"
            >
              Browse Catalog
            </Link>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-sm transition-all"
            >
              <span className="border-b-2 border-blue-400/20 group-hover:border-blue-300 pb-1">
                Chat with an Expert
              </span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};