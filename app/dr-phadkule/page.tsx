'use client';

import React, { useEffect } from 'react';

export default function DrPhadkuleMasterDemo() {
  
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-section');
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('visible-active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 200);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ 
      fontFamily: '"Plus Jakarta Sans", sans-serif', 
      backgroundColor: '#f5f9ff', 
      color: '#0d1f40', 
      minHeight: '100vh', 
      overflowX: 'hidden',
      scrollBehavior: 'smooth'
    }}>
      
      {/* ANIMATION STYLES */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        .reveal-section { 
          opacity: 0; 
          transform: translateY(28px); 
          transition: opacity .7s ease, transform .7s ease; 
        }
        .visible-active { 
          opacity: 1; 
          transform: translateY(0); 
        }
        @keyframes slideDown { 
          from { opacity: 0; transform: translateY(-20px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        @keyframes bobble { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-8px); } 
        }
        @keyframes wap { 
          0%, 100% { box-shadow: 0 6px 24px rgba(37,211,102,0.45); } 
          50% { box-shadow: 0 6px 40px rgba(37,211,102,0.6), 0 0 0 8px rgba(37,211,102,0.08); } 
        }
      `}} />

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/919561042986?text=Hi%20Dr.%20Phadkule,%20I%20want%20to%20book%20an%20appointment" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed', bottom: '28px', right: '28px', zIndex: 300,
          width: '56px', height: '56px', borderRadius: '50%',
          background: 'linear-gradient(135deg,#25d366,#128c7e)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.5rem', textDecoration: 'none', color: '#fff',
          animation: 'wap 2.5s ease-in-out infinite', paddingLeft: '14px', paddingTop: '10px'
        }}
      >
        💬
      </a>

      {/* ====== 1. LOCKED HEADER (FIXED NAVIGATION) ====== */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #d6e4f7', padding: '14px 64px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        boxShadow: '0 4px 20px rgba(26,95,255,0.08)',
        animation: 'slideDown .6s ease both'
      }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
          {/* VISIBLE & OPTIMIZED BLUE DENTAL LOGO */}
          <div style={{ backgroundColor: '#1a5fff', borderRadius: '12px', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://www.laturdentalclinic.com/assets/logo-CzrZz4v_.png" alt="Logo" style={{ height: '36px', filter: 'brightness(0) invert(1)' }} />
          </div>
          <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0d1f40', lineHeight: 1.1 }}>
            DR. PHADKULE'S DENTAL
            <span style={{ display: 'block', fontSize: '.68rem', fontWeight: 600, color: '#6b84a8', letterSpacing: '.04em', textTransform: 'uppercase', marginTop: '3px' }}>
              Latur Dental Clinic & Orthodontic Centre
            </span>
          </div>
        </a>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#home" style={{ color: '#1a5fff', textDecoration: 'none', fontSize: '.88rem', fontWeight: 600 }}>Home</a>
          <a href="#about" style={{ color: '#6b84a8', textDecoration: 'none', fontSize: '.88rem', fontWeight: 600 }}>Doctors</a>
          <a href="#services" style={{ color: '#6b84a8', textDecoration: 'none', fontSize: '.88rem', fontWeight: 600 }}>Services</a>
          <a href="#testimonials" style={{ color: '#6b84a8', textDecoration: 'none', fontSize: '.88rem', fontWeight: 600 }}>Reviews</a>
          <a 
            href="https://wa.me/919561042986?text=Hi%20Dr.%20Phadkule,%20I%20want%20to%20book%20an%20appointment" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ background: 'linear-gradient(135deg, #1a5fff 0%, #00aaff 100%)', color: '#fff', padding: '10px 24px', borderRadius: '50px', textDecoration: 'none', fontWeight: 700, fontSize: '0.88rem', boxShadow: '0 4px 16px rgba(26,95,255,0.3)' }}
          >
            Book Appointment
          </a>
        </div>
      </nav>

      {/* ====== 2. HERO SECTION ====== */}
      <section id="home" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #eaf2ff 0%, #f8fbff 40%, #e8f4ff 100%)', display: 'flex', alignItems: 'center', padding: '130px 64px 60px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, backgroundImage: 'radial-gradient(circle, rgba(26,95,255,0.12) 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />

        <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center', width: '100%', maxWidth: '1300px', margin: '0 auto' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, rgba(26,95,255,0.1), rgba(0,170,255,0.08))', border: '1.5px solid rgba(26,95,255,0.2)', color: '#1a5fff', padding: '7px 16px', borderRadius: '50px', fontSize: '.78rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '24px' }}>
              ⭐ 4.9 Google Rated · Latur's #1 Dental Hub
            </div>
            <h1 style={{ fontSize: '3.6rem', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.03em', color: '#0d1f40', marginBottom: '22px' }}>
              Crafting<br />
              <span style={{ fontFamily: '"Fraunces", serif', fontStyle: 'italic', fontWeight: 600, background: 'linear-gradient(135deg, #1a5fff, #00aaff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Perfect Smiles</span><br />
              With Next-Gen Tech
            </h1>
            <p style={{ color: '#6b84a8', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '500px', marginBottom: '36px' }}>
              Elevate your confidence with premium dental aesthetics. We blend clinical artistry with advanced laser technology to give you the smile you truly deserve.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
              {[
                'Painless Laser Dentistry — Zero Discomfort',
                'Globally Trained Orthodontic Specialists',
                '5-Star Patient Care & Ultra-Modern Sterilization'
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '.92rem', fontWeight: 600, color: '#2a3f6b' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg,#1a5fff,#00aaff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '.72rem', flexShrink: 0, boxShadow: '0 4px 12px rgba(26,95,255,0.3)', fontWeight: 'bold' }}>✓</div>
                  {text}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="https://wa.me/919561042986?text=Hi%20Dr.%20Phadkule,%20I%20want%20to%20book%20a%20VIP%20Dental%20Appointment" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(135deg, #1a5fff, #00aaff)', color: '#fff', padding: '15px 32px', borderRadius: '14px', fontSize: '.92rem', fontWeight: 700, textDecoration: 'none', boxShadow: '0 6px 24px rgba(26,95,255,0.35)' }}>
                📲 Book VIP Appointment
              </a>
              <a href="#services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#1a5fff', padding: '15px 26px', borderRadius: '14px', fontSize: '.92rem', fontWeight: 600, textDecoration: 'none', border: '2px solid rgba(26,95,255,0.25)', background: '#fff' }}>
                View Services →
              </a>
            </div>

            <div style={{ display: 'flex', gap: '28px', marginTop: '44px', paddingTop: '36px', borderTop: '1.5px solid #d6e4f7' }}>
              {[
                { n: '15+', l: 'Years Experience' },
                { n: '10K+', l: 'Happy Patients' },
                { n: '4.9★', l: 'Google Rating' },
                { n: '100%', l: 'Painless Promise' }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div style={{ fontFamily: '"Fraunces",serif', fontSize: '2rem', fontWeight: 700, color: '#0d1f40', lineHeight: 1 }}>{stat.n}</div>
                  <div style={{ fontSize: '.72rem', color: '#6b84a8', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: '3px', fontWeight: 600 }}>{stat.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: '36px', overflow: 'hidden', background: 'linear-gradient(145deg, #ddeeff, #c8e0ff)', boxShadow: '0 30px 80px rgba(26,95,255,0.18)' }}>
              <img src="https://www.laturdentalclinic.com/assets/doctor-Cxbz5EUO.webp" alt="Dr. Siddharth Phadkule" style={{ width: '100%', display: 'block' }} />
            </div>
            
            <div className="reveal-section" style={{ position: 'absolute', zIndex: 10, background: '#fff', borderRadius: '18px', padding: '12px 16px', boxShadow: '0 12px 40px rgba(26,95,255,0.15)', top: '24px', left: '-20px', animation: 'bobble 4s ease-in-out infinite' }}>
              <div style={{ fontSize: '1.3rem' }}>🏆</div>
              <div style={{ fontFamily: '"Fraunces",serif', fontSize: '1.3rem', fontWeight: 700, color: '#0d1f40' }}>15<b style={{ color: '#1a5fff' }}>+ Yrs</b></div>
              <div style={{ fontSize: '.68rem', fontWeight: 600, color: '#6b84a8', textTransform: 'uppercase', letterSpacing: '.06em' }}>Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 3. ABOUT SECTION (DUAL DOCTOR TEAM MATRIX) ====== */}
      <section id="about" style={{ background: '#ffffff', borderTop: '1px solid #d6e4f7', borderBottom: '1px solid #d6e4f7', padding: '100px 20px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div className="reveal-section" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#e8f0ff', color: '#1a5fff', padding: '6px 14px', borderRadius: '50px', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              👨‍⚕️ Expert Medical Team
            </div>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0d1f40' }}>
              Meet Our Premium <span style={{ fontFamily: '"Fraunces",serif', fontStyle: 'italic', color: '#1a5fff', fontWeight: 600 }}>Specialists</span>
            </h2>
            <p style={{ color: '#6b84a8', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
              Latur's leading dental experts combining global knowledge with absolute clinical compassion.
            </p>
          </div>

          {/* SCREENSHOT 1763 EXACT COPIED GRID SYSTEM */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '40px' }}>
            
            {/* DOCTOR 1 CARD: DR. SIDDHARTH PHADKULE */}
            <div className="reveal-section" style={{ background: '#f5f9ff', border: '1px solid #d6e4f7', borderRadius: '32px', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 10px 30px rgba(26,95,255,0.04)' }}>
              <div style={{ width: '130px', height: '130px', borderRadius: '50%', background: '#eaf2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', border: '4px solid #fff', boxShadow: '0 4px 14px rgba(26,95,255,0.1)', marginBottom: '20px', color: '#1a5fff' }}>🩺</div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0d1f40', marginBottom: '6px' }}>Dr. Siddharth Phadkule</h3>
              <p style={{ color: '#1a5fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>BDS, MDS (Orthodontics)</p>
              <p style={{ color: '#6b84a8', fontSize: '0.85rem', fontWeight: 500, marginBottom: '15px' }}>🎓 Mini Residency - South Korea</p>
              
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
                {['Invisible Aligners', 'Traditional Braces', 'Orthodontic Surgery'].map((t, idx) => (
                  <span key={idx} style={{ background: '#e8f0ff', color: '#1a5fff', padding: '6px 14px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 600 }}>{t}</span>
                ))}
              </div>
              <p style={{ color: '#6b84a8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '25px' }}>
                Leading orthodontist with extensive experience in creating perfect smiles. Specializes in invisible aligners and advanced orthodontic treatments.
              </p>
              <a href="https://wa.me/919561042986?text=Hi%20Dr.%20Siddharth%20Phadkule,%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" style={{ width: '100%', background: '#1a5fff', color: '#fff', padding: '14px', borderRadius: '14px', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem', display: 'block', boxShadow: '0 4px 12px rgba(26,95,255,0.2)' }}>
                Book Appointment With Dr. Siddharth →
              </a>
            </div>

            {/* DOCTOR 2 CARD: DR. JYOTI PHADKULE */}
            <div className="reveal-section" style={{ background: '#f5f9ff', border: '1px solid #d6e4f7', borderRadius: '32px', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 10px 30px rgba(26,95,255,0.04)' }}>
              <div style={{ width: '130px', height: '130px', borderRadius: '50%', background: '#eaf2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', border: '4px solid #fff', boxShadow: '0 4px 14px rgba(26,95,255,0.1)', marginBottom: '20px', color: '#1a5fff' }}>🩺</div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0d1f40', marginBottom: '6px' }}>Dr. Jyoti Phadkule</h3>
              <p style={{ color: '#1a5fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>BDS - Cosmetic Dentistry</p>
              <p style={{ color: '#6b84a8', fontSize: '0.85rem', fontWeight: 500, marginBottom: '15px' }}>🎓 Root Canal Specialist</p>
              
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
                {['Smile Makeovers', 'Root Canal Therapy', 'Cosmetic Restorations'].map((t, idx) => (
                  <span key={idx} style={{ background: '#e8f0ff', color: '#1a5fff', padding: '6px 14px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 600 }}>{t}</span>
                ))}
              </div>
              <p style={{ color: '#6b84a8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '25px' }}>
                Expert cosmetic dentist dedicated to painless procedures and aesthetic dentistry with natural-looking results.
              </p>
              <a href="https://wa.me/919561042986?text=Hi%20Dr.%20Jyoti%20Phadkule,%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" style={{ width: '100%', background: '#00aaff', color: '#fff', padding: '14px', borderRadius: '14px', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem', display: 'block', boxShadow: '0 4px 12px rgba(0,170,255,0.2)' }}>
                Book Appointment With Dr. Jyoti →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ====== 4. SERVICES SECTION ====== */}
      <section id="services" style={{ background: '#f5f9ff' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '100px 64px' }}>
          <div className="reveal-section" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#e8f0ff', color: '#1a5fff', padding: '6px 14px', borderRadius: '50px', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              🦷 Our Treatments
            </div>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0d1f40', marginBottom: '14px' }}>
              World-Class <span style={{ fontFamily: '"Fraunces",serif', fontStyle: 'italic', color: '#1a5fff', fontWeight: 600 }}>Dental Services</span>
            </h2>
            <p style={{ color: '#6b84a8', fontSize: '.97rem', lineHeight: 1.75, maxWidth: '580px', margin: '0 auto' }}>
              Cutting-edge treatments delivered with clinical excellence and a compassionate, patient-first approach.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { icon: '⚡', num: '01', t: 'Painless Laser Dentistry', d: 'State-of-the-art diode laser treatments ensure minimal bleeding, maximum comfort, and lightning-fast recovery. Completely painless, zero anxiety.', b: '⭐ Most Popular Treatment' },
              { icon: '🦷', num: '02', t: 'Orthodontic Braces', d: 'Premium metal, ceramic & invisible aligner systems. Customized for perfect alignment, confident smile, and ideal jaw structure for all ages.' },
              { icon: '✨', num: '03', t: 'Cosmetic Smile Design', d: 'Digital smile makeovers, porcelain veneers, and professional whitening — engineered to give you a natural, radiant, Hollywood-worthy smile.', b: '🌟 Smile Makeover' },
              { icon: '🔩', num: '04', t: 'Dental Implants', d: 'Permanent titanium implants that restore full chewing function and facial aesthetics. Life-changing results with long-lasting precision.' },
              { icon: '👶', num: '05', t: 'Pediatric Dentistry', d: 'Gentle, child-friendly dental care in a fun, welcoming environment. Preventive treatments & early orthodontic assessments.', b: '👨‍👩‍👧 Family Friendly' },
              { icon: '🛡️', num: '06', t: 'Root Canal Treatment', d: 'Completely painless, single-visit RCT using rotary endodontics. Save your natural teeth with absolute precision and no fear.' }
            ].map((svc, i) => (
              <div key={i} className="reveal-section" style={{ background: '#fff', border: '1px solid #d6e4f7', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(26,95,255,0.08)' }}>
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(135deg,#1a5fff,#00aaff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: '#fff', boxShadow: '0 4px 14px rgba(26,95,255,0.3)' }}>
                      {svc.icon}
                    </div>
                    <div style={{ fontFamily: '"Fraunces",serif', fontSize: '1.8rem', fontWeight: 700, color: '#d6e4f7' }}>{svc.num}</div>
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0d1f40', marginBottom: '8px' }}>{svc.t}</div>
                  <div style={{ fontSize: '.84rem', color: '#6b84a8', lineHeight: 1.6 }}>{svc.d}</div>
                  {svc.b && <span style={{ display: 'inline-block', marginTop: '14px', background: '#e8f0ff', color: '#1a5fff', fontSize: '.7rem', fontWeight: 700, padding: '4px 12px', borderRadius: '50px', border: '1px solid rgba(26,95,255,0.15)' }}>{svc.b}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 5. REVIEWS SECTION ====== */}
      <section id="testimonials" style={{ background: '#eaf2ff', borderTop: '1px solid #d6e4f7', padding: '100px 20px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div className="reveal-section" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#e8f0ff', color: '#1a5fff', padding: '6px 14px', borderRadius: '50px', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              💬 Patient Stories
            </div>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0d1f40' }}>
              What Our Patients <span style={{ fontFamily: '"Fraunces",serif', fontStyle: 'italic', color: '#1a5fff', fontWeight: 600 }}>Say</span>
            </h2>
            <p style={{ color: '#6b84a8', fontSize: '.97rem', margin: '0 auto' }}>Real experiences from real families across Latur.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px', marginTop: '52px' }}>
            {[
              { text: 'Dr. Phadkule is absolutely amazing. My braces treatment was smooth and completely painless. The clinic is spotless and the staff is so caring.', a: 'Priya Sharma', l: 'Latur, Maharashtra', i: 'P' },
              { text: 'I was terrified of dentists my whole life. The laser treatment was completely painless and I recovered within a day. Dr. Phadkule changed everything.', a: 'Rahul Deshmukh', l: 'Osmanabad', i: 'R' },
              { text: "Got my smile makeover done here — veneers and whitening. The results are breathtaking. Everyone keeps asking if I've always had perfect teeth.", a: 'Sneha Patil', l: 'Nanded', i: 'S' }
            ].map((testi, i) => (
              <div key={i} className="reveal-section" style={{ background: '#fff', border: '1px solid #d6e4f7', borderRadius: '20px', padding: '28px', boxShadow: '0 2px 12px rgba(26,95,255,0.08)' }}>
                <div style={{ color: '#f59e0b', fontSize: '.85rem', letterSpacing: '3px', marginbottom: '12px' }}>★★★★★</div>
                <p style={{ color: '#2a3f6b', fontSize: '.88rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '20px' }}>
                  "{testi.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg,#1a5fff,#00aaff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '.9rem', color: '#fff' }}>{testi.i}</div>
                  <div>
                    <div style={{ fontSize: '.88rem', fontWeight: 700, color: '#0d1f40' }}>{testi.a}</div>
                    <div style={{ fontSize: '.76rem', color: '#6b84a8' }}>{testi.l}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 6. FOOTER REBRANDING ====== */}
      <footer style={{ background: '#0a1628', color: 'rgba(255,255,255,0.5)', padding: '50px 64px 28px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '6px' }}>
                <img src="https://www.laturdentalclinic.com/assets/logo-CzrZz4v_.png" alt="Logo" style={{ height: '34px', filter: 'brightness(0) invert(1)' }} />
              </div>
              <div style={{ fontWeight: 700, fontSize: '.9rem', color: '#fff' }}>
                Dr. Phadkule's Latur Dental Clinic
                <span style={{ display: 'block', fontSize: '.68rem', color: 'rgba(255,255,255,0.4)', marginTop: '2px', fontWeight: 400 }}>& Orthodontic Centre, Latur, Maharashtra</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
              <a href="#home" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '.82rem' }}>Home</a>
              <a href="#about" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '.82rem' }}>Doctors</a>
              <a href="#services" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '.82rem' }}>Services</a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '22px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ fontSize: '.78rem' }}>© 2026 Dr. Phadkule's Latur Dental Clinic & Orthodontic Centre. All rights reserved.</div>
            <div style={{ fontSize: '.76rem' }}>Digitally Powered by <span style={{ color: '#1a5fff', fontWeight: 'bold' }}>AyushNexa®</span> Next-Gen Web Ecosystem</div>
          </div>
        </div>
      </footer>

    </div>
  );
}