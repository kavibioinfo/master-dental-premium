import React from 'react';

export default function DrPhadkulePremiumDemo() {
  return (
    <div style={{ fontFamily: '"Inter", sans-serif', backgroundColor: '#f8fafc', color: '#1e293b', minHeight: '100vh', scrollBehavior: 'smooth' }}>
      
      {/* 1. PREMIUM HEADER / NAVIGATION */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e2e8f0', padding: '15px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* CORRECTED LOGO & BRAND SECTION */}
        <div style={{ fontWeight: '800', fontSize: '1.2rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img 
            src="https://www.laturdentalclinic.com/assets/logo-CzrZz4v_.png" 
            alt="Dr. Phadkule Clinic Logo" 
            style={{ height: '40px', width: 'auto', objectFit: 'contain' }} 
          />
          <span style={{ letterSpacing: '-0.5px' }}>DR. PHADKULE'S DENTAL</span>
        </div>
        
        <div style={{ display: 'flex', gap: '20px', fontWeight: '600', fontSize: '0.9rem', color: '#64748b' }}>
          <a href="#home" style={{ color: '#2563eb', textDecoration: 'none' }}>Home</a>
          <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
          <a href="#services" style={{ textDecoration: 'none', color: 'inherit' }}>Services</a>
        </div>
      </nav>

      {/* 2. HERO SECTION (HOME) */}
      <section id="home" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
        <div style={{ textAlign: 'left' }}>
          <span style={{ backgroundColor: '#eff6ff', color: '#2563eb', padding: '6px 12px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.5px' }}>
            ⭐ 4.9 GOOGLE RATED CLINIC IN LATUR
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#0f172a', lineHeight: '1.2', marginTop: '15px', marginBottom: '20px' }}>
            Crafting Perfect Smiles <br />
            <span style={{ color: '#2563eb' }}>With Next-Gen Tech</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px', maxWidth: '550px' }}>
            Elevate your confidence with premium dental aesthetics. We blend clinical artistry with advanced next-generation laser technology to give you the smile you deserve.
          </p>
          
          {/* BULLET HIGHLIGHTS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '35px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600' }}>
              <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> Painless Laser Dentistry
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600' }}>
              <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> Globally Trained Specialists
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600' }}>
              <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> 5-Star Rated Patient Care
            </div>
          </div>

          <a href="https://wa.me/919561042986?text=Hi%20Dr.%20Phadkule,%20I%20want%20to%20book%20a%20VIP%20Dental%20Appointment" 
             target="_blank"
             rel="noopener noreferrer"
             style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '16px 32px', borderRadius: '12px', fontWeight: '700', textDecoration: 'none', display: 'inline-block', boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)' }}>
            Book VIP Appointment Via WhatsApp 📲
          </a>
        </div>

        {/* DR. PHADKULE'S ORIGINAL PHOTO COMPONENT - ZERO LAG */}
        <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff' }}>
          <img 
            src="https://www.laturdentalclinic.com/assets/doctor-Cxbz5EUO.webp" 
            alt="Dr. Siddharth Phadkule" 
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" style={{ backgroundColor: '#ffffff', padding: '80px 20px', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>
            Meet Dr. Siddharth Phadkule
          </h2>
          <p style={{ color: '#2563eb', fontWeight: '700', fontSize: '1.1rem', marginTop: '0' }}>
            Leading Orthodontist & Dental Surgeon in Latur
          </p>
          <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.8', textAlign: 'justify' }}>
            Dr. Phadkule's Latur Dental Clinic & Orthodontic Centre is synonymous with trust and excellence. With over a decade of expertise, Dr. Phadkule has transformed thousands of smiles using ultra-modern sterilization protocols and digital treatment planning. Our mission is to provide an elite, comfortable, and absolutely painless healthcare environment for every family in Latur.
          </p>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a' }}>Our Specialized Services</h2>
          <p style={{ color: '#64748b' }}>World-class dental treatments powered by zero-lag digital infrastructure.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          
          {/* SERVICE 1 */}
          <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>⚡</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>Painless Laser Dentistry</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Advanced laser treatments ensuring minimal bleeding, maximum comfort, and lightning-fast recovery time.</p>
          </div>

          {/* SERVICE 2 */}
          <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>🦷</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>Orthodontic Braces</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Premium metal, ceramic, and invisible aligners customized for absolute alignment and perfect jaw structure.</p>
          </div>

          {/* SERVICE 3 */}
          <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>✨</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>Cosmetic Smile Designing</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Transform your confidence with premium digital smile design, veneers, and ultra-bright teeth whitening matrix.</p>
          </div>

        </div>
      </section>

      {/* 5. FOOTER */}
      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '40px 20px', textAlign: 'center', fontSize: '0.9rem' }}>
        <p style={{ color: '#ffffff', fontWeight: '700', marginBottom: '5px' }}>Dr. Phadkule's Latur Dental Clinic & Orthodontic Centre</p>
        <p>Digitally Powered by AyushNexa® Next-Gen Web Ecosystem</p>
      </footer>

    </div>
  );
}