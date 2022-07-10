import styles from "./App.module.scss";

import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className={styles.continer}>

      <div className={styles.besad}>
        בס"ד
      </div>
      <HomePage />
    </div>
  );
}

export default App;
