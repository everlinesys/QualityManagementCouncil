import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

export default function QualityPolicy() {
  return (
    <div className="min-w-[100vw] min-h-screen bg-slate-50 font-sans">
      <Header />

      {/* 🏛️ HEADER */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-l-4 border-blue-800 pl-6">
            <span className="text-blue-800 font-bold text-[10px] uppercase tracking-widest mb-2 block">
              Governance Framework
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Quality Policy & <span className="text-blue-800">Core Principles</span>
            </h2>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-12">

          {/* 📜 QUALITY POLICY */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">
              Quality Policy
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Quality Management Council is committed to providing professional and reliable services in certification, consulting, training, and quality management development.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
              <li>Compliance with applicable international standards and regulatory requirements.</li>
              <li>Maintenance of professional integrity, impartiality, and transparency in all activities.</li>
              <li>Continuous improvement of services, processes, and organizational performance.</li>
              <li>Development and maintenance of competent professionals and technical expertise.</li>
              <li>Delivery of services that meet or exceed stakeholder expectations.</li>
            </ul>
          </div>

          {/* ⭐ CORE VALUES */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wide">
              Core Values
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Integrity",
                  desc: "We maintain the highest standards of ethical conduct, transparency, and honesty in all our operations."
                },
                {
                  title: "Professional Excellence",
                  desc: "We are committed to delivering high-quality services supported by expertise, competence, and best practices."
                },
                {
                  title: "Impartiality",
                  desc: "We ensure fairness, objectivity, and independence in all certification and advisory activities."
                },
                {
                  title: "Customer Focus",
                  desc: "We strive to understand and fulfil the needs of our clients and stakeholders through responsive and reliable services."
                },
                {
                  title: "Continuous Improvement",
                  desc: "We believe in ongoing learning, innovation, and enhancement of our systems and services."
                },
                {
                  title: "Accountability",
                  desc: "We take responsibility for our actions and decisions while maintaining transparency in our operations."
                },
                {
                  title: "Knowledge Development",
                  desc: "We support research, training, and professional development to strengthen quality management practices."
                },
                {
                  title: "Collaboration",
                  desc: "We promote partnerships with institutions, professionals, and organizations to advance quality culture."
                }
              ].map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-5 bg-slate-50">
                  <h4 className="font-bold text-blue-800 text-sm mb-2 uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 🎯 STRATEGIC OBJECTIVES */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wide">
              Strategic Objectives
            </h3>

            <ol className="list-decimal pl-6 space-y-3 text-sm text-slate-600">
              <li>Promote awareness and adoption of international quality management standards.</li>
              <li>Strengthen professional competence in quality management practices.</li>
              <li>Develop innovative training and certification programs.</li>
              <li>Encourage research and knowledge sharing in management systems.</li>
              <li>Support organizations in achieving operational excellence and continual improvement.</li>
              <li>Establish collaborative partnerships with national and international institutions.</li>
              <li>Promote ethical and responsible management practices across industries.</li>
            </ol>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}