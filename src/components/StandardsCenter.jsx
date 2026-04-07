import { FlaskConical, CheckCircle2, Globe2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const StandardsCentre = () => {
  return (
    <section className="bg-white py-24 border-y border-slate-200" id="standards">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
              Research & Standardization
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Centre for Standards Development <br />
              <span className="text-blue-600">& Quality Research</span>
            </h2>

            <p className="mt-6 text-slate-600 text-sm leading-relaxed">
              The Centre for Standards Development and Quality Research is a specialized
              initiative of the Quality Management Council (QMC) focused on promoting
              standardization, quality frameworks, and best practices across industries.
              Through research, knowledge sharing, and professional engagement, the Centre
              strengthens the culture of quality, compliance, and innovation.
            </p>
          </div>

          <p className="text-slate-500 font-medium max-w-sm md:text-right border-l-2 md:border-l-0 md:border-r-2 border-blue-600 px-4">
            Advancing global standards, fostering innovation, and enabling organizations
            to align with internationally recognized quality practices.
          </p>
        </div>

        {/* Importance Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Quality */}
          <div className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-600 transition-all hover:shadow-xl">
            <div className="p-4 bg-white rounded-xl mb-6 w-fit group-hover:bg-blue-600 group-hover:text-white transition">
              <CheckCircle2 size={26} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Quality & Consistency
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Standards ensure consistent processes and reliable outcomes, helping
              organizations maintain high-quality products and services aligned with
              established benchmarks.
            </p>
          </div>

          {/* Innovation */}
          <div className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-600 transition-all hover:shadow-xl">
            <div className="p-4 bg-white rounded-xl mb-6 w-fit group-hover:bg-blue-600 group-hover:text-white transition">
              <FlaskConical size={26} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Innovation & Competitiveness
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Standardization provides structured frameworks that support innovation,
              technological advancement, and competitive positioning in global markets.
            </p>
          </div>

          {/* Global Trade */}
          <div className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-600 transition-all hover:shadow-xl">
            <div className="p-4 bg-white rounded-xl mb-6 w-fit group-hover:bg-blue-600 group-hover:text-white transition">
              <Globe2 size={26} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Global Alignment
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              International standards enable organizations to access global markets
              by ensuring compliance with regulatory, technical, and interoperability requirements.
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
              <li>• Standards research and development initiatives</li>
              <li>• Promotion of national and international standards</li>
              <li>• Knowledge development and technical publications</li>
              <li>• Professional and institutional collaboration</li>
              <li>• Capacity building and training programs</li>
            </ul>
          </div>

          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Why It Matters
            </h3>

            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <li>• Strengthens regulatory compliance and governance</li>
              <li>• Facilitates global trade and interoperability</li>
              <li>• Promotes sustainable and responsible development</li>
              <li>• Enhances operational efficiency and quality systems</li>
              <li>• Builds long-term institutional credibility</li>
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
              To promote a strong culture of standardization, quality research,
              and innovation, contributing to the development of organizations
              aligned with internationally recognized quality practices.
            </p>
          </div>

          <Link
            to="/contact"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg text-sm font-bold transition"
          >
            Explore Programs
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};