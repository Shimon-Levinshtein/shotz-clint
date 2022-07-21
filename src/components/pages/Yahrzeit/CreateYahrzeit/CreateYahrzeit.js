import React, { useEffect, useState } from 'react';
import styles from "./CreateYahrzeit.module.scss";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReactJewishDatePicker, BasicJewishDay } from "react-jewish-datepicker";
// import Hebcal from "hebcal";

const CreateYahrzeit = props => {
//     var gregyear = new Hebcal.GregYear();
// console.log(gregyear);
    const navigate = useNavigate();

    const [basicJewishDay, setBasicJewishDay] = useState(null);
    const [jewishYear, setJewishYear] = useState('3760');
console.log(basicJewishDay);
    useEffect(() => {
        if (basicJewishDay) {
            setJewishYear(basicJewishDay?.jewishDateStrHebrew.split(' ')[2])
        }
    }, [basicJewishDay]);
    const userData = props.userData;
    if (!userData.isLogin) navigate('/');
    const basicJewishDate = {
        day: 13,
        monthName: "Elul",
        year: jewishYear
      };
    //   console.log(basicJewishDate);
    return (
        <div className={styles.continer}>

            <div className={styles.box}>
            <div className={styles.input_box}>
                <libel>בחירת תאריך</libel>
                <ReactJewishDatePicker
                    // value={new Date()}
                    value={basicJewishDate}
                    isHebrew
                    // isRange={true}
                    onClick={(day) => {
                        setBasicJewishDay(day);
                    }}
                />
            </div >
            <div className={styles.input_box}>
                <libel>בחירת תאריך</libel>
                <input value={jewishYear} onChange={e => setJewishYear(e.target.value)}/>
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
export default connect(mapStateToProps, {})(CreateYahrzeit);