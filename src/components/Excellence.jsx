import { CheckCircle2, ArrowUpRight } from "lucide-react";

export const Excellence = () => {
  const phoneNumber = "918606999888";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi, I want to learn more about the QMC Specialized Centres.`;

  const centres = [
    {
      id: "standards",
      title: "Standards Development & Research",
      subtitle: "Centre for Standards Development and Quality Research",
      description: "Dedicated to promoting the development, understanding, and adoption of standards, quality frameworks, and best practices across various sectors.",
      image: "/research.jpeg",
      benefits: [
        "Enhancing Quality and Consistency",
        "Supporting Innovation and Competitiveness",
        "Facilitating Global Trade",
        "Strengthening Regulatory Compliance"
      ],
      vision: "To promote a strong culture of standardization, quality research, and innovation.",
      tag: "Research & Development"
    },
    {
      id: "government",
      title: "Government Systems & Administration",
      subtitle: "Centre for Government Systems & Public Administration",
      description: "Promoting quality management systems, governance frameworks, and institutional capacity development within government departments and public sector organizations.",
      image: "/govt.jpeg",
      benefits: [
        "Enhancing Administrative Efficiency",
        "Improving Public Service Delivery",
        "Strengthening Accountability and Transparency",
        "Supporting Policy Implementation"
      ],
      vision: "To strengthen governance, transparency, and service excellence in government institutions.",
      tag: "Public Sector"
    },
    {
      id: "banking",
      title: "Banking & Cooperative Excellence",
      subtitle: "Centre for Banking and Cooperative Excellence",
      description: "Established to promote quality management systems, governance standards, and institutional capacity development within the banking and cooperative sectors.",
      image: "/excellence.jpeg",
      benefits: [
        "Strengthening Institutional Governance",
        "Improving Service Quality",
        "Risk Management and Compliance",
        "Building Trust and Credibility"
      ],
      vision: "To promote excellence, transparency, and sustainable development in banking and cooperatives.",
      tag: "Financial Sector"
    }
  ];

  return (
    <section className="bg-white py-24 border-y border-slate-200" id="excellence">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-3xl">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
              Specialized Initiatives
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Driving Excellence Through <br />
              <span className="text-blue-600">Specialized Centres</span>
            </h2>
          </div>
        </div>

        {/* Centres */}
        <div className="space-y-16">
          {centres.map((centre, idx) => (
            <div 
              key={centre.id}
              className={`flex flex-col lg:flex-row gap-12 items-center p-8 md:p-12 rounded-[2.5rem] border border-slate-100 ${
                idx % 2 !== 0 ? "lg:flex-row-reverse bg-slate-50/50" : "bg-white"
              }`}
            >

              {/* TEXT */}
              <div className="flex-1 space-y-8">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-4">
                    {centre.tag}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                    {centre.title}
                  </h3>

                  <p className="text-blue-600 font-bold text-xs uppercase mb-6">
                    {centre.subtitle}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {centre.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {centre.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                      <CheckCircle2 size={16} className="text-blue-600" />
                      {b}
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm italic">
                  <span className="text-[10px] font-bold text-blue-600 uppercase block mb-2">
                    Centre Vision
                  </span>
                  "{centre.vision}"
                </div>
              </div>

              {/* 🔥 IMAGE SIDE (REPLACES ICON) */}
              <div className="w-full lg:w-1/3">
                <div className="relative rounded-[2rem] overflow-hidden group shadow-xl">

                  <img
                    src={centre.image}
                    alt={centre.title}
                    className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition duration-500 scale-105 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />

                  {/* Label */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest opacity-80">
                      QMC Centre
                    </span>
                    <h4 className="text-sm font-bold">
                      {centre.tag}
                    </h4>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 p-10 bg-slate-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h4 className="text-2xl font-black mb-3">Institutional Support</h4>
            <p className="text-sm text-slate-400">
              Connect with our specialized centres to implement internationally recognized systems.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-blue-400 hover:text-blue-300 text-lg font-bold"
          >
            Connect with the Centres
            <ArrowUpRight size={20} />
          </a>
        </div>

      </div>
    </section>
  );
};