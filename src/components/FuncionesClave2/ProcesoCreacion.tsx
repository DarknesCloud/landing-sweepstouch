'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import styles from './FuncionesClave.module.css';

interface FuncionesClaveProps {
  mainImage: string;
  icon1: string;
  icon2: string;
  icon3: string;
}

const ProcesoCreacion: React.FC<FuncionesClaveProps> = ({
  mainImage,
  icon1,
  icon2,
  icon3,
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
            <span className={styles.highlight}>Proceso de creación</span> de
            campaña{' '}
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
              <span className={styles.bold}>Elección de productos:</span>{' '}
              Envíanos la selección de productos a promocionar.
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
              <span className={styles.bold}>Aprobación de diseño:</span>{' '}
              Elaboraremos el Flyer con los productos y el mensaje a enviar, tu
              solo debes aprobarlo.
            </Typography>
          </div>
          <div className={styles.listItem}>
            <Image
              src={icon3}
              alt="Incentivo inmediato"
              width={40}
              height={40}
              unoptimized
            />
            <Typography variant="body1">
              <span className={styles.bold}>Programación de campaña: </span>{' '}
              Establecimiento de fecha y hora óptimas para envío, nosotros
              enviaremos la campaña a todos tus contactos.
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ProcesoCreacion;
