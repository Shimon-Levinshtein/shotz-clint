import React, { useState } from 'react';
import styles from "./ScreenKosherZmanim.module.scss";
import { connect } from 'react-redux';
import Hebcal from 'hebcal';
import * as KosherZmanim from "kosher-zmanim";
import moment from 'moment';
import Spinner from '../../templates/Spinner/Spinner';
import SpinnerOnly from '../../templates/SpinnerOnly/SpinnerOnly';


const ScreenKosherZmanim = props => {

    const year = new Hebcal();
    const dayHe = new Hebcal.HDate().toString('h');
    console.log('day//////////');
    console.log(dayHe);

    const [thereIsLocation, setThereIsLocation] = useState(false);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setThereIsLocation(true);
        year.setLocation(position.coords.latitude, position.coords.longitude);
    });
    const options = {
        date: new Date(),
        timeZoneId: '',
        // locationName?: string,
        latitude: latitude,
        longitude: longitude,
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
            {thereIsLocation ? <SpinnerOnly /> :
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
            }
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
            <div className={styles.xxx}>
                {dayHe}
            </div >
        </div >
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(ScreenKosherZmanim);