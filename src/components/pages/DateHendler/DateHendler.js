import React, { useEffect, useState } from 'react';
import styles from "./DateHendler.module.scss";
import { connect } from 'react-redux';
import Hebcal from "hebcal";
import {
    HebrewDateFormatter,
} from 'kosher-zmanim';
import moment from 'moment';
import HebCalPicker from '../../templates/HebCalPicker/HebCalPicker';
import GetTime from '../../templates/GetTime/GetTime';
import { setTimeState } from '../../../states/date/data.action';

const DateHendler = props => {

    const myDate = props.myDate.date;
    const location = props.location;

    const [date, setDate] = useState(myDate);
    const [hebDate, setHebDate] = useState(null);
    const [hebDateFomat, setHebDateFomat] = useState('');

    const hebcal = new Hebcal.HDate(myDate);
    hebcal.setLocation(+location.latitude, +location.longitude);

    console.log('****date*****');
    console.log(date);
    console.log(hebDate);
    useEffect(() => {
        if (myDate.getTime() !== date.getTime()) {
            setDate(myDate);
        };
    }, [myDate]);

    useEffect(() => {
        if (hebDate) {
            let strDate = hebDate.greg();
            strDate = new Date(strDate);
            if (strDate.getFullYear() !== date.getFullYear() && strDate.getFullYear() > 0) {
                setDate(theDate => {
                    theDate.setFullYear(strDate.getFullYear());
                    return theDate;
                });
            };
            if (strDate.getMonth() !== date.getMonth()) {
                setDate(theDate => {
                    theDate.setMonth(strDate.getMonth());
                    return theDate;
                });
            };
            if (strDate.getDate() !== date.getDate()) {
                setDate(theDate => {
                    theDate.setDate(strDate.getDate());
                    return theDate;
                });
            };
        };
    }, [hebDate]);

    const changeDate = gregDate => {
        const newGregDate = new Date(gregDate);
        console.log(newGregDate);
        if (!newGregDate.getTime()) return;
        if (newGregDate.getTime() !== date.getTime()) {
            setDate(newGregDate);
        };
    };

    const setTime = () => {
        props.setTimeState(date);
    };

    return (
        <div className={styles.continer}>
            <div className={styles.box}>
                <div className={styles.date_information}>
                    <div className={styles.title}>
                        זמן נוכחי
                    </div>
                    <div className={styles.date_information_text}>
                        יום {HebrewDateFormatter.hebrewDaysOfWeek[hebcal.getDay()]} {hebcal.toString('h')}
                    </div>
                    <div className={styles.date_information_text}>
                        {moment(myDate).format('DD/MM/YYYY HH:mm')}
                    </div>
                    <div className={styles.date_information_text}>
                        פרשת {hebcal.getSedra('h')}
                    </div>
                </div>
                <div className={styles.date_box}>
                    <HebCalPicker
                        setHebDate={setHebDate}
                        setHebDateFomat={setHebDateFomat}
                        editHebDate={null}
                        yahrzeitId={null}
                        changeDate={date}
                    />
                </div >
                <GetTime
                    setTime={changeDate}
                    changeDate={date}
                />
                <div className={styles.but_continer}>
                    <div onClick={() => setTime()} className={`${styles.button} blue-but`}>
                        החל תאריך
                    </div >
                </div >
            </div >
        </div >
    );
};


const mapStateToProps = state => {
    return {
        location: state.location,
        myDate: state.date,
    }
}
export default connect(mapStateToProps, { setTimeState })(DateHendler);