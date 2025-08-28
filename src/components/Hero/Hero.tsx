'use client';

import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Grid container className={styles.gridContainer}>
        {/* Lado Izquierdo - Imagen con degradado integrado */}
        {/* @ts-expect-error Necesario porque MUI Grid pide prop 'component' */}
        <Grid item xs={12} md={6} className={styles.imageSection}>
          <img
            src="/telefonos.jpg"
            alt="Teléfonos con aplicación"
            className={styles.bgImage}
          />
        </Grid>

        {/* Lado Derecho - Contenido */}
        {/* @ts-expect-error Necesario porque MUI Grid pide prop 'component' */}
        <Grid item xs={12} md={6} className={styles.contentSection}>
          <Box className={styles.content}>
            <Typography variant="h2" className={styles.mainTitle}>
              POTENCIA TU
            </Typography>
            <Typography variant="h2" className={styles.mainTitle}>
              SUPERMERCADO
            </Typography>

            <Typography variant="h6" className={styles.subtitle}>
              con tecnología innovadora que maximiza
            </Typography>
            <Typography variant="h6" className={styles.subtitle}>
              tus ventas y fideliza tus clientes.
            </Typography>

            <Button variant="contained" className={styles.ctaButton}>
              CALCULA EL COSTO DE TU CAMPAÑA
            </Button>

            <Box className={styles.statsContainer}>
              <Typography variant="body2" className={styles.statText}>
                Más de 600,000 clientes ya confían en nosotros.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
