"use client";
import Link from 'next/link';
import { FaBars, FaHome } from 'react-icons/fa';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className={styles.navWrapper}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.categoriesMenu}>
            <div className={styles.catHeading}>
              <FaBars /> TOP CATEGORIES
            </div>
            {/* The dropdown would go here */}
          </div>
          
          <ul className={styles.horizontalMenu}>
            <li>
              <Link href="/" className={styles.homeIcon}><FaHome size={20} /></Link>
            </li>
            <li><Link href="/flowers">Flower Bouquet</Link></li>
            <li><Link href="/groom-flower-sehra">Groom Flower Sehra</Link></li>
            <li><Link href="/artificial-bed-decor">Artificial Bed Decor</Link></li>
            <li><Link href="/car-decor">Car Decor</Link></li>
            <li><Link href="/haar">Haar</Link></li>
            <li><Link href="/bride-set">Bride Set</Link></li>
            <li><Link href="/chocolate-bouquet">Chocolate Bouquet</Link></li>
            <li><Link href="/money-bouquet">Money Bouquet</Link></li>
            <li><Link href="/birthday">Birthday</Link></li>
            <li><Link href="/anniversary">Anniversary</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
