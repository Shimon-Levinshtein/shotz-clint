import React, { useState } from 'react';
import styles from "./Yahrzeit.module.scss";
import { connect } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CreateYahrzeit from './CreateYahrzeit/CreateYahrzeit';


const Yahrzeit = props => {

    const navigate = useNavigate();

    const userData = props.userData;
    if (!userData.isLogin) navigate('/');

    return (
        <>
        <Routes>
          <Route exact path="/" element={
            <div className={styles.continer}>
            <div className={styles.left}>
                list
            </div >
            <div className={styles.right}>
                <div onClick={() => navigate('/yahrzeit/creat-yahrzeit')} className={`${styles.button} regular-bottom`}>
                    להוסיף יארצייט
                </div >
            </div >
        </div >
          } />
          <Route path="creat-yahrzeit/" element={<CreateYahrzeit />} />
        </Routes>
      </>
        

    );
};


const mapStateToProps = state => {
    return {
        userData: state.user,

    }
}
export default connect(mapStateToProps, {})(Yahrzeit);