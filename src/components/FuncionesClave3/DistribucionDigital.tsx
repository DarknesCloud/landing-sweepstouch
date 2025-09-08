'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '../FuncionesClave/FuncionesClave.module.css';

interface FuncionesClaveProps {
  mainImage: string;
  icon1: string;
  icon2: string;
}

const DistribucionDigital: React.FC<FuncionesClaveProps> = ({
  mainImage,
  icon1,
  icon2,
}) => {
  return (
    <Box className={styles.container}>
      {/* 📌 Flex row: imagen izquierda / texto derecha */}
      <div className={styles.row}>
        {/* Imagen */}
        <div className={styles.imageCol}>
          <Image
            src={mainImage}
            alt="Ilustración función clave"
            width={450}
            height={350}
            className={styles.mainImage}
            unoptimized
          />
        </div>

        {/* Texto */}
        <div className={styles.textCol}>
          <Typography variant="h5" className={styles.title}>
            <span className={styles.highlight}>
              Distribución Digital<br></br>{' '}
            </span>{' '}
            y Seguimiento
          </Typography>

          <Typography variant="body1" className={styles.description}>
            Sistema<span className={styles.bold}>Automatizado</span> de envío
            multicanal:
          </Typography>

          <div className={styles.listItem}>
            <Image
              src={icon1}
              alt="Registro simple"
              width={40}
              height={40}
              unoptimized
            />
            <Typography variant="body1">
              <span className={styles.bold}>
                Envío de SMS/MMS:<br></br>
              </span>{' '}
              con ofertas personalizadas.
            </Typography>
          </div>

          <div className={styles.listItem}>
            <Image
              src={icon2}
              alt="Incentivo inmediato"
              width={40}
              height={40}
              unoptimized
            />
            <Typography variant="body1">
              <span className={styles.bold}>
                Métricas instantáneas:<br></br>
              </span>{' '}
              de redención de ofertas
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default DistribucionDigital;
