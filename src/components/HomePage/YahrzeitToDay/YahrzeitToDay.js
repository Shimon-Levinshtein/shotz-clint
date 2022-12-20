import React, { useEffect } from 'react';
import styles from "./YahrzeitToDay.module.scss";
import { connect } from 'react-redux';
import { getYahrzeitsByDate } from '../../../states/listYahrzeits/listYahrzeits.action';
import Hebcal from 'hebcal';


const YahrzeitToDay = props => {

    const location = props.location;

    useEffect(() => {
        const hebcal = new Hebcal.HDate(props.date.date);
        if (hebcal) {
            hebcal.setLocation(+location.latitude, +location.longitude);
            props.getYahrzeitsByDate({ day: hebcal.day, month: hebcal.month });
        };
    }, [props.date]);

    return (
        <div className={styles.continer}>
            YahrzeitToDay
        </div >
    );
};


const mapStateToProps = state => {
    return {
        userData: state.user,
        date: state.date,
        location: state.location,
    }
}
export default connect(mapStateToProps, { getYahrzeitsByDate })(YahrzeitToDay);