import { useState } from 'react';

import styles from './counter.module.css';

function Counter() {
  const [counter, setCounter] = useState(0);

  // re-renders screen

  // [property, property-set] = data-transform

  return (
    <main className={styles.wrapper}>
      <section className={styles.main}>
        {/* title */}
        <h2 className={styles.heading}>Counter App</h2>
        {/* counter value */}
        <p>{counter}</p>
        {/* buttons to manipulate counter values */}
        <div className={styles.btn}>
          <button
            onClick={() =>
              setCounter((c) => {
                // c > 0 ? c - 1 : c
                if (c > 0) {
                  return c - 1;
                } else {
                  return c;
                }
              })
            }
          >
            -
          </button>
          <button className={styles.reset} onClick={() => setCounter(0)}>
            Reset
          </button>
          <button onClick={() => setCounter((c) => c + 1)}>+</button>
          <button onClick={() => setCounter((c) => c + 5)}>+5</button>
        </div>
      </section>
    </main>
  );
}

export default Counter;
