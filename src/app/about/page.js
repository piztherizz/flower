import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FaWhatsapp, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

export default function AboutUs() {
  return (
    <>
      <Header />
      <Navigation />

      <main>
        {/* Hero Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #f8e8f0 0%, #fce4d6 50%, #e8f4e8 100%)',
          padding: '80px 20px',
          textAlign: 'center',
        }}>
          <div className="container">
            <p style={{ color: '#c0606a', fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '13px', marginBottom: '12px' }}>
              Welcome to
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', color: '#2d2d2d', marginBottom: '20px', lineHeight: 1.2 }}>
              King Flower Shop
            </h1>
            <p style={{ fontSize: '18px', color: '#555', maxWidth: '650px', margin: '0 auto 30px', lineHeight: 1.8 }}>
              Creating magical moments and unforgettable celebrations in Karachi, Pakistan.
            </p>
            <a
              href="https://wa.me/923432877581"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                backgroundColor: '#25D366', color: 'white', padding: '14px 30px',
                borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold',
                fontSize: '16px', transition: 'all 0.3s',
              }}
            >
              <FaWhatsapp size={22} /> Chat With Us on WhatsApp
            </a>
          </div>
        </div>

        {/* Our Story */}
        <div className="container" style={{ padding: '70px 20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '20px', color: '#2d2d2d' }}>Our Story</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#c0606a', margin: '0 auto 30px', borderRadius: '2px' }}></div>
            <p style={{ fontSize: '17px', lineHeight: '1.9', color: '#555', marginBottom: '20px' }}>
              King Flower Shop was born from a deep passion for flowers, beauty, and creating joyful celebrations. Located in the heart of Mehmoodabad, Karachi, we have been serving our community with love, creativity, and dedication.
            </p>
            <p style={{ fontSize: '17px', lineHeight: '1.9', color: '#555' }}>
              From intimate anniversary setups to grand birthday celebrations, bridal decorations, and car decor — we pour our hearts into every arrangement. Our team believes that every occasion deserves to be extraordinary, and we work tirelessly to make that happen for every customer.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div style={{ backgroundColor: '#faf7f4', padding: '70px 20px' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', marginBottom: '10px', color: '#2d2d2d' }}>Our Services</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#c0606a', margin: '0 auto 50px', borderRadius: '2px' }}></div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '30px',
            }}>
              {[
                { icon: '🌸', title: 'Flower Bouquets', desc: 'Fresh and artificial arrangements for every occasion.' },
                { icon: '🎂', title: 'Birthday Decor', desc: 'Balloon setups, stage decor and full birthday arrangements.' },
                { icon: '💍', title: 'Anniversary Decor', desc: 'Romantic setups to celebrate your love story.' },
                { icon: '👰', title: 'Bridal & Bride Set', desc: 'Elegant bridal decorations and accessories.' },
                { icon: '🚗', title: 'Car Decor', desc: 'Beautiful car decorations for weddings and events.' },
                { icon: '🛏️', title: 'Bed Decor', desc: 'Luxurious artificial bed decorations for special nights.' },
                { icon: '🌿', title: 'Groom Flower Sehra', desc: 'Traditional and modern sehras for the groom.' },
                { icon: '🏡', title: 'Battpakki Homedecor', desc: 'Beautiful home decorations for celebrations.' },
              ].map((s, i) => (
                <div key={i} style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '30px 20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  transition: 'transform 0.3s',
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '15px' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '10px', color: '#2d2d2d' }}>{s.title}</h3>
                  <p style={{ fontSize: '14px', color: '#777', lineHeight: '1.6' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ padding: '70px 20px', textAlign: 'center', background: 'linear-gradient(135deg, #fce4d6 0%, #f8e8f0 100%)' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '15px', color: '#2d2d2d' }}>
              Let's Create Something Beautiful Together
            </h2>
            <p style={{ fontSize: '17px', color: '#555', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.8' }}>
              Whether you're planning a birthday, anniversary, wedding, or any special event — we are here to make it magical. Contact us today and let's start planning your dream celebration!
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/923432877581"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  backgroundColor: '#25D366', color: 'white', padding: '14px 28px',
                  borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px',
                }}
              >
                <FaWhatsapp size={22} /> WhatsApp Us
              </a>
              <a
                href="https://www.instagram.com/king.flower._.official?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                  color: 'white', padding: '14px 28px',
                  borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px',
                }}
              >
                <FaInstagram size={22} /> Instagram
              </a>
              <a
                href="https://www.tiktok.com/@bali_event_planner?_r=1&_t=ZS-98aCwbX4kVB"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  backgroundColor: '#010101', color: 'white', padding: '14px 28px',
                  borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px',
                }}
              >
                <SiTiktok size={20} /> TikTok
              </a>
              <a
                href="https://youtube.com/@bali_.eventplannerofficial?si=3772iAXFxuVREHoi"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  backgroundColor: '#FF0000', color: 'white', padding: '14px 28px',
                  borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px',
                }}
              >
                <FaYoutube size={22} /> YouTube
              </a>
            </div>

            {/* Address */}
            <div style={{ marginTop: '50px', padding: '30px', backgroundColor: 'white', borderRadius: '12px', maxWidth: '450px', margin: '50px auto 0', boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '15px', color: '#2d2d2d' }}>📍 Find Us</h3>
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
