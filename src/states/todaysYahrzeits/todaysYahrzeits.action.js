import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const SET_LIST_YAHRZEIT_TO_DAY = 'SET_LIST_YAHRZEIT_TO_DAY';

export const getYahrzeitsByDate = ({ day, month }) => {
    return async (dispatch) => {
        console.log('getYahrzeitsByDate.....');
        const docRef = collection(db, "yahrzeit");
        const q = query(docRef, where("hebDate.day", "==", day), where("hebDate.month", "==", month));
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
            const id = doc.id;
            const item = doc.data();
            item.id = id;
            data.push(item);
        });
        console.log(data);
        dispatch({ type: SET_LIST_YAHRZEIT_TO_DAY, payload: data });
    };
};

