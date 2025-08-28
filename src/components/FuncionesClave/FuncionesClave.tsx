'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import styles from './FuncionesClave.module.css';

interface FuncionesClaveProps {
  mainImage: string;
  icon1: string;
  icon2: string;
}

const FuncionesClave: React.FC<FuncionesClaveProps> = ({
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
            <span className={styles.highlight}>Captura de clientes</span> en el
            punto de venta
          </Typography>

          <Typography variant="body1" className={styles.description}>
            Nuestras <span className={styles.bold}>Tablets</span>{' '}
            estratégicamente ubicadas en el supermercado son el primer punto de
            contacto.
          </Typography>

          <div className={styles.listItem}>
            <Image
              src={icon1}
              alt="Registro simple"
              width={28}
              height={28}
              unoptimized
            />
            <Typography variant="body1">
              <span className={styles.bold}>Registro simple:</span> solo número
              de teléfono.
            </Typography>
          </div>

          <div className={styles.listItem}>
            <Image
              src={icon2}
              alt="Incentivo inmediato"
              width={28}
              height={28}
              unoptimized
            />
            <Typography variant="body1">
              <span className={styles.bold}>Incentivo inmediato:</span> Cupón de
              descuento o participación en un sorteo.
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default FuncionesClave;
