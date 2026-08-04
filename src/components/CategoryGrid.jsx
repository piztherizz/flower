"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import styles from './CategoryGrid.module.css';

export default function CategoryGrid({ title, categories }) {
  return (
    <div className={styles.categorySection} style={{ padding: '60px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="section-title" style={{ marginBottom: '40px' }}>{title}</h3>
        </motion.div>

        <div className={styles.grid} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '30px'
        }}>
          {categories.map((cat, index) => (
            <motion.div 
              key={index} 
              className={styles.categoryItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: '0 15px 35px rgba(0,0,0,0.08)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBottom: '25px',
                cursor: 'pointer'
              }}
            >
              <Link href={cat.href} style={{ width: '100%', position: 'relative', height: '240px', display: 'block' }}>
                <Image src={cat.image} alt={cat.name} fill style={{ objectFit: 'cover' }} className={styles.image} />
              </Link>
              <div style={{ marginTop: '25px', textAlign: 'center', padding: '0 15px' }}>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '12px' }}>
                  {cat.name}
                </div>
                <Link 
                  href="/all-categories" 
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    color: 'var(--color-gold-accent)', fontSize: '14px', fontWeight: '600',
                    transition: 'color 0.2s', textDecoration: 'none'
                  }}
                >
                  View All <FaArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
