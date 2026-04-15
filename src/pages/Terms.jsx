import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

export default function Terms() {
  return (
    <div className="min-w-[100vw] min-h-screen bg-slate-50 font-sans">
      <Header />

      {/* HEADER */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-l-4 border-blue-800 pl-6">
            <span className="text-blue-800 font-bold text-[10px] uppercase tracking-widest mb-2 block">
              Legal Agreement
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Terms & <span className="text-blue-800">Conditions</span>
            </h2>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-10">

          {/* INTRO */}
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <p className="text-sm text-slate-600 leading-relaxed">
              By accessing or using the services of the Quality Management Council, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </div>

          {/* SECTIONS */}
          {[
            {
              title: "Use of Services",
              content: [
                "Services must be used for lawful and professional purposes only.",
                "Users agree not to misuse or disrupt any services or systems.",
                "All information provided must be accurate and complete."
              ]
            },
            {
              title: "Certification & Compliance",
              content: [
                "Certification is granted based on evaluation criteria and compliance.",
                "Any misuse of certificates or false claims may result in revocation.",
                "The Council reserves the right to verify and audit information."
              ]
            },
            {
              title: "Intellectual Property",
              content: [
                "All content, materials, and branding are the property of the Council.",
                "Unauthorized use, reproduction, or distribution is prohibited."
              ]
            },
            {
              title: "Limitation of Liability",
              content: [
                "The Council shall not be liable for indirect or consequential damages.",
                "Services are provided on a professional best-effort basis."
              ]
            },
            {
              title: "Payments & Refunds",
              content: [
                "All fees must be paid as per the prescribed structure.",
                "Refund policies are subject to program-specific conditions."
              ]
            },
            {
              title: "Termination",
              content: [
                "Access may be suspended or terminated for violation of terms.",
                "The Council reserves the right to discontinue services at its discretion."
              ]
            },
            {
              title: "Governing Law",
              content: [
                "These terms shall be governed by applicable laws and regulations.",
                "Any disputes shall be subject to appropriate legal jurisdiction."
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