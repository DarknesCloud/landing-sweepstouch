'use client';

// components/BeneficiosAdicionales.tsx
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './BeneficiosAdicionales.module.css';

const beneficios = [
  {
    img: '/images/interfaz.png',
    title: 'Interfaz intuitiva\n y fácil de usar',
  },
  {
    img: '/images/seguridad.png',
    title: 'Seguridad de datos\n garantizada',
  },
  {
    img: '/images/soporte.png',
    title: 'Soporte técnico\n dedicado 24/7',
  },
];

export default function BeneficiosAdicionales() {
  return (
    <Box className={styles.container}>
      <Typography variant="h6" className={styles.title}>
        Beneficios Adicionales
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        className={styles.gridContainer}
      >
        {beneficios.map((beneficio, index) => (
          // @ts-expect-error Necesario porque MUI Grid pide prop 'component'
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={styles.card}>
              <CardContent>
                <Box className={styles.imageWrapper}>
                  <Image
                    src={beneficio.img}
                    alt={beneficio.title}
                    width={80}
                    height={80}
                  />
                </Box>
                <Typography variant="body1" className={styles.cardTitle}>
                  {beneficio.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="body2" className={styles.footerText}>
        Cada beneficio está respaldado por resultados medibles y casos de éxito
        comprobados en supermercados independientes como el tuyo.
      </Typography>
    </Box>
  );
}
