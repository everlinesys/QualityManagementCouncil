import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { servicesData } from "./ServicesData";

export const Services2 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "certification";
  
  const phoneNumber = "918606999888";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi, I would like to enquire about ${currentTab} services.`;

  const tabs = [
    { key: "certification", label: "Certification Services" },
    { key: "registration", label: "Registration Services" },
    { key: "licensing", label: "Licensing Services" },
    { key: "consultancy", label: "Consultancy Services" },
  ];

  const setTab = (tab) => {
    setSearchParams({ tab });
  };

  return (
    <section className="bg-slate-50 py-24 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-12">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
            Official Services
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            Regulatory & Compliance <br />
            <span className="text-blue-600">Service Portfolio</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setTab(tab.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                currentTab === tab.key
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-4">
            {servicesData[currentTab].map((item, i) => (
              <div
                key={i}
                className="group p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-600 transition-all duration-300"
              >
                <h4 className="text-sm font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.desc}
                </p>

                {item.benefits && (
                  <ul className="mt-3 space-y-1.5">
                    {item.benefits.map((b, idx) => (
                      <li key={idx} className="text-[11px] text-slate-500 flex items-start gap-2">
                        <span className="text-blue-400">•</span> {b}
                      </li>
                    ))}
                  </ul>
                )}

                {/* WhatsApp Link Style */}
                <a 
                  href={`https://wa.me/${phoneNumber}?text=I am interested in: ${item.title}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="text-blue-600 text-xs font-bold mt-4 inline-flex items-center gap-1 hover:underline decoration-2 underline-offset-4"
                >
                  Consult an Expert <ArrowUpRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section with Link Style Action */}
        <div className="mt-16 p-8 bg-slate-900 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 text-white border border-slate-800">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-1 flex items-center justify-center md:justify-start gap-2">
              <MessageCircle size={20} className="text-blue-500" /> Need immediate assistance?
            </h4>
            <p className="text-sm text-slate-400">
              Speak directly with our compliance experts on WhatsApp.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300 font-bold text-sm flex items-center gap-2 transition-colors group"
          >
            <span className="border-b-2 border-blue-400/30 group-hover:border-blue-300 pb-0.5">
              Chat with us now
            </span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};