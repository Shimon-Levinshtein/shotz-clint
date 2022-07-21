import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { login, logout } from '../actions/authentication';
import { connect } from 'react-redux';
import { closeScreen } from '../actions/screenHandle';


const Authentication = props => {
    


    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            props.login(currentUser);
            props.closeScreen({
                screenName: 'spinner',
                screenDataName: 'spinnerData',
            });
        } else {
            props.logout(currentUser);
            props.closeScreen({
                screenName: 'spinner',
                screenDataName: 'spinnerData',
            });
        }
    });


    return (
        <div>
            {props.children}
        </div>
    )
}

const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, { login, logout, closeScreen })(Authentication);
