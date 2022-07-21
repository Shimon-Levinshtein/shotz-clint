import React from 'react';
import styles from "./ErrorMessage.module.scss";
import { connect } from 'react-redux';
import { closeScreen } from '../../../actions/screenHandle';
// import { changeStutusPopupByType } from '../../../actions/popupsHeandler';

const ErrorMessage = props => {

    const butClose = () => {
        props.closeScreen({
            screenName: 'errorMessage',
            screenDataName: 'errorMessageData',
        });
    };

    return (
        <div className={styles.continer}>
            <div className={styles.box}>
                <div className={styles.title}>
                    שגיאה......
                </div>
                <div className={styles.error_message}>
                    {props.screenHandle.errorMessageData.text}
                </div>
                <div onClick={() => butClose()} className={styles.button}>
                    אישור
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        screenHandle: state.screenHandle,
    }
}
export default connect(mapStateToProps, { closeScreen })(ErrorMessage);
