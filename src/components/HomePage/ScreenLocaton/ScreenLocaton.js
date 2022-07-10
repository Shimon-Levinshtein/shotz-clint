import React, { useEffect, useState } from 'react';
import styles from "./ScreenLocaton.module.scss";
import { connect } from 'react-redux';
import Map from '../Map/Map';
import { ImLocation } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { listLocations } from './listLocations';



const ScreenLocaton = props => {

    const location = props.location;
    const [openMap, setOpenMap] = useState(false);
    const [openListLocations, setopenListLocations] = useState(false);

    // const listLocations = [

    // ];

    const divListLocations = () => {
        if (openListLocations) {
            return (<div className={styles.list_locations}>
                {listLocations.map((item, index) => (
                    <div key={index} className={styles.list_locations_item}>
                        {item.locationName}
                    </div >
                ))}
            </div >);
        } else {
            return null;
        }
    };

    return (
        <div className={styles.continer}>
            {openMap && <Map setOpenMap={setOpenMap} />}
            <div onClick={() => setOpenMap(true)} className={styles.button}>
                <ImLocation />
                הצג מיקום נוכחי במפה
            </div >
            <div dir='auto' onClick={() => setopenListLocations(!openListLocations)} className={styles.button}>
                בחר מיקום: {location.locationName} <IoIosArrowDown />
                {divListLocations()}
            </div >
        </div >
    );
};




const mapStateToProps = state => {
    return {
        location: state.location,
    }
}
export default connect(mapStateToProps, {})(ScreenLocaton);