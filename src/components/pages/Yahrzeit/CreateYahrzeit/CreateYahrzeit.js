import React, { useState } from 'react';
import styles from "./CreateYahrzeit.module.scss";
import { connect } from 'react-redux';
import HebCalPicker from './HebCalPicker/HebCalPicker';
import { createYahrzeit } from '../../../../actions/yahrzeit';

const CreateYahrzeit = props => {

    const [hebDate, setHebDate] = useState('');
    const [hebDateFomat, setHebDateFomat] = useState('');
    const [name, setName] = useState('');
    const [comments, setComments] = useState('');
console.log(hebDate);
    const saveYahrzeit = () => {
        props.createYahrzeit({
            name: name,
            hebDate: hebDate,
            hebDateFomat: hebDateFomat,
            comments: comments,
        })
    };
    return (
        <div className={styles.continer}>

            <div className={styles.box}>
                <div dir='rtl' className={styles.name_box}>
                    <label>שם הצדיק</label>
                    <input value={name} onChange={e => setName(e.target.value)} />
                </div >
                <hr />
                <div className={styles.date_box}>
                    <HebCalPicker setHebDate={setHebDate} setHebDateFomat={setHebDateFomat} />
                </div >
                <hr />
                <div dir='rtl' className={styles.name_box}>
                    <label>הערות</label>
                    <textarea value={comments} onChange={e => setComments(e.target.value)} />
                </div >
                <hr />
                <div dir='rtl' className={styles.buttons_box}>
                    <div onClick={() => saveYahrzeit()} className={`${styles.button} regular-bottom`}>
                        לשמור יארצייט
                    </div >
                </div >
            </div >
        </div >

    );
};


const mapStateToProps = state => {
    return {
        userData: state.user,
    }
};
export default connect(mapStateToProps, { createYahrzeit })(CreateYahrzeit);