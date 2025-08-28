'use client';
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import styles from './Beneficios.module.css';

const beneficios = [
  {
    icon: '/images/cochinito.png',
    title: 'Ahorro En Costos Operativos:',
    description:
      'Elimina gastos de impresión y distribución de circulares tradicionales, reduciendo costos hasta en un 85%.',
  },
  {
    icon: '/images/engagement.png',
    title: 'Engagement Digital Mejorado:',
    description:
      'Interactúa con tus clientes a través de promociones digitales personalizadas y medibles en tiempo real.',
  },
  {
    icon: '/images/folder.png',
    title: 'Base De Datos Valiosa:',
    description:
      'Construye una base de datos de clientes para campañas más efectivas y precisas.',
  },
  {
    icon: '/images/ambiente.png',
    title: 'Sostenibilidad Ambiental:',
    description:
      'Reduce tu huella de carbono eliminando la necesidad de impresiones masivas de circulares.',
  },
];

export default function Beneficios() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>Beneficios</h2>
        <div className={styles.grid}>
          {beneficios.map((item, index) => (
            <Card key={index} className={styles.card} elevation={2}>
              <CardContent>
                <div className={styles.iconWrapper}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                </div>
                <Typography
                  variant="h6"
                  component="h3"
                  className={styles.cardTitle}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" className={styles.cardText}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
