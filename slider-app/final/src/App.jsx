import { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import styles from './app.module.css';

const items = [
  'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1512457169793-9226993a29ad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1536623367534-b06a2ff1f655?q=80&w=2918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1506485338023-6ce5f36692df?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1524236812453-5eb42a151ec3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvbWVuJTIwY2FtZXJhfGVufDB8MHwwfHx8Mg%3D%3D',
];

function App() {
  const [index, setIndex] = useState(0);
  return (
    <main className={styles.app}>
      <section className={styles.wrapper}>
        <section className={styles.slider}>
          <button
            className={styles.buttonLeft}
            onClick={() =>
              setIndex((idx) => (idx > 0 ? idx - 1 : items.length - 1))
            }
          >
            <FaChevronLeft className={styles.icon} />
          </button>
          <img src={items[index]} alt="banner-img" />
          <button
            className={styles.buttonRight}
            onClick={() =>
              setIndex((idx) => (idx < items.length - 1 ? idx + 1 : 0))
            }
          >
            <FaChevronRight className={styles.icon} />
          </button>
        </section>
        <ul className={styles.container}>
          {items.map((item, idx) => (
            <li key={idx}>
              <img
                src={item}
                className={idx === index ? styles.active : styles.inactive}
                alt="images"
                onClick={() => setIndex(idx)}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
