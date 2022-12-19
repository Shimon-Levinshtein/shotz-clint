import React, { useState } from 'react';
import styles from "./CreateYahrzeit.module.scss";
import { connect } from 'react-redux';
import HebCalPicker from './HebCalPicker/HebCalPicker';
import { BsArrowRight } from "react-icons/bs";
import { useNavigate, useLocation } from 'react-router-dom';
import { createYahrzeit, editYahrzeit } from '../../../../states/listYahrzeits/listYahrzeits.action';
import { useEffect } from 'react';

const CreateYahrzeit = props => {

    const navigate = useNavigate();
    const location = useLocation();

    const [hebDate, setHebDate] = useState('');
    const [editHebDate, setEditHebDate] = useState(location.state ? location.state?.data?.hebDate : null);
    const [hebDateFomat, setHebDateFomat] = useState('');
    const [name, setName] = useState('');
    const [comments, setComments] = useState('');
    const [yahrzeitId, setYahrzeitId] = useState(location.state ? location.state.yahrzeitId : null);

    useEffect(() => {
        if (location.state) {
            const data = location.state.data;
            if (data) {
                setName(data.name);
                setComments(data.comments);
                setHebDateFomat(data.hebDateFomat);
                setHebDate(data.hebDate);
                setEditHebDate(data.hebDate);
            };
        } else {
            setYahrzeitId(null);
        };
    }, [location]);

    const saveYahrzeit = () => {
        if (yahrzeitId) {
            props.editYahrzeit({
                id: yahrzeitId,
                name: name,
                hebDate: hebDate,
                hebDateFomat: hebDateFomat,
                comments: comments,
            }, navigate);
        } else {
            props.createYahrzeit({
                name: name,
                hebDate: hebDate,
                hebDateFomat: hebDateFomat,
                comments: comments,
            }, navigate);
        };
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
                    <HebCalPicker
                        setHebDate={setHebDate}
                        setHebDateFomat={setHebDateFomat}
                        editHebDate={editHebDate}
                        yahrzeitId={yahrzeitId}
                    />
                </div >
                <hr />
                <div dir='rtl' className={styles.name_box}>
                    <label>הערות</label>
                    <textarea value={comments} onChange={e => setComments(e.target.value)} />
                </div >
                <hr />
                <div dir='rtl' className={styles.buttons_box}>
                    <div onClick={() => saveYahrzeit()} className={`${styles.button} blue-but`}>
                        {yahrzeitId ? 'לשמור שינויים' : 'לשמור יארצייט'}
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
export default connect(mapStateToProps, { createYahrzeit, editYahrzeit })(CreateYahrzeit);