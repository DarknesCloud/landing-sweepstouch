'use client';
import Image from 'next/image';
import styles from './FeaturedClients.module.css';

const clients = [
  {
    name: 'Fresh Market NY',
    details: ['5 Ubicaciones', '40% incremento en Redención de Cupones'],
  },
  {
    name: 'Family Groceries',
    details: ['3 Ubicaciones', '20% aumento en ventas promocionales'],
  },
  {
    name: 'Green Foods Market',
    details: ['7 Ubicaciones', '50% reducción en costos de marketing'],
  },
];

export default function FeaturedClients() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Clientes Destacados</h2>
      <div className={styles.grid}>
        {clients.map((client, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <div>
                <h3 className={styles.clientName}>{client.name}</h3>
                <ul className={styles.details}>
                  {client.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <Image
                src="/images/carrito.png"
                alt="Carrito"
                width={50}
                height={50}
                className={styles.icon}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
