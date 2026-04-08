import { CheckCircle2, ArrowUpRight, ShieldCheck, Landmark, BarChart3 } from "lucide-react";

export const Excellence = () => {
  const phoneNumber = "918606999888";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi, I want to learn more about the QMC Specialized Centres.`;

  const centres = [
    {
      id: "standards",
      title: "Standards Development & Research",
      icon: ShieldCheck,
      description:
        "Promoting the development, understanding, and adoption of global standards, quality frameworks, and best practices.",
      image: "/research.jpeg",
      benefits: ["Quality Consistency", "Innovation Support", "Global Trade", "Regulatory Compliance"],
      vision: "To promote a strong culture of standardization, quality research, and innovation.",
      tag: "Research & Development",
    },
    {
      id: "government",
      title: "Government Systems & Administration",
      icon: Landmark,
      description:
        "Strengthening governance frameworks and institutional capacity within public sector organizations.",
      image: "/govt.jpeg",
      benefits: ["Administrative Efficiency", "Public Service Delivery", "Accountability", "Policy Implementation"],
      vision: "To strengthen governance, transparency, and service excellence.",
      tag: "Public Sector",
    },
    {
      id: "banking",
      title: "Banking & Cooperative Excellence",
      icon: BarChart3,
      description:
        "Enhancing governance, service quality, and risk management within banking and cooperative sectors.",
      image: "/excellence.jpeg",
      benefits: ["Institutional Governance", "Service Quality", "Risk Management", "Trust & Credibility"],
      vision: "To promote excellence, transparency, and sustainable financial systems.",
      tag: "Financial Sector",
    },
  ];

  return (
    <section className="bg-white py-28" id="excellence">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="max-w-2xl mb-20">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">
            Specialized Divisions
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 leading-tight">
            Centres Driving Institutional Excellence
          </h2>
          <p className="mt-4 text-slate-600 text-sm leading-relaxed">
            Focused hubs designed to elevate standards, governance, and performance across sectors.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-10">
          {centres.map((centre) => (
            <div
              key={centre.id}
              className="group border border-slate-200 rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={centre.image}
                  alt={centre.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* tag */}
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur text-white rounded-full">
                    {centre.tag}
                  </span>
                </div>

                {/* title on image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {centre.title}
                  </h3>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col">

                <div className="flex items-center gap-3 mb-4">
                  <centre.icon className="w-6 h-6 text-blue-600" />
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Core Focus
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {centre.description}
                </p>

                {/* benefits */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {centre.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                      <CheckCircle2 size={14} className="text-blue-600" />
                      {b}
                    </div>
                  ))}
                </div>

                {/* vision */}
                <div className="mt-auto border-t pt-6">
                  <span className="text-[10px] font-bold text-blue-600 uppercase">
                    Vision
                  </span>
                  <p className="text-sm font-semibold text-slate-900 mt-1">
                    "{centre.vision}"
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase font-bold text-blue-600 tracking-widest">
              Next Step
            </p>
            <h4 className="text-lg font-semibold text-slate-900 mt-1">
              Connect with our specialized centres
            </h4>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 hover:bg-blue-700 transition"
          >
            Get Started
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};