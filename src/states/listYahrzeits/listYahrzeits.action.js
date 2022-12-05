import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const GET_LIST_YAHRZEIT = 'GET_LIST_YAHRZEIT';

// **************************************
// https://firebase.google.com/docs/firestore/query-data/get-data
// **************************************

export const getAllYahrzeits = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "yahrzeit"));
        const data = [];
        querySnapshot.forEach((doc) => {
            const obj = doc.data();
            obj.id = doc.id
            data.push(obj);
        });
        dispatch({ type: GET_LIST_YAHRZEIT, payload: data});
    };
};
