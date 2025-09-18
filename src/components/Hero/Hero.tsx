'use client';

import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Box className={styles.container}>
        {/* Contenido de texto */}
        <Box className={styles.contentWrapper}>
          {/* Título */}
          <Box className={styles.titleSection}>
            <Typography variant="h2" className={styles.mainTitle}>
              POTENCIA TU
            </Typography>
            <Typography variant="h2" className={styles.mainTitle}>
              SUPERMERCADO
            </Typography>
          </Box>

          {/* Párrafos */}
          <Box className={styles.textSection}>
            <Typography variant="h6" className={styles.subtitle}>
              Con tecnología innovadora que maximiza
            </Typography>
            <Typography variant="h6" className={styles.subtitle}>
              Tus ventas y fideliza tus clientes.
            </Typography>
          </Box>

          {/* Botón */}
          <Box className={styles.buttonSection}>
            <Button variant="contained" className={styles.ctaButton}>
              CALCULA EL COSTO DE TU CAMPAÑA
            </Button>
          </Box>

          {/* Estadística */}
          <Box className={styles.statsContainer}>
            <Typography variant="body2" className={styles.statText}>
              Más de 600,000 clientes ya confían en nosotros.
            </Typography>
          </Box>
        </Box>

        {/* Imagen */}
        <Box className={styles.imageSection}>
          <img
            src="/telefonos.jpg"
            alt="Teléfonos con aplicación"
            className={styles.bgImage}
          />
        </Box>
      </Box>
    </section>
  );
};

export default Hero;
