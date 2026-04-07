import { Sparkles, Globe2, Users, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Inspired = () => {
  return (
    <section className="bg-white py-24 border-y border-slate-200" id="inspired">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
              Institutional Vision
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Inspired by Excellence in <br />
              <span className="text-blue-600">Quality Systems & Business</span>
            </h2>
          </div>

          <p className="text-slate-500 font-medium max-w-xs md:text-right border-l-2 md:border-l-0 md:border-r-2 border-blue-600 px-4">
            Driving structured management practices for sustainable growth and global alignment.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-600 transition-all hover:shadow-xl">
            <div className="p-4 bg-white rounded-xl mb-6 w-fit group-hover:bg-blue-600 group-hover:text-white transition">
              <Sparkles size={26} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Quality-Driven Foundation
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              We are an autonomous council established for the promotion of 
              quality systems under the Government of India. Our foundation 
              is built on enabling organizations to adopt structured 
              management systems aligned with global standards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-600 transition-all hover:shadow-xl">
            <div className="p-4 bg-white rounded-xl mb-6 w-fit group-hover:bg-blue-600 group-hover:text-white transition">
              <Globe2 size={26} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Global Business Enablement
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              We facilitate management systems for businesses across India 
              and globally, supporting organizations in achieving 
              operational excellence, regulatory compliance, and 
              international competitiveness.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-600 transition-all hover:shadow-xl">
            <div className="p-4 bg-white rounded-xl mb-6 w-fit group-hover:bg-blue-600 group-hover:text-white transition">
              <Users size={26} />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Community & Growth
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              We strive to build a dynamic and inclusive business ecosystem 
              that fosters collaboration, innovation, and entrepreneurship, 
              with a strong focus on empowering small and medium-sized enterprises.
            </p>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 p-8 bg-slate-900 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h4 className="text-lg font-bold mb-2">
              Our Approach
            </h4>
            <p className="text-sm text-slate-300">
              We consult, we collaborate, and we craft — delivering structured 
              solutions that empower organizations to grow with confidence 
              and align with global standards.
            </p>
          </div>

          <Link to="/learn-more" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg text-sm font-bold transition">
            Learn More
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};