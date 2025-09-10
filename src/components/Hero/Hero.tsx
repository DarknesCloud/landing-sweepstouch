'use client';

import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import { useGSAP } from '../../hooks/useGSAP';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const containerRef = useGSAP();

  return (
    <section className={styles.hero} ref={containerRef}>
      <Grid container className={styles.gridContainer}>
        {/* Lado Izquierdo - Imagen con degradado integrado */}
        {/* @ts-expect-error Necesario porque MUI Grid pide prop 'component' */}
        <Grid item xs={12} md={6} className={`${styles.imageSection} slide-left`}>
          <img
            src="/telefonos.jpg"
            alt="Teléfonos con aplicación"
            className={`${styles.bgImage} parallax-bg`}
          />
        </Grid>

        {/* Lado Derecho - Contenido */}
        {/* @ts-expect-error Necesario porque MUI Grid pide prop 'component' */}
        <Grid item xs={12} md={6} className={`${styles.contentSection} slide-right`}>
          <Box className={styles.content}>
            <Typography variant="h2" className={`${styles.mainTitle} fade-in`}>
              POTENCIA TU
            </Typography>
            <Typography variant="h2" className={`${styles.mainTitle} fade-in`}>
              SUPERMERCADO
            </Typography>

            <Typography variant="h6" className={`${styles.subtitle} fade-in`}>
              con tecnología innovadora que maximiza
            </Typography>
            <Typography variant="h6" className={`${styles.subtitle} fade-in`}>
              tus ventas y fideliza tus clientes.
            </Typography>

            <Button variant="contained" className={`${styles.ctaButton} scale-in`}>
              CALCULA EL COSTO DE TU CAMPAÑA
            </Button>

            <Box className={`${styles.statsContainer} fade-in`}>
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
