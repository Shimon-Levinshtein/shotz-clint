import React, { useState } from 'react';
import styles from "./ResetPassword.module.scss";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { closeScreen, openScreen } from '../../../actions/screenHandle';



const ResetPassword = props => {


    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [sendSucceeded, setSendSucceeded] = useState(false);

    const sendToReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setSendSucceeded(true);
            }).catch(error => {
                props.openScreen({
                    screenName: 'errorMessage',
                    screenDataName: 'errorMessageData',
                    screenData: { text: error.message },
                });
            });
    };
    const close = () => {
        setSendSucceeded(false);
        navigate('/login');
    };
    const emailChange = (e) => {
        setEmailErr('');
        setEmail(e.currentTarget.value);
    };

    return (
        <div className={styles.continer}>
            {sendSucceeded ?
                <div className={styles.box}>
                    <h2>נשלח לך למייל {email} לינק לאיפוס סיסמה</h2>
                    
                    <div onClick={() => close()} className={styles.login_but}>חזור למסך ההתחברות</div>
                </div>
                :
                <div className={styles.box}>
                    <h2>איפוס סיסמה</h2>

                    <div className={styles.contining_properties_elements}>
                        <input onChange={emailChange} value={email} type="email" placeholder="מייל" />
                        {emailErr ? <div className={styles.err_message}>{emailErr}</div> : ''}
                    </div>
                    <div onClick={() => sendToReset()} className={styles.login_but}>שלח לי למייל לינק לאיפוס</div>
                    <div onClick={() => close()} className={styles.login_but}>חזור למסך ההתחברות</div>

                </div>
            }
        </div>
    );
};


const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, { openScreen, closeScreen })(ResetPassword);