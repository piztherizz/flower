import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

const galleryImages = [
  '/birthday/WhatsApp Image 2026-08-04 at 12.18.51 AM.jpeg',
  '/birthday/WhatsApp Image 2026-08-04 at 12.18.53 AM.jpeg',
  '/birthday/WhatsApp Image 2026-08-04 at 12.18.54 AM.jpeg',
  '/birthday/WhatsApp Image 2026-08-04 at 12.18.57 AM.jpeg',
  '/birthday/WhatsApp Image 2026-08-04 at 12.19.00 AM.jpeg',
  '/birthday/WhatsApp Image 2026-08-04 at 12.19.01 AM.jpeg',
  '/birthday/WhatsApp Image 2026-08-04 at 12.19.02 AM (1).jpeg',
  '/birthday/WhatsApp Image 2026-08-04 at 12.19.02 AM.jpeg',
  '/birthday/WhatsApp Image 2026-08-04 at 12.19.03 AM.jpeg',
  '/birthday/WhatsApp Image 2026-08-04 at 12.19.04 AM.jpeg',
  '/birthday/WhatsApp Image 2026-08-04 at 12.19.05 AM.jpeg',
  '/birthday/WhatsApp Image 2026-08-04 at 12.19.06 AM.jpeg',
  '/birthday/WhatsApp Image 2026-08-04 at 12.19.07 AM (1).jpeg',
  '/birthday/WhatsApp Image 2026-08-04 at 12.19.07 AM.jpeg',
];

export default function Birthday() {
  return (
    <>
      <Header />
      <Navigation />
      
      <main className="container" style={{ padding: '40px 0' }}>
        <h1 className="section-title">Birthday</h1>
        <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--color-text-main)' }}>
          Make their birthday unforgettable with our perfect arrangements.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {galleryImages.map((src, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              backgroundColor: 'var(--color-white)'
            }}>
              <div style={{ position: 'relative', height: '300px', width: '100%' }}>
                <Image 
                  src={src} 
                  alt={`Birthday Item ${index + 1}`} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div style={{ padding: '15px', textAlign: 'center' }}>
                <a 
                  href="https://wa.me/923432877581" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: '#25D366',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    transition: 'background-color 0.3s',
                    width: '100%'
                  }}
                >
                  <FaWhatsapp size={20} />
                  Order to WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
