"use client";
import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const categoryData = [
  {
    title: 'Flower Bouquet',
    href: '/flowers',
    images: [
      '/flower bouquest/WhatsApp Image 2026-07-26 at 4.02.42 PM (1).jpeg',
      '/flower bouquest/WhatsApp Image 2026-07-26 at 4.02.42 PM (2).jpeg',
      '/flower bouquest/WhatsApp Image 2026-07-26 at 4.02.42 PM.jpeg',
      '/flower bouquest/WhatsApp Image 2026-07-26 at 4.02.43 PM (1).jpeg',
      '/flower bouquest/WhatsApp Image 2026-07-26 at 4.02.43 PM (2).jpeg',
    ]
  },
  {
    title: 'Birthday Decor',
    href: '/birthday',
    images: [
      '/birthday/WhatsApp Image 2026-08-04 at 12.18.51 AM.jpeg',
      '/birthday/WhatsApp Image 2026-08-04 at 12.18.53 AM.jpeg',
      '/birthday/WhatsApp Image 2026-08-04 at 12.18.54 AM.jpeg',
      '/birthday/WhatsApp Image 2026-08-04 at 12.18.57 AM.jpeg',
      '/birthday/WhatsApp Image 2026-08-04 at 12.19.00 AM.jpeg',
    ]
  },
  {
    title: 'Anniversary Decor',
    href: '/anniversary',
    images: [
      '/anniversary/WhatsApp Image 2026-08-04 at 12.23.54 AM.jpeg',
      '/anniversary/WhatsApp Image 2026-08-04 at 12.23.57 AM (1).jpeg',
      '/anniversary/WhatsApp Image 2026-08-04 at 12.23.57 AM.jpeg',
      '/anniversary/WhatsApp Image 2026-08-04 at 12.23.59 AM.jpeg',
      '/anniversary/WhatsApp Image 2026-08-04 at 12.24.00 AM.jpeg',
    ]
  },
  {
    title: 'Car Decor',
    href: '/car-decor',
    images: [
      '/cardecor/WhatsApp Image 2026-07-26 at 4.02.19 PM (1).jpeg',
      '/cardecor/WhatsApp Image 2026-07-26 at 4.02.19 PM (2).jpeg',
      '/cardecor/WhatsApp Image 2026-07-26 at 4.02.19 PM.jpeg',
      '/cardecor/WhatsApp Image 2026-07-26 at 4.02.20 PM.jpeg',
      '/cardecor/WhatsApp Image 2026-07-26 at 4.02.21 PM.jpeg',
    ]
  },
  {
    title: 'Home Decor',
    href: '/battpakki-homedecor',
    images: [
      '/battpaki/WhatsApp Image 2026-07-12 at 4.04.56 AM (1).jpeg',
      '/battpaki/WhatsApp Image 2026-07-12 at 4.04.56 AM.jpeg',
      '/battpaki/WhatsApp Image 2026-07-12 at 4.04.57 AM (1).jpeg',
      '/battpaki/WhatsApp Image 2026-07-12 at 4.04.57 AM (2).jpeg',
      '/battpaki/WhatsApp Image 2026-07-12 at 4.04.57 AM.jpeg',
    ]
  },
  {
    title: 'Groom Flower Sehra',
    href: '/groom-flower-sehra',
    images: [
      '/groom flower sehra/WhatsApp Image 2026-07-26 at 4.02.24 PM (1).jpeg',
      '/groom flower sehra/WhatsApp Image 2026-07-26 at 4.02.24 PM (2).jpeg',
      '/groom flower sehra/WhatsApp Image 2026-07-26 at 4.02.25 PM (1).jpeg',
      '/groom flower sehra/WhatsApp Image 2026-07-26 at 4.02.25 PM.jpeg',
      '/groom flower sehra/WhatsApp Image 2026-07-26 at 4.02.26 PM (2).jpeg',
    ]
  },
  {
    title: 'Artificial Bed Decor',
    href: '/artificial-bed-decor',
    images: [
      '/artifical bed decor/WhatsApp Image 2026-07-26 at 4.02.30 PM (1).jpeg',
      '/artifical bed decor/WhatsApp Image 2026-07-26 at 4.02.31 PM (1).jpeg',
      '/artifical bed decor/WhatsApp Image 2026-07-26 at 4.02.31 PM (2).jpeg',
      '/artifical bed decor/WhatsApp Image 2026-07-26 at 4.02.31 PM.jpeg',
      '/artifical bed decor/WhatsApp Image 2026-07-26 at 4.02.32 PM (1).jpeg',
    ]
  },
  {
    title: 'Haar',
    href: '/haar',
    images: [
      '/Haar/WhatsApp Image 2026-08-04 at 12.32.44 AM.jpeg',
      '/Haar/WhatsApp Image 2026-08-04 at 12.32.45 AM (1).jpeg',
      '/Haar/WhatsApp Image 2026-08-04 at 12.32.45 AM.jpeg',
      '/Haar/WhatsApp Image 2026-08-04 at 12.32.46 AM.jpeg',
      '/Haar/WhatsApp Image 2026-08-04 at 12.32.47 AM (1).jpeg',
    ]
  },
  {
    title: 'Bride Set',
    href: '/bride-set',
    images: [
      '/bride set/WhatsApp Image 2026-08-04 at 12.27.20 AM.jpeg',
      '/bride set/WhatsApp Image 2026-08-04 at 12.27.21 AM (1).jpeg',
      '/bride set/WhatsApp Image 2026-08-04 at 12.27.21 AM.jpeg',
      '/bride set/WhatsApp Image 2026-08-04 at 12.27.22 AM (1).jpeg',
      '/bride set/WhatsApp Image 2026-08-04 at 12.27.22 AM (2).jpeg',
    ]
  },
  {
    title: 'Chocolate Bouquet',
    href: '/chocolate-bouquet',
    images: [
      '/choclate bouquet/WhatsApp Image 2026-08-04 at 2.00.08 PM (1).jpeg',
      '/choclate bouquet/WhatsApp Image 2026-08-04 at 2.00.08 PM.jpeg',
      '/choclate bouquet/WhatsApp Image 2026-08-04 at 2.00.09 PM (1).jpeg',
      '/choclate bouquet/WhatsApp Image 2026-08-04 at 2.00.09 PM (2).jpeg',
      '/choclate bouquet/WhatsApp Image 2026-08-04 at 2.00.09 PM.jpeg',
    ]
  },
  {
    title: 'Money Bouquet',
    href: '/money-bouquet',
    images: [
      '/money bouquet/WhatsApp Image 2026-08-04 at 2.16.50 PM (1).jpeg',
      '/money bouquet/WhatsApp Image 2026-08-04 at 2.16.50 PM.jpeg',
      '/money bouquet/WhatsApp Image 2026-08-04 at 2.16.51 PM (1).jpeg',
      '/money bouquet/WhatsApp Image 2026-08-04 at 2.16.51 PM (2).jpeg',
      '/money bouquet/WhatsApp Image 2026-08-04 at 2.16.51 PM.jpeg',
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AllCategories() {
  return (
    <div style={{ backgroundColor: 'var(--color-beige-bg)', minHeight: '100vh' }}>
      <Header />
      <Navigation />
      
      <main className="container" style={{ padding: '60px 20px' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <p style={{ color: 'var(--color-gold-accent)', fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '13px', marginBottom: '12px' }}>
            Discover Our Collections
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-text-main)', marginBottom: '15px' }}>
            All Categories
          </h1>
          <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-gold-accent)', margin: '0 auto' }}></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categoryData.map((category, index) => (
            <motion.section 
              key={index} 
              variants={itemVariants}
              style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: '16px',
                padding: '40px',
                marginBottom: '50px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h2 style={{ fontSize: '2rem', color: 'var(--color-text-main)' }}>{category.title}</h2>
                <Link 
                  href={category.href}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    color: 'var(--color-gold-accent)', fontWeight: '600',
                    fontSize: '15px', transition: 'opacity 0.3s'
                  }}
                >
                  View All <FaArrowRight size={14} />
                </Link>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px'
              }}>
                {category.images.map((src, imgIndex) => (
                  <Link href={category.href} key={imgIndex}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: 'relative',
                        height: '250px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                        cursor: 'pointer'
                      }}
                    >
                      <Image 
                        src={src} 
                        alt={`${category.title} preview ${imgIndex + 1}`} 
                        fill 
                        style={{ objectFit: 'cover' }} 
                      />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
