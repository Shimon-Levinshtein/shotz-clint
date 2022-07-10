import React, { useState } from 'react';
import styles from "./HomePage.module.scss";
import { connect } from 'react-redux';
import ScreenKosherZmanim from './ScreenKosherZmanim/ScreenKosherZmanim';
import Map from './Map/Map';
// import { IoLocationOutline } from "react-icons/io";
// import { IconName } from "react-icons/io";
import { ImLocation } from "react-icons/im";


const HomePage = props => {

    const [openMap, setOpenMap] = useState(false);
    return (
        <div className={styles.continer}>
            <div className={styles.top}>
                <div className={styles.top_right}>
                    <ScreenKosherZmanim />
                </div >
                <div className={styles.top_left}>
                    <div onClick={() => setOpenMap(true)} className={styles.button_map}>
                        <ImLocation/>
                        הצג מיקום נוכחי במפה
                    </div >
                    {openMap && <Map setOpenMap={setOpenMap}/>}
                </div >
            </div >
        </div >

    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(HomePage);