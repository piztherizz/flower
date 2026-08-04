"use client";
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import ProductSlider from '@/components/ProductSlider';
import CategoryGrid from '@/components/CategoryGrid';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const bestSellingProducts = [
  { id: '1', name: 'Birthday Balloon Decor', image: '/birthday/WhatsApp%20Image%202026-08-04%20at%2012.18.53%20AM.jpeg', isNew: true },
  { id: '2', name: 'Birthday Flower Setup', image: '/birthday/WhatsApp%20Image%202026-08-04%20at%2012.19.01%20AM.jpeg', isNew: true },
  { id: '3', name: 'Birthday Stage Decor', image: '/birthday/WhatsApp%20Image%202026-08-04%20at%2012.19.06%20AM.jpeg', isNew: true },
  { id: '4', name: 'Anniversary Special', image: '/anniversary/WhatsApp%20Image%202026-08-04%20at%2012.23.54%20AM.jpeg', isSale: false },
  { id: '5', name: 'Anniversary Rose Decor', image: '/anniversary/WhatsApp%20Image%202026-08-04%20at%2012.24.01%20AM%20(1).jpeg' },
  { id: '6', name: 'Anniversary Table Setup', image: '/anniversary/WhatsApp%20Image%202026-08-04%20at%2012.24.05%20AM.jpeg' },
];

const occasionCategories = [
  { name: 'Birthday', href: '/birthday', image: '/birthday/WhatsApp%20Image%202026-08-04%20at%2012.18.51%20AM.jpeg' },
  { name: 'Anniversary', href: '/anniversary', image: '/anniversary/WhatsApp%20Image%202026-08-04%20at%2012.23.54%20AM.jpeg' },
  { name: 'Car Decor', href: '/car-decor', image: '/cardecor/WhatsApp%20Image%202026-07-26%20at%204.02.19%20PM%20(1).jpeg' },
  { name: 'Batt Pakki', href: '/battpakki-homedecor', image: '/battpaki/WhatsApp%20Image%202026-07-12%20at%204.04.56%20AM%20(1).jpeg' },
];

const shopCategories = [
  { name: 'Flower Bouquet', href: '/flowers', image: '/flower%20bouquest/WhatsApp%20Image%202026-07-26%20at%204.02.42%20PM%20(1).jpeg' },
  { name: 'Birthday Decor', href: '/birthday', image: '/birthday/WhatsApp%20Image%202026-08-04%20at%2012.18.53%20AM.jpeg' },
  { name: 'Anniversary Decor', href: '/anniversary', image: '/anniversary/WhatsApp%20Image%202026-08-04%20at%2012.23.57%20AM%20(1).jpeg' },
  { name: 'Car Decor', href: '/car-decor', image: '/cardecor/WhatsApp%20Image%202026-07-26%20at%204.02.20%20PM.jpeg' },
  { name: 'Groom Flower Sehra', href: '/groom-flower-sehra', image: '/battpaki/WhatsApp%20Image%202026-07-12%20at%204.04.56%20AM.jpeg' },
  { name: 'Chocolate Bouquet', href: '/chocolate-bouquet', image: '/choclate%20bouquet/WhatsApp%20Image%202026-08-04%20at%202.00.08%20PM%20(1).jpeg' },
  { name: 'Money Bouquet', href: '/money-bouquet', image: '/money%20bouquet/WhatsApp%20Image%202026-08-04%20at%202.16.50%20PM%20(1).jpeg' },
  { name: 'Artificial Bed Decor', href: '/artificial-bed-decor', image: '/artifical%20bed%20decor/WhatsApp%20Image%202026-07-26%20at%204.02.30%20PM%20(1).jpeg' },
];

const masonryImages = [
  '/flower%20bouquest/WhatsApp%20Image%202026-07-26%20at%204.02.43%20PM%20(1).jpeg',
  '/birthday/WhatsApp%20Image%202026-08-04%20at%2012.18.54%20AM.jpeg',
  '/anniversary/WhatsApp%20Image%202026-08-04%20at%2012.23.59%20AM.jpeg',
  '/cardecor/WhatsApp%20Image%202026-07-26%20at%204.02.21%20PM.jpeg',
  '/battpaki/WhatsApp%20Image%202026-07-12%20at%204.04.57%20AM%20(1).jpeg',
  '/choclate%20bouquet/WhatsApp%20Image%202026-08-04%20at%202.00.08%20PM%20(1).jpeg',
  '/money%20bouquet/WhatsApp%20Image%202026-08-04%20at%202.16.50%20PM%20(1).jpeg',
  '/bride%20set/WhatsApp%20Image%202026-08-04%20at%2012.27.20%20AM.jpeg',
];

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      
      <main>
        <HeroSlider />
        
        <div className="container" style={{ padding: '60px 15px' }}>
          <ProductSlider title="Best Selling" products={bestSellingProducts} />
        </div>
        
        <div style={{ backgroundColor: 'var(--color-grey-light)' }}>
          <CategoryGrid title="Shop By Occasion" categories={occasionCategories} />
        </div>

        <div style={{ padding: '40px 0' }}>
          <CategoryGrid title="Shop By Category" categories={shopCategories} />
        </div>

        {/* Featured Masonry Gallery */}
        <section style={{ padding: '60px 15px', backgroundColor: 'var(--color-beige-bg)' }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: '40px' }}
            >
              <h3 className="section-title">Featured Gallery</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Get inspired by our beautiful event decorations.</p>
            </motion.div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '25px'
            }}>
              {masonryImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: (i % 3) * 0.1 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: i % 2 === 0 ? '300px' : '400px', // masonry-like varying heights
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                      cursor: 'pointer',
                      marginBottom: '15px'
                    }}
                  >
                    <Image src={src} alt={`Gallery Image ${i + 1}`} fill style={{ objectFit: 'cover' }} />
                  </motion.div>
                  
                  <motion.a
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + (i % 3) * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/923432877581"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      backgroundColor: 'var(--color-green-btn)', color: 'white', 
                      padding: '10px 24px', borderRadius: '50px', 
                      textDecoration: 'none', fontWeight: 'bold', fontSize: '14px',
                      boxShadow: '0 4px 15px rgba(37, 211, 102, 0.2)'
                    }}
                  >
                    <FaWhatsapp size={18} /> Contact on WhatsApp
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp Call to Action */}
        <section style={{ 
          padding: '80px 20px', 
          textAlign: 'center', 
          background: 'linear-gradient(135deg, var(--color-beige-card) 0%, var(--color-pink-header) 100%)' 
        }}>
          <motion.div 
            className="container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ maxWidth: '700px', margin: '0 auto' }}
          >
            <div style={{
              width: '80px', height: '80px', backgroundColor: 'var(--color-green-btn)', 
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px', boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)'
            }}>
              <FaWhatsapp size={40} color="white" />
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-text-main)', marginBottom: '15px' }}>
              Let's Plan Your Perfect Event
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--color-text-muted)', marginBottom: '40px', lineHeight: '1.8' }}>
              Whether you need a simple bouquet or a grand anniversary setup, our team is ready to bring your vision to life. Reach out directly on WhatsApp to place an order or ask any questions!
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/923432877581"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                backgroundColor: 'var(--color-green-btn)', color: 'white', padding: '16px 36px',
                borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px',
                boxShadow: '0 8px 25px rgba(37, 211, 102, 0.25)'
              }}
            >
              <FaWhatsapp size={24} /> Contact on WhatsApp
            </motion.a>
          </motion.div>
        </section>

      </main>

      <Footer />
    </>
  );
}
