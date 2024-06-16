import React, { useRef } from 'react';
import styles from "./Header.module.scss";
import { connect } from 'react-redux';
import { GiHamburgerMenu } from "react-icons/gi";
import SideMenu from '../SideMenu/SideMenu';
import ButtonClose from '../templates/ButtonClose/ButtonClose';
import {
    HebrewDateFormatter,
} from 'kosher-zmanim';
import moment from 'moment';
import Hebcal from "hebcal";

const Header = props => {

    const sideMenuRef = useRef(null);
    const location = props.location;

    const myDate = props.myDate.date;
    const hebcal = new Hebcal.HDate(myDate);
    hebcal.setLocation(+location.latitude, +location.longitude);

    const heandlerMenu = open => {
        if (sideMenuRef.current) {
            if (open) {
                sideMenuRef.current.style.transform = 'translateX(0px)';
            } else {
                sideMenuRef.current.style.transform = 'translateX(-140vw)';
            }
        }
    };

    return (
        <div className={styles.continer}>
            <div ref={sideMenuRef} className={styles.side_menu_box}>
                <div className={styles.side_menu_box_right}>
                    <div className={styles.side_menu_close}>
                        <ButtonClose close={heandlerMenu} />
                    </div>
                    <SideMenu heandlerMenu={heandlerMenu} />
                </div>
                <div onClick={() => heandlerMenu(false)} className={styles.side_menu_box_left} />
            </div>
            <div onClick={() => heandlerMenu(true)} className={styles.menu}>
                <GiHamburgerMenu />
            </div>
            <div className={styles.date_information}>
                <div className={styles.parasha}>
                    פרשת {hebcal.getSedra('h')}
                </div>
                <div className={styles.date}>
                    יום {HebrewDateFormatter.hebrewDaysOfWeek[hebcal.getDay()]} {hebcal.toString('h')} ({moment(myDate).format('DD/MM/YYYY ')})
                </div>
                {/* <ClockAnalog/> */}
            </div>
            <div className={styles.besad}>
                בס"ד
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        location: state.location,
        myDate: state.date,
    }
}
export default connect(mapStateToProps, {})(Header);