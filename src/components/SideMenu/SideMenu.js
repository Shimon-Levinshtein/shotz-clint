import React, { useState } from 'react';
import styles from "./SideMenu.module.scss";
import { connect } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { openScreen } from '../../actions/screenHandle';



const SideMenu = props => {

    const userData = props.userData;
    const navigate = useNavigate();

    const linkActive = ({ isActive }) => {
        props.heandlerMenu(false);
        return isActive ? `${styles.menu_button} ${styles.menu_button_active}` : styles.menu_button
    };
    const logout = () => {
        props.heandlerMenu(false);
        auth.signOut()
            .then(() => {
            }).catch(error => {
                console.log(error);
                // setErrorMessage(error.message);
                // errMessageService.showErrMessage(error.message);
            });
        props.openScreen({
            screenName: 'spinner',
            screenDataName: 'spinnerData',
            screenData: '',
        });
    };
    return (
        <div className={styles.continer}>
            <div className={styles.top}>
                <NavLink
                    dir='auto'
                    to="/"
                    className={linkActive}
                >
                    דף הבית
                </NavLink>
                <NavLink
                    dir='auto'
                    to="/manag-location"
                    className={linkActive}
                >
                    ניהול מיקום
                </NavLink>
                {userData.isLogin && <NavLink
                    dir='auto'
                    to="/yahrzeit"
                    className={linkActive}
                >
                    ניהול יארצייט
                </NavLink>}
                {userData.isLogin && <NavLink
                    dir='auto'
                    to="/date-hendler"
                    className={linkActive}
                >
                    ניהול זמן
                </NavLink>}
            </div >
            <div className={styles.bottom}>
                <div className={styles.user_status}>
                    {userData.isLogin ?
                        <div onClick={() => logout()} className={styles.button_login}>
                            התנתק
                        </div > :
                        <div onClick={() => navigate('login')} className={styles.button_login}>
                            התחבר
                        </div >
                    }
                </div >
            </div >
        </div >
    );
};


const mapStateToProps = state => {
    return {
        userData: state.user,
    }
}
export default connect(mapStateToProps, { openScreen })(SideMenu);