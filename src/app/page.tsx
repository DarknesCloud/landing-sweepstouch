'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TestimonialCarousel from '@/components/Carousel/TestimonialCarousel';
import FeaturedClients from '@/components/FeaturedClients/FeaturedClients';
import Beneficios from '@/components/Beneficios/Beneficios';
import BeneficiosAdicionales from '@/components/BeneficiosAdicionales/BeneficiosAdicionales';
import FuncionesClave from '@/components/FuncionesClave/FuncionesClave';
import ProcesoCreacion from '@/components/FuncionesClave2/ProcesoCreacion';
import DistribucionDigital from '@/components/FuncionesClave3/DistribucionDigital';
import CicloEngagement from '@/components/FuncionesClave4/CicloEngagement';
import MedicionOptimizacion from '@/components/FuncionesClave5/MedicionOptimizacion';
import Faqs from '@/components/FAQs/Faqs';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TestimonialCarousel />
      <FeaturedClients />
      <Beneficios />
      <BeneficiosAdicionales />

      <FuncionesClave
        mainImage="/images/captura.png"
        icon1="/images/telefono.png"
        icon2="/images/telefono2.png"
      />
      <ProcesoCreacion
        mainImage="/images/proceso.png"
        icon1="/images/eleccion.png"
        icon2="/images/aprobacion.png"
        icon3="/images/programacion.png"
      />
      <DistribucionDigital
        mainImage="/images/distribucion.png"
        icon1="/images/sms.png"
        icon2="/images/metrica.png"
      />
      <CicloEngagement
        mainImage="/images/ciclo.png"
        icon1="/images/ofertas.png"
        icon2="/images/programa.png"
        icon3="/images/recompensas.png"
      />
      <MedicionOptimizacion
        mainImage="/images/medicion.png"
        icon1="/images/reporte.png"
        icon2="/images/analisis.png"
        icon3="/images/recomendaciones.png"
      />
      <Faqs />
      <Footer />
    </main>
  );
}
