"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Stethoscope, ShieldCheck, Star, Clock, MapPin, Phone, 
  ChevronDown, CheckCircle, MessageSquare, Menu, X, 
  Activity, Heart, Award, Sparkles 
} from "lucide-react";

// ==========================================
// CENTRAL DATA MATRIX (फक्त इथे बदला, पूर्ण क्लिनिक बदलेल)
// ==========================================
const CLINIC_CONFIG = {
  brandName: "Venkatesh dental clinic and implant center",
  tagline: "Trusted Dental Care in Latur",
  subheading: "Advanced Dental Treatments with Modern Technology & Personal Care. Book your smile transformation today with Dr. Bellale.",
  phone: "7385051925",
  whatsappNumber: "7385051925",
  address: "Laxmi Sadan, Latur - Babhalgaon Rd, Hatte Nagar, Latur, Maharashtra 413512",
  timings: "Monday to Saturday | 10 AM – 8 PM",
  googleRating: "4.9",
  experience: "10+",
  whatsappPrefilledMessage: "Hello Doctor, I want to book an appointment for a dental checkup.",

  services: [
    { title: "Root Canal Treatment", desc: "Advanced rotary system, completely painless procedure, single sitting configurations available.", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600" },
    { title: "Dental Implants", desc: "Premium lifetime structural implants. Fully restore your natural chewing and facial aesthetics.", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600" },
    { title: "Teeth Cleaning & Whitening", desc: "Instant stain removal and advanced laser whitening for a sparkling confident smile.", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600" },
    { title: "Smile Designing", desc: "Custom clear aligners, digital mockups, and high-end aesthetic transformations.",img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600"}
  ],

  testimonials: [
    { text: "Excellent treatment and extremely friendly doctor. Explains everything clearly.", patient: "Latur Resident" },
    { text: "Spotless clean clinic, advanced tools, and very professional staff. Best experience.", patient: "Corporate Professional" },
    { text: "Best dental clinic experience in Latur. My root canal was completely painless.", patient: "Senior Citizen" }
  ]
};

export default function DentalCare() {
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppAction = () => {
    const encoded = encodeURIComponent(CLINIC_CONFIG.whatsappPrefilledMessage);
    window.open(`https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encoded}`, "_blank");
  };

  const handleCallAction = () => {
    window.open(`tel:${CLINIC_CONFIG.phone}`, "_self");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-cyan-500 selection:text-white">
      
      {/* 1. STICKY HEALTHCARE HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-black text-lg md:text-xl tracking-tight text-indigo-950 uppercase">
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl text-white shadow-md shadow-cyan-500/20">
              <Activity className="h-5 w-5 animate-pulse" />
            </div>
            <span>{CLINIC_CONFIG.brandName}</span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={handleCallAction} className="border border-slate-300 hover:border-slate-400 text-slate-700 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 bg-white">
              <Phone size={13} className="text-cyan-600" /> Call Clinic
            </button>
            <button onClick={handleWhatsAppAction} className="bg-indigo-950 hover:bg-indigo-900 text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-indigo-950/10 flex items-center gap-1.5">
              Book VIP Appointment
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-indigo-950">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 p-6 space-y-3 shadow-xl md:hidden">
              <button onClick={() => { handleCallAction(); setMobileMenuOpen(false); }} className="w-full py-3 border border-slate-200 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-700 flex items-center justify-center gap-2">
                <Phone size={14} className="text-cyan-500" /> Call Direct
              </button>
              <button onClick={() => { handleWhatsAppAction(); setMobileMenuOpen(false); }} className="w-full py-3 bg-indigo-950 text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2">
                <MessageSquare size={14} className="text-cyan-400" /> WhatsApp Booking
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. TRUST-INFUSED HERO HUB */}
      <section className="pt-36 pb-24 bg-gradient-to-b from-cyan-50/40 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-200/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="bg-cyan-500/10 text-cyan-700 border border-cyan-500/20 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest inline-flex items-center gap-1.5 mb-6">
              ⭐ {CLINIC_CONFIG.googleRating} Google Rated Clinic
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-indigo-950 uppercase leading-[1.1] mb-6">
              {CLINIC_CONFIG.brandName}
            </h1>
            <p className="text-slate-600 text-sm md:text-base mb-8 leading-relaxed max-w-xl">
              {CLINIC_CONFIG.subheading}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 max-w-sm mb-8">
              <div className="p-4 bg-white border border-slate-200/60 rounded-xl shadow-sm flex items-center gap-3">
                <Award className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                <div>
                  <div className="font-black text-indigo-950 text-sm uppercase">{CLINIC_CONFIG.experience} Yrs</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Expertise</div>
                </div>
              </div>
              <div className="p-4 bg-white border border-slate-200/60 rounded-xl shadow-sm flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <div>
                  <div className="font-black text-indigo-950 text-sm uppercase">100% Safe</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Sterilization</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button onClick={handleWhatsAppAction} className="bg-gradient-to-r from-indigo-950 to-slate-900 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-950/10 flex items-center gap-2 hover:scale-[1.02] transition-transform">
                Book Appointment Via WhatsApp
              </button>
            </div>
          </div>

          {/* Right Aesthetic Medical Photo */}
          <div className="lg:col-span-5 h-[360px] md:h-[400px] rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800" 
              alt="Dr Bellale Advanced Dental Care Room" 
              className="w-full h-full object-cover rounded-xl" 
            />
          </div>

        </div>
      </section>

      {/* 3. CORE MEDICAL SERVICES */}
      <section className="py-24 bg-white border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-cyan-600 font-extrabold uppercase tracking-widest text-xs">Clinical Excellence</span>
            <h2 className="text-3xl font-black mt-2 text-indigo-950 uppercase tracking-tight">Our Advanced Procedures</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLINIC_CONFIG.services.map((srv, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 overflow-hidden relative">
                  <img src={srv.img} alt={srv.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-50/40 to-transparent"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-black text-sm text-indigo-950 uppercase tracking-wide mb-2">{srv.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6">{srv.desc}</p>
                  </div>
                  <button onClick={handleWhatsAppAction} className="w-full py-2.5 bg-white border border-slate-200 hover:border-cyan-500 rounded-xl font-bold text-[10px] uppercase tracking-wider text-slate-700 hover:text-cyan-600 transition-colors">
                    Enquire Fee Matrix
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VERIFIED PATIENT CLINICAL FEEDBACK */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-extrabold uppercase tracking-widest text-xs">Patient Testimonials</span>
            <h2 className="text-3xl font-black mt-2 text-indigo-950 uppercase tracking-tight">Trusted By Latur Families</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {CLINIC_CONFIG.testimonials.map((tst, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-200/60 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-0.5 mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 text-xs italic leading-relaxed mb-6">"{tst.text}"</p>
                </div>
                <div className="text-[10px] font-black uppercase tracking-wider text-indigo-950 flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-emerald-500" /> {tst.patient}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DIRECT CLINICAL CALLBACK FORM */}
      <section className="py-24 border-t border-slate-200/60 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-indigo-950 to-slate-900 p-8 md:p-12 rounded-3xl text-white grid md:grid-cols-2 gap-12 items-center shadow-xl">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Request A Priority Callback</h2>
              <p className="text-slate-300 text-xs leading-relaxed mb-8">Skip the phone queues. Submit your quick screening details, and our hospital front desk coordinator will secure your priority token slot within 10 minutes.</p>
              
              <div className="space-y-4 text-xs font-semibold uppercase tracking-wider text-slate-200">
                <div className="flex gap-3 items-center">
                  <MapPin size={15} className="text-cyan-400 flex-shrink-0" />
                  <span>{CLINIC_CONFIG.address}</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Clock size={15} className="text-cyan-400 flex-shrink-0" />
                  <span>{CLINIC_CONFIG.timings}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl text-slate-900 shadow-2xl">
              <h3 className="font-black text-xs uppercase tracking-widest text-indigo-950 mb-6 text-center">Patient Screening Form</h3>
              {submitted ? (
                <p className="text-cyan-600 font-bold text-center py-12 text-xs uppercase tracking-widest animate-pulse">Routing token to Dr. Bellale's desk via WhatsApp...</p>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(handleWhatsAppAction, 1000); }} className="space-y-4">
                  <input type="text" placeholder="Patient Full Name" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs focus:border-cyan-500 outline-none transition-all uppercase tracking-wide font-medium" />
                  <input type="text" placeholder="WhatsApp Contact Number" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs focus:border-cyan-500 outline-none transition-all uppercase tracking-wide font-medium" />
                  <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black py-4 rounded-xl text-xs tracking-widest uppercase transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.01]">Request Priority Token</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLEAN FOOTER */}
      <footer className="py-8 bg-slate-50 border-t border-slate-200/60 text-center text-[10px] text-slate-400 font-bold tracking-widest uppercase">
        © 2026 {CLINIC_CONFIG.brandName}. Engineered by AyushNexa AI Solutions Latur.
      </footer>

    </div>
  );
}