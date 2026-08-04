import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FaWhatsapp, FaTruck, FaBoxOpen } from 'react-icons/fa';

export default function Delivery() {
  return (
    <>
      <Header />
      <Navigation />
      <main className="container" style={{ padding: '60px 20px', maxWidth: '800px' }}>
        <h1 className="section-title">Delivery Information</h1>
        <div style={{ width: '60px', height: '4px', backgroundColor: '#c0606a', margin: '0 auto 40px', borderRadius: '2px' }}></div>

        <div style={{ display: 'grid', gap: '30px' }}>
          <div style={{ backgroundColor: '#fff8f5', border: '1px solid #f0d0c0', borderRadius: '12px', padding: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
              <FaBoxOpen size={28} color="#c0606a" />
              <h2 style={{ fontSize: '20px', fontWeight: '700', margin: 0 }}>Portable Items</h2>
            </div>
            <p style={{ color: '#555', lineHeight: '1.8', margin: 0 }}>
              We offer delivery for selected decoration items such as bouquets, gift arrangements, flower sehras, haar, and other portable decor products. Delivery availability depends on your location within Karachi.
            </p>
          </div>

          <div style={{ backgroundColor: '#f5fbf5', border: '1px solid #c0e0c0', borderRadius: '12px', padding: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
              <FaTruck size={28} color="#25a244" />
              <h2 style={{ fontSize: '20px', fontWeight: '700', margin: 0 }}>On-Site Decoration Services</h2>
            </div>
            <p style={{ color: '#555', lineHeight: '1.8', margin: 0 }}>
              For larger decorations including birthday setups, anniversary decorations, bridal decor, stage decorations, car decor, bed decor, and customized event setups — our professional team provides complete on-site decoration services at your venue.
            </p>
          </div>

          <div style={{ backgroundColor: '#f0f8ff', border: '1px solid #b0d0e8', borderRadius: '12px', padding: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
              <FaWhatsapp size={28} color="#25D366" />
              <h2 style={{ fontSize: '20px', fontWeight: '700', margin: 0 }}>Booking & Pricing</h2>
            </div>
            <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
              For delivery availability, pricing, and booking details, please contact us on WhatsApp before placing your order. Our team will guide you with all the information you need.
            </p>
            <a
              href="https://wa.me/923432877581"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#25D366', color: 'white', padding: '12px 24px',
                borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold',
              }}
            >
              <FaWhatsapp size={18} /> Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
