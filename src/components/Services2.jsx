import { Link, useSearchParams } from "react-router-dom";
import { FileBadge, Briefcase, FileSearch, ArrowUpRight, ShieldCheck } from "lucide-react";

export const Services2 = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentTab = searchParams.get("tab") || "certification";

  const tabs = [
    { key: "certification", label: "Certification Services" },
    { key: "registration", label: "Registration Services" },
    { key: "licensing", label: "Licensing Services" },
    { key: "consultancy", label: "Consultancy Services" },
  ];

  const servicesData = {
    certification: [
      "ISO 9001:2015 – Quality Management System",
      "ISO 14001:2015 – Environmental Management System",
      "ISO 45001:2018 – Occupational Health & Safety",
      "ISO 22000:2018 – Food Safety Management",
      "ISO 27001 – Information Security",
      "ISO 21001 – Educational Organizations",
      "ISO 13485 – Medical Devices QMS",
      "ISO 22301 – Business Continuity",
      "ISO 50001 – Energy Management",
      "ISO 20000 – IT Service Management",
      "WHO GMP Certification",
      "CE Marking Compliance",
      "HACCP Certification",
      "Halal Certification",
      "RoHS Compliance",
      "FSC Certification",
      "RCMC Certification",
      "Credit Rating Services"
    ],
    registration: [
      "Company Incorporation",
      "LLP Registration",
      "Partnership Firm Registration",
      "Trademark Registration",
      "Copyright Registration",
      "Patent Registration",
      "GST Registration",
      "MSME / Udyam Registration"
    ],
    licensing: [
      "Import Export Code (IEC)",
      "Consumer Affairs Licensing",
      "Drug Licensing",
      "FSSAI Food License",
      "Other Government Approvals"
    ],
    consultancy: [
      "Management system implementation",
      "Quality & compliance frameworks",
      "Business planning & development",
      "Process improvement strategies",
      "Certification readiness support"
    ]
  };

  const setTab = (tab) => {
    setSearchParams({ tab });
  };

  return (
    <section className="bg-slate-50 py-24 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
              Official Services
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Regulatory & Compliance <br />
              <span className="text-blue-600">Service Portfolio</span>
            </h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setTab(tab.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition ${
                currentTab === tab.key
                  ? "bg-blue-600 text-white"
                  : "bg-white border text-slate-600 hover:border-blue-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl border shadow-sm p-8 md:p-10">

          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <ShieldCheck />
            </div>
            <h3 className="text-xl font-bold capitalize">
              {currentTab} Services
            </h3>
          </div>

          {/* Service List */}
          <div className="grid md:grid-cols-2 gap-4">
            {servicesData[currentTab].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border bg-slate-50 hover:border-blue-600 transition"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Footer CTA */}
        <div className="mt-16 p-6 bg-slate-900 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h4 className="font-bold text-sm">Need assistance?</h4>
            <p className="text-xs text-slate-400">
              Our experts will guide you through the process.
            </p>
          </div>
          <Link to="/contact" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-all uppercase tracking-widest flex items-center gap-2">
            Enquire Now
            <ArrowUpRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
};