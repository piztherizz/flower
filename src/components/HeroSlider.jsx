"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import styles from './HeroSlider.module.css';

const slides = [
  { src: '/WhatsApp Image 2026-08-04 at 5.44.14 PM.jpeg', alt: 'Featured Decoration' },
  { src: '/WhatsApp Image 2026-08-04 at 5.44.54 PM.jpeg', alt: 'Premium Bouquet' },
  { src: '/WhatsApp Image 2026-08-04 at 5.47.04 PM.jpeg', alt: 'Luxury Setup' },
  { src: '/WhatsApp Image 2026-08-04 at 1.57.37 AM.jpeg', alt: 'Special Event Setup' },
  { src: '/WhatsApp Image 2026-08-04 at 2.00.10 PM.jpeg', alt: 'Premium Decor' },
];

export default function HeroSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {slides.map((slide, i) => (
          <div className={styles.embla__slide} key={i}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1200}
              height={500}
              className={styles.slideImage}
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
