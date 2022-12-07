import React, { useState } from 'react';
import styles from "./CreateYahrzeit.module.scss";
import { connect } from 'react-redux';
import HebCalPicker from './HebCalPicker/HebCalPicker';
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { createYahrzeit } from '../../../../states/listYahrzeits/listYahrzeits.action';

const CreateYahrzeit = props => {

    const navigate = useNavigate();

    const [hebDate, setHebDate] = useState('');
    const [hebDateFomat, setHebDateFomat] = useState('');
    const [name, setName] = useState('');
    const [comments, setComments] = useState('');

    const saveYahrzeit = () => {
        props.createYahrzeit({
            name: name,
            hebDate: hebDate,
            hebDateFomat: hebDateFomat,
            comments: comments,
        }, navigate);
    };
    return (
        <div className={styles.continer}>

            <div className={styles.box}>
                <div className={styles.back} onClick={() => navigate('/yahrzeit')}>
                    <BsArrowRight />
                </div >
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
                    <div onClick={() => saveYahrzeit()} className={`${styles.button} blue-but`}>
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