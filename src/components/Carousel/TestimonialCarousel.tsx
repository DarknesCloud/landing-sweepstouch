'use client';
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import styles from './TestimonialCarousel.module.css';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'Gerente de Fresh Market NY',
    text: (
      <>
        "Desde que implementamos{' '}
        <span className={styles.highlight}>SweepsTouch</span>, nuestras
        promociones son más efectivas. Hemos visto un{' '}
        <span className={styles.bold}>incremento del 25%</span> en la{' '}
        <span className={styles.bold}>respuesta de clientes</span> a nuestras
        ofertas semanales."
      </>
    ),
    image: '/images/client1.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Ramírez',
    role: 'Director de Supermercado Central',
    text: (
      <>
        "Con <span className={styles.highlight}>SweepsTouch</span> logramos
        mejorar la fidelización de clientes y aumentar las ventas en poco
        tiempo."
      </>
    ),
    image: '/images/client1.png',
    rating: 5,
  },
  {
    id: 3,
    name: 'Laura Fernández',
    role: 'Dueña de MiniMarket La Esquina',
    text: (
      <>
        "Gracias a <span className={styles.highlight}>SweepsTouch</span>,
        nuestras promociones llegan a más clientes y las ventas se han
        disparado."
      </>
    ),
    image: '/images/client1.png',
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.arrow} onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      {/* Contenedor con animación de movimiento */}
      <div className={styles.sliderWrapper}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, index) => (
            <div key={t.id} className={styles.slide}>
              <div className={styles.imageWrapper}>
                <Image
                  src={t.image}
                  alt={t.name}
                  width={220}
                  height={220}
                  className={styles.clientImage}
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>Client Feedback</h3>
                <p className={styles.text}>{t.text}</p>
                <p className={styles.author}>
                  - {t.name}, {t.role}
                </p>
                <div className={styles.stars}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className={styles.arrow} onClick={nextSlide}>
        <FaChevronRight />
      </button>

      <div className={styles.dots}>
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === current ? styles.activeDot : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}
