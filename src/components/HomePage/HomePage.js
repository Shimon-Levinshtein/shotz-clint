import React, { useState } from 'react';
import styles from "./HomePage.module.scss";
import { connect } from 'react-redux';
import ScreenKosherZmanim from './ScreenKosherZmanim/ScreenKosherZmanim';
// import { IoLocationOutline } from "react-icons/io";
// import { IconName } from "react-icons/io";
import ScreenLocaton from './ScreenLocaton/ScreenLocaton';
import ClockAnalog from './ScreenKosherZmanim/ClockAnalog/ClockAnalog';
import YahrzeitToDay from './YahrzeitToDay/YahrzeitToDay';


const HomePage = props => {

    return (
        <div className={styles.continer}>
            <div className={styles.top}>
                <div className={styles.top_right}>
                    <ScreenKosherZmanim />
                </div >
                <div className={styles.top_left}>
                    <ScreenLocaton />
                    <ClockAnalog />
                </div >
            </div >
            <div className={styles.midlle}>
                <YahrzeitToDay />
            </div >
        </div >

    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(HomePage);