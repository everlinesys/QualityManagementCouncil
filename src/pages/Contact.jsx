import React from "react";
import { Mail, Phone, MapPin, Send, Globe, Clock } from "lucide-react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

export default function Contact() {
    const OFFICIAL_DIGITAL_ID = "918606999888";

    return (
        <div className="min-w-[100vw] min-h-screen bg-slate-50 font-sans">
            <Header />
            
            {/* 🏛️ INSTITUTIONAL HEADER */}
            <section className="bg-white py-12 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="border-l-4 border-blue-800 pl-6">
                        <span className="text-blue-800 font-bold text-[10px] uppercase tracking-widest mb-2 block">
                            Department of Coordination
                        </span>
                        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                            Contact & Regulatory <span className="text-blue-800">Support Desk</span>
                        </h2>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    
                    {/* 📱 TOP CONTACT CARDS */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { title: "General Support", icon: <Mail size={20} />, value: "iechelp2@gmail.com", msg: "Enquiry: Support" },
                            { title: "Verification Cell", icon: <Phone size={20} />, value: "+91 86069 99888", msg: "Enquiry: Verification" },
                            { title: "Administrative Desk", icon: <Globe size={20} />, value: "iechelp2@gmail.com", msg: "Enquiry: Admin" }
                        ].map((c, i) => (
                            <div key={i} className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-slate-50 text-blue-800 rounded-lg group-hover:bg-blue-800 group-hover:text-white transition-colors">
                                        {c.icon}
                                    </div>
                                    <h3 className="font-bold text-slate-900">{c.title}</h3>
                                </div>
                                <p className="text-sm font-bold text-blue-900 mb-4">{c.value}</p>
                                <a 
                                    href={`https://wa.me/${OFFICIAL_DIGITAL_ID}?text=${encodeURIComponent(c.msg)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-2 bg-blue-800 text-white rounded text-[11px] font-bold uppercase tracking-wider hover:bg-slate-900 transition-all"
                                >
                                    <Send size={12} />
                                    Direct Digital Channel
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* 🗺️ SPLIT SECTION: FORM & MAP */}
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        
                        {/* LEFT: OFFICIAL FORM (Now Half-Width on Desktop) */}
                        <div className="bg-white border border-slate-200 shadow-xl rounded-xl p-8">
                            <div className="mb-6 border-b border-slate-100 pb-4">
                                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight text-sm">Official Request Form</h3>
                                <p className="text-[11px] text-slate-500 mt-1">Submit formal documentation requests or complaints below.</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Full Name</label>
                                        <input type="text" className="w-full p-3 text-sm border border-slate-200 rounded bg-slate-50 focus:ring-1 focus:ring-blue-800 outline-none" placeholder="Required" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Official Email</label>
                                        <input type="email" className="w-full p-3 text-sm border border-slate-200 rounded bg-slate-50 focus:ring-1 focus:ring-blue-800 outline-none" placeholder="Required" />
                                    </div>
                                </div>
                                
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Subject / Reference No.</label>
                                    <input type="text" className="w-full p-3 text-sm border border-slate-200 rounded bg-slate-50 focus:ring-1 focus:ring-blue-800 outline-none" />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Request Summary</label>
                                    <textarea rows="4" className="w-full p-3 text-sm border border-slate-200 rounded bg-slate-50 focus:ring-1 focus:ring-blue-800 outline-none"></textarea>
                                </div>

                                <button className="w-full bg-slate-900 text-white py-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-blue-800 transition-all shadow-md">
                                    Dispatch Official Request
                                </button>
                            </form>
                        </div>

                        {/* RIGHT: MAP & OFFICE INFO */}
                        <div className="space-y-6">
                            {/* Embedded Google Map */}
                            <div className="w-full h-[350px] rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-200">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.119772544275!2d77.2065193!3d28.6111364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5d347eb1d3%3A0xdc2e9aa188a101f!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>

                            {/* Office Details */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 border border-slate-200 rounded-lg">
                                    <div className="flex items-center gap-2 text-blue-800 mb-2">
                                        <MapPin size={16} />
                                        <span className="text-[11px] font-bold uppercase tracking-wider">Secretariat</span>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                        Quality Management Council,<br />
                                        Administrative Block, New Delhi - 110001
                                    </p>
                                </div>
                                <div className="bg-white p-5 border border-slate-200 rounded-lg">
                                    <div className="flex items-center gap-2 text-blue-800 mb-2">
                                        <Clock size={16} />
                                        <span className="text-[11px] font-bold uppercase tracking-wider">Office Hours</span>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                        Mon - Fri: 09:00 AM - 05:30 PM<br />
                                        Closed on Public Holidays
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}