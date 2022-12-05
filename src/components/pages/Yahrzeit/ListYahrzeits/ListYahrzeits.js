import React, { useEffect } from 'react';
import styles from "./ListYahrzeits.module.scss";
import { connect } from 'react-redux';
import { getAllYahrzeits } from '../../../../states/listYahrzeits/listYahrzeits.action';

const ListYahrzeits = props => {

    const listYahrzeits = props.listYahrzeits;
    console.log(listYahrzeits);
    useEffect(() => {
        if (!listYahrzeits) {
            props.getAllYahrzeits();
        };
    }, [listYahrzeits])

    if (!listYahrzeits) return <h4 dir='auto'>טוען רשימה...</h4>
    return (
        <div className={styles.continer}>
            <div className={styles.title}>
                רשימת יארצייטים
            </div >
            <div className={styles.list_box}>
                {listYahrzeits.map((item, index) => (
                    <div className={styles.list_item_box}>
                        <div className={`${styles.but} blue-but`}>
                            ערוך
                        </div >
                        <div className={`${styles.but} red-but`}>
                            מחק
                        </div >
                        <div className={styles.item_date}>
                            {item.hebDateFomat}
                        </div >
                        <div className={styles.item_name}>
                            {item.name}
                        </div >
                    </div >
                ))}
            </div >
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