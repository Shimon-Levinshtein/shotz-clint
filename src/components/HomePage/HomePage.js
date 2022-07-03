import React from 'react';
import styles from "./HomePage.module.scss";
import { connect } from 'react-redux';
import Hebcal from 'hebcal';
import * as KosherZmanim from "kosher-zmanim";
import moment from 'moment';


const HomePage = props => {

    const year = new Hebcal();
    const dayHe = new Hebcal.HDate().toString('h');
    console.log('day//////////');
    console.log(dayHe);

    navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        year.setLocation(position.coords.latitude, position.coords.longitude);
    });
    const options = {
        date: new Date(),
        timeZoneId: '',
        // locationName?: string,
        latitude: 32.0852999,
        longitude: 34.7817676,
        // elevation?: number = 0,
        complexZmanim: true,
    }

    const zmanim = KosherZmanim.getZmanimJson(options);
    const basicZmanim = zmanim.Zmanim;
    // const basicZmanim = {};
    console.log('zmanim');
    console.log(zmanim);
    return (
        <div className={styles.continer}>
            <div className={styles.xxx}>
                {dayHe}
            </div >
            <div className={styles.xxx}>
                {Object.keys(basicZmanim).map(key => (
                    <>
                        {moment(new Date(basicZmanim[key])).format() !== 'Invalid date' && <div className={styles.xxx}>
                            {key}: {moment(new Date(basicZmanim[key])).format(' h:MM:ss a')}
                        </div >
                        }
                    </>
                ))}
            </div >
            <div className={styles.list_of_zmanim}>
                <div className={styles.xxx}>
                    עלות השחר: {moment(new Date(basicZmanim.AlosHashachar)).format(' HH:MM ')}
                </div >
            </div >
            <div className={styles.xxx}>
                {dayHe}
            </div >
        </div >
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(HomePage);