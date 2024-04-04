import styles from './counter.module.css';

function Counter() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.main}>
        <h2 className={styles.heading}>Counter App</h2>
        <p>0</p>
        <div className={styles.btn}>
          <button>-</button>
          <button className={styles.reset}>Reset</button>
          <button>+</button>
          <button>+5</button>
        </div>
      </section>
    </main>
  );
}

export default Counter;
