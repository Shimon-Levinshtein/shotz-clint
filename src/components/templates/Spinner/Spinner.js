import React from 'react';
import styles from "./Spinner.module.scss";
import { connect } from 'react-redux';

const Spinner = () => {
   
    return (
        <div className={styles.continer}>
           <div className={styles.loader}>Loading...</div>
        </div>
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(Spinner);