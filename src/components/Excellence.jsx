import { Landmark, ShieldCheck, TrendingUp, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Excellence = () => {
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

            <p className="mt-6 text-slate-600 text-sm leading-relaxed">
              The Centre for Banking and Cooperative Excellence is a specialized initiative of the
              Quality Management Council (QMC) established to promote structured management systems,
              governance standards, and institutional capacity development within the banking and
              cooperative sectors.
            </p>
          </div>

          <p className="text-slate-500 font-medium max-w-sm md:text-right border-l-2 md:border-l-0 md:border-r-2 border-blue-600 px-4">
            Strengthening financial institutions through governance, quality systems, and global
            standards for sustainable growth and trust.
          </p>
        </div>

        {/* Core Importance Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Governance */}
          <div className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-600 transition-all hover:shadow-xl">
            <div className="p-4 bg-white rounded-xl mb-6 w-fit group-hover:bg-blue-600 group-hover:text-white transition">
              <ShieldCheck size={26} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Strengthening Governance
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              ISO management systems establish clear policies, accountability frameworks, and
              governance practices that ensure transparency, regulatory compliance, and institutional integrity.
            </p>
          </div>

          {/* Service Quality */}
          <div className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-600 transition-all hover:shadow-xl">
            <div className="p-4 bg-white rounded-xl mb-6 w-fit group-hover:bg-blue-600 group-hover:text-white transition">
              <Landmark size={26} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Improving Service Quality
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Standards like ISO 9001 enable institutions to deliver consistent, reliable, and
              customer-focused financial services across banking and cooperative environments.
            </p>
          </div>

          {/* Efficiency */}
          <div className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-600 transition-all hover:shadow-xl">
            <div className="p-4 bg-white rounded-xl mb-6 w-fit group-hover:bg-blue-600 group-hover:text-white transition">
              <TrendingUp size={26} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Operational Efficiency
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Structured management systems streamline operations, improve documentation, and
              enhance institutional performance while reducing inefficiencies.
            </p>
          </div>
        </div>

        {/* Activities Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-10">

          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Activities of the Centre
            </h3>

            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <li>• Training programs and professional capacity development</li>
              <li>• ISO-based management system implementation support</li>
              <li>• Advisory and consulting for governance improvement</li>
              <li>• Research, publications, and knowledge development</li>
              <li>• Institutional strengthening and operational excellence programs</li>
            </ul>
          </div>

          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Why It Matters
            </h3>

            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <li>• Enhances trust and credibility among stakeholders</li>
              <li>• Supports risk management and compliance frameworks</li>
              <li>• Enables digital and institutional transformation</li>
              <li>• Strengthens financial inclusion and service delivery</li>
              <li>• Aligns institutions with global standards</li>
            </ul>
          </div>

        </div>

        {/* Vision + CTA */}
        <div className="mt-20 p-8 bg-slate-900 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="max-w-xl">
            <h4 className="text-lg font-bold mb-2">
              Vision of the Centre
            </h4>

            <p className="text-sm text-slate-300">
              To promote excellence, transparency, and sustainable development in the banking
              and cooperative sectors through the adoption of internationally recognized
              management systems, governance practices, and professional standards.
            </p>
          </div>

          <Link
            to="/contact"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg text-sm font-bold transition"
          >
            Get Involved
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};