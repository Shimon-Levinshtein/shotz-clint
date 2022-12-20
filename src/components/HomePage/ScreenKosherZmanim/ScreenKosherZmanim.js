import React, { useEffect, useState } from 'react';
import styles from "./ScreenKosherZmanim.module.scss";
import { connect } from 'react-redux';
import Hebcal from "hebcal";
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
import ClockAnalog from './ClockAnalog/ClockAnalog';


const ScreenKosherZmanim = props => {

    const myDate = props.myDate.date;
    const location = props.location;
    const jewishCalendar = new JewishCalendar(myDate);
    const hebrewDateFormatter = new HebrewDateFormatter();

    const hebcal = new Hebcal.HDate(myDate);
    hebcal.setLocation(+location.latitude, +location.longitude);


    const options = {
        date: myDate,
        latitude: location.latitude,
        longitude: location.longitude,
        complexZmanim: true,
        timeZoneId: "Asia/Jerusalem",
        locationName: "Asia/Jerusalem",
        elevation: 0,
    }
    
    const zmanim = KosherZmanim.getZmanimJson(options);
    const basicZmanim = zmanim.Zmanim;
    return (
        <div className={styles.continer}>
            <div className={styles.date_information}>
                <div className={styles.date_information_text}>
                    יום {HebrewDateFormatter.hebrewDaysOfWeek[hebcal.getDay()]} {hebcal.toString('h')} ({moment(myDate).format('DD/MM/YYYY ')})
                </div>
                <div className={styles.date_information_text}>
                    פרשת {hebcal.getSedra('h')} 
                </div>
                {/* <ClockAnalog/> */}
            </div>
            {/* <SpinnerOnly />  */}

            <div className={styles.list_of_zmanim}>
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.AlosHashachar)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        עלות השחר:
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.Sunrise)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        זריחה:
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.SofZmanShmaMGA)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        סוף זמן שמע מג"א:
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.SofZmanShmaGRA)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        סוף זמן שמע גר"א/בעל התניא:
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.SofZmanTfilaMGA)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        סוף זמן תפילה מג"א:
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.SofZmanTfilaGRA)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        סוף זמן תפלה בעל התניא /גר"א:
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.BainHasmashosYereim18Minutes)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        בין השמשות (18 דקות):
                    </div>
                </div >
                {jewishCalendar.getDayOfWeek() == 6 && <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.CandleLighting)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        הדלקת נרות:
                    </div>
                </div >}
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.Sunset)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        שקיעת החמה:
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.TzaisGeonim4Point37Degrees)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        צאת הכוכבים גאונים (4 נקודות 7 מעלות):
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.TzaisBaalHatanya)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        צאת הכוכבים בעל התניא:
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.Tzais72)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        צאת הכוכבים ר"ת (72):
                    </div>
                </div >
            </div >

            <div className={styles.xxx}>
                {/* {dayHe} */}
            </div >
            {/* <div className={styles.xxx}>
                {Object.keys(basicZmanim).map(key => (
                    <>
                        {moment(new Date(basicZmanim[key])).format() !== 'Invalid date' && <div className={styles.xxx}>
                            {key}: {moment(new Date(basicZmanim[key])).format(' h:mm:ss a')}
                        </div >
                        }
                    </>
                ))}
            </div > */}

        </div >
    );
};




const mapStateToProps = state => {
    return {
        location: state.location,
        myDate: state.date,
    }
}
export default connect(mapStateToProps, {})(ScreenKosherZmanim);