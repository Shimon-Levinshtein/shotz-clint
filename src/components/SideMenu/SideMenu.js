import React, { useState } from 'react';
import styles from "./SideMenu.module.scss";
import { connect } from 'react-redux';



const SideMenu = props => {

    return (
        <div className={styles.continer}>
          SideMenu
        </div >

    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(SideMenu);