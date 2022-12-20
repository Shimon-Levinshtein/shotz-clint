import React, { useEffect, useState } from 'react';
import styles from "./HebCalPicker.module.scss";
import { connect } from 'react-redux';
import Hebcal from "hebcal";
import cloneDeep from 'lodash/cloneDeep';

const HebCalPicker = props => {

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [dayInput, setDayInput] = useState('');
    const [monthInput, setMonthInput] = useState('');
    const [yearInput, setYearInput] = useState('');
    const [yearList] = useState([...Array(6001).keys()]);
    const [daysList] = useState([...Array(31).keys()]);
    const [hebDate, setHebDate] = useState(new Hebcal.HDate());

    useEffect(() => {
        if (props.yahrzeitId && props.editHebDate) {
            if (props.editHebDate.year) setHebDate(cloneDeep(hebDate.setFullYear(props.editHebDate.year)));
            if (props.editHebDate.month) setHebDate(cloneDeep(hebDate.setMonth(props.editHebDate.month)));
            if (props.editHebDate.day) setHebDate(cloneDeep(hebDate.setDate(props.editHebDate.day)));
        };
    }, [props.yahrzeitId]);

    useEffect(() => {
        props.setHebDate(hebDate);
        props.setHebDateFomat(hebDate.toString('h'));
    }, [hebDate]);

    useEffect(() => {
        if (year) setHebDate(cloneDeep(hebDate.setFullYear(year)));
    }, [year]);

    useEffect(() => {
        if (month) setHebDate(cloneDeep(hebDate.setMonth(month)));
    }, [month]);

    useEffect(() => {
        if (day) setHebDate(cloneDeep(hebDate.setDate(day)));
    }, [day]);

    const monthList = [
        'Nisan',
        'Iyyar',
        'Sivan',
        'Tamuz',
        'Av',
        'Elul',
        'Tishrei',
        'Cheshvan',
        'Kislev',
        'Tevet',
        'Shvat',
        'Adar 1',
        'Adar 2',
        'ניסן',
        'אייר',
        'סיון',
        'תמוז',
        'אב',
        'אלול',
        'תשרי',
        'חשון',
        'כסלו',
        'טבת',
        'שבט',
        'אדר 1',
        'אדר 2',
    ];

    return (
        <div className={styles.continer}>
            <div className={styles.left}>
                <div className={styles.display_h_date}>
                    <h3>תאריך הנבחר</h3>
                    <p>{hebDate.toString('h')}</p>
                </div >
            </div >
            <div dir='rtl' className={styles.right}>
                <div className={styles.select_h_date}>
                    <label>בחירת שנה</label>
                    <input value={yearInput} onChange={e => setYearInput(e.target.value)} />
                    {yearInput && <div className={styles.list_h_date}>
                        {yearList
                            .filter(i => i.toString().includes(yearInput))
                            .map((item, index) => (
                                <div onClick={() => {
                                    setYear(item);
                                    setYearInput('');
                                }} key={index} className={styles.item_list_h_date}>
                                    {item}
                                </div >
                            ))}
                    </div >}
                </div >
                <div className={styles.select_h_date}>
                    <label>בחירת חודש</label>
                    <input value={monthInput} onChange={e => setMonthInput(e.target.value)} />
                    {monthInput && <div className={styles.list_h_date}>
                        {monthList
                            .filter(i => i.toString().includes(monthInput))
                            .map((item, index) => (
                                <div onClick={() => {
                                    setMonth(item);
                                    setMonthInput('');
                                }} key={index} className={styles.item_list_h_date}>
                                    {item}
                                </div >
                            ))}
                    </div >}
                </div >
                <div className={styles.select_h_date}>
                    <label>בחירת יום</label>
                    <input value={dayInput} onChange={e => setDayInput(e.target.value)} />
                    {dayInput && <div className={styles.list_h_date}>
                        {daysList
                            .filter(i => i.toString().includes(dayInput))
                            .map((item, index) => (
                                <div onClick={() => {
                                    setDay(item);
                                    setDayInput('');
                                }} key={index} className={styles.item_list_h_date}>
                                    {item}
                                </div >
                            ))}
                    </div >}
                </div >
            </div >
        </div >
    );
};


const mapStateToProps = state => {
    return {
        userData: state.user,
    }
};
export default connect(mapStateToProps, {})(HebCalPicker);