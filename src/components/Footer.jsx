import { Mail, MapPin, Phone, Globe, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* TOP SECTION: BRANDING & CONTACT */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Council Identity */}
          <div className="lg:col-span-1 ">
            <div className="flex items-left gap-3 mb-6">
              <img src="/logowht.png" alt="QMC" className="h-10 w-auto opacity-90" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none tracking-tight">QMC India</span>
                <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mt-1">Quality Council</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-left">
              An Autonomous Council registered under the Govt. of India, 
              dedicated to the implementation of global quality management standards.
            </p>
            <div className="flex gap-4">
              <div className="p-2 bg-slate-900 rounded-lg hover:text-white transition-colors cursor-pointer">
                <Globe size={18} />
              </div>
              <div className="p-2 bg-slate-900 rounded-lg hover:text-white transition-colors cursor-pointer">
                <Mail size={18} />
              </div>
            </div>
          </div>

          {/* Column 2: Governance Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-l-2 border-blue-600 pl-3">
              Governance
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About the Council</a></li>
              <li><a href="/constitution" className="hover:text-blue-400 transition-colors">Constitution & Bye-laws</a></li>
              <li><a href="/members" className="hover:text-blue-400 transition-colors">Executive Committee</a></li>
              <li><a href="/notices" className="hover:text-blue-400 transition-colors">Public Notices</a></li>
            </ul>
          </div>

          {/* Column 3: Compliance & Legal */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-l-2 border-blue-600 pl-3">
              Legal & Policy
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/quality-policy" className="hover:text-blue-400 transition-colors">Quality Policy</a></li>
              <li><a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy & Data Policy</a></li>
              <li><a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Engagement</a></li>
              <li><a href="/rti" className="hover:text-blue-400 transition-colors flex items-center gap-1">RTI Disclosure <ExternalLink size={12}/></a></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-l-2 border-blue-600 pl-3">
              Official HQ
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <span>Regional Headquarters, <br />Kozhikode, Keralam, India</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>+91 86069 99888</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>certification@qmcouncil.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* MIDDLE SECTION: CERTIFICATION BADGES */}
        <div className="py-8 border-y border-slate-900 flex flex-wrap justify-center md:justify-between items-center gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           <span className="text-[10px] font-bold uppercase tracking-[0.3em] w-full md:w-auto text-center md:text-left">Standards Compliance:</span>
           <span className="text-xs font-bold">ISO 9001:2015 CERTIFIED</span>
           <span className="text-xs font-bold">ISO 27001:2013 CERTIFIED</span>
           <span className="text-xs font-bold">ISO 20700 IMPLEMENTED</span>
           <span className="text-xs font-bold">MCA REGISTERED</span>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-medium">
            © {currentYear} Quality Management Council India. <span className="hidden md:inline-block mx-2 text-slate-800">|</span> 
            <span className="text-slate-500"> All Rights Reserved. An Autonomous Body.</span>
          </div>
          
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest">
            <a href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</a>
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
            <span className="text-slate-700 font-normal underline decoration-blue-600 underline-offset-4 cursor-default">
              Govt. of India Registered
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};