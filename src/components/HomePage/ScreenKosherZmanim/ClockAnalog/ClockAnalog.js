import React from 'react';
import styles from "./ClockAnalog.module.scss";
import { connect } from 'react-redux';
import AnalogClock from 'analog-clock-react';


const ClockAnalog = props => {
    // const myDate = new Date();
    // myDate.setHours(myDate.getHours + 1)
    // myDate.setDate(myDate.getDate() + 2);
    let options = {
        // useCustomTime: true,
        width: "300px",
        border: true,
        borderColor: "#50bfff",
        baseColor: "#99daff",
        centerColor: "#99daff",
        centerBorderColor: "#50bfff",
        handColors: {
            second: "#d81c7a",
            minute: "#ffffff",
            hour: "#ffffff"
        },
        // seconds: 1,   // set your
        // minutes: 10,  // own
        // hours: 22,    // time here.
    };
    return (
        <div className={styles.continer}>
            <AnalogClock {...options} />
        </div >
    );
};




const mapStateToProps = state => {
    return {
        location: state.location,
        myDate: state.date,
    }
}
export default connect(mapStateToProps, {})(ClockAnalog);