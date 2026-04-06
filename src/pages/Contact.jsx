import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

export default function Contact() {
    const contacts = [
        {
            id: "CNT-01",
            title: "General Enquiries",
            desc: "For all certification, verification, and general assistance queries related to our services.",
            icon: <Mail size={28} />,
            value: "support@authority.org",
            tag: "Primary Channel"
        },
        {
            id: "CNT-02",
            title: "Official Helpline",
            desc: "Speak directly with our compliance officers for urgent verification and regulatory support.",
            icon: <Phone size={28} />,
            value: "+91 98765 43210",
            tag: "24/7 Support"
        },
        {
            id: "CNT-03",
            title: "Head Office",
            desc: "Visit our administrative office for document verification and in-person consultation.",
            icon: <MapPin size={28} />,
            value: "New Delhi, India",
            tag: "Headquarters"
        }
    ];

    return (<div className="min-w-[100vw] min-h-screen overflow-x-hidden bg-white">
         <Header />
        <section className="bg-slate-50 py-24 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-6 md:px-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-blue-700 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
                            Official Communication
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            Contact & Support <br />
                            <span className="text-blue-600">Coordination Desk</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 font-medium max-w-xs md:text-right border-l-2 md:border-l-0 md:border-r-2 border-blue-600 px-4">
                        Reach out to our regulatory support team for any certification or verification assistance.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {contacts.map((c, i) => (
                        <div
                            key={i}
                            className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/5 flex flex-col h-full"
                        >
                            {/* Top */}
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 bg-slate-50 text-slate-900 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {c.icon}
                                </div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded">
                                    {c.id}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="mb-8 flex-grow">
                                <span className="text-[11px] font-bold text-blue-600 uppercase mb-2 block">
                                    {c.tag}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                                    {c.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                    {c.desc}
                                </p>
                                <p className="text-sm font-semibold text-slate-800">
                                    {c.value}
                                </p>
                            </div>

                            {/* Action */}
                            <button className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors pt-6 border-t border-slate-50">
                                Contact Now
                                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Contact Form Section */}
                <div className="mt-20 bg-white p-8 md:p-12 rounded-2xl border shadow-sm">
                    <h3 className="text-2xl font-bold mb-6 text-slate-900">
                        Submit an Official Request
                    </h3>

                    <form className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="p-4 border rounded-xl bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="p-4 border rounded-xl bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="p-4 border rounded-xl bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none md:col-span-2"
                        />
                        <textarea
                            rows="5"
                            placeholder="Describe your request..."
                            className="p-4 border rounded-xl bg-slate-50 focus:ring-2 focus:ring-blue-600 outline-none md:col-span-2"
                        ></textarea>

                        <button className="md:col-span-2 bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all">
                            Submit Request
                        </button>
                    </form>
                </div>

            </div>
        </section>
        <Footer />
    </div>
    );
};