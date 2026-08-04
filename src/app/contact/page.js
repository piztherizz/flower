import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <Header />
      <Navigation />
      <main style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 className="section-title">Contact Us</h1>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#c0606a', margin: '0 auto 40px', borderRadius: '2px' }}></div>
          <p style={{ textAlign: 'center', color: '#555', fontSize: '17px', marginBottom: '50px', lineHeight: '1.8' }}>
            We'd love to hear from you! Whether you have a question about our services, want to place a custom decoration order, or need help planning your event — we're just a message away.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
            {/* WhatsApp Card */}
            <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '16px', padding: '35px', textAlign: 'center' }}>
              <FaWhatsapp size={48} color="#25D366" style={{ marginBottom: '15px' }} />
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>WhatsApp</h2>
              <p style={{ color: '#555', marginBottom: '20px', lineHeight: '1.6' }}>
                Chat with us directly for orders, queries, and custom requirements.
              </p>
              <a
                href="https://wa.me/923432877581"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  backgroundColor: '#25D366', color: 'white', padding: '12px 24px',
                  borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px',
                }}
              >
                <FaWhatsapp size={18} /> 03432877581
              </a>
            </div>

            {/* Phone Card */}
            <div style={{ backgroundColor: '#fafafa', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '35px', textAlign: 'center' }}>
              <FaPhone size={48} color="#c0606a" style={{ marginBottom: '15px' }} />
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>Call Us</h2>
              <p style={{ color: '#555', marginBottom: '20px', lineHeight: '1.6' }}>
                Available daily for calls and inquiries about our decoration services.
              </p>
              <a
                href="tel:03432877581"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  backgroundColor: '#c0606a', color: 'white', padding: '12px 24px',
                  borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px',
                }}
              >
                <FaPhone size={16} /> 03432877581
              </a>
            </div>

            {/* Address Card */}
            <div style={{ backgroundColor: '#fffbf0', border: '1px solid #fde68a', borderRadius: '16px', padding: '35px', textAlign: 'center' }}>
              <FaMapMarkerAlt size={48} color="#d97706" style={{ marginBottom: '15px' }} />
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>Store Location</h2>
              <p style={{ color: '#555', lineHeight: '1.8', margin: 0 }}>
                <strong>King Flower Shop</strong><br />
                Mehmoodabad No. 5<br />
                Near Firdous Mosque<br />
                Karachi, Pakistan
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
