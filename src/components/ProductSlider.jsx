"use client";
import React from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import ProductCard from './ProductCard';
import styles from './ProductSlider.module.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default function ProductSlider({ products, title }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.sliderWrapper}>
      {title && (
        <div className={styles.header}>
          <h3 className="section-title">{title}</h3>
          <div className={styles.controls}>
            <button onClick={scrollPrev} className={styles.navButton}><FaAngleLeft /></button>
            <button onClick={scrollNext} className={styles.navButton}><FaAngleRight /></button>
          </div>
        </div>
      )}
      
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {products.map(product => (
            <div className={styles.embla__slide} key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center" style={{ marginTop: '20px' }}>
        <Link href="/all-categories" className={styles.viewAllBtn}>View All</Link>
      </div>
    </div>
  );
}
