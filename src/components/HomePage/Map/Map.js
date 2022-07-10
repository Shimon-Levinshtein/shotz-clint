import React, { useEffect, useState } from 'react';
import styles from "./Map.module.scss";
import { connect } from 'react-redux';
import ButtonClose from '../../templates/ButtonClose/ButtonClose';



const Map = props => {
  

    const [latitude, setLatitude] = useState('32.085993');
    const [longitude, setLongitude] = useState('34.8299585');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }, []);
  
  
    return (
        <div className={styles.continer}>
        <div className={styles.box}>
            <ButtonClose close={props.setOpenMap}/>
            <iframe src={`https://maps.google.com/maps?q=${latitude}, ${longitude}&z=15&output=embed`}></iframe>
            {/* <iframe src={`https://maps.google.com/maps?q=32.0780324, 34.8420265&z=15&output=embed`} width="360" height="270" frameborder="0" ></iframe> */}
        </div >
        </div >
    );
};




const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(Map);