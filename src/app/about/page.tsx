'use client';

import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './about.module.css';

const AboutPage: React.FC = () => {
  const valoresCorporativos = [
    {
      icon: '/images/proceso.png',
      title: 'Innovación Digital:',
      description:
        'Revolucionamos la experiencia retail con tecnología pionera.',
    },
    {
      icon: '/images/cochinito.png',
      title: 'Compromiso:',
      description: 'Dedicados al crecimiento de nuestros clientes.',
    },
    {
      icon: '/images/seguridad.png',
      title: 'Integridad:',
      description: 'Los más altos estándares éticos en cada interacción.',
    },
    {
      icon: '/images/recompensas.png',
      title: 'Excelencia:',
      description: 'Buscamos la perfección en cada detalle.',
    },
    {
      icon: '/images/ambiente.png',
      title: 'Sostenibilidad:',
      description: 'Lideramos la transformación hacia un retail más verde.',
    },
  ];

  const culturaEmpresarial = [
    {
      icon: '/images/eleccion.png',
      title: 'Innovación constante:',
      description: 'Fomentamos la creatividad y las nuevas ideas.',
    },
    {
      icon: '/images/engagement.png',
      title: 'Trabajo en equipo:',
      description: 'Colaboración efectiva entre departamentos.',
    },
    {
      icon: '/images/metrica.png',
      title: 'Orientación a resultados:',
      description: 'Enfoque en métricas y mejora continua.',
    },
    {
      icon: '/images/telefono.png',
      title: 'Agilidad:',
      description: 'Capacidad de adaptación rápida a cambios del mercado.',
    },
    {
      icon: '/images/recomendaciones.png',
      title: 'Aprendizaje continuo:',
      description: 'Desarrollo profesional y capacitación constante.',
    },
  ];

  return (
    <>
      <Header />
      <Box className={styles.aboutContainer}>
        {/* Hero Section */}
        <Container maxWidth="xl" className={styles.heroSection}>
          <Typography variant="h2" className={styles.mainTitle}>
            Sobre Nosotros
          </Typography>
        </Container>

        {/* Misión y Visión */}
        <Container maxWidth="xl" className={styles.missionVisionSection}>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems="flex-start"
            gap={6}
          >
            {/* Imagen a la izquierda */}
            <Box className={styles.illustrationContainer}>
              <Image
                src="/images/captura.png"
                alt="Ilustración sobre nosotros"
                width={1700}
                height={1600}
                className={styles.illustration}
              />
            </Box>

            {/* Textos uno debajo del otro */}
            <Box className={styles.textContent}>
              {/* Misión */}
              <Typography variant="h4" className={styles.sectionTitle}>
                <span className={styles.highlight}>Misión</span>
              </Typography>
              <Typography variant="body1" className={styles.description}>
                Impulsar el crecimiento de supermercados independientes mediante
                soluciones digitales innovadoras que maximicen sus ventas y
                fortalezcan la lealtad de sus clientes.
              </Typography>

              {/* Visión */}
              <Box display="flex" alignItems="center" gap={1} mt={4}>
                <Typography variant="h4" className={styles.sectionTitle}>
                  <span className={styles.highlight}>Visión</span>
                </Typography>
              </Box>
              <Typography variant="body1" className={styles.description}>
                Consolidarnos como la plataforma líder en marketing digital para
                supermercados independientes en Estados Unidos, expandiendo
                nuestra presencia a todos los estados y transformando la manera
                en que las tiendas conectan con sus clientes para maximizar sus
                resultados.
              </Typography>
            </Box>
          </Box>
        </Container>

        {/* Valores Corporativos */}
        <Box className={styles.valoresSection}>
          <Container maxWidth="xl">
            <Typography variant="h4" className={styles.sectionTitle}>
              Valores Corporativos
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(5, 1fr)',
                },
                gap: 4,
                marginTop: 6,
              }}
            >
              {valoresCorporativos.map((valor, index) => (
                <Card key={index} className={styles.valorCard}>
                  <CardContent className={styles.valorContent}>
                    <Box className={styles.iconContainer}>
                      <Image
                        src={valor.icon}
                        alt={valor.title}
                        width={60}
                        height={60}
                        className={styles.valorIcon}
                      />
                    </Box>
                    <Typography variant="h6" className={styles.valorTitle}>
                      {valor.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className={styles.valorDescription}
                    >
                      {valor.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Cultura Empresarial */}
        <Box className={styles.culturaSection}>
          <Container maxWidth="xl">
            <Typography variant="h4" className={styles.sectionTitle}>
              Cultura Empresarial
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(5, 1fr)',
                },
                gap: 4,
                marginTop: 6,
              }}
            >
              {culturaEmpresarial.map((cultura, index) => (
                <Card key={index} className={styles.culturaCard}>
                  <CardContent className={styles.culturaContent}>
                    <Box className={styles.iconContainer}>
                      <Image
                        src={cultura.icon}
                        alt={cultura.title}
                        width={60}
                        height={60}
                        className={styles.culturaIcon}
                      />
                    </Box>
                    <Typography variant="h6" className={styles.culturaTitle}>
                      {cultura.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className={styles.culturaDescription}
                    >
                      {cultura.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default AboutPage;
