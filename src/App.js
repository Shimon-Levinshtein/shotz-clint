import styles from "./App.module.scss";
import Header from "./components/Header/Header";

import HomePage from './components/HomePage/HomePage';

function App() {

  return (
    <div className={styles.continer}>
<Header/>
     
      <HomePage />
    </div>
  );
}

export default App;
