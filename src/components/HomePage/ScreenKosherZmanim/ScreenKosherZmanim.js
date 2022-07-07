import React, { useEffect, useState } from 'react';
import styles from "./ScreenKosherZmanim.module.scss";
import { connect } from 'react-redux';
// import Hebcal from 'hebcal';
import {
    Calendar,
    Daf,
    getZmanimJson,
    HebrewDateFormatter,
    JewishCalendar,
    JewishDate,
    Options,
    YerushalmiYomiCalculator,
    YomiCalculator,
    Zman,
    Parsha,
} from 'kosher-zmanim';
import * as KosherZmanim from "kosher-zmanim";
import moment from 'moment';
import SpinnerOnly from '../../templates/SpinnerOnly/SpinnerOnly';


const ScreenKosherZmanim = props => {
    const today = new Date();
    // today.setDate(today.getDate() + 1);
    const jewishCalendar = new JewishCalendar(today);
    const jewishDate = new JewishDate(today);
    // console.log(jewishCalendar.getDayOfWeek());

    // console.log(jewishDate);
    // const year = new Hebcal();
    // const hDate = new Hebcal.HDate();
    // const dayHe = hDate.toString('h');
    // const month = new Hebcal.Month(hDate.day, hDate.year);
    // console.log('dayHe//////////');
    // console.log(year.getDay(hDate));

    const [thereIsLocation, setThereIsLocation] = useState(false);
    const [latitude, setLatitude] = useState('32.085993');
    const [longitude, setLongitude] = useState('34.8299585');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setThereIsLocation(true);
            // year.setLocation(position.coords.latitude, position.coords.longitude);
        });
    }, []);
    const options = {
        // date: new Date(),
        date: '2022-07-07T12:04:15.088Z',
        // timeZoneId: '',
        // locationName?: string,
        latitude: latitude,
        longitude: longitude,
        // elevation?: number = 0,
        complexZmanim: true,
        timeZoneId: "Asia/Jerusalem",
        locationName: "Asia/Jerusalem",
        elevation: 0,
    }

    const zmanim = KosherZmanim.getZmanimJson(options);
    const basicZmanim = zmanim.Zmanim;
    // const basicZmanim = {};
    // console.log('zmanim');
    console.log(basicZmanim);
    return (
        <div className={styles.continer}>
            <iframe src={`https://maps.google.com/maps?q=${latitude}, ${longitude}&z=15&output=embed`} width="360" height="270" frameborder="0" ></iframe>
            {!thereIsLocation ? <SpinnerOnly /> :
                <div className={styles.list_of_zmanim}>
                    <div className={styles.list_item}>
                        עלות השחר: {moment(new Date(basicZmanim.AlosHashachar)).format(' HH:mm:ss ')}
                    </div >
                    <div className={styles.list_item}>
                        זריחה: {moment(new Date(basicZmanim.Sunrise)).format(' HH:mm:ss ')}
                    </div >
                    <div className={styles.list_item}>
                        סוף זמן שמע מג"א: {moment(new Date(basicZmanim.SofZmanShmaMGA)).format(' HH:mm:ss ')}
                    </div >
                    <div className={styles.list_item}>
                        סוף זמן שמע גר"א/בעל התניא: {moment(new Date(basicZmanim.SofZmanShmaGRA)).format(' HH:mm:ss ')}
                    </div >
                    <div className={styles.list_item}>
                        סוף זמן תפילה מג"א: {moment(new Date(basicZmanim.SofZmanTfilaMGA)).format(' HH:mm:ss ')}
                    </div >
                    <div className={styles.list_item}>
                        סוף זמן תפלה בעל התניא /גר"א: {moment(new Date(basicZmanim.SofZmanTfilaGRA)).format(' HH:mm:ss ')}
                    </div >
                    <div className={styles.list_item}>
                        בין השמשות (18 דקות): {moment(new Date(basicZmanim.BainHasmashosYereim18Minutes)).format(' HH:mm:ss ')}
                    </div >
                    <div className={styles.list_item}>
                        שקיעת החמה: {moment(new Date(basicZmanim.Sunset)).format(' HH:mm:ss ')}
                    </div >
                    <div className={styles.list_item}>
                        צאת הכוכבים גאונים (4 נקודות 7 מעלות): {moment(new Date(basicZmanim.TzaisGeonim4Point37Degrees)).format(' HH:mm:ss ')}
                    </div >
                    <div className={styles.list_item}>
                        צאת הכוכבים בעל התניא: {moment(new Date(basicZmanim.TzaisBaalHatanya)).format(' HH:mm:ss ')}
                    </div >
                    {jewishCalendar.getDayOfWeek() == 6 && <div className={styles.list_item}>
                        הדלקת נרות: {moment(new Date(basicZmanim.CandleLighting)).format(' HH:mm:ss ')}
                    </div >}
                </div >
            }
            <div className={styles.xxx}>
                {/* {dayHe} */}
            </div >
            <div className={styles.xxx}>
                {Object.keys(basicZmanim).map(key => (
                    <>
                        {moment(new Date(basicZmanim[key])).format() !== 'Invalid date' && <div className={styles.xxx}>
                            {key}: {moment(new Date(basicZmanim[key])).format(' h:mm:ss a')}
                        </div >
                        }
                    </>
                ))}
            </div >

        </div >
    );
};




// TzaisGeonim3Point65Degrees: 8:05:31 pm
// TzaisGeonim3Point676Degrees: 8:05:39 pm
// TzaisGeonim3Point7Degrees: 8:05:47 pm
// TzaisGeonim3Point8Degrees: 8:06:20 pm
// TzaisGeonim4Point37Degrees: 8:09:26 pm
// TzaisGeonim4Point61Degrees: 8:10:44 pm
// TzaisGeonim4Point8Degrees: 8:11:47 pm
// TzaisGeonim5Point88Degrees: 8:17:43 pm
// TzaisGeonim5Point95Degrees: 8:18:06 pm
// TzaisGeonim6Point45Degrees: 8:20:52 pm
// TzaisGeonim7Point083Degrees: 8:24:24 pm
// TzaisGeonim7Point67Degrees: 8:27:41 pm
// TzaisGeonim8Point5Degrees: 8:32:21 pm
// TzaisGeonim9Point3Degrees: 8:36:54 pm
// TzaisGeonim9Point75Degrees: 8:39:28 pm

const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(ScreenKosherZmanim);