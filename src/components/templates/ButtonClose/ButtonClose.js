import React, { useState } from 'react';
import styles from "./ButtonClose.module.scss";
import { connect } from 'react-redux';


const ButtonClose = props => {



  return (
    <div className={styles.continer}>
      {/* <div className={styles.button_close}> */}
        <div className={styles.close} onClick={() => props.close(false)}></div>
      {/* </div> */}
    </div>
  );
};


const mapStateToProps = state => {
  return {
    popupControler: state.popupControler,
  }
}
export default connect(mapStateToProps, {})(ButtonClose);