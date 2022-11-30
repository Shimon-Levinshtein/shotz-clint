import React, { useEffect } from 'react';
import styles from "./ListYahrzeits.module.scss";
import { connect } from 'react-redux';
import { getAllYahrzeits } from '../../../../states/listYahrzeits/listYahrzeits.action';

const ListYahrzeits = props => {

    const listYahrzeits = props.listYahrzeits;

    useEffect(() => {
        if (!listYahrzeits) {
            props.getAllYahrzeits();
        };
    }, [listYahrzeits])

    return (
        <div className={styles.continer}>
            ListYahrzeits
        </div >
    );
};


const mapStateToProps = state => {
    return {
        listYahrzeits: state.listYahrzeits,
    }
};
export default connect(mapStateToProps, {
    getAllYahrzeits,
})(ListYahrzeits);