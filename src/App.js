import { useAlert } from "react-alert";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";

import HomePage from './components/HomePage/HomePage';
import Login from "./components/pages/Login/Login";
import ResetPassword from "./components/pages/ResetPassword/ResetPassword";
import Yahrzeit from "./components/pages/Yahrzeit/Yahrzeit";
import ErrorMessage from "./components/templates/ErrorMessage/ErrorMessage";
import Spinner from "./components/templates/Spinner/Spinner";

const App = props => {

  const alert = useAlert();

  if (!window.alert.show) window.alert = alert; 
  
  return (
    <div className={styles.continer}>
      {props.screenHandle.spinner && <Spinner />}
      {props.screenHandle.errorMessage && <ErrorMessage />}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yahrzeit/*" element={<Yahrzeit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    screenHandle: state.screenHandle,
  }
}
export default connect(mapStateToProps, {})(App);

