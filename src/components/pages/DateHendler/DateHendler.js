import React, { useState } from 'react';
import styles from "./DateHendler.module.scss";
import { connect } from 'react-redux';
import Hebcal from "hebcal";
import {
    HebrewDateFormatter,
} from 'kosher-zmanim';
import moment from 'moment';
import HebCalPicker from '../../templates/HebCalPicker/HebCalPicker';
import GetTime from '../../templates/GetTime/GetTime';

const DateHendler = props => {

    const myDate = props.myDate.date;
    const location = props.location;

    const [date, setDate] = useState(new Date());
    const [hebDate, setHebDate] = useState('');
    const [hebDateFomat, setHebDateFomat] = useState('');
    const [value, onChange] = useState('10:00');

    const hebcal = new Hebcal.HDate(myDate);
    hebcal.setLocation(+location.latitude, +location.longitude);

    const setTime = () => {
        console.log(hebDate);
        console.log(hebDate.greg());
        hebDate.getGregMonthObject(new Date());
        console.log(hebDate.greg());
        console.log(hebDate.holidays());
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
                        {moment(myDate).format('DD/MM/YYYY ')}
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
                    />
                </div >
                <GetTime value={date} setTime={setDate} />
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
export default connect(mapStateToProps, {})(DateHendler);