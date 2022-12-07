import React, { useEffect, useState, useCallback } from 'react';
import styles from "./ListYahrzeits.module.scss";
import { connect } from 'react-redux';
import { deleteYahrzeitById, getAllYahrzeits } from '../../../../states/listYahrzeits/listYahrzeits.action';
import { useLocation } from 'react-router-dom';

const ListYahrzeits = props => {

    const location = useLocation();

    const listYahrzeits = props.listYahrzeits;

    const [idYahrzeit] = useState(location.state?.idYahrzeit ? location.state.idYahrzeit : null);

    useEffect(() => {
        if (!listYahrzeits) {
            props.getAllYahrzeits();
        };
    }, [listYahrzeits]);

    const vrapper = useCallback(node => {
        if (node) {
            node.scrollIntoView({ behavior: "smooth", block: "end" });
        };
    }, [idYahrzeit]);

    const deleteYahrzeits = id => {
        alert.show('sss');
        props.deleteYahrzeitById(id);
    };

    if (!listYahrzeits) return <h4 dir='auto'>טוען רשימה...</h4>;

    return (
        <div className={styles.continer}>
            <div className={styles.title}>
                רשימת יארצייטים ({Object.keys(listYahrzeits).length})
            </div >
            <div className={styles.list_box}>
                {listYahrzeits.map((item, index) => (
                    <div
                        key={index}
                        className={styles.list_item_box}
                        ref={idYahrzeit === item.id ? vrapper : null}
                        style={idYahrzeit === item.id ? { backgroundColor: '#8cd5ff' } : {}}
                    >
                        <div className={`${styles.but} blue-but`}>
                            ערוך
                        </div >
                        <div className={`${styles.but} red-but`} onClick={() => deleteYahrzeits(item.id)}>
                        {/* <div className={`${styles.but} red-but`} onClick={() => props.deleteYahrzeitById(item.id)}> */}
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
    deleteYahrzeitById,
})(ListYahrzeits);