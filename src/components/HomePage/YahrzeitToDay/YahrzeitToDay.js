import React, { useEffect } from 'react';
import styles from "./YahrzeitToDay.module.scss";
import { connect } from 'react-redux';
import Hebcal from 'hebcal';
import { getYahrzeitsByDate } from '../../../states/todaysYahrzeits/todaysYahrzeits.action';

const YahrzeitToDay = props => {

    const location = props.location;
    const todaysYahrzeits = props.todaysYahrzeits;
    console.log(todaysYahrzeits);
    useEffect(() => {
        const hebcal = new Hebcal.HDate(props.date.date);
        if (hebcal) {
            hebcal.setLocation(+location.latitude, +location.longitude);
            props.getYahrzeitsByDate({ day: hebcal.day, month: hebcal.month });
        };
    }, [props.date]);

    if (!todaysYahrzeits) return null;

    return (
        <div className={styles.continer}>
            {todaysYahrzeits.map((item, index) => (
                <div item={index} className={styles.neme}>
                    {item.name}
                </div >
            ))}
        </div >
    );
};


const mapStateToProps = state => {
    return {
        userData: state.user,
        date: state.date,
        location: state.location,
        todaysYahrzeits: state.todaysYahrzeits,
    }
}
export default connect(mapStateToProps, { getYahrzeitsByDate })(YahrzeitToDay);