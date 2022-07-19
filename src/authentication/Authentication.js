import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';



export default function Authentication({ children }) {

    


    onAuthStateChanged(auth, (currentUser) => {
        console.log('--------------currentUser-----------------');
        console.log(currentUser);
        if (currentUser) {  // User is signed in    *** && !userAuthentication.isLoggedIn
            // if (!userAuthentication.isLoggedIn){
            //     // dispatch(updateUser({
            //     //     user: currentUser,
            //     //     isLoggedIn: true,
            //     // }));
            // }
        } else {  // User is signed out 
            // dispatch(updateUser({
            //     user: {},
            //     isLoggedIn: false,
            // }));
            // history.push('/login');
        }
    });


    return (
        <div>
            {children}
        </div>
    )
}
