import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";

import HomePage from './components/HomePage/HomePage';
import Login from "./components/pages/Login/Login";
import Yahrzeit from "./components/pages/Yahrzeit/Yahrzeit";

function App() {

  return (
    <div className={styles.continer}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yahrzeit" element={<Yahrzeit />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
