import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../../Personetics/perso-client-insights-2-mobile/src/authentication/firebase-config';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { updateUser } from '../../../../Personetics/perso-client-insights-2-mobile/src/state/core/authentication/user.action';
import { useSelector } from 'react-redux';


export default function Authentication({ children }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const userAuthentication = useSelector(state => state.userAuthentication);

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {  // User is signed in    *** && !userAuthentication.isLoggedIn
            if (!userAuthentication.isLoggedIn){
                dispatch(updateUser({
                    user: currentUser,
                    isLoggedIn: true,
                }));
            }
        } else {  // User is signed out 
            dispatch(updateUser({
                user: {},
                isLoggedIn: false,
            }));
            history.push('/login');
        }
    });


    return (
        <div>
            {children}
        </div>
    )
}
