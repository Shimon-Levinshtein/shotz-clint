import React from 'react';
import styles from "./ManagLocation.module.scss";
import { connect } from 'react-redux';
import ScreenLocaton from '../../HomePage/ScreenLocaton/ScreenLocaton';

const ManagLocation = props => {



    return (
        <div className={styles.continer}>
            <ScreenLocaton />
        </div >
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {})(ManagLocation);