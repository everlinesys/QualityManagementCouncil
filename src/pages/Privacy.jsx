import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

export default function Privacy() {
  return (
    <div className="min-w-[100vw] min-h-screen bg-slate-50 font-sans">
      <Header />

      {/* HEADER */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-l-4 border-blue-800 pl-6">
            <span className="text-blue-800 font-bold text-[10px] uppercase tracking-widest mb-2 block">
              Legal Framework
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Privacy <span className="text-blue-800">Policy</span>
            </h2>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-10">

          {/* INTRO */}
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <p className="text-sm text-slate-600 leading-relaxed">
              The Quality Management Council is committed to protecting the privacy and confidentiality of all users, clients, and stakeholders. This Privacy Policy outlines how we collect, use, and safeguard your information.
            </p>
          </div>

          {/* SECTIONS */}
          {[
            {
              title: "Information We Collect",
              content: [
                "Personal details such as name, email address, phone number, and organization details.",
                "Information submitted through forms, registrations, or certification processes.",
                "Technical data such as IP address, browser type, and usage patterns."
              ]
            },
            {
              title: "Use of Information",
              content: [
                "To provide certification, training, and consulting services.",
                "To communicate updates, notifications, and service-related information.",
                "To improve our services, systems, and user experience.",
                "To comply with legal and regulatory requirements."
              ]
            },
            {
              title: "Data Protection",
              content: [
                "We implement appropriate technical and organizational measures to protect data.",
                "Access to sensitive information is restricted to authorized personnel only.",
                "We ensure confidentiality and integrity of all records."
              ]
            },
            {
              title: "Information Sharing",
              content: [
                "We do not sell or trade personal information.",
                "Information may be shared with regulatory bodies or partners when required.",
                "Disclosure may occur if mandated by law."
              ]
            },
            {
              title: "User Rights",
              content: [
                "Users may request access, correction, or deletion of their data.",
                "Users may opt out of non-essential communications.",
                "Requests can be made through official contact channels."
              ]
            },
            {
              title: "Policy Updates",
              content: [
                "This policy may be updated periodically.",
                "Changes will be reflected on this page with updated revisions."
              ]
            }
          ].map((section, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-sm font-bold text-blue-800 uppercase mb-4 tracking-wide">
                {section.title}
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
                {section.content.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </div>
  );
}