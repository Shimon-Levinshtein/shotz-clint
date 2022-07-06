import React from 'react';
import styles from "./HomePage.module.scss";
import { connect } from 'react-redux';
import ScreenKosherZmanim from './ScreenKosherZmanim/ScreenKosherZmanim';


const HomePage = props => {

  
    return (
        <div className={styles.continer}>
           <ScreenKosherZmanim />
        </div >
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(HomePage);