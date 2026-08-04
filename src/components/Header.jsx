"use client";
import Link from 'next/link';
import Image from 'next/image';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`container flex justify-between align-center ${styles.topBarInner}`}>
          <div className={styles.contactInfo}>
            <span><FaPhoneAlt /> 03432877581</span>
            <span><FaWhatsapp /> WhatsApp: 03432877581</span>
          </div>
          <div className={styles.topTagline}>
            Premium Decoration &amp; Event Planning — Karachi
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container">
        <div className={styles.mainHeader}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/logp/WhatsApp%20Image%202026-07-26%20at%203.23.06%20PM.jpeg" alt="King Flower Shop Logo" width={150} height={100} style={{ objectFit: 'contain', display: 'block' }} />
            </Link>
          </div>
          
          <div className={styles.quickLinks}>
            <Link href="/flowers">Flower Bouquet</Link>
            <Link href="/battpakki-homedecor">Battpakki Homedecor</Link>
            <Link href="/car-decor">Car Decor</Link>
            <Link href="/artificial-bed-decor">Artificial Bed Decor</Link>
            <Link href="/haar">Haar</Link>
            <Link href="/bride-set">Bride Set</Link>
            <Link href="/birthday">Birthday</Link>
            <Link href="/anniversary">Anniversary</Link>
            <Link href="/groom-flower-sehra">Groom Flower Sehra</Link>
            <Link href="/chocolate-bouquet">Chocolate Bouquet</Link>
            <Link href="/money-bouquet">Money Bouquet</Link>
            <Link href="/about">About Us</Link>
          </div>

          <div className={styles.cart}>
            <a href="https://wa.me/923432877581" target="_blank" rel="noopener noreferrer" className={styles.whatsappOrderBtn}>
              <FaWhatsapp size={20} />
              <span className={styles.cartText}>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
