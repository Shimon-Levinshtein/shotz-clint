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

    console.log(KosherZmanim);
    const myDate = props.myDate.date;
    // myDate.setDate(myDate.getDate() + 2);
    const location = props.location;
    const jewishCalendar = new JewishCalendar(myDate);
    // const jewishDate = new JewishDate(myDate);
    const hebrewDateFormatter = new HebrewDateFormatter();
    console.log(HebrewDateFormatter.hebrewDaysOfWeek);
    // console.log(jewishCalendar.getDayOfWeek());

    const hebcal = new Hebcal.HDate(myDate);
    hebcal.setLocation(+location.latitude, +location.longitude);
    console.log(hebcal.getSedra('h'));
    useEffect(() => {
        // console.log(hebcal.getSedra('h'));
        // const year = new Hebcal();
        // const hDate = new Hebcal.HDate();
        // const dayHe = hDate.toString('h');
        // const month = new Hebcal.Month(hDate.day, hDate.year);
        // console.log('dayHe//////////');
        // console.log(year.getDay(hDate));

    }, [])


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
                    ?????? {HebrewDateFormatter.hebrewDaysOfWeek[hebcal.getDay()]} {hebcal.toString('h')} ({moment(myDate).format('DD/MM/YYYY ')})
                </div>
                <div className={styles.date_information_text}>
                    ???????? {hebcal.getSedra('h')} 
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
                        ???????? ????????:
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.Sunrise)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        ??????????:
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.SofZmanShmaMGA)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        ?????? ?????? ?????? ????"??:
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.SofZmanShmaGRA)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        ?????? ?????? ?????? ????"??/?????? ??????????:
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.SofZmanTfilaMGA)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        ?????? ?????? ?????????? ????"??:
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.SofZmanTfilaGRA)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        ?????? ?????? ???????? ?????? ?????????? /????"??:
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.BainHasmashosYereim18Minutes)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        ?????? ???????????? (18 ????????):
                    </div>
                </div >
                {jewishCalendar.getDayOfWeek() == 6 && <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.CandleLighting)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        ?????????? ????????:
                    </div>
                </div >}
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.Sunset)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        ?????????? ????????:
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.TzaisGeonim4Point37Degrees)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        ?????? ?????????????? ???????????? (4 ???????????? 7 ??????????):
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.TzaisBaalHatanya)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        ?????? ?????????????? ?????? ??????????:
                    </div>
                </div >
                <div className={styles.list_item}>
                    <div className={styles.item_time}>
                        {moment(new Date(basicZmanim.Tzais72)).format(' HH:mm:ss ')}
                    </div>
                    <div dir='auto' className={styles.item_text}>
                        ?????? ?????????????? ??"?? (72):
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