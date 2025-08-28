'use client';
import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Faqs.module.css';

const faqs = [
  {
    question: '¿Qué es Sweepstouch y cómo puede beneficiar a mi supermercado?',
    answer:
      'Sweepstouch es una solución de marketing que ayuda a captar clientes en el punto de venta y aumentar la participación de los consumidores.',
  },
  {
    question:
      '¿Cómo se diferencia Sweepstouch de otros servicios de marketing?',
    answer:
      'A diferencia de otros servicios, Sweepstouch combina incentivos inmediatos y tecnología de tablets estratégicamente ubicadas.',
  },
  {
    question: '¿Qué tipo de promociones puedo enviar con Sweepstouch?',
    answer:
      'Puedes enviar promociones como cupones de descuento, sorteos y beneficios exclusivos adaptados a tus clientes.',
  },
];

const Faqs: React.FC = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h5" className={styles.title}>
        FAQs
      </Typography>

      <div className={styles.accordions}>
        {faqs.map((faq, index) => (
          <Accordion key={index} className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={styles.summary}
            >
              <Typography className={styles.question}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.details}>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <Button variant="outlined" className={styles.button}>
          Ver Todos
        </Button>
      </div>
    </Box>
  );
};

export default Faqs;
