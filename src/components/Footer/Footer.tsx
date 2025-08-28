'use client';
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { Box, Grid, Typography, Button, IconButton } from '@mui/material';
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <Box component="footer" className={styles.footer}>
      <Grid container spacing={4} className={styles.grid}>
        {/* Logo + descripción */}
        {/* @ts-expect-error Necesario porque MUI Grid pide prop 'component' */}
        <Grid item xs={12} md={4}>
          <Image
            src="/images/logo-blanco.png"
            alt="Sweepstouch Logo"
            width={180}
            height={40}
          />
          <Typography className={styles.text}>
            Con SweepsTouch, transformas tus promociones de supermercados
            independientes con soluciones digitales, sostenibles y efectivas.
          </Typography>
          <Typography className={styles.quote}>
            "Conecta con tus clientes. Transforma tus promociones."
          </Typography>
        </Grid>

        {/* Acceso directo */}
        {/* @ts-expect-error Necesario porque MUI Grid pide prop 'component' */}
        <Grid item xs={12} md={4}>
          <Typography className={styles.subtitle}>ACCESO DIRECTO</Typography>
          <ul className={styles.links}>
            <li>About SweepsTouch</li>
            <li>Create an Account</li>
            <li>MMS/SMS Pricing</li>
            <li>FAQs</li>
          </ul>
        </Grid>

        {/* Contacto + Redes */}
        {/* @ts-expect-error Necesario porque MUI Grid pide prop 'component' */}
        <Grid item xs={12} md={4} className={styles.contact}>
          <Typography className={styles.optimiza}>
            ¡Optimiza tus campañas y aumenta tu impacto!
          </Typography>
          <Button variant="contained" className={styles.cta}>
            CONTÁCTANOS AHORA →
          </Button>
          <div className={styles.socials}>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>

      {/* Línea inferior */}
      <Box className={styles.bottomBar}>
        <Typography variant="body2">
          2024 SweepsTouch. Todos los derechos reservados.
        </Typography>
        <div className={styles.bottomLinks}>
          <span>Política de Privacidad</span>
          <span>Términos de Servicio</span>
          <span>Configuración de Cookies</span>
        </div>
      </Box>
    </Box>
  );
};

export default Footer;
