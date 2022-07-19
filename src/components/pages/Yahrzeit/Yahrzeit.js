import React, { useState } from 'react';
import styles from "./Yahrzeit.module.scss";
import { connect } from 'react-redux';


const Yahrzeit = props => {

    return (
        <div className={styles.continer}>
           Yahrzeit
        </div >

    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(Yahrzeit);