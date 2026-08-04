"use client";
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {product.isNew && <div className={styles.badgeNew}>New</div>}
        {product.isSale && <div className={styles.badgeSale}>Sale</div>}
        <Image src={product.image} alt={product.name} width={275} height={304} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h4 className={styles.title}>{product.name}</h4>
        <a
          href="https://wa.me/923432877581"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.waBtn}
        >
          <FaWhatsapp size={16} /> Order to WhatsApp
        </a>
      </div>
    </div>
  );
}
