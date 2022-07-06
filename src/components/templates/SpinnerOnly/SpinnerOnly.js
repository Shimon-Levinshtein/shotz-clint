import React from 'react';
import styles from "./SpinnerOnly.module.scss";
import { connect } from 'react-redux';

const SpinnerOnly = props => {
   
    return (
        <div className={styles.continer}>
           <div className={styles.loader}>Loading...</div>
        </div>
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(SpinnerOnly);