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
        latitude: 32.0790721,
        longitude: 34.8513687,
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
            <div className={styles.list_of_zmanim}>
                <div className={styles.list_item}>
                    עלות השחר: {moment(new Date(basicZmanim.AlosHashachar)).format(' HH:MM ')}
                </div >
                <div className={styles.list_item}>
                    זריחה: {moment(new Date(basicZmanim.Sunrise)).format(' HH:MM ')}
                </div >
                <div className={styles.list_item}>
                    סוף זמן שמע מג"א: {moment(new Date(basicZmanim.SofZmanShmaMGA)).format(' HH:MM ')}
                </div >
                <div className={styles.list_item}>
                    סוף זמן שמע גר"א/בעל התניא: {moment(new Date(basicZmanim.SofZmanShmaGRA)).format(' HH:MM ')}
                </div >
                <div className={styles.list_item}>
                    סוף זמן תפילה מג"א: {moment(new Date(basicZmanim.SofZmanTfilaMGA)).format(' HH:MM ')}
                </div >
                <div className={styles.list_item}>
                    סוף זמן תפלה בעל התניא /גר"א: {moment(new Date(basicZmanim.SofZmanTfilaGRA)).format(' HH:MM ')}
                </div >
                <div className={styles.list_item}>
                   ססס: {moment(new Date(basicZmanim.BainHasmashosYereim2Point8Degrees)).format(' HH:MM ')}
                </div >
                <div className={styles.list_item}>
                   ססס: {moment(new Date(basicZmanim.BainHasmashosYereim18Minutes)).format(' HH:MM ')}
                </div >
                <div className={styles.list_item}>
                   ססס: {moment(new Date(basicZmanim.BainHasmashosYereim16Point875Minutes)).format(' HH:MM ')}
                </div >
                <div className={styles.list_item}>
                   ססס: {moment(new Date(basicZmanim.BainHasmashosYereim2Point1Degrees)).format(' HH:MM ')}
                </div >
                <div className={styles.list_item}>
                   ססס: {moment(new Date(basicZmanim.BainHasmashosYereim13Point5Minutes)).format(' HH:MM ')}
                </div >
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