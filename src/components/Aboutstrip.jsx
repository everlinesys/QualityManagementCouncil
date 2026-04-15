import React from "react";
import { Link } from "react-router-dom";

export default function OfficesPreview() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-10 border-l-4 border-blue-800 pl-6">
          <span className="text-blue-800 font-bold text-[10px] uppercase tracking-widest mb-2 block">
            Our Presence
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Offices & <span className="text-blue-800">About Us</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT: IMAGES */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { img: "/office1.jpg", label: "" },
              { img: "/office2.jpg", label: "" },
              { img: "/office3.jpg", label: "" }
            ].map((o, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-lg border border-slate-200 shadow-sm"
              >
                <img
                  src={o.img}
                  alt={o.label}
                  className="w-full h-[120px] object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-2">
                  <span className="text-[10px] text-white font-semibold tracking-wide">
                    {o.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: ABOUT */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              About Quality Management Council
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Quality Management Council (QMC) is dedicated to advancing professional
              standards in certification, training, and quality management systems.
              With multiple offices across India, we ensure accessibility, reliability,
              and excellence in all our services.
            </p>

            <ul className="text-sm text-slate-600 space-y-1 mb-5">
              <li>• National presence with multiple offices</li>
              <li>• Certification, training & consulting services</li>
              <li>• Commitment to quality & compliance</li>
            </ul>

            <Link
              to="/about"
              className="inline-block bg-blue-800 text-white px-6 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-slate-900 transition"
            >
              Learn More
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}