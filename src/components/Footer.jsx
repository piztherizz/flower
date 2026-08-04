"use client";
import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>

          {/* Brand Column */}
          <div className={styles.column}>
            <h4>King Flower Shop</h4>
            <p>Premium decoration and event planning in Karachi, Pakistan. We create magical moments for birthdays, anniversaries, weddings, and all special occasions.</p>
            <p style={{ marginBottom: '15px', fontSize: '14px', color: '#555' }}>
              📍 Mehmoodabad No. 5, Near Firdous Mosque, Karachi
            </p>
            <div className={styles.socials}>
              <a
                href="https://wa.me/923432877581"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                style={{ color: '#25D366' }}
              >
                <FaWhatsapp size={26} />
              </a>
              <a
                href="https://www.instagram.com/king.flower._.official?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                style={{ color: '#e1306c' }}
              >
                <FaInstagram size={26} />
              </a>
              <a
                href="https://www.tiktok.com/@bali_event_planner?_r=1&_t=ZS-98aCwbX4kVB"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok"
                style={{ color: '#010101' }}
              >
                <SiTiktok size={24} />
              </a>
              <a
                href="https://youtube.com/@bali_.eventplannerofficial?si=3772iAXFxuVREHoi"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                style={{ color: '#FF0000' }}
              >
                <FaYoutube size={28} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/delivery">Delivery Information</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms &amp; Conditions</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className={styles.column}>
            <h4>Customer Service</h4>
            <ul>
              <li><Link href="/contact">Contact Us</Link></li>
              <li>
                <a href="https://wa.me/923432877581" target="_blank" rel="noopener noreferrer">
                  WhatsApp Support
                </a>
              </li>
              <li><Link href="/delivery">Delivery Information</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} King Flower Shop. All Rights Reserved. Karachi, Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}
