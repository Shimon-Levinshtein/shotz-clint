import { db } from "../../firebase/firebase";

import { collection, getDocs } from "firebase/firestore";

// **************************************
// https://firebase.google.com/docs/firestore/query-data/get-data
// **************************************

export const getAllYahrzeits = () => {
    return async (dispatch) => {
        console.log('getAllYahrzeits');
        const querySnapshot = await getDocs(collection(db, "yahrzeit"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
          });
        
    }
};
