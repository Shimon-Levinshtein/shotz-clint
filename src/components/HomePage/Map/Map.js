import React, { useEffect, useState } from 'react';
import styles from "./Map.module.scss";
import { connect } from 'react-redux';
import ButtonClose from '../../templates/ButtonClose/ButtonClose';



const Map = props => {

    const location = props.location;
    

    return (
        <div className={styles.continer}>
            <div className={styles.box}>
                <iframe src={`https://maps.google.com/maps?q=${location.latitude}, ${location.longitude}&z=15&output=embed`}></iframe>
                {/* <iframe src={`https://maps.google.com/maps?q=32.0780324, 34.8420265&z=15&output=embed`} width="360" height="270" frameborder="0" ></iframe> */}
            </div >
        </div >
    );
};




const mapStateToProps = state => {
    return {
        location: state.location,
    }
}
export default connect(mapStateToProps, {})(Map);