import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

const galleryImages = [
  '/artifical bed decor/WhatsApp Image 2026-07-26 at 4.02.30 PM (1).jpeg',
  '/artifical bed decor/WhatsApp Image 2026-07-26 at 4.02.31 PM (1).jpeg',
  '/artifical bed decor/WhatsApp Image 2026-07-26 at 4.02.31 PM (2).jpeg',
  '/artifical bed decor/WhatsApp Image 2026-07-26 at 4.02.31 PM.jpeg',
  '/artifical bed decor/WhatsApp Image 2026-07-26 at 4.02.32 PM (1).jpeg',
  '/artifical bed decor/WhatsApp Image 2026-07-26 at 4.02.32 PM (2).jpeg',
  '/artifical bed decor/WhatsApp Image 2026-07-26 at 4.02.32 PM.jpeg',
  '/artifical bed decor/WhatsApp Image 2026-07-26 at 4.02.33 PM.jpeg',
  '/artifical bed decor/WhatsApp Image 2026-08-04 at 12.16.53 AM.jpeg',
  '/artifical bed decor/WhatsApp Image 2026-08-04 at 12.18.24 AM.jpeg',
];

export default function ArtificialBedDecor() {
  return (
    <>
      <Header />
      <Navigation />
      
      <main className="container" style={{ padding: '40px 0' }}>
        <h1 className="section-title">Artificial Bed Decor</h1>
        <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--color-text-main)' }}>
          Transform your space with our stunning artificial bed decorations.
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
                  alt={`Artificial Bed Decor Item ${index + 1}`} 
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
