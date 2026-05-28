import React from 'react';

export default function HomePage() {
  return (
    <div style={{
      fontFamily: 'sans-serif',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px'
      }}>
        <h1 style={{ color: '#0f172a', fontSize: '2.5rem', marginBottom: '10px' }}>🏥 AyushNexa</h1>
        <p style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '0' }}>
          Digital Growth Department | Latur
        </p>
        <hr style={{ border: '0', height: '1px', backgroundColor: '#e2e8f0', margin: '20px 0' }} />
        
        <h3 style={{ color: '#334155', fontSize: '1.4rem' }}>
          ✨ Premium Dental Website Previews
        </h3>
        <p style={{ color: '#64748b', lineHeight: '1.6' }}>
          आम्ही लातूरमधील अग्रगण्य दंतचिकित्सकांसाठी Next.js 16 तंत्रज्ञानावर आधारित सुरक्षित, वेगवान आणि स्मार्ट व्हॉट्सॲप अपॉइंटमेंट सिस्टीमसह डिजिटल सेटअप लाइव्ह करत आहोत.
        </p>
        
        <div style={{
          marginTop: '30px',
          backgroundColor: '#eff6ff',
          padding: '15px',
          borderRadius: '8px',
          borderLeft: '4px solid #2563eb',
          color: '#1e40af',
          fontWeight: '500'
        }}>
          📞 9561042986 • Team AyushNexa
        </div>
      </div>
    </div>
  );
}