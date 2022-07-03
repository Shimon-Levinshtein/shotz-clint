import React from 'react';
import styles from "./HomePage.module.scss";
import { connect } from 'react-redux';
import Hebcal from 'hebcal';



const HomePage = props => {

    const year = new Hebcal();
    console.log('year//////////');
    console.log(year);
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
    });
    return (
        <div className={styles.continer}>
            home page
        </div >
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(HomePage);